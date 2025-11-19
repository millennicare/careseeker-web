import { useSession } from "@tanstack/react-start/server";
import { serverEnv } from "./env";

type SessionData = {
  accessToken?: string;
  refreshToken?: string;
};

export function useAppSession() {
  return useSession<SessionData>({
    name: "millennicare-session",
    password: serverEnv.SESSION_SECRET,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
    },
  });
}
