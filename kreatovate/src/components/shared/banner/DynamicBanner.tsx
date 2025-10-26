"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import PageBreadCrumb from "../PageBreadCrumb";

interface DynamicBannerProps {
  imageUrl: string;
  title: string;
  titleGradient: string;
}

const DynamicBanner = ({
  imageUrl,
  title,
  titleGradient,
}: DynamicBannerProps) => {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Heading: subtle scale-in + fade + ease
      tl.from(".js-db-heading", {
        opacity: 0,
        y: 14,
        scale: 0.98,
        filter: "blur(6px)",
        duration: 0.9,
        ease: "power3.out",
      });

      // Optional: small letter-spacing settle for premium feel
      tl.fromTo(
        ".js-db-heading",
        { letterSpacing: "0.08em" },
        { letterSpacing: "0em", duration: 0.6, ease: "power2.out" },
        "-=0.6"
      );

      // Breadcrumb: fade-up after heading
      tl.from(".js-db-crumb", {
        opacity: 0,
        y: 10,
        duration: 0.6,
        ease: "power2.out",
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="relative w-full h-[75vh] mt-(--nav-height)">
      <Image
        src={imageUrl}
        alt="page banner image"
        fill
        priority
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%)",
        }}
      />
      <div className="absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center gap-4">
        <h1 className="js-db-heading text-5xl font-bold">
          {title} <span className="text-gradient pb-2!">{titleGradient}</span>
        </h1>

        <div className="js-db-crumb">
          <PageBreadCrumb />
        </div>
      </div>
    </div>
  );
};

export default DynamicBanner;
