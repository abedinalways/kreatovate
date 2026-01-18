"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { smoothScrollTo } from "@/lib/smoothScroll";

type Props = {
  variant?: "desktop" | "mobile";
  headerSelector?: string;
};

const ITEMS = [
  { id: "#home", label: "home" },
  { id: "#about_us", label: "about us" },
  { id: "#our_solutions", label: "our solutions" },
  { id: "#testimonial", label: "testimonial" },
  { id: "#contact_us", label: "contact us" },
] as const;

const NavItems = ({ variant = "desktop", headerSelector = "nav" }: Props) => {
  const [active, setActive] = useState("#home");

  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});
  const gsapRef = useRef<any>(null);
  const prefersReducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,
    []
  );

  useEffect(() => {
    sectionsRef.current = ITEMS.reduce((acc, item) => {
      acc[item.id] = document.querySelector(item.id) as HTMLElement | null;
      return acc;
    }, {} as Record<string, HTMLElement | null>);

    setActive(window.location.hash || "#home");

    let triggers: any[] = [];

    (async () => {
      const [{ default: gsap }, { default: ScrollTrigger }] = await Promise.all(
        [import("gsap"), import("gsap/ScrollTrigger")]
      );
      gsap.registerPlugin(ScrollTrigger);
      gsapRef.current = gsap;

      ITEMS.forEach(({ id }) => {
        const section = sectionsRef.current[id];
        if (!section) return;

        const st = (ScrollTrigger as any).create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActive(id),
          onEnterBack: () => setActive(id),
        });
        triggers.push(st);
      });
    })();

    return () => {
      triggers.forEach((t) => t?.kill?.());
    };
  }, []);

  const handleNavClick = (e: any, id: string) => {
    smoothScrollTo(e, id);
  };

  if (variant === "mobile") {
    return (
      <div>
        <ul className="flex flex-col gap-1 capitalize">
          {ITEMS.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <Link
                  href={item.id}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={[
                    "block w-full rounded-lg px-4 py-3 transition-colors whitespace-nowrap cursor-pointer",
                    isActive
                      ? "bg-[#ED1C24] font-semibold"
                      : "hover:bg-[#ED1C24]/60",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <div>
      <ul className="flex items-center gap-7 lg:gap-3 capitalize bg-white/10 p-1 rounded-full">
        {ITEMS.map((item) => {
          const isActive = active === item.id;
          return (
            <li
              key={item.id}
              className={[
                "px-4 lg:px-2 py-1 rounded-full transition-all duration-200",
                isActive
                  ? "bg-[#ED1C24] font-semibold"
                  : "hover:bg-[#ED1C24]/40",
              ].join(" ")}
            >
              <Link
                href={item.id}
                onClick={(e) => handleNavClick(e, item.id)}
                className="whitespace-nowrap py-2"
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavItems;
