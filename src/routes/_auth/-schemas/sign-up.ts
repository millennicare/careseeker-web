import { z } from "zod";
import { PASSWORD_REGEX } from "@/lib/constants";

export enum RoleEnum {
  CAREGIVER = "caregiver",
  CARESEEKER = "careseeker",
  ADMIN = "admin",
}

export const SignUpSchema = z.object({
  email: z.email({ message: "Email is required"}),
  firstName: z.string().min(1, { message: "First name is required"}),
  lastName: z.string().min(1, { message: "Last name is required"}),
  password: z.string().regex(PASSWORD_REGEX, { message: "Password must contain at least 1 uppercase letter, 1 lower case letter, 1 special character, and must be between 8 and 64 characters."}),
  roles: z.array(z.enum(RoleEnum)),
});

export const SignUpWithPasswordConfirmationSchema = SignUpSchema.extend({
  confirm: z.string(),
}).refine((data) => data.password === data.confirm, {
  path: ["confirm"],
  message: "Passwords do not match.",
});
