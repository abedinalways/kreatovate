"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      lerp: 0.1,
      wheelMultiplier: 1,
    });

    // keep ScrollTrigger in sync
    lenis.on("scroll", ScrollTrigger.update);

    // tie Lenis to GSAP’s internal ticker
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    return () => {
      gsap.ticker.remove(ScrollTrigger.update);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
