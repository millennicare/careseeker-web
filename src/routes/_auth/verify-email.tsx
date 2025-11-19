import { createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import z from "zod";
import VerifyEmailForm from "./-components/verify-email-form";

const VerifyEmailSearchParamsSchema = z.object({
  token: z.string().optional(),
  code: z.string().optional(),
});

export const Route = createFileRoute("/_auth/verify-email")({
  component: VerifyEmailPage,
  validateSearch: zodValidator(VerifyEmailSearchParamsSchema),
});

function VerifyEmailPage() {
  return (
    <div className="h-screen w-screen">
      <VerifyEmailForm />
    </div>
  );
}
