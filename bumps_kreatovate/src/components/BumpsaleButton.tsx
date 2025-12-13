"use client";

import { useEffect } from "react";

export default function BumpsaleButton() {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (document.querySelector('script[src*="bumpsale.co"]')) {
        console.log("⚠️ Script already exists");
        return;
      }

      const script = document.createElement("script");
      script.src = "https://widgets.bumpsale.co/button.js";
      script.async = false;
      script.defer = true;

      script.onload = () => {
        const event = new Event("DOMContentLoaded");
        document.dispatchEvent(event);
      };

      script.onerror = (e) => {
        console.error("❌ Script error:", e);
      };

      document.head.appendChild(script); // Try appending to head instead of body
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <a
        href="#"
        className="bumpsale_button"
        data-bumpsale="uPpDJDrVPbXPq28McoDrNFJf"
        data-bumpsale-text="Buy Now at _PRICE_"
        onClick={(e) => {
          console.log("🖱️ Button clicked");
          console.log("Button element:", e.currentTarget);
        }}
      ></a>
    </div>
  );
}
