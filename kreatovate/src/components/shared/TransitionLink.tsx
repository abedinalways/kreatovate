"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import * as React from "react";

gsap.registerPlugin(ScrollToPlugin);

type Props = {
  href: string;
  className?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  headerSelector?: string;
};

export default function TransitionLink({
  href,
  className,
  children,
  onClick,
  target,
  rel,
}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const isNavigatingRef = React.useRef(false);

  const isExternal =
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;

    
    if (isExternal || target === "_blank") {
      return;
    }

    if (href.startsWith("#")) {
      e.preventDefault();
      const targetEl = document.querySelector(href);
      if (!targetEl) return;

      gsap.to(window, {
        duration: 0.6,
        ease: "power3.out",
        scrollTo: { y: targetEl, offsetY: 80, autoKill: true },
        onComplete: () => history.replaceState(null, "", href),
      });
      return;
    }

    if (href.startsWith("/")) {
      e.preventDefault();

      const targetPath = href.split("#")[0].replace(/\/+$/, "") || "/";
      const currentPath = (pathname || "/").replace(/\/+$/, "") || "/";
      if (targetPath === currentPath) return;

      if (isNavigatingRef.current) return;
      isNavigatingRef.current = true;

      const root = document.getElementById("page-root") || document.body;
      gsap.to(root, {
        opacity: 0,
        duration: 0.35,
        ease: "power2.inOut",
        onComplete: () => {
          router.push(href);
          isNavigatingRef.current = false;
        },
      });
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={className}
      target={target}   
      rel={target === "_blank" ? "noopener noreferrer" : rel} 
    >
      {children}
    </Link>
  );
}
