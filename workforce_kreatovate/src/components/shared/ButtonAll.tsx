import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

type ButtonAllProps = {
  btnText?: string;
  variant?: "default" | "outline" | "ghost" | "secondary" | "destructive";
  size?: "sm" | "default" | "lg" | "icon";
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
  href?: string;
  target?: "_blank" | "_self";
};

const ButtonAll: React.FC<ButtonAllProps> = ({
  btnText = "Click Me",
  variant = "default",
  size = "default",
  className,
  leftIcon,
  rightIcon,
  onClick,
  disabled = false,
  children,
  href,
  target = "_self",
}) => {
  const content = (
    <>
      {leftIcon && <span className="flex items-center">{leftIcon}</span>}
      {children ?? btnText}
      {rightIcon && <span className="flex items-center">{rightIcon}</span>}
    </>
  );

  const commonClasses = cn(
    "inline-flex items-center justify-center gap-2 px-6 py-3.5 text-white text-[18px] font-[Plus_Jakarta_Sans] font-medium leading-[180%] rounded-[12px] border border-white text-center capitalize",
    "btn-gradient",
    "hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,0,255,0.2)] transition-all duration-300 cursor-pointer",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    className
  );

  if (href) {
    return (
      <Button
        asChild
        variant={variant}
        size={size}
        className={commonClasses}
        disabled={disabled}
      >
        <Link
          href={disabled ? "#" : href}
          target={target}
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : 0}
          className={cn(disabled && "pointer-events-none opacity-60")}
          prefetch={false}
        >
          {content}
        </Link>
      </Button>
    );
  }

  return (
    <Button
      onClick={onClick}
      variant={variant}
      size={size}
      disabled={disabled}
      className={commonClasses}
    >
      {content}
    </Button>
  );
};

export default ButtonAll;
