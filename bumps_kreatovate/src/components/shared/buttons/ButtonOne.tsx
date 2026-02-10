"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

interface BtnProps {
  btnText?: string;
  width?: string;
  padding?: string;
  fontSize?: string;
  href?: string;
  bgColor?: string;
  bumpsaleId?: string;
  price?: string | number;
}

const ButtonOne = ({
  btnText = "Buy Now",
  width = "w-full",
  href = "#",
  padding = "py-3",
  fontSize = "text-md",
  bgColor,

  // bumpsaleId,
  // price,
}: BtnProps) => {
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     window.BumpSale?.init();
  //   }
  // }, [bumpsaleId, price]);
  // const bumpsaleText = price ? `Buy Now at ${price}` : btnText;

  // if (bumpsaleId) {
  //   return (
  //     <button
  //       type="button"
  //       className={`${width} bumpsale_button rounded-[10px] bg-black hover:bg-black/90 text-white ${padding} ${fontSize} font-medium text-center block`}
  //       data-bumpsale={bumpsaleId}
  //       data-bumpsale-text={bumpsaleText}
  //       onClick={() => {
  //         window.BumpSale?.init?.();
  //       }}
  //     >
  //       {btnText}
  //     </button>
  //   );
  // }

  return (
    <div className="p-px rounded-[10px] btnOne-bg-gradient cursor-pointer">
      <Button
        asChild
        variant="ghost"
        className={`${width} rounded-[10px] bg-black hover:bg-black/90 text-white ${padding} ${fontSize} font-medium`}
      >
        <Link
          href={href}
          className="block w-full text-center capitalize"
          style={bgColor ? { backgroundColor: bgColor } : undefined}
        >
          {btnText}
        </Link>
      </Button>
    </div>
  );
};

export default ButtonOne;
