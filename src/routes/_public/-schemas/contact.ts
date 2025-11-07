import { z } from "zod";

export const CreateContactSchema = z.object({
  fullName: z.string(),
  email: z.email(),
  subject: z.string(),
  message: z.string(),
});

export type CreateContact = z.infer<typeof CreateContactSchema>;
