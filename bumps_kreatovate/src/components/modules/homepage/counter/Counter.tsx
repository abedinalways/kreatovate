"use client";
import { useEffect, useRef } from "react";

type Formatter = (n: number) => string;

function useCountUp(
  target: number,
  duration = 1200,
  onUpdate?: (value: number) => void
) {
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;

    const start = performance.now();
    const from = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);

      const eased = 1 - Math.pow(1 - t, 3);
      const val = from + (target - from) * eased;
      onUpdate?.(val);
      if (t < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [target, duration, onUpdate]);
}

function CountUp({
  to,
  duration = 1200,
  formatter,
  className = "",
}: {
  to: number;
  duration?: number;
  formatter?: Formatter;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useCountUp(to, duration, (v) => {
    if (!ref.current) return;
    const n = to % 1 === 0 ? Math.round(v) : v;
    ref.current.textContent = formatter ? formatter(n) : `${Math.round(n)}`;
  });

  return <span ref={ref} className={className} />;
}

const currency = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);

const Counter = () => {
  return (
    <section className="w-full py-10 px-4 lg:px-0">
      <div className="custom-container grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {/* Card */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5 backdrop-blur-sm">
          <h3 className="text-sm sm:text-base text-white/80">Current price</h3>
          <p className="mt-1 text-2xl sm:text-3xl font-bold text-[#E21717]">
            <CountUp to={497} formatter={currency} />
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5 backdrop-blur-sm">
          <h3 className="text-sm sm:text-base text-white/80">Total Purchase</h3>
          <p className="mt-1 text-2xl sm:text-3xl font-bold text-[#E21717]">
            <CountUp to={11497} formatter={currency} />
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5 backdrop-blur-sm">
          <h3 className="text-sm sm:text-base text-white/80">Current Round</h3>
          <p className="mt-1 text-2xl sm:text-3xl font-bold text-[#E21717]">
            <CountUp to={422} />
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5 backdrop-blur-sm">
          <h3 className="text-sm sm:text-base text-white/80">Back to Reset</h3>
          <p className="mt-1 text-2xl sm:text-3xl font-bold text-[#E21717] whitespace-nowrap">
            {/* Animate the first number; keep the rest as suffix */}
            <span className="mr-1">
              <CountUp to={1} formatter={(n) => `$${n}`} />
            </span>
            <span className="text-white/90">at $75</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Counter;
