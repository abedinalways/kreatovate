"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Strategy = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);

    const ctx = gsap.context(() => {
      // 🔹 Section fade-in
      gsap.from(".strategy-section", {
        opacity: 0,
        scale: 0.98,
        duration: 1.5,
        ease: "power2.out",
      });

      // 🔹 Heading letter-by-letter animation
      const split = new SplitText(".strategy-heading", { type: "chars" });
      gsap.from(split.chars, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.04,
        ease: "power3.out",
      });

      // 🔹 Robot hand fade-in (entry)
      gsap.fromTo(
        ".robot-hand",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 2,
          ease: "power2.out",
          delay: 0.5,
        }
      );

      // 🌟 Scroll-based rotation for robot-hand
      gsap.to(".robot-hand", {
        rotation: 15,
        ease: "none",
        scrollTrigger: {
          trigger: ".strategy-section",
          start: "top center",
          end: "bottom top",
          scrub: 1.5, // smooth follow effect
        },
      });

      // 🔹 Glow pulse (loop)
      gsap.to(".robot-hand", {
        boxShadow: "0 0 40px rgba(120, 180, 255, 0.4)",
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 🔹 Ellipse slow rotation
      gsap.to(".ellipse", {
        rotate: 360,
        duration: 40,
        repeat: -1,
        ease: "linear",
      });

      // 🔹 List items fade-up one by one
      gsap.from(".strategy-list li", {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        delay: 1.5,
        duration: 1,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="about_us"
      ref={containerRef}
      className="strategy-section custom-container pt-24 h-[75vh] relative w-full overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <Image
          src="/images/strategy-ellipse1.png"
          alt="ellipse 1"
          width={604}
          height={584}
          className="absolute -top-20 left-[55%] -translate-x-1/2 ellipse"
        />
        <Image
          src="/images/robot-hand.png"
          alt="robot hand"
          width={286}
          height={554}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-30 lg:opacity-100 blur-xs lg:blur-none"
        />
        <Image
          src="/images/strategy-ellipse1.png"
          alt="ellipse 2"
          width={604}
          height={584}
          className="absolute -bottom-48 left-1/2 -translate-x-1/2 ellipse"
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-full z-20 py-24 px-4 flex flex-col justify-between">
        <div className="flex flex-col items-start gap-2 self-start">
          <p className="uppercase text-color-gradient font-roboto font-normal text-sm">
            [ The Kreatovate commitment to excellence ]
          </p>
          <h1 className="strategy-heading font-jakarta text-2xl lg:text-5xl font-bold">
            AI-Powered Strategy <br /> That Scales Growth
          </h1>
        </div>

        <div className="flex flex-col items-start gap-8 self-end">
          <p className="text-jakarta font-light text-base lg:text-lg">
            Turn ideas into measurable results with data-led marketing - AI-{" "}
            <br />
            powered to test and scale what works.
          </p>

          <div className="flex flex-col items-start gap-6 strategy-list">
            <h4 className="text-2xl font-medium font-jakarta">
              Why choose [ KREATOVATE ]
            </h4>

            <div>
              <ul className="flex flex-col items-start gap-3">
                <li>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/hrline1.png"
                      alt="dot line"
                      width={58.01}
                      height={7}
                    />
                    <p>AI insights that drive action.</p>
                  </div>
                </li>

                <li>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/hrline1.png"
                      alt="dot line"
                      width={58.01}
                      height={7}
                    />
                    <p>Test fast, scale what works.</p>
                  </div>
                </li>

                <li>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/hrline1.png"
                      alt="dot line"
                      width={58.01}
                      height={7}
                    />
                    <p>Hands-on strategy and execution.</p>
                  </div>
                </li>

                <li>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/hrline1.png"
                      alt="dot line"
                      width={58.01}
                      height={7}
                    />
                    <p>Personalized campaigns at scale.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strategy;
