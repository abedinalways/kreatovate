"use client";

import { handleSmoothLink } from "@/utils/smoothScroll";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  href: string;
  className?: string;
  headerSelector?: string;
  children: ReactNode;
}

const SmoothLink = ({
  href,
  className,
  headerSelector = "nav",
  children,
}: Props) => {
  return (
    <Link
      href={href}
      onClick={(e) => handleSmoothLink(e, href, headerSelector)}
      className={className}
    >
      {children}
    </Link>
  );
};

export default SmoothLink;
