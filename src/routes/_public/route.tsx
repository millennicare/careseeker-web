import { createFileRoute, Outlet } from "@tanstack/react-router";
import Footer from "@/routes/_public/-components/footer";
import Navbar from "@/routes/_public/-components/navbar";

export const Route = createFileRoute("/_public")({
  component: RouteComponent,
});

function RouteComponent() {
  const { user } = Route.useRouteContext();

  return (
    <>
      <Navbar isAuthenticated={user !== null && user !== undefined} />
      <Outlet />
      <Footer />
    </>
  );
}
