import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/home/")({
  component: RouteComponent,
  loader: async ({ context }) => {
    if (!context.user) {
      throw redirect({ to: "/sign-in" });
    }
    // when a user navigates here we need to check for multiple things
    // 1. if the access token does not exist, redirect back to /
    // 2. if the user is here but "emailVerified: false", send a verification email and throw an error message
    // saying they must verify before continuing
    // 3. if the user is logging in for the first time and has a new session, trigger MFA
    // 4. if the user is not onboarded, redirect to /onboarding
  },
});

function RouteComponent() {
  return <div>Hello "/home/"!</div>;
}
