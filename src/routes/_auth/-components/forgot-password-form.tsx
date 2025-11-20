import { useForm } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { forgotPasswordFn } from "../-api/forgot-password";
import { ForgotPasswordSchema } from "../-schemas/forgot-password";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const { isPending, mutateAsync, isSuccess } = useMutation({
    mutationFn: useServerFn(forgotPasswordFn),
  });

  const form = useForm({
    defaultValues: {
      email: "",
    },
    validators: {
      onSubmit: ForgotPasswordSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        await mutateAsync({ data: value });
        form.reset();
        setEmail(value.email);
        toast.success("Reset email password sent");
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
        } else {
          toast.error("Something went wrong, please try again later.");
        }
      }
    },
  });

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-x-3 gap-y-4 px-2 py-5 md:px-5">
      <div className="flex h-full max-h-1/2 w-full max-w-lg flex-col items-center justify-between space-y-3 rounded-md border px-6 py-6">
        <img
          src="/millennicare_logo_with_text.svg"
          alt="MillenniCare logo"
          className="w-2/3 flex-1"
        />
        {isSuccess ? (
          <p className="flex flex-1 items-center justify-center text-center text-gray-500">
            An email has been sent to {email} with instructions on how to reset
            your password.
          </p>
        ) : (
          <>
            <p className="flex-1 text-center text-gray-500">
              Forgot your password? Request a reset password link by entering
              your email below.
            </p>

            <form
              className="h-full w-full flex-1 space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                form.handleSubmit();
              }}
            >
              <FieldGroup>
                <form.Field
                  name="email"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid;
                    return (
                      <Field data-invalid={isInvalid}>
                        <FieldLabel htmlFor={field.name}>
                          Email Address
                        </FieldLabel>
                        <Input
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          aria-invalid={isInvalid}
                          placeholder="Enter your email"
                          autoComplete="email"
                          type="email"
                        />
                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </Field>
                    );
                  }}
                />
              </FieldGroup>

              <Button type="submit" disabled={isPending} className="w-full">
                {isPending ? (
                  <>
                    <Spinner />
                    Submitting...
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </form>
          </>
        )}

        <Button asChild variant="link" className="flex-1">
          <Link to="/sign-in">Back to sign in</Link>
        </Button>
      </div>
    </div>
  );
}
