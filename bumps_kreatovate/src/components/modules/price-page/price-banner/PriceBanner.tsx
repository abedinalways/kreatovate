'use client';
import gsap from 'gsap';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import PriceBannerCard, { PricePlan } from './PriceBannerCard';

type DecorPos = {
  t?: string;
  b?: string;
  l?: string;
  r?: string;
  w: number;
  h: number;
};

const DECOR: DecorPos[] = [
  { t: '10%', l: '15%', w: 8, h: 8 },
  { t: '20%', r: '25%', w: 4, h: 4 },
  { b: '15%', l: '10%', w: 3, h: 3 },
  { b: '20%', r: '15%', w: 5, h: 5 },
  { t: '50%', l: '40%', w: 4, h: 4 },
  { t: '30%', r: '35%', w: 2, h: 2 },
  { b: '25%', l: '45%', w: 6, h: 6 },
  { t: '70%', l: '60%', w: 1, h: 1 },
  { t: '15%', r: '50%', w: 3, h: 3 },
  { b: '10%', r: '30%', w: 5, h: 5 },
  { t: '5%', l: '25%', w: 3, h: 3 },
  { b: '5%', r: '20%', w: 4, h: 4 },
  { t: '40%', l: '75%', w: 2, h: 2 },
  { t: '60%', r: '10%', w: 6, h: 6 },
  { b: '30%', l: '35%', w: 5, h: 5 },
  { t: '25%', r: '60%', w: 2, h: 2 },
  { b: '40%', r: '40%', w: 3, h: 3 },
  { t: '35%', l: '20%', w: 7, h: 7 },
  { b: '5%', l: '55%', w: 4, h: 4 },
  { t: '10%', r: '10%', w: 1, h: 1 },
  { b: '60%', l: '10%', w: 3, h: 3 },
  { t: '80%', r: '5%', w: 4, h: 4 },
  { b: '50%', r: '70%', w: 2, h: 2 },
  { t: '55%', l: '50%', w: 6, h: 6 },
  { t: '33%', r: '30%', w: 3, h: 3 },
  { b: '70%', l: '15%', w: 5, h: 5 },
  { t: '90%', l: '10%', w: 4, h: 4 },
  { b: '15%', r: '5%', w: 2, h: 2 },
  { t: '45%', l: '85%', w: 6, h: 6 },
  { b: '80%', r: '25%', w: 1, h: 1 },
];

const PRICES: PricePlan[] = [
  {
    title: 'Lifestyle Manager',
    price: '$2,497',
    billing: 'monthly',
    availability: 'Not Available',
    description:
      'Includes all vl Non-Voice Agents plus Inbound Voice v3 (Closer)(UCM) to answer all incoming personal calls, screen and take messages, and set priority.',
    buttonText: 'Get Started',
    features: [
      'All Non-Voice Agents',
      'Inbound Voice Assistant',
      'Call Screening',
      'Priority Management',
    ],
  },
  {
    title: 'Chief of Staff',
    price: '$9,497',
    billing: 'monthly',
    availability: 'Not Available',
    description:
      'Includes all Lite vl Non-Voice + all Expert v3 Voice Roles (UCM).',
    buttonText: 'Get Started',
    features: [
      'All Lite Non-Voice',
      'Expert Voice Roles',
      'Memory Enabled',
      'UCM Integration',
    ],
  },
  {
    title: 'Chief Operating Officer',
    price: '$14,497',
    billing: 'monthly',
    availability: 'Not Available',
    description:
      'Includes all Lite vl Non-Voice + all Elite v4 Voice + all Premium vl (UCM + Trilingual).',
    buttonText: 'Get Started',
    features: [
      'All Elite Features',
      'Trilingual Support',
      'Premium UCM',
      'Full Workforce Access',
    ],
  },
];

