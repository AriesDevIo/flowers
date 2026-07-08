import { useInView } from "../hooks/useInView";

export default function StorySplit() {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section id="story" className="bg-[#FAFAFA] py-20 md:py-28">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="rounded-2xl overflow-hidden aspect-[4/5] order-2 md:order-1">
          <img
            src="https://images.pexels.com/photos/5409680/pexels-photo-5409680.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=1125"
            alt="Florist arranging a seasonal bouquet in the Zurich atelier"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="order-1 md:order-2">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#E63946] mb-4">
            Our Story
          </p>
          <h2 className="font-serif font-bold text-3xl md:text-5xl text-[#1A1A1A] tracking-tight leading-tight">
            Started on a market stall in 2014
          </h2>
          <p className="mt-6 text-base md:text-lg text-[#5a5a5a] leading-relaxed">
            Fleurs de Zurich began as a single stall at the Bürkliplatz
            Saturday market. Twelve years later we run an atelier on
            Augustinergasse, source directly from growers around the
            Zürichsee, and deliver across all 12 Kreise by bike courier.
          </p>
          <p className="mt-4 text-base md:text-lg text-[#5a5a5a] leading-relaxed">
            Every arrangement is cut and built the same morning it ships —
            nothing sits in a cooler for a week before it reaches you.
          </p>
        </div>
      </div>
    </section>
  );
}
