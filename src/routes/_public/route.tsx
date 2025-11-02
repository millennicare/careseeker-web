import { createFileRoute, Outlet } from "@tanstack/react-router";
import Footer from "@/routes/_public/-components/footer";
import Navbar from "@/routes/_public/-components/navbar";

export const Route = createFileRoute("/_public")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<Navbar isAuthenticated={false} />
			<Outlet />
			<Footer />
		</>
	);
}
