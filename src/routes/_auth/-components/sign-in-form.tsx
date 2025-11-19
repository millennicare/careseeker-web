import { useForm } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
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
import { signInFn } from "../-api/sign-in";
import { SignInSchema } from "../-schemas/sign-in";

export default function SignInForm() {
  const navigate = useNavigate();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: useServerFn(signInFn),
  });

  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    validators: {
      onSubmit: SignInSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        await mutateAsync({
          data: value,
        });
        form.reset();

        await navigate({ to: "/home" });
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
      <h1 className="text-center text-3xl tracking-tight">Welcome back</h1>

      <div className="flex w-full max-w-lg flex-col items-center space-y-3 rounded-md border px-6 py-6">
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
          <FieldGroup>
            <form.Field
              name="username"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Email Address</FieldLabel>
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
                      autoComplete="current-password"
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
              "Sign In"
            )}
          </Button>
        </form>

        <div className="flex items-center gap-4">
          <Separator className="flex-1" />
          <h1 className="whitespace-nowrap text-gray-400">OR</h1>
          <Separator className="flex-1" />
        </div>

        <span className="flex w-full flex-col gap-4 md:flex-row">
          <Button variant="outline" className="flex-1" disabled>
            Continue with Google
          </Button>
          <Button variant="outline" className="flex-1" disabled>
            Continue with Apple
          </Button>
        </span>
      </div>

      <Button asChild variant="link">
        <Link to="/forgot-password">Forgot password?</Link>
      </Button>
    </div>
  );
}
