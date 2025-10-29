import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { ComponentProps, ReactNode } from "react";

type BaseButtonProps = ComponentProps<typeof Button>;

type ButtonAllProps = BaseButtonProps & {
  /** Optional text label. Ignored if you pass children. */
  btnText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

const ButtonAll = forwardRef<HTMLButtonElement, ButtonAllProps>(
  (
    {
      btnText = "Click Me",
      leftIcon,
      rightIcon,
      className,
      children, // ✅ now supported
      ...rest // ✅ includes type="submit", onClick, disabled, variant, size, etc.
    },
    ref
  ) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "flex items-center justify-center gap-2 px-6 py-3.5 capitalize text-lg lg:text-sm font-medium leading-8 h-10 rounded-xl transition-all duration-300 cursor-pointer",
          "btn-gradient hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,0,255,0.2)]",
          className
        )}
        {...rest}
      >
        {leftIcon && <span className="flex items-center">{leftIcon}</span>}
        {children ?? btnText}
        {rightIcon && <span className="flex items-center">{rightIcon}</span>}
      </Button>
    );
  }
);

ButtonAll.displayName = "ButtonAll";
export default ButtonAll;
