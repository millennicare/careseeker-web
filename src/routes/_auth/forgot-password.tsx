import { createFileRoute, redirect } from "@tanstack/react-router";
import ForgotPasswordForm from "./-components/forgot-password-form";

export const Route = createFileRoute("/_auth/forgot-password")({
  component: RouteComponent,
  beforeLoad: async ({ context }) => {
    if (context.user) {
      throw redirect({ to: "/home" });
    }
  },
});

function RouteComponent() {
  return <ForgotPasswordForm />;
}
