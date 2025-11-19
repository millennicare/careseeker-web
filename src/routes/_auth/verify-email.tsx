import { createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import z from "zod";

const VerifyEmailSearchParamsSchema = z.object({
  token: z.string(),
});

export const Route = createFileRoute("/_auth/verify-email")({
  component: VerifyEmailPage,
  validateSearch: zodValidator(VerifyEmailSearchParamsSchema),
});

/*
 * The user will click the link in the email and it will call the verify endpoint in the API
 * If it is a successful response, redirect back to /_auth/sign-in
 * If it is NOT a successful response, the next time the user attempts to sign in
 * automatically send a verification email.
 */
function VerifyEmailPage() {
  return (
    <div className="h-screen w-screen">
      <h1>Verify email page</h1>
    </div>
  );
}
