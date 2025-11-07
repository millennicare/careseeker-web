import { createFileRoute } from "@tanstack/react-router";
import ContactUsForm from "./-components/contact-us-form";

export const Route = createFileRoute("/_public/contact-us")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex h-full w-full flex-col items-center gap-x-3 gap-y-4 px-5 py-5">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl">Contact us</h1>
        <p className="mt-4 text-lg text-slate-600">
          Got questions? We are here to help.
        </p>
      </div>
      <ContactUsForm />
    </div>
  );
}
