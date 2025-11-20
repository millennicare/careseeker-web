import { createFileRoute, redirect } from "@tanstack/react-router";
import SignUpForm from "./-components/sign-up-form";

export const Route = createFileRoute("/_auth/sign-up")({
  component: SignUpPage,
  beforeLoad: async ({ context }) => {
    if (context.user) {
      throw redirect({ to: "/home" });
    }
  },
});

function SignUpPage() {
  return <SignUpForm />;
}
