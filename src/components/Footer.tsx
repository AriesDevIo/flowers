import { Flower2, Instagram, Facebook } from "lucide-react";

const LINKS = [
  { label: "Showcase", href: "#showcase" },
  { label: "Our Story", href: "#story" },
  { label: "Occasions", href: "#occasions" },
  { label: "Visit Us", href: "#visit" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#A8A8A8] px-6 md:px-12 lg:px-20 py-14 md:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 text-white font-serif text-xl font-bold">
            <Flower2 className="w-6 h-6 text-[#E63946]" />
            Fleurs de Zurich
          </div>
          <p className="mt-4 text-sm leading-relaxed max-w-xs">
            Seasonal flowers, cut and arranged the same day, delivered across
            the city of Zurich.
          </p>
        </div>

        <div>
          <p className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
            Explore
          </p>
          <ul className="flex flex-col gap-2 text-sm">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-white transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
            Follow
          </p>
          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="hover:text-white transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/10 text-xs text-[#8a8a8a]">
        © {new Date().getFullYear()} Fleurs de Zurich. All rights reserved.
      </div>
    </footer>
  );
}
