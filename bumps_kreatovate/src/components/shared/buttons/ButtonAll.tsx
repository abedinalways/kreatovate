import React from 'react';

import { cn } from '@/lib/utils'; // ✅ utility for conditional class merging
import { Button } from '@/components/ui/button';

type ButtonAllProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  btnText?: string;
  variant?: 'default' | 'outline' | 'ghost' | 'secondary' | 'destructive';
  size?: 'sm' | 'default' | 'lg' | 'icon';
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

const ButtonAll: React.FC<ButtonAllProps> = ({
  btnText = 'Click Me',
  variant = 'default',
  size = 'default',
  className,
  leftIcon,
  rightIcon,
  onClick,
  disabled = false,
  children,
}) => {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      size={size}
      disabled={disabled}
      className={cn(
        'flex items-center justify-center gap-2 px-6 py-3.5 capitalize text-lg lg:text-sm font-medium leading-8 h-10 rounded-xl transition-all cursor-pointer duration-300',
        'btn-gradient hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,0,255,0.2)]',
        className
      )}
    >
      {leftIcon && <span className="flex items-center">{leftIcon}</span>}
      {children ?? btnText}
      {rightIcon && <span className="flex items-center">{rightIcon}</span>}
    </Button>
  );
};

export default ButtonAll;
