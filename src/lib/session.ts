import { useSession } from "@Tanstack/react-start/server";

type SessionData = {
  accessToken?: string;
  refreshToken?: string;
};

export function useAppSession() {
  return useSession<SessionData>({
    name: "millennicare-session",
    password: process.env.SESSION_SECRET!,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
    },
  });
}
