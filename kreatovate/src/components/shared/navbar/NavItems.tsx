"use client";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import TransitionLink from "../TransitionLink";

type Props = {
  variant?: "desktop" | "mobile";
  headerSelector?: string;
};

gsap.registerPlugin(ScrollToPlugin);

const normalizeHash = (id: string) => {
  if (!id) return id;
  const idx = id.indexOf("#");
  return idx >= 0 ? id.slice(idx) : id;
};

const NavItems = ({ variant = "desktop" }: Props) => {
  const [activeHash, setActiveHash] = useState<string>("#home");
  const pathname = usePathname();

  // Am I currently on the homepage?
  const isHome = pathname === "/" || pathname === ""; // add more logic if you use locales/basePath

  // Helper: turn a section hash into either "#hash" (on home) or "/#hash" (from any other page)
  const toHomeSection = (hash: string) => (isHome ? hash : `/${hash}`);

  // Build items once per route change — no need to hardcode /contact-us anymore
  const items = [
    { id: isHome ? "#home" : "/", label: "home" }, // home anchor vs go to /
    { id: toHomeSection("#about_us"), label: "about us" },
    { id: toHomeSection("#our_solutions"), label: "our solutions" },
    { id: toHomeSection("#testimonial"), label: "testimonial" },
    { id: "/contact-us", label: "contact us" }, // normal route
  ];

  // Instantly mark active on click; TransitionLink handles scroll/route animation
  const handleInstantActive = (id: string) => {
    if (id.startsWith("#")) setActiveHash(id);
    else setActiveHash("");
  };

  useEffect(() => {
    const applyFromHash = () => setActiveHash(window.location.hash || "#home");
    applyFromHash();
    window.addEventListener("hashchange", applyFromHash);
    return () => window.removeEventListener("hashchange", applyFromHash);
  }, []);

  const isItemActive = (itemId: string) => {
    const isHash = itemId.startsWith("#") || itemId.includes("/#");
    if (isHash) return normalizeHash(activeHash) === normalizeHash(itemId);
    return itemId === pathname;
  };

  const DesktopList = (
    <ul className="flex items-center gap-7 lg:gap-3 capitalize bg-white/10 p-1 rounded-full">
      {items.map((item) => {
        const active = isItemActive(item.id);
        return (
          <li
            key={item.id}
            className={`px-4 lg:px-2 py-2 rounded-full transition-all duration-200 ${
              active ? "bg-[#ED1C24] font-semibold" : "hover:bg-[#ED1C24]/40"
            }`}
          >
            <TransitionLink
              href={item.id}
              onClick={() => handleInstantActive(item.id)}
              className="whitespace-nowrap text-white py-2"
            >
              {item.label}
            </TransitionLink>
          </li>
        );
      })}
    </ul>
  );

  if (variant === "mobile") {
    return (
      <ul className="flex flex-col gap-1 capitalize">
        {items.map((item) => {
          const active = isItemActive(item.id);
          return (
            <li key={item.id}>
              <TransitionLink
                href={item.id}
                onClick={() => handleInstantActive(item.id)}
                className={[
                  "block w-full rounded-lg px-4 py-3 transition-colors whitespace-nowrap text-white",
                  active
                    ? "bg-[#ED1C24] font-semibold"
                    : "hover:bg-[#ED1C24]/40",
                ].join(" ")}
              >
                {item.label}
              </TransitionLink>
            </li>
          );
        })}
      </ul>
    );
  }

  return <div>{DesktopList}</div>;
};

export default NavItems;
