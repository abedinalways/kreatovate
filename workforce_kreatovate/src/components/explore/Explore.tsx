"use client";

import React from "react";
import ButtonAll from "../shared/ButtonAll";

function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = React.useRef<T | null>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.unobserve(el); // fire once
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15, ...options }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [options]);

  return { ref, inView };
}

const Explore = () => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="bg-[#0F1016] py-12 md:py-16">
      <div className="mx-4">
        <div
          ref={ref}
          className={[
            "custom-container relative overflow-hidden rounded-[20px]",
            "bg-[url('/images/explore.png')] bg-cover bg-center bg-no-repeat",
            // minimalist, tasteful entry anim
            "transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
          ].join(" ")}
        >
          {/* soft gradient veil for readability */}
          <div
            aria-hidden
            className="absolute inset-0 z-0"
            style={{
              background:
                "radial-gradient(60% 80% at 50% 0%, rgba(233,61,61,0.20) 0%, transparent 60%), radial-gradient(60% 80% at 50% 100%, rgba(78,48,254,0.22) 0%, transparent 65%), linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.55) 100%)",
            }}
          />

          {/* content */}
          <div className="relative z-10 px-5 md:px-10 py-16 md:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                Continue Your Journey with <br />
                <span className="text-gradient">Kreatovate</span>
              </h2>

              <p className="mt-4 md:mt-5 text-gray-300 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
                Experience how we’re transforming the workforce with AI-powered
                innovation. Dive deeper into our ecosystem.
              </p>

              <div className="mt-6 md:mt-8 inline-block">
                <ButtonAll
                  btnText="explore kreatovate.com"
                  className="px-6 md:px-7 py-5! text-base md:text-lg hover:translate-y-[-1px] hover:shadow-[0_8px_24px_rgba(78,48,254,0.25)] transition-transform"
                />
              </div>
            </div>
          </div>

          {/* subtle corners glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full blur-3xl opacity-30"
            style={{
              background: "radial-gradient(circle, #E93D3D66, transparent 60%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full blur-3xl opacity-30"
            style={{
              background: "radial-gradient(circle, #4E30FE66, transparent 60%)",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Explore;
