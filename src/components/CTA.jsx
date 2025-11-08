import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative isolate overflow-hidden bg-emerald-700 py-16 text-white">
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.15),_transparent_60%)]" />
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-semibold sm:text-3xl">
              Ready to build your era?
            </h3>
            <p className="mt-2 text-emerald-100">
              Jump in and start simulating matches, leagues, and tournaments inspired by FIFA 20.
            </p>
          </div>
          <a
            href="#modes"
            className="inline-flex items-center rounded-lg bg-white px-5 py-3 font-semibold text-emerald-800 shadow hover:shadow-lg transition"
          >
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
