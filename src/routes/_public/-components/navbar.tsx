import { Link } from "@tanstack/react-router";
import { LucideMenu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { title: "About", to: "/about" },
  { title: "Contact", to: "/contact-us" },
];

interface NavbarProps {
  isAuthenticated: boolean;
}

export default function Navbar({ isAuthenticated }: NavbarProps) {
  return (
    <nav className="mx-auto flex w-full max-w-screen-xl px-5 py-6">
      {/* Logo */}
      <span className="h-full flex-1">
        <Link to="/">
          <img
            src="/millennicare_logo_with_text.svg"
            alt="MillenniCare logo"
            width={250}
            height={100}
          />
        </Link>
      </span>

      {/* Desktop Menu */}
      <div className="hidden h-full flex-1 items-center justify-center space-x-4 md:flex">
        {navLinks.map(({ title, to }) => (
          <Link to={to} key={to}>
            <Button variant="link" className="text-md" size="lg">
              {title}
            </Button>
          </Link>
        ))}
      </div>

      {/* Desktop Buttons */}
      <div className="hidden h-full flex-1 items-center justify-end space-x-4 md:flex">
        {isAuthenticated ? (
          <Link to="/home">
            <Button className="text-md" size="lg">
              Home
            </Button>
          </Link>
        ) : (
          <>
            <Link to="/sign-in">
              <Button variant="link" className="text-md" size="lg">
                Sign in
              </Button>
            </Link>
            <Link to="/sign-up">
              <Button>Sign Up</Button>
            </Link>
          </>
        )}
      </div>

      {/* Mobile Menu */}
      <div className="flex items-center md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button aria-label="Open menu" type="button">
              <LucideMenu size={28} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="flex flex-col space-y-4 p-6">
            <SheetHeader>
              <SheetTitle />
            </SheetHeader>
            <SheetClose asChild>
              <Link to="/">
                <Button variant="link" className="text-lg">
                  Home
                </Button>
              </Link>
            </SheetClose>
            {navLinks.map(({ title, to }) => (
              <SheetClose asChild key={to}>
                <Link to={to}>
                  <Button variant="link" className="text-lg">
                    {title}
                  </Button>
                </Link>
              </SheetClose>
            ))}
            <SheetClose asChild>
              <Link to="/sign-in">
                <Button variant="link" className="text-lg">
                  Sign in
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link to="/sign-up">
                <Button size="lg">Sign Up</Button>
              </Link>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
