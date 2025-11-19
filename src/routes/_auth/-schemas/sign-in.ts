import { z } from "zod";

export const SignInschema = z.object({
  username: z.email(),
  password: z.string(),
});
