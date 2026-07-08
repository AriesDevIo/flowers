import { Check } from "lucide-react";
import { useInView } from "../hooks/useInView";

const PLANS = [
  {
    name: "Single Bouquet",
    tagline: "One-time gift or treat",
    price: "CHF 65",
    period: "/order",
    features: [
      "Hand-tied seasonal bouquet",
      "Personal note card",
      "Same-day delivery in Zurich",
      "Choice of 3 sizes",
    ],
    cta: "Order once",
    popular: false,
  },
  {
    name: "Weekly Subscription",
    tagline: "Fresh flowers on repeat",
    price: "CHF 42",
    period: "/week",
    features: [
      "New arrangement every week",
      "Priority florist selection",
      "Free vase on first delivery",
      "Pause or cancel anytime",
      "10% off add-on gifts",
    ],
    cta: "Start subscription",
    popular: true,
  },
  {
    name: "Events & Weddings",
    tagline: "Custom floral design",
    price: "From CHF 800",
    period: "/event",
    features: [
      "In-person consultation",
      "Ceremony & reception florals",
      "Setup and breakdown included",
      "Dedicated event florist",
      "Sourced to your palette",
    ],
    cta: "Request a quote",
    popular: false,
  },
];

export default function Occasions() {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section id="occasions" className="bg-[#FAFAFA] px-6 md:px-12 lg:px-20 py-20 md:py-28">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto text-center mb-12 md:mb-16 transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#E63946] mb-4">
          Occasions & Plans
        </p>
        <h2 className="font-serif font-bold text-3xl md:text-5xl text-[#1A1A1A] tracking-tight">
          However often you need flowers
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {PLANS.map((p) => (
          <div
            key={p.name}
            className={`relative rounded-2xl border bg-white p-6 flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${
              p.popular ? "border-[#E63946] ring-2 ring-[#E63946]/30" : "border-[#1A1A1A]/10"
            }`}
          >
            {p.popular && (
              <span className="absolute -top-3 left-6 rounded-full bg-[#E63946] px-3 py-1 text-xs font-semibold text-white">
                Most popular
              </span>
            )}
            <h3 className="text-xl font-bold text-[#1A1A1A] font-serif">{p.name}</h3>
            <p className="text-[#8a8a8a] text-sm mt-1">{p.tagline}</p>
            <div className="mt-4">
              <span className="text-4xl font-bold text-[#1A1A1A]">{p.price}</span>
              <span className="text-[#8a8a8a]">{p.period}</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-[#4a4a4a] flex-1">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <Check className="w-4 h-4 text-[#E63946] flex-shrink-0 mt-0.5" /> {f}
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => alert(`${p.name} selected — we'll follow up by email.`)}
              className={`mt-6 rounded-xl py-3 font-semibold transition-transform hover:scale-[1.02] ${
                p.popular
                  ? "bg-[#E63946] text-white"
                  : "bg-[#1A1A1A] text-white"
              }`}
            >
              {p.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
