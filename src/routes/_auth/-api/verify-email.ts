import { redirect } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { client } from "@/lib/api-client";
import { VerifyEmailSchema } from "../-schemas/verify-email";

export const verifyEmailFn = createServerFn({ method: "POST" })
  .inputValidator(VerifyEmailSchema)
  .handler(async ({ data }) => {
    const { error } = await client.POST("/auth/verify", {
      body: data,
    });

    if (error) {
      const errorMessage =
        typeof error.detail === "string"
          ? error.detail
          : Array.isArray(error.detail)
            ? error.detail.map((e) => e.msg).join(", ")
            : "An unknown error occurred";
      throw new Error(errorMessage);
    }

    throw redirect({ to: "/sign-in" });
  });
