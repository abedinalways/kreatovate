"use client";

import { useEffect } from "react";

export default function BumpsaleButton() {
  useEffect(() => {
   
    const loadBumpsale = () => {
      if (!document.querySelector('script[src*="bumpsale.co"]')) {
        const script = document.createElement("script");
        script.src = "https://widgets.bumpsale.co/button.js";
        script.async = true;
      
        script.onload = () => renderBumpsale();
        document.head.appendChild(script);
      } else {
        
        renderBumpsale();
      }
    };

  
    const renderBumpsale = () => {
      // @ts-ignore
      if (window.Bumpsale && typeof window.Bumpsale.init === "function") {
        // @ts-ignore
        window.Bumpsale.init();
      } else {
        
        document.dispatchEvent(new Event("DOMContentLoaded"));
      }
    };

   
    const timeout = setTimeout(loadBumpsale, 300);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="py-4">
    
      <a
        href="#"
        className="bumpsale_button"
        data-bumpsale="Zu7hZQCWBFmkEXCVaHbScvgV"
        data-bumpsale-text="Buy Bundle Now at _PRICE_"
        style={{
          display: "inline-block",
          padding: "17px 58px",
          font: "normal 14px Helvetica, Arial, sans-serif",
          textAlign: "center",
          textDecoration: "none",
          color: "#ffffff",
          borderRadius: "10px",
          border: "1px solid #FF0000",
          background: "#000000",
        }}
      >
        Buy Now...
      </a>
    </div>
  );
}