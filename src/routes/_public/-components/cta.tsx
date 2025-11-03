import { useForm } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { useId, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { createWaitlistMutationOptions } from "../-api/create-waitlist";
import { CreateWaitlistSchema } from "../-schemas/create-waitlist";

export default function CallToAction() {
  const id = useId();
  const [open, setOpen] = useState(false);
  const { mutateAsync, isPending } = useMutation(createWaitlistMutationOptions);
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
    },
    validators: {
      onSubmit: CreateWaitlistSchema,
    },
    onSubmit: async ({ value }) => {
      await mutateAsync(value);
      setOpen(false);
      form.reset();
      toast.success("You have been added to the waitlist!");
    },
  });

  return (
    <section className="bg-primary pt-16 pb-8 text-center text-white md:pt-12 md:pb-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-4 font-bold text-4xl">
          Join the Millennicare Community Today
        </h2>
        <p className="mb-8 px-3 text-lg">
          Ready to experience affordable, quality care? Sign up now to be among
          the first to access our services and take advantage of exclusive
          early-bird offers.
        </p>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className="text-primary">
              Join the waitlist
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Join our waitlist today!</DialogTitle>
            </DialogHeader>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                form.handleSubmit();
              }}
              className="flex w-full max-w-lg flex-col space-y-3"
              id={id}
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
                  name="email"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid;
                    return (
                      <Field data-invalid={isInvalid}>
                        <FieldLabel htmlFor={field.name}>Email</FieldLabel>
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
            </form>
            <DialogFooter>
              <Button type="submit" form={id} disabled={isPending}>
                {isPending ? "Submitting..." : "Submit"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
