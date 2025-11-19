import { z } from "zod";

const serverSchema = z.object({
  SESSION_SECRET: z.string(),
});

const clientSchema = z.object({
  VITE_SERVER_URL: z.url(),
});

export const serverEnv = serverSchema.parse(process.env);
export const clientEnv = clientSchema.parse(import.meta.env);
