import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { FC } from "react";

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

const ButtonAllTwo: FC<ButtonAllProps> = ({
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

  if (href) {
    return (
      <div className="business-card  relative bg-gradient-to-r from-[#E21717] to-[#3700FF] p-px rounded-lg">
        <Button
          asChild
          variant={variant}
          size={size}
          className="rounded-lg px-6 py-6 pointer-events-none"
          disabled={disabled}
        >
          <Link
            href={disabled ? "#" : href}
            target={target}
            rel={target === "_blank" ? "noopener noreferrer" : undefined}
            aria-disabled={disabled}
            tabIndex={disabled ? -1 : 0}
            className={cn(disabled && "pointer-events-none opacity-60")}
            prefetch={false}
          >
            {content}
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="business-card relative bg-gradient-to-r from-[#E21717] to-[#3700FF] p-px rounded-lg">
      <Button
        onClick={onClick}
        variant={variant}
        size={size}
        disabled={disabled}
        className="rounded-lg px-6 py-6"
      >
        <span
          className={cn(
            "bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent",
            disabled && "pointer-events-none opacity-60"
          )}
        >
          {content}
        </span>
      </Button>
    </div>
  );
};

export default ButtonAllTwo;
