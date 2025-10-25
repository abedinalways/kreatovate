import React from 'react';

import { cn } from '@/lib/utils'; // optional, for merging classes safely
import { Button } from '@/components/ui/button';

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
        'px-7 py-0.5 capitalize btn-gradient text-xs leading-8 rounded-full heading-btn-bg',
        className
      )}
    >
      {btnText}
    </Button>
  );
};

export default HeadingButton;
