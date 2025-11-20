import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import { CircleAlert } from "lucide-react";
import z from "zod";
import { Button } from "@/components/ui/button";
import { verifyEmailFn } from "./-api/verify-email";

const VerifyEmailWithSearchParamsSchema = z.object({
  token: z.string().optional(),
  error: z.string().optional(),
});

export const Route = createFileRoute("/_auth/verify-email")({
  validateSearch: zodValidator(VerifyEmailWithSearchParamsSchema),
  loaderDeps: ({ search: { token, error } }) => ({ token, error }),
  loader: async ({ deps: { token, error } }) => {
    if (error) return null;
    if (!token) {
      throw redirect({
        to: "/verify-email",
        search: { error: "missing-token" },
      });
    }

    setTimeout(() => {
      console.log("checking");
    }, 3000);
    try {
      await verifyEmailFn({ data: { token } });
      // Success - redirect to home
      throw redirect({ to: "/sign-in" });
    } catch (_error) {
      // Error - redirect back to same page with error flag
      throw redirect({
        to: "/verify-email",
        search: { error: "invalid-token" },
      });
    }
  },

  component: VerifyEmailPage,
});

function VerifyEmailPage() {
  const { error } = Route.useSearch();

  // If no error, show loading (shouldn't happen often due to loader)
  if (!error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mb-4">
            <svg
              className="mx-auto h-12 w-12 animate-spin text-primary"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              role="img"
              aria-label="spinner"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>
          <h2 className="font-semibold text-gray-900 text-xl">
            Verifying your email...
          </h2>
          <p className="mt-2 text-gray-600">Please wait a moment.</p>
        </div>
      </div>
    );
  }

  // Show error UI
  const errorMessages = {
    "missing-token": {
      title: "Invalid Verification Link",
      description: "The verification link is incomplete or malformed.",
    },
    "invalid-token": {
      title: "Verification Failed",
      description:
        "This verification link is invalid or has expired. Please request a new one.",
    },
  };

  const errorMessage = errorMessages[error as keyof typeof errorMessages] || {
    title: "Something Went Wrong",
    description: "We couldn't verify your email. Please try again.",
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="rounded-lg bg-white p-8 shadow-lg">
          <CircleAlert className="w-full self-center text-center text-red-600" />

          {/* Error Content */}
          <div className="mt-4 text-center">
            <h2 className="font-semibold text-gray-900 text-xl">
              {errorMessage.title}
            </h2>
            <p className="mt-2 text-gray-600 text-sm">
              {errorMessage.description}
            </p>
          </div>

          {/* Actions */}
          <div className="mt-6 space-y-3">
            <Button asChild className="w-full">
              <Link to="/sign-in">Back to Sign In</Link>
            </Button>
          </div>

          {/* Help Text */}
          <div className="mt-6 border-gray-200 border-t pt-4">
            <p className="text-center text-gray-500">
              <Button variant="link">
                <Link to="/contact-us" className="text-sm">
                  Need help? Contact Support
                </Link>
              </Button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
