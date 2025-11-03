import { mutationOptions } from "@tanstack/react-query";
import { client } from "@/lib/api-client";
import type { CreateWaitlist } from "../-schemas/create-waitlist";

export const createWaitlist = async (values: CreateWaitlist): Promise<void> => {
  await client.POST("/waitlists/", {
    body: values,
  });
};

export const createWaitlistMutationOptions = mutationOptions({
  mutationFn: createWaitlist,
});
