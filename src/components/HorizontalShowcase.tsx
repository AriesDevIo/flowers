import { useEffect, useRef, useState } from "react";
import { useInView } from "../hooks/useInView";

const ARRANGEMENTS = [
  {
    name: "Bahnhofstrasse Bouquet",
    price: "CHF 68",
    desc: "Garden roses, ranunculus, and eucalyptus in a hand-tied round.",
    img: "https://images.pexels.com/photos/21358199/pexels-photo-21358199.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=1100",
  },
  {
    name: "Limmat Peonies",
    price: "CHF 82",
    desc: "Seasonal peonies with soft greenery, wrapped in kraft paper.",
    img: "https://images.pexels.com/photos/28460750/pexels-photo-28460750.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=1100",
  },
  {
    name: "Zürichsee Dahlia Jar",
    price: "CHF 74",
    desc: "Dahlias and cosmos arranged loosely in a ceramic vessel.",
    img: "https://images.pexels.com/photos/33791392/pexels-photo-33791392.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=1100",
  },
  {
    name: "Old Town Tulip Sheaf",
    price: "CHF 45",
    desc: "A crisp sheaf of Dutch tulips, tied simply with linen twine.",
    img: "https://images.pexels.com/photos/19416489/pexels-photo-19416489.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=1100",
  },
  {
    name: "Alpenglow Anemones",
    price: "CHF 58",
    desc: "Deep-hued anemones and dusty miller in a low compote.",
    img: "https://images.pexels.com/photos/11203425/pexels-photo-11203425.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=1100",
  },
  {
    name: "Niederdorf Orchid Branch",
    price: "CHF 96",
    desc: "A single cascading orchid branch, minimal and sculptural.",
    img: "https://images.pexels.com/photos/8280977/pexels-photo-8280977.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=1100",
  },
];

export default function HorizontalShowcase() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [translate, setTranslate] = useState(0);
  const [progress, setProgress] = useState(0);
  const [headerRef, headerInView] = useInView<HTMLDivElement>();

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    let ticking = false;
    const update = () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight;
      const scrollable = rect.height - viewport;
      const raw = -rect.top / (scrollable || 1);
      const p = Math.min(1, Math.max(0, raw));
      const maxShift = Math.max(0, track.scrollWidth - window.innerWidth);
      setTranslate(-p * maxShift);
      setProgress(p);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      id="showcase"
      ref={sectionRef}
      className="relative bg-[#FAFAFA]"
      style={{ height: "400vh" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        <div
          ref={headerRef}
          className={`px-6 md:px-12 lg:px-20 mb-8 transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#E63946] mb-3">
            This Week's Arrangements
          </p>
          <h2 className="font-serif font-bold text-3xl md:text-5xl text-[#1A1A1A] tracking-tight">
            Six ways to say it with flowers
          </h2>
        </div>

        <div
          ref={trackRef}
          className="flex gap-6 md:gap-8 px-6 md:px-12 lg:px-20 will-change-transform"
          style={{ transform: `translate3d(${translate}px, 0, 0)` }}
        >
          {ARRANGEMENTS.map((a) => (
            <div
              key={a.name}
              className="flex-shrink-0 w-[260px] md:w-[320px] rounded-2xl border border-[#1A1A1A]/10 bg-white overflow-hidden shadow-sm"
            >
              <div className="overflow-hidden aspect-[4/5]">
                <img
                  src={a.img}
                  alt={a.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif font-bold text-lg text-[#1A1A1A]">{a.name}</h3>
                <p className="text-sm text-[#6b6b6b] mt-1 leading-relaxed">{a.desc}</p>
                <p className="mt-3 text-[#E63946] font-semibold">{a.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Progress rail */}
        <div className="px-6 md:px-12 lg:px-20 mt-8">
          <div className="h-1 w-full max-w-xs bg-[#1A1A1A]/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#E63946] rounded-full"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
