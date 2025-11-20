import { useForm } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { isRedirect } from "@tanstack/react-router";
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
import { resetPasswordFn } from "../-api/reset-password";
import { ResetPasswordWithPasswordConfirmationSchema } from "../-schemas/reset-password";

interface ResetPasswordProps {
  token: string;
}

export default function ResetPasswordForm({ token }: ResetPasswordProps) {
  const { isPending, mutateAsync } = useMutation({
    mutationFn: useServerFn(resetPasswordFn),
  });

  const form = useForm({
    defaultValues: {
      token,
      password: "",
      confirm: "",
    },
    validators: {
      onSubmit: ResetPasswordWithPasswordConfirmationSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        await mutateAsync({
          data: { token, password: value.password },
        });
        form.reset();
      } catch (error) {
        if (isRedirect(error)) {
          throw error;
        }
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
              "Submit"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
