import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_public/contact-us")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_public/contact-us"!</div>;
}
