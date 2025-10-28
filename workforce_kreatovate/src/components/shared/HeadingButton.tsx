import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils"; // optional, for merging classes safely

type HeadingButtonProps = {
  btnText?: string;
  className?: string;
};

const HeadingButton: React.FC<HeadingButtonProps> = ({
  btnText,
  className,
}) => {
  return (
    <Button
      variant="default"
      className={cn(
        // Base layout
        "px-10 py-2 text-base font-medium text-white capitalize rounded-full border border-white/10",
        // Much lighter translucent gradient
        "bg-[linear-gradient(90deg,rgba(90,60,255,0.35)_0%,rgba(255,80,80,0.15)_100%)]",
        // Glassy blur effect
        "backdrop-blur-lg",
        // Soft glow and smooth transition
        "shadow-[0_0_8px_rgba(90,60,255,0.2)] transition-all duration-300 hover:scale-[1.03]",
        className
      )}
    >
      {btnText}
    </Button>
  );
};

export default HeadingButton;
