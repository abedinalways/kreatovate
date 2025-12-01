// "use client";

// import Script from "next/script";
// import { useEffect, useState } from "react";

// export default function BumpsaleButton({
//   productId = "DqnAuwLrNJZ3161s219qxft1",
//   text = "Buy Now at _PRICE_",
// }) {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   return (
//     <>
//       <Script
//         src="https://widgets.bumpsale.co/button.js"
//         strategy="afterInteractive"
//         onLoad={() => {
//           console.log("Bumpsale widget script loaded");
//         }}
//       />

//       {mounted && (
//         <a
//           data-bumpsale="DqnAuwLrNJZ3161s219qxft1"
//           data-bumpsale-text="Buy Now at _PRICE_"
//         >
//           Buy Now
//         </a>
//       )}
//     </>
//   );
// }

// BumpsaleButton.tsx
"use client";

import { useEffect } from "react";
import { Button } from "./ui/button";

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
        data-bumpsale="DqnAuwLrNJZ3161s219qxft1"
        data-bumpsale-text="Buy Now at _PRICE_"
        onClick={(e) => {
          console.log("🖱️ Button clicked");
          console.log("Button element:", e.currentTarget);
        }}
      ></a>
    </div>
  );
}
