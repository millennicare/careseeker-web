import { createFileRoute, redirect } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import z from "zod";
import ResetPasswordForm from "./-components/reset-password-form";

const ResetPasswordWithSearchParamsSchema = z.object({
  token: z.string().optional(),
});

export const Route = createFileRoute("/_auth/reset-password")({
  validateSearch: zodValidator(ResetPasswordWithSearchParamsSchema),
  loaderDeps: ({ search: { token } }) => ({ token }),
  loader: async ({ deps: { token } }) => {
    if (!token) {
      throw redirect({ to: "/sign-in" });
    }
    return token;
  },
  component: RouteComponent,
});

function RouteComponent() {
  const token = Route.useLoaderData();

  return <ResetPasswordForm token={token} />;
}
