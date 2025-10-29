"use client";

import gsap from "gsap";
import { MouseEvent } from "react";

export const smoothScrollTo = (id: string, headerSelector = "nav") => {
  if (!id?.startsWith("#")) return;

  const target = document.querySelector(id) as HTMLElement | null;
  if (!target) return;

  const cssVar = getComputedStyle(document.documentElement)
    .getPropertyValue("--nav-height")
    .trim();

  const header = document.querySelector(headerSelector) as HTMLElement | null;

  const offsetY =
    (cssVar ? parseInt(cssVar, 10) : header?.offsetHeight ?? 0) + 8;

  gsap.to(window, {
    duration: 0.8,
    ease: "power2.out",
    scrollTo: { y: target, offsetY, autoKill: true },
    onComplete: () => {
      history.replaceState(null, "", id);
    },
  });
};

export const handleSmoothLink = (
  e: MouseEvent<HTMLElement>,
  href: string,
  headerSelector = "nav"
) => {
  if (href?.startsWith("#")) {
    e.preventDefault();
    smoothScrollTo(href, headerSelector);
  }
};
