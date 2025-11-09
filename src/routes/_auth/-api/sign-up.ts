import { createServerFn } from "@tanstack/react-start";
import { client } from "@/lib/api-client";
import { SignUpSchema } from "../-schemas/sign-up";

export const signUp = createServerFn({ method: "POST" })
  .inputValidator(SignUpSchema)
  .handler(async ({ data }) => {
    const { data: user, error } = await client.POST("/auth/sign-up", {
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

    return user;
  });
