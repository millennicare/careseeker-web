import { Calendar, ShieldCheck, Tag, Users } from "lucide-react";

const categories = [
  {
    icon: <Tag size={32} />,
    title: "Affordable Rates",
    description:
      "We believe in providing quality care without breaking the bank.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Trusted Providers",
    description:
      "Our caregivers and service providers are thoroughly vetted and background checked.",
  },
  {
    icon: <Calendar size={32} />,
    title: "Flexible Scheduling",
    description: "Book services when it’s convenient for you.",
  },
  {
    icon: <Users size={32} />,
    title: "Community Focused",
    description:
      "We're committed to helping underserved communities gain access to affordable services.",
  },
];

export default function ChooseUs() {
  return (
    <section className="pt-16 pb-8 md:pt-12 md:pb-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="mb-8 font-bold text-4xl">Why Choose Millennicare?</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div className="rounded-lg p-6 shadow-md" key={category.title}>
              <div className="mb-4 flex w-full justify-center text-primary">
                {category.icon}
              </div>
              <h3 className="mb-4 font-semibold text-2xl">{category.title}</h3>
              <p className="text-gray-700">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
