import { z } from "zod";
import { PASSWORD_REGEX } from "@/lib/constants";

export enum RoleEnum {
  CAREGIVER = "caregiver",
  CARESEEKER = "careseeker",
  ADMIN = "admin",
}
export const SignUpSchema = z.object({
  email: z.email(),
  name: z.string().min(1),
  password: z.string().regex(PASSWORD_REGEX),
  roles: z.array(z.enum(RoleEnum)),
});

export const SignUpWithPasswordConfirmationSchema = SignUpSchema.extend({
  confirm: z.string(),
}).refine((data) => data.password === data.confirm, {
  path: ["confirm"],
  message: "Passwords do not match.",
});
