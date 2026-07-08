import { useState } from "react";
import { MapPin, Clock, Send } from "lucide-react";
import { useInView } from "../hooks/useInView";

const ADDRESS = "Augustinergasse 14, 8001 Zürich, Switzerland";

export default function Visit() {
  const [ref, inView] = useInView<HTMLDivElement>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="visit" className="bg-white py-20 md:py-28 px-6 md:px-12 lg:px-20">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto text-center mb-12 md:mb-16 transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#E63946] mb-4">
          Visit Us
        </p>
        <h2 className="font-serif font-bold text-3xl md:text-5xl text-[#1A1A1A] tracking-tight">
          Come by the atelier
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`}
            title="Map to Fleurs de Zurich"
            width="100%"
            height="400"
            loading="lazy"
            className="w-full h-[400px] rounded-2xl border-0 shadow-lg"
          />
          <div className="mt-4 flex flex-col gap-2 text-sm text-[#4a4a4a]">
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#E63946]" /> {ADDRESS}
            </p>
            <p className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#E63946]" /> Mon–Sat, 8:00–18:30
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`}
              target="_blank"
              rel="noreferrer"
              className="text-[#E63946] font-semibold hover:underline w-fit"
            >
              Open in Google Maps
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-[#1A1A1A]/10 bg-[#FAFAFA] p-6 md:p-8">
          {sent ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <p className="font-serif text-2xl font-bold text-[#1A1A1A]">Danke!</p>
              <p className="mt-2 text-[#5a5a5a]">
                We've received your message and will reply within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-sm font-medium text-[#1A1A1A]">Name</label>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-[#1A1A1A]/15 bg-white px-4 py-3 text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#E63946]/40"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-[#1A1A1A]">Email</label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-[#1A1A1A]/15 bg-white px-4 py-3 text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#E63946]/40"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-[#1A1A1A]">Message</label>
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="mt-1 w-full rounded-lg border border-[#1A1A1A]/15 bg-white px-4 py-3 text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#E63946]/40"
                  placeholder="Tell us about your order or event"
                />
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#E63946] py-3 font-semibold text-white hover:scale-[1.02] transition-transform"
              >
                Send message <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
