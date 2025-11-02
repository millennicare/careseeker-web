import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export default function Footer() {
	return (
		<footer className="flex w-full flex-1 flex-col content-around items-center py-10">
			<p className="pt-2 text-sm">
				Copyright © {new Date().getFullYear()} Millennicare, Inc.
			</p>
			<div className="flex w-[390px] flex-col items-center justify-between pt-2 min-[420px]:flex-row">
				<Button variant="link" asChild>
					<Link to="/eula">EULA</Link>
				</Button>
				<p className="max-[420px]:hidden">|</p>
				<Button variant="link" asChild>
					<Link to="/privacy-policy">Privacy Policy</Link>
				</Button>
				<p className="max-[420px]:hidden">|</p>
				<Button asChild variant="link">
					<Link to="/contact-us">Contact Us</Link>
				</Button>
			</div>
		</footer>
	);
}
