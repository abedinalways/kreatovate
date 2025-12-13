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
}

const BuyNow = ({
    btnText = "Buy Now",
    width = "w-full",
    href = "#",
    padding = "py-3",
    fontSize = "text-md",
}: BtnProps) => {

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
                >
                    {btnText}
                </Link>
            </Button>
        </div>
    );
};

export default BuyNow;
