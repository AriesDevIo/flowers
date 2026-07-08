import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      setInView(true);
      return;
    }
    const safety = window.setTimeout(() => setInView(true), 1500);
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          window.clearTimeout(safety);
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      window.clearTimeout(safety);
    };
  }, [threshold]);

  return [ref, inView] as const;
}
