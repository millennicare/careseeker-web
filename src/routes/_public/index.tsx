import { createFileRoute } from "@tanstack/react-router";
import ChooseUs from "./-components/choose-us";
import CallToAction from "./-components/cta";
import Hero from "./-components/hero";

export const Route = createFileRoute("/_public/")({
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="mx-auto max-w-screen-lg px-5">
      <Hero />
      <ChooseUs />
      <CallToAction />
    </div>
  );
}
