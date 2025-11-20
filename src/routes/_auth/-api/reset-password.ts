import { redirect } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { client } from "@/lib/api-client";
import { ResetPasswordSchema } from "../-schemas/reset-password";

export const resetPasswordFn = createServerFn({ method: "POST" })
  .inputValidator(ResetPasswordSchema)
  .handler(async ({ data }) => {
    const { error } = await client.PATCH("/auth/reset-password", {
      body: data,
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

    throw redirect({ to: "/sign-in" });
  });
