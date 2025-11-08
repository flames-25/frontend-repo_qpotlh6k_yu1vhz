import { Medal, Globe2, Cpu } from "lucide-react";

const ModeCard = ({ icon: Icon, title, subtitle, description }) => (
  <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
    <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
    <div className="p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="text-emerald-100">{subtitle}</p>
      <p className="mt-3 text-emerald-50/90">{description}</p>
    </div>
    <div className="pointer-events-none absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-white/10 blur-2xl transition group-hover:scale-110" />
  </div>
);

export default function Modes() {
  const modes = [
    {
      icon: Medal,
      title: "Career Mode",
      subtitle: "Manage, develop, dominate",
      description:
        "Handle transfers, training, and tactics as you take your club to the top across seasons.",
    },
    {
      icon: Globe2,
      title: "Tournament",
      subtitle: "Create custom cups",
      description:
        "Build knockout and group stages, set seeding, and simulate matches with one click.",
    },
    {
      icon: Cpu,
      title: "Quick Sim",
      subtitle: "Instant fixtures",
      description:
        "Pick two teams and let the engine decide—perfect for rapid testing and what-if scenarios.",
    },
  ];

  return (
    <section id="modes" className="py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Game Modes</h2>
          <p className="mt-4 text-slate-600">
            Choose how you want to play. Every mode is powered by the same smart simulation core.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {modes.map((m) => (
            <ModeCard key={m.title} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
}
