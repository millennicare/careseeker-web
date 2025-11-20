import { redirect } from "@tanstack/react-router";
import { createMiddleware } from "@tanstack/react-start";
import { client } from "@/lib/api-client";
import { useAppSession } from "@/lib/session";

function parseJwt(token: string) {
  try {
    const base64Url = token.split(".")[1];
    if (!base64Url) return null;
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`)
        .join(""),
    );
    return JSON.parse(jsonPayload);
  } catch (e) {
    console.error(e);
    return null;
  }
}

function isTokenExpiringSoon(
  token: string,
  thresholdMinutes: number = 5,
): boolean {
  const payload = parseJwt(token);
  if (!payload || !payload.exp) {
    return true; // Treat invalid tokens as expired
  }

  const expirationTime = payload.exp * 1000; // Convert to milliseconds
  const currentTime = Date.now();
  const timeUntilExpiry = expirationTime - currentTime;
  const thresholdMs = thresholdMinutes * 60 * 1000;

  return timeUntilExpiry <= thresholdMs;
}

export const authMiddleware = createMiddleware({ type: "request" }).server(
  async ({ next }) => {
    const session = await useAppSession();

    if (!session.data.accessToken) {
      return next();
    }

    // If the access token is close to expiring or is expired, attempt to refresh automatically
    if (isTokenExpiringSoon(session.data.accessToken, 5)) {
      if (session.data.refreshToken) {
        const { data, error } = await client.POST("/auth/refresh", {
          body: { refreshToken: session.data.refreshToken },
        });

        if (error) {
          session.clear();
          throw redirect({ to: "/sign-in" });
        }

        await session.update({ ...data });
      } else {
        // No refresh token available, clear session
        await session.clear();
      }
    }

    return next();
  },
);
