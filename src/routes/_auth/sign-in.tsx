import { createFileRoute, redirect } from "@tanstack/react-router";
import SignInForm from "./-components/sign-in-form";

export const Route = createFileRoute("/_auth/sign-in")({
  component: RouteComponent,
  beforeLoad: async ({ context }) => {
    if (context.user) {
      throw redirect({ to: "/home" });
    }
  },
});

function RouteComponent() {
  return <SignInForm />;
}
