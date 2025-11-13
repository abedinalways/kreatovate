"use client";
import { useState, useEffect } from "react";

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<"mobile" | "tablet" | "desktop">(
    "desktop"
  );

  useEffect(() => {
    const calc = () => {
      if (window.innerWidth < 480) return setBreakpoint("mobile");
      if (window.innerWidth < 768) return setBreakpoint("tablet");
      return setBreakpoint("desktop");
    };

    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  return breakpoint;
};
