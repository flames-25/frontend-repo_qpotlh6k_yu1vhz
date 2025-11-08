import { Gamepad, Trophy } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-600 via-emerald-700 to-emerald-900 text-white">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/30 via-transparent to-transparent" />
      <div className="container mx-auto px-6 py-24 md:py-28 relative">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">
            <Trophy className="h-4 w-4 text-yellow-300" />
            <span className="font-medium">FIFA 20 Inspired</span>
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
            Ultimate FIFA Simulator
          </h1>
          <p className="mt-4 text-lg text-emerald-50/90 sm:text-xl">
            Build squads, simulate fixtures, and conquer seasons with authentic ratings and
            dynamic match logic. Relive the FIFA 20 era—your way.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#modes"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-emerald-800 shadow hover:shadow-lg transition"
            >
              <Gamepad className="mr-2 h-5 w-5" /> Start a Simulation
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg bg-white/10 px-6 py-3 font-semibold text-white ring-1 ring-white/30 hover:bg-white/15 transition"
            >
              Explore Features
            </a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none select-none absolute right-0 bottom-0 translate-x-12 translate-y-12 md:translate-x-24 md:translate-y-24 opacity-70">
        <img
          alt="Ball"
          src="https://images.unsplash.com/photo-1543326727-cf6c39e8f84b?q=80&w=1200&auto=format&fit=crop"
          className="w-[480px] max-w-none rotate-12 rounded-3xl shadow-2xl ring-1 ring-white/10"
          loading="lazy"
        />
      </div>
    </section>
  );
}
