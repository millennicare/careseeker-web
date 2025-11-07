import { createServerFn } from "@tanstack/react-start";
import { client } from "@/lib/api-client";
import { CreateContactSchema } from "../-schemas/contact";

export const createContact = createServerFn({
  method: "POST",
})
  .inputValidator(CreateContactSchema)
  .handler(async ({ data }) => {
    await client.POST("/contacts/", {
      body: data,
    });
  });
