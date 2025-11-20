import { createServerFn } from "@tanstack/react-start";
import { client } from "@/lib/api-client";
import { ForgotPasswordSchema } from "../-schemas/forgot-password";

export const forgotPasswordFn = createServerFn({ method: "POST" })
  .inputValidator(ForgotPasswordSchema)
  .handler(async ({ data }) => {
    const { error } = await client.POST("/auth/forgot-password", {
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

    return "Password reset email sent";
  });
