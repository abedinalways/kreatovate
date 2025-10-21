"use client";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Link from "next/link";
import { MouseEvent, useEffect, useState } from "react";

type Props = {
  variant?: "desktop" | "mobile";
  headerSelector?: string;
};

gsap.registerPlugin(ScrollToPlugin);

const NavItems = ({ variant = "desktop", headerSelector = "nav" }: Props) => {
  const [active, setActive] = useState("#home");

  const items = [
    { id: "#home", label: "home" },
    { id: "#about_us", label: "about us" },
    { id: "#our_solutions", label: "our solutions" },
    { id: "#testimonial", label: "testimonial" },
    { id: "#contact_us", label: "contact us" },
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    if (!id.startsWith("#")) return;

    const target = document.querySelector(id) as HTMLElement | null;

    if (!target) return;

    e.preventDefault();

    const header = document.querySelector(headerSelector) as HTMLElement | null;

    const offsetY = (header?.offsetHeight ?? 0) + 8;

    gsap.to(window, {
      duration: 0.8,
      ease: "power2.out",
      scrollTo: { y: target, offsetY, autoKill: true },
      onComplete: () => {
        history.replaceState(null, "", id);
        setActive(id);
      },
    });
  };

  useEffect(() => {
    const applyFromHash = () => setActive(window.location.hash || "#home");

    applyFromHash();

    window.addEventListener("hashchange", applyFromHash);

    return () => window.removeEventListener("hashchange", applyFromHash);
  }, []);

  if (variant === "mobile") {
    return (
      <div>
        <ul className="flex flex-col gap-1 capitalize">
          {items.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <Link
                  href={item.id}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={[
                    "block w-full rounded-lg px-4 py-3 transition-colors whitespace-nowrap",
                    isActive
                      ? "bg-[#ED1C2433] font-semibold"
                      : "hover:bg-[#ED1C2433]/40",
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
        {items?.map((item) => (
          <li
            key={item.id}
            className={`px-4 lg:px-2 py-2 rounded-full transition-all duration-200 ${
              active === item.id
                ? "bg-[#ED1C2433] font-semibold"
                : "hover:bg-[#ED1C2433]/40"
            }`}
          >
            <Link
              href={`${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className="whitespace-nowrap"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavItems;
