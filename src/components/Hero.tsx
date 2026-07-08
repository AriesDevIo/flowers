import { ChevronDown, ArrowRight, Flower2 } from "lucide-react";
import { useParallax } from "../hooks/useParallax";

export default function Hero() {
  const offsetA = useParallax(0.15);
  const offsetB = useParallax(0.3);

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden flex items-center bg-[#1A1A1A]"
    >
      {/* Layered mesh glow — parallax depth layers */}
      <div
        aria-hidden
        data-speed="0.15"
        className="pointer-events-none absolute inset-0"
        style={{
          transform: `translate3d(0, ${offsetA}px, 0)`,
          background:
            "radial-gradient(60% 50% at 20% 20%, rgba(230,57,70,0.25) 0%, rgba(230,57,70,0) 60%)," +
            "radial-gradient(50% 40% at 85% 10%, rgba(168,168,168,0.15) 0%, rgba(168,168,168,0) 60%)",
        }}
      />
      <div
        aria-hidden
        data-speed="0.3"
        className="pointer-events-none absolute inset-0"
        style={{
          transform: `translate3d(0, ${offsetB}px, 0)`,
          background:
            "radial-gradient(45% 45% at 75% 85%, rgba(230,57,70,0.18) 0%, rgba(230,57,70,0) 60%)",
        }}
      />
      {/* Floating accent element */}
      <div
        aria-hidden
        className="hidden md:block absolute top-1/4 right-16 lg:right-32 text-[#E63946]/70"
        style={{ transform: `translate3d(0, ${offsetB * -0.6}px, 0)` }}
      >
        <Flower2 className="w-24 h-24 lg:w-32 lg:h-32" strokeWidth={0.8} />
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto w-full">
        <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#E63946] mb-6">
          Zurich's Seasonal Florist
        </p>
        <h1 className="font-serif font-bold text-white text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight">
          Flowers cut this morning, arranged for you today.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-[#A8A8A8] max-w-2xl leading-relaxed">
          A small atelier on Augustinergasse, working with growers across the
          Zürichsee region. Same-day delivery across the city, every day of
          the week.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#occasions"
            className="inline-flex items-center gap-2 rounded-full bg-[#E63946] px-7 py-3.5 font-semibold text-white hover:scale-[1.02] transition-transform"
          >
            Order Flowers <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#showcase"
            className="inline-flex items-center gap-2 rounded-full border border-white/70 px-7 py-3.5 font-semibold text-white hover:bg-white/10 transition-colors"
          >
            See Our Arrangements
          </a>
        </div>
      </div>

      <a
        href="#showcase"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white motion-safe:animate-bounce"
      >
        <ChevronDown className="w-7 h-7" />
      </a>
    </section>
  );
}
