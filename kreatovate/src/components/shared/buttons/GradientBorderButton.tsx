import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export interface BtnProps {
  btnText: string;
}

const GradientBorderButton = ({ btnText }: BtnProps) => {
  return (
    <div className="p-[1px] rounded-[10px] bg-gradient-to-r from-[#E93D3D] to-[#4E30FE] cursor-pointer">
      <Button
        asChild
        variant="ghost"
        className="w-full rounded-[10px] bg-[#0B111F] hover:bg-[#0B111F] text-white hover:text-white px-4 py-6 text-lg font-medium"
      >
        <Link
          href={'/'}
          className="block w-full text-center text-lg font-medium leading-8"
        >
          {btnText}
        </Link>
      </Button>
    </div>
  );
};

export default GradientBorderButton;
