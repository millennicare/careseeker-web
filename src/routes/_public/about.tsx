import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_public/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="bg-gray-50 px-6 py-12 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-6 font-bold text-4xl text-gray-800">
          About Millennicare
        </h1>
        <p className="mb-8 text-gray-600 text-lg">
          At Millennicare, we are committed to helping underserved communities
          access affordable and reliable services, from child care and pet care
          to housekeeping and elderly care. Our mission is simple: to ensure
          that every family, regardless of income, can connect with trusted
          caregivers who offer quality services at a price that fits their
          budget.
        </p>

        <div className="mb-12">
          <h2 className="mb-4 font-semibold text-3xl text-gray-800">
            Our Vision
          </h2>
          <p className="text-gray-600 text-lg">
            We believe that everyone deserves access to the care they need, and
            our platform is built to foster a supportive network between
            caregivers and careseekers. By bridging the gap, we aim to create
            opportunities for caregivers to find meaningful work while ensuring
            that families receive the care they deserve, without breaking the
            bank.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="mb-4 font-semibold text-3xl text-gray-800">
            Our Mission
          </h2>
          <p className="text-gray-600 text-lg">
            Millennicare was founded to make a difference in the lives of people
            living in lower-income communities. We understand that finding
            affordable care can be a challenge, and we want to change that. Our
            goal is to make essential services accessible to everyone, helping
            ease the burden on families while empowering caregivers with fair
            opportunities to grow their careers.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="mb-4 font-semibold text-3xl text-gray-800">
            Why Choose Us?
          </h2>
          <ul className="list-disc space-y-2 pl-6 text-gray-600 text-lg">
            <li>
              <strong>Affordable Services</strong>: We focus on providing the
              best care at the most affordable rates, allowing everyone to get
              the support they need.
            </li>
            <li>
              <strong>Trusted Network</strong>: All of our caregivers go through
              a vetting process to ensure they are experienced and reliable.
            </li>
            <li>
              <strong>Wide Range of Services</strong>: From childcare to elder
              care, housekeeping to pet care, we cover all your caregiving needs
              in one place.
            </li>
            <li>
              <strong>Community-Focused</strong>: Our platform is designed with
              the needs of underserved communities in mind, ensuring that
              support is available where it is most needed.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
