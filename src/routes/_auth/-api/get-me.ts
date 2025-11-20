import { createServerFn } from "@tanstack/react-start";
import { client } from "@/lib/api-client";
import { useAppSession } from "@/lib/session";

export const getMeFn = createServerFn({ method: "GET" }).handler(async () => {
  const session = await useAppSession();

  if (!session.data.accessToken) {
    return null;
  }

  const { data, error } = await client.GET("/auth/me", {
    headers: {
      Authorization: `Bearer ${session.data.accessToken}`,
    },
  });
  if (error) {
    return null;
  }

  return data;
});
