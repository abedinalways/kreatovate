/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  image: string;
  href: string;
}

const ServiceCard = ({ title, desc, image, href }: ServiceItem) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useLayoutEffect(() => {
    const card = cardRef.current;
    const img = imgRef.current;
    if (!card || !img) return;

    // ensure visible for animation calls in tabs
    gsap.set(card, { opacity: 1 });

    // parallax follow
    const qx = gsap.quickTo(img, "x", { duration: 0.4, ease: "power2.out" });
    const qy = gsap.quickTo(img, "y", { duration: 0.4, ease: "power2.out" });

    const onMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const rx = (e.clientX - rect.left) / rect.width; // 0..1
      const ry = (e.clientY - rect.top) / rect.height; // 0..1
      qx((rx - 0.5) * 10); // +/- 5px
      qy((ry - 0.5) * 10);
    };

    const onEnter = () => {
      gsap.to(card, { y: -4, duration: 0.25, ease: "power2.out" });
      gsap.to(img, { scale: 1.03, duration: 0.25, ease: "power2.out" });
    };

    const onLeave = () => {
      gsap.to(card, { y: 0, duration: 0.25, ease: "power2.out" });
      gsap.to(img, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.25,
        ease: "power2.out",
      });
    };

    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseenter", onEnter);
    card.addEventListener("mouseleave", onLeave);

    return () => {
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseenter", onEnter);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className="svc-card p-[1px] rounded-xl bg-gradient-to-r from-[#E93D3D] to-[#4E30FE]">
      <div className="rounded-[10px]">
        <div className="bg-black h-full relative flex flex-col items-center gap-5 p-6 rounded-xl">
          {/* decorative lights (no animation class reused) */}
          <Image
            src="/images/service-light-1.png"
            alt="service light 1"
            width={400}
            height={400}
            className="absolute top-0 left-0 z-10 rounded-tl-xl pointer-events-none select-none"
          />
          <Image
            src="/images/service-light-2.png"
            alt="service light 2"
            width={400}
            height={400}
            className="absolute top-0 right-0 z-10 rounded-tr-xl pointer-events-none select-none"
          />

          {/* parallax target */}
          <Image
            ref={imgRef as any}
            src={image}
            alt="service image"
            width={250}
            height={250}
            className="z-20"
          />

          <div className="w-full flex flex-col gap-4 relative z-20">
            <h1 className="text-lg lg:text-2xl font-semibold">{title}</h1>
            <p className="text-sm text-gray-400">{desc}</p>

            <div className="p-[1px] rounded-[10px] bg-gradient-to-r from-[#E93D3D] to-[#4E30FE] cursor-pointer">
              <Button
                asChild
                variant="ghost"
                className="w-full rounded-[10px] bg-black hover:bg-black/90 text-white hover:text-white py-3 text-lg font-medium"
              >
                <Link href={href} className="block w-full text-center">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
