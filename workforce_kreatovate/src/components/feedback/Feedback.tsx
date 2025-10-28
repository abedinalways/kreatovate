"use client";

import React, { useEffect, useRef } from "react";
import HeadingButton from "../shared/HeadingButton";
import Reviews from "./Reviews";
import gsap from "gsap";

const Feedback = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.6 },
      });

      // overall fade-in
      tl.from(rootRef.current, { opacity: 0, duration: 0.4 });

      // badge, title, reviews: staggered "fade-up"
      tl.from(
        [badgeRef.current, titleRef.current, reviewsRef.current],
        { y: 24, opacity: 0, stagger: 0.15 },
        "-=0.1"
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="testimonial"
      ref={rootRef}
      className="custom-container px-4 sm:px-36 md:px-5 py-20 flex-col gap-8 justify-center items-center"
    >
      <div ref={badgeRef} className="flex justify-center items-center mb-4">
        <HeadingButton btnText="Testimonial" />
      </div>

      <h2 ref={titleRef} className="md:text-5xl text-3xl text-center font-bold">
        What our <span className="text-color-gradient">Customer Say</span>
      </h2>

      <div ref={reviewsRef} className="flex justify-center">
        <Reviews />
      </div>
    </div>
  );
};

export default Feedback;
