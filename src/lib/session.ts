import { useSession } from "@tanstack/react-start/server";

type SessionData = {
  accessToken?: string;
  refreshToken?: string;
};

export function useAppSession() {
  return useSession<SessionData>({
    name: "millennicare-session",
    // biome-ignore lint: fix later
    password: process.env.SESSION_SECRET!,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
    },
  });
}
