"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type ButtonAllProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  btnText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
  className?: string;
  children?: React.ReactNode;
};

const ButtonAll: React.FC<ButtonAllProps> = ({
  btnText,
  leftIcon,
  rightIcon,
  loading = false,
  className,
  children,
  disabled,
  ...rest
}) => {
  return (
    <Button
      disabled={disabled || loading}
      className={cn("inline-flex items-center justify-center gap-2", className)}
      {...rest}
    >
      {loading ? (
        <span>Submitting...</span>
      ) : (
        <>
          {leftIcon}
          <span>{children ?? btnText}</span>
          {rightIcon}
        </>
      )}
    </Button>
  );
};

export default ButtonAll;
