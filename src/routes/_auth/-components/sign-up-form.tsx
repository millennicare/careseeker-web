import { useForm } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Spinner } from "@/components/ui/spinner";
import { signUpFn } from "../-api/sign-up";
import {
  RoleEnum,
  SignUpWithPasswordConfirmationSchema,
} from "../-schemas/sign-up";

export default function SignUpForm() {
  const navigate = useNavigate();
  const { mutateAsync, isPending, isSuccess } = useMutation({
    mutationFn: useServerFn(signUpFn),
  });

  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirm: "",
      roles: [RoleEnum.CARESEEKER],
    },
    validators: {
      onSubmit: SignUpWithPasswordConfirmationSchema,
      onBlur: SignUpWithPasswordConfirmationSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        await mutateAsync({
          data: {
            firstName: value.firstName,
            lastName: value.lastName,
            email: value.email,
            password: value.password,
            roles: value.roles.filter((role) => role === RoleEnum.CARESEEKER),
          },
        });
        form.reset();
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
      {isSuccess ? (
        <div className="flex w-full max-w-lg flex-col h-full max-h-1/3 rounded-md border px-6 py-6 items-center justify-between">
          <img
            src="/millennicare_logo_with_text.svg"
            alt="MillenniCare logo"
            className="w-2/3"
          />

          <span className="flex items-center flex-col">
            <CheckCircle />
            <h3 className="font-bold text-gray-600">Verification email sent</h3>
            <p className="text-gray-600">
              To finish signing in, check your email
            </p>
          </span>

          <Button onClick={async () => await navigate({ to: "/sign-in" })}>
            Back to sign in
          </Button>
        </div>
      ) : (
        <>
          <h1 className="text-center text-3xl tracking-tight">
            Create an account
          </h1>
          <div className="flex w-full max-w-lg flex-col space-y-3 rounded-md border px-6 py-6 items-center">
            <img
              src="/millennicare_logo_with_text.svg"
              alt="MillenniCare logo"
              className="w-2/3"
            />

            <form
              className="h-full w-full space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                form.handleSubmit();
              }}
            >
              <div className="flex flex-col md:flex-row md:gap-4">
                <FieldGroup className="flex-1">
                  <form.Field
                    name="firstName"
                    children={(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid;
                      return (
                        <Field data-invalid={isInvalid}>
                          <FieldLabel htmlFor={field.name}>
                            First Name
                          </FieldLabel>
                          <Input
                            id={field.name}
                            name={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                            aria-invalid={isInvalid}
                            placeholder="John"
                            autoComplete="given-name"
                            type="text"
                          />
                          {isInvalid && (
                            <FieldError errors={field.state.meta.errors} />
                          )}
                        </Field>
                      );
                    }}
                  />
                </FieldGroup>

                <FieldGroup className="flex-1">
                  <form.Field
                    name="lastName"
                    children={(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid;
                      return (
                        <Field data-invalid={isInvalid}>
                          <FieldLabel htmlFor={field.name}>
                            Last Name
                          </FieldLabel>
                          <Input
                            id={field.name}
                            name={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                            aria-invalid={isInvalid}
                            placeholder="Doe"
                            autoComplete="family-name"
                            type="text"
                          />
                          {isInvalid && (
                            <FieldError errors={field.state.meta.errors} />
                          )}
                        </Field>
                      );
                    }}
                  />
                </FieldGroup>
              </div>

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

              <FieldGroup>
                <form.Field
                  name="password"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid;
                    return (
                      <Field data-invalid={isInvalid}>
                        <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                        <Input
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          aria-invalid={isInvalid}
                          placeholder="********"
                          autoComplete="new-password"
                          type="password"
                        />
                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </Field>
                    );
                  }}
                />
              </FieldGroup>

              <FieldGroup>
                <form.Field
                  name="confirm"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid;
                    return (
                      <Field data-invalid={isInvalid}>
                        <FieldLabel htmlFor={field.name}>
                          Confirm Password
                        </FieldLabel>
                        <Input
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          aria-invalid={isInvalid}
                          placeholder="********"
                          type="password"
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
                  "Sign Up"
                )}
              </Button>
            </form>

            <div className="flex items-center gap-4">
              <Separator className="flex-1" />
              <h1 className="whitespace-nowrap text-gray-400">OR</h1>
              <Separator className="flex-1" />
            </div>

            <span className="flex gap-4 md:flex-row flex-col w-full">
              <Button variant="outline" className="flex-1" disabled>
                Sign up with Google
              </Button>
              <Button variant="outline" className="flex-1" disabled>
                Sign up with Apple
              </Button>
            </span>
          </div>

          <Button asChild variant="link">
            <Link to="/sign-in">Already have an account?</Link>
          </Button>
        </>
      )}
    </div>
  );
}
