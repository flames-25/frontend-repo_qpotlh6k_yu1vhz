import Hero from "./components/Hero";
import Features from "./components/Features";
import Modes from "./components/Modes";
import CTA from "./components/CTA";

function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-emerald-900/80 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between px-6 py-4 text-white">
        <a href="#" className="flex items-center gap-2 font-bold tracking-wide">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg"
            alt="logo"
            className="h-7 w-7"
          />
          FIFA Simulator
        </a>
        <nav className="hidden gap-6 text-sm font-medium md:flex">
          <a className="hover:text-emerald-200" href="#features">Features</a>
          <a className="hover:text-emerald-200" href="#modes">Modes</a>
          <a className="hover:text-emerald-200" href="#contact">Contact</a>
        </nav>
        <a
          href="#modes"
          className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-emerald-800 shadow hover:shadow-md"
        >
          Launch
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 py-10 text-slate-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} FIFA Simulator — Built for fans of the FIFA 20 era.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#modes" className="hover:text-white">Modes</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Modes />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
