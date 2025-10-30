"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

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

  const handleNavClick = useCallback(
    async (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      if (!id.startsWith("#")) return;

      const target = sectionsRef.current[id];
      if (!target) return;

      e.preventDefault();

      const header = document.querySelector(
        headerSelector
      ) as HTMLElement | null;
      const offsetY = (header?.offsetHeight ?? 0) + 8;

      if (prefersReducedMotion || !gsapRef.current) {
        const top =
          target.getBoundingClientRect().top + window.scrollY - offsetY;
        window.scrollTo({ top, behavior: "smooth" });
        setActive(id);
        history.replaceState(null, "", id);
        return;
      }

      const gsap = gsapRef.current as any;
      const { default: ScrollToPlugin } = await import("gsap/ScrollToPlugin");
      gsap.registerPlugin(ScrollToPlugin);

      gsap.to(window, {
        duration: 0.8,
        ease: "power2.out",
        scrollTo: { y: target, offsetY, autoKill: true },
        onComplete: () => {
          setActive(id);
          history.replaceState(null, "", id);
        },
      });
    },
    [headerSelector, prefersReducedMotion]
  );

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
