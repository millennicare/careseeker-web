import { z } from "zod";

export const SignInSchema = z.object({
  username: z.email().min(1, { message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});
