import { redirect } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { client } from "@/lib/api-client";
import { useAppSession } from "@/lib/session";
import { SignInschema } from "../-schemas/sign-in";

export const signInFn = createServerFn({ method: "POST" })
  .inputValidator(SignInschema)
  .handler(async ({ data }) => {
    const { data: res, error } = await client.POST("/auth/login", {
      body: { ...data, grant_type: null, scope: "profile" },
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

    // the access and refresh tokens will be stored in http only cookies
    const session = await useAppSession();
    await session.update({
      accessToken: res.accessToken,
      refreshToken: res.refreshToken,
    });

    throw redirect({ to: "/home" });
  });
