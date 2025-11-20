import z from "zod";
import { PASSWORD_REGEX } from "@/lib/constants";

export const ResetPasswordSchema = z.object({
  password: z.string().regex(PASSWORD_REGEX, {
    message:
      "Password must contain at least 1 uppercase letter, 1 lower case letter, 1 special character, and must be between 8 and 64 characters.",
  }),
  token: z.string(),
});

export const ResetPasswordWithPasswordConfirmationSchema =
  ResetPasswordSchema.extend({
    confirm: z.string(),
  }).refine((data) => data.password === data.confirm, {
    path: ["confirm"],
    message: "Passwords do not match.",
  });
