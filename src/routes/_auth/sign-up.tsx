import { createFileRoute } from "@tanstack/react-router";
import SignUpForm from "./-components/sign-up-form";

export const Route = createFileRoute("/_auth/sign-up")({
  component: SignUpPage,
  beforeLoad: () => {
    // TODO: check if a user is sign in and redirect to /home
  },
});

function SignUpPage() {
  return <SignUpForm />;
}
