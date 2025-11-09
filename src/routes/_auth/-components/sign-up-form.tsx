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
import { Spinner } from "@/components/ui/spinner";
import { signUp } from "../-api/sign-up";
import {
  RoleEnum,
  SignUpWithPasswordConfirmationSchema,
} from "../-schemas/sign-up";

export default function SignUpForm() {
  const navigate = useNavigate();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: useServerFn(signUp),
  });

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirm: "",
      roles: [RoleEnum.CARESEEKER],
    },
    validators: {
      onSubmit: SignUpWithPasswordConfirmationSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        await mutateAsync({
          data: {
            name: value.name,
            email: value.email,
            password: value.password,
            roles: value.roles.filter((role) => role === RoleEnum.CARESEEKER),
          },
        });
        form.reset();
        await navigate({ to: "/sign-in" });
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
      <h1 className="text-center text-3xl tracking-tighter">
        Create an account
      </h1>

      <form
        className="flex w-full max-w-lg flex-col space-y-3 rounded-md border px-6 py-6"
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <FieldGroup>
          <form.Field
            name="name"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    aria-invalid={isInvalid}
                    placeholder="Enter your name"
                    autoComplete="name"
                    type="text"
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />
        </FieldGroup>

        <FieldGroup>
          <form.Field
            name="email"
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
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
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
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
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
                  <FieldLabel htmlFor={field.name}>Confirm Password</FieldLabel>
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
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />
        </FieldGroup>

        <Button type="submit" disabled={isPending}>
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

      <Button asChild variant="link">
        <Link to="/sign-in">Already have an account?</Link>
      </Button>
    </div>
  );
}
