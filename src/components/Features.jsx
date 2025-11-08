import { Shield, Users, BarChart3, RefreshCcw } from "lucide-react";

const Feature = ({ icon: Icon, title, description }) => (
  <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
    <p className="mt-2 text-slate-600">{description}</p>
  </div>
);

export default function Features() {
  const items = [
    {
      icon: Shield,
      title: "Realistic Match Engine",
      description:
        "Physics-based outcomes, stamina management, form and morale—results that feel earned.",
    },
    {
      icon: Users,
      title: "Ultimate Team Builder",
      description:
        "Assemble dream squads with chemistry links, preferred positions, and custom tactics.",
    },
    {
      icon: BarChart3,
      title: "Career & Season Mode",
      description:
        "Run full campaigns, track tables, player stats, and progression across competitions.",
    },
    {
      icon: RefreshCcw,
      title: "Live Updates",
      description:
        "Import or tweak player ratings and keep your database fresh with quick edits.",
    },
  ];

  return (
    <section id="features" className="bg-slate-50 py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Built for depth and authenticity
          </h2>
          <p className="mt-4 text-slate-600">
            Designed to capture the feel of FIFA 20 while giving you complete control over your
            simulations.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((f) => (
            <Feature key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
