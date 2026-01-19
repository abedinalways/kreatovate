// components/shared/navbar/Navbar.tsx
"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import Logo from "../logo/Logo";
import NavItems from "./NavItems";
import ButtonOne from "../buttons/ButtonOne";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!navRef.current) return;

    const el = navRef.current;

    // set dynamic navbar height as a CSS variable for offset
    const updateNavHeight = () =>
      document.documentElement.style.setProperty(
        "--nav-height",
        `${el.offsetHeight}px`
      );

    updateNavHeight();
    window.addEventListener("resize", updateNavHeight);

    // blur + bg on scroll
    el.style.willChange = "backdrop-filter, background-color";
    el.style.backdropFilter = "blur(0px)";
    el.style.backgroundColor = "rgba(0,0,0,0)";

    const tween = gsap.fromTo(
      el,
      { backdropFilter: "blur(0px)", backgroundColor: "rgba(0,0,0,0)" },
      {
        backdropFilter: "blur(16px)",
        backgroundColor: "rgba(0,0,0,0.40)",
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "+=150",
          scrub: true,
        },
      }
    );

   

    return () => {
      window.removeEventListener("resize", updateNavHeight);
      tween?.scrollTrigger?.kill();
      tween?.kill();
    };
  }, []);

   const scrollToTarget = () => {
     document.getElementById('contact_us')?.scrollIntoView({
       behavior: 'smooth',
       block: 'start',
     });
   };

  return (
    <nav
      ref={navRef}
      className="fixed inset-x-0 top-0 left-0 w-full py-5 px-4 sm:px-36 md:px-5 z-50 border-b border-white/30"
    >
      <div className="custom-container flex flex-row items-center justify-between">
        <Logo />

        <div className="hidden lg:block">
          <NavItems />
        </div>

        <div className="hidden lg:block">
          <button
            className="btnOne-bg-gradient  rounded-[12px] p-px"
            onClick={scrollToTarget}
          >
            <button className="w-[121px] h-[42px] rounded-[12px] bg-black cursor-pointer ">
              <span className="text-gradient">Contact Us</span>
            </button>
          </button>
        </div>

        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon-lg" aria-label="Open menu">
                <Menu className="text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-white/20 backdrop-blur-2xl border-0">
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
                <div className="mt-2">
                  {/* Mobile menu */}
                  <NavItems variant="mobile" />
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
