import { redirect } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { client } from "@/lib/api-client";
import { useAppSession } from "@/lib/session";
import { SignInSchema } from "../-schemas/sign-in";

export const signInFn = createServerFn({ method: "POST" })
  .inputValidator(SignInSchema)
  .handler(async ({ data }) => {
    const { data: res, error } = await client.POST("/auth/login", {
      body: {
        ...data,
        scope: "profile",
        grant_type: "password",
        client_id: null,
        client_secret: null,
      },
      bodySerializer(body) {
        const formData = new FormData();
        for (const name in body) {
          const value = body[name as keyof typeof body];
          if (value != null) {
            formData.append(name, String(value));
          }
        }
        return formData;
      },
    });

    if (error) {
      const errorMessage =
        typeof error.detail === "string"
          ? error.detail
          : Array.isArray(error.detail)
            ? error.detail.map((e) => e.msg).join(",")
            : "An unknown error occurred";
      throw new Error(errorMessage);
    }

    const session = await useAppSession();
    await session.update({
      accessToken: res.accessToken,
      refreshToken: res.refreshToken,
    });

    throw redirect({ to: "/home" });
  });
