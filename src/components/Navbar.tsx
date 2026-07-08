import { useEffect, useState } from "react";
import { Menu, X, Flower2 } from "lucide-react";

const LINKS = [
  { label: "Showcase", href: "#showcase" },
  { label: "Our Story", href: "#story" },
  { label: "Occasions", href: "#occasions" },
  { label: "Visit Us", href: "#visit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY >= 64);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1A1A1A]/90 backdrop-blur-md border-b border-white/10 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 flex items-center justify-between h-16 md:h-20">
        <a href="#hero" className="flex items-center gap-2 text-white font-serif text-xl font-bold">
          <Flower2 className="w-6 h-6 text-[#E63946]" />
          Fleurs de Zurich
        </a>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/85 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#occasions"
            className="rounded-full bg-[#E63946] px-5 py-2.5 text-sm font-semibold text-white hover:scale-[1.02] transition-transform"
          >
            Order Flowers
          </a>
        </div>

        <button
          type="button"
          className="md:hidden text-white"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#1A1A1A]/98 backdrop-blur-md border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-white/90 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#occasions"
            onClick={() => setOpen(false)}
            className="rounded-full bg-[#E63946] px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Order Flowers
          </a>
        </div>
      )}
    </nav>
  );
}
