"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    BumpSale?: {
      init: () => void;
    };
  }
}

export default function BumpSaleLoader() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgets.bumpsale.co/button.js";
    script.async = true;

    script.onload = () => {
      console.log("BumpSale loaded:", !!window.BumpSale);
      window.BumpSale?.init?.();
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
