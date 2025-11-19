import { useForm } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { getRouteApi, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Spinner } from "@/components/ui/spinner";
import { verifyEmail } from "../-api/verify-email";
import { VerifyEmailSchema } from "../-schemas/verify-email";

const routeApi = getRouteApi("/_auth/verify-email");

export default function VerifyForm() {
  const { token, code } = routeApi.useSearch();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);

  const { mutateAsync, isPending } = useMutation({
    mutationFn: useServerFn(verifyEmail),
  });

  // Countdown timer effect
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  const form = useForm({
    defaultValues: {
      token: token ?? "",
      code: code ?? "",
    },
    validators: {
      onSubmit: VerifyEmailSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        await mutateAsync({
          data: value,
        });
        form.reset();
        await navigate({ to: "/" }); // todo: redirect to /home
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
        } else {
          toast.error("Something went wrong, please try again later.");
        }
      }
    },
  });

  const handleResendCode = async () => {
    try {
      // TODO: Implement resend API call
      // await resendVerificationEmail({ token });
      toast.success("Verification code resent successfully");
      setCountdown(60);
      setCanResend(false);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Failed to resend code");
      }
    }
  };

  return (
    <div className="flex h-full w-full items-center justify-center p-4 md:p-6">
      <div
        id="form"
        className="flex h-full max-h-1/2 w-full flex-col items-center justify-between rounded-lg border bg-background p-6 shadow-md md:max-w-md md:p-8"
      >
        <img src="/millennicare_logo_with_text.svg" alt="MillenniCare logo" />
        <h1 className="text-center font-bold text-2xl">Verify your email</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
          className="w-full space-y-6"
        >
          <FieldGroup>
            <form.Field
              name="code"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name} className="text-center">
                      Verification Code
                    </FieldLabel>
                    <InputOTP
                      pattern={REGEXP_ONLY_DIGITS}
                      maxLength={6}
                      value={field.state.value}
                      onChange={field.handleChange}
                      autoFocus
                      containerClassName="w-full justify-center"
                    >
                      <InputOTPGroup className="w-full">
                        <InputOTPSlot index={0} className="flex-1" />
                        <InputOTPSlot index={1} className="flex-1" />
                        <InputOTPSlot index={2} className="flex-1" />
                        <InputOTPSlot index={3} className="flex-1" />
                        <InputOTPSlot index={4} className="flex-1" />
                        <InputOTPSlot index={5} className="flex-1" />
                      </InputOTPGroup>
                    </InputOTP>
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

          <div className="text-center">
            <Button
              type="button"
              variant="link"
              onClick={handleResendCode}
              disabled={!canResend}
              className="text-sm"
            >
              Didn't get the email?{" "}
              {!canResend && <span className="ml-1">({countdown}s)</span>}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
