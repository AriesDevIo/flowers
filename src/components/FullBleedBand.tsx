import { useParallax } from "../hooks/useParallax";
import { useInView } from "../hooks/useInView";

export default function FullBleedBand() {
  const offset = useParallax(0.25);
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section className="relative h-[70vh] md:h-[85vh] overflow-hidden bg-[#1A1A1A]">
      <img
        src="https://images.pexels.com/photos/15452466/pexels-photo-15452466.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1920&h=1400"
        alt="Fleurs de Zurich storefront on a cobblestone Zurich street"
        className="absolute inset-0 w-full h-[130%] object-cover"
        style={{ transform: `translate3d(0, ${offset}px, 0)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
      <div
        ref={ref}
        className={`relative z-10 h-full flex items-end px-6 md:px-12 lg:px-20 pb-12 md:pb-20 transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="max-w-xl">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#E63946] mb-4">
            Augustinergasse 14
          </p>
          <h2 className="font-serif font-bold text-3xl md:text-5xl text-white tracking-tight leading-tight">
            Find us in the Altstadt
          </h2>
        </div>
      </div>
    </section>
  );
}
