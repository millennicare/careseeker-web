import createClient from "openapi-fetch";
import type { paths } from "@/types/api";
import { clientEnv } from "./env";

export const client = createClient<paths>({
  baseUrl: clientEnv.VITE_SERVER_URL,
});
