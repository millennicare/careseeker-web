import { z } from "zod";

export const CreateWaitlistSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email"),
});

export type CreateWaitlist = z.infer<typeof CreateWaitlistSchema>;