const PriceBanner = () => {
  const decoRef = useRef<HTMLDivElement>(null);

  // 🌀 Decorative animation (lines & dots)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray<HTMLElement>('.line');
      const rand = gsap.utils.random;
      const PAD = 120;

      const pick = <T,>(arr: T[]) =>
        arr[Math.floor(Math.random() * arr.length)];
      const bounds = () => ({ w: window.innerWidth, h: window.innerHeight });

      const shoot = (el: HTMLElement) => {
        const { w, h } = bounds();
        const side = pick(['left', 'right', 'top', 'bottom']) as
          | 'left'
          | 'right'
          | 'top'
          | 'bottom';

        const from = { x: 0, y: 0 };
        const to = { x: 0, y: 0 };

        if (side === 'left') {
          from.x = -PAD;
          from.y = rand(-PAD, h + PAD);
          to.x = w + PAD;
          to.y = from.y + rand(-200, 200);
        } else if (side === 'right') {
          from.x = w + PAD;
          from.y = rand(-PAD, h + PAD);
          to.x = -PAD;
          to.y = from.y + rand(-200, 200);
        } else if (side === 'top') {
          from.x = rand(-PAD, w + PAD);
          from.y = -PAD;
          to.x = from.x + rand(-250, 250);
          to.y = h + PAD;
        } else {
          from.x = rand(-PAD, w + PAD);
          from.y = h + PAD;
          to.x = from.x + rand(-250, 250);
          to.y = -PAD;
        }

        const rot = rand(-25, 25);
        const scl = rand(0.8, 1.2);
        const flyDur = rand(1.2, 2.0);
        const introDur = 0.18;

        gsap.set(el, {
          x: from.x,
          y: from.y,
          rotate: rot,
          scale: scl,
          opacity: 0,
          zIndex: 10,
        });

        const tl = gsap.timeline({
          onComplete: () => { gsap.delayedCall(rand(1.2, 4.0), () => shoot(el)); },
        });

        tl.to(el, { opacity: 1, duration: introDur, ease: 'power1.out' })
          .to(el, { x: to.x, y: to.y, duration: flyDur, ease: 'power3.out' })
          .to(el, { opacity: 0, duration: 0.25, ease: 'power2.inOut' });
      };

      lines.forEach(el => gsap.delayedCall(rand(0.1, 1.0), () => shoot(el)));

      // twinkling dots
      gsap.to('.dot', {
        opacity: 'random(0.2, 1)',
        duration: 'random(0.8, 2)',
        repeat: -1,
        yoyo: true,
        stagger: { amount: 3, from: 'random' },
        ease: 'sine.inOut',
      });
    }, decoRef);

    return () => ctx.revert();
  }, []);

  // 💫 Content animation (title + cards)
  useEffect(() => {
    const timer = setTimeout(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.banner-title', { y: 24, opacity: 0, duration: 0.6 })
        .from('.banner-sub', { y: 16, opacity: 0, duration: 0.5 }, '-=0.25')
        .from(
          '.price-card',
          {
            y: 40,
            scale: 0.9,
            opacity: 0,
            duration: 0.7,
            stagger: 0.15,
            clearProps: 'all',
          },
          '-=0.2'
        );
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-svh md:min-h-screen bg-[#0F1016] overflow-hidden">
      {/* 🔮 Background + decoration */}
      <div ref={decoRef} className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/banner.png"
          alt="banner background"
          fill
          className="object-cover"
          priority
        />

        <Image
          src="/images/price/line1.png"
          alt="line 1"
          width={140}
          height={140}
          className="absolute top-32 left-10 rotate-6 z-10 line"
        />

        <Image
          src="/images/price/line1.png"
          alt="line 2"
          width={64}
          height={64}
          className="absolute top-20 left-0 z-10 line"
        />

        <Image
          src="/images/price/line1.png"
          alt="line 3"
          width={64}
          height={64}
          className="absolute top-24 right-20 scale-x-[-1] z-10 line"
        />

        {DECOR.map((d, i) => (
          <Image
            key={i}
            src="/images/price/dot.png"
            alt={`dot ${i + 1}`}
            width={d.w}
            height={d.h}
            className="absolute dot"
            style={{
              top: d.t,
              bottom: d.b,
              left: d.l,
              right: d.r,
              zIndex: 10,
            }}
          />
        ))}
      </div>

      {/* ✨ Main Content */}
      <div className="relative z-20 px-4 sm:px-6 lg:px-8 pt-44 sm:pt-20 md:pt-28 pb-16 md:pb-24 max-w-7xl mx-auto">
        <div className="text-center mx-auto max-w-3xl">
          <h1 className="banner-title text-2xl md:text-5xl font-bold leading-tight text-white">
            AI Workforce Employees
          </h1>
          <p className="banner-sub mt-3 md:mt-4 text-xs md:text-sm text-white/85">
            Kreatovate Marketing & Consulting — “Your Problems, Our Solutions!”
          </p>
        </div>

        {/* 📱 Mobile & Tablet */}
        <div className="lg:hidden mt-10 -mx-4 px-4">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar">
            {PRICES.map(plan => (
              <div
                key={plan.title}
                className="price-card snap-center shrink-0 w-[90%] sm:w-[85%] md:w-[48%]"
              >
                <PriceBannerCard plan={plan} />
              </div>
            ))}
          </div>
        </div>

        {/* 🖥️ Desktop grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mt-12 items-stretch">
          {PRICES.map(plan => (
            <div key={plan.title} className="price-card">
              <PriceBannerCard plan={plan} />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .price-card {
          opacity: 1; /* fallback if animation fails */
        }
      `}</style>
    </section>
  );
};

export default PriceBanner;
