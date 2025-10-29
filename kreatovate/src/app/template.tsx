"use client";

import gsap from "gsap";
import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const root = document.getElementById("page-root");
    if (!root) return;
    gsap.fromTo(
      root,
      { opacity: 0 },
      { opacity: 1, duration: 0.45, ease: "power2.out", clearProps: "opacity" }
    );
  }, [pathname]);

  return <>{children}</>;
}
