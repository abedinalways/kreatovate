"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "../logo/Logo";
import NavItems from "./NavItems";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import ButtonOne from "../buttons/ButtonOne";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!navRef.current) return;

    const el = navRef.current;
    el.style.willChange = "backdrop-filter, background-color";
    el.style.backdropFilter = "blur(0px)";
    el.style.backgroundColor = "rgba(0,0,0,0)";

    const tween = gsap.fromTo(
      el,
      {
        backdropFilter: "blur(0px)",
        backgroundColor: "rgba(0,0,0,0)",
      },
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
      tween?.scrollTrigger?.kill();
      tween?.kill();
    };
  }, []);
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
          <ButtonOne btnText="contact us" bgColor="#0f1016" />
        </div>

        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon-lg" aria-label="Open menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-white/10 backdrop-blur-2xl border-0">
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>

                <div className="mt-2">
                  <NavItems variant="mobile" />
                </div>

                {/* <ButtonOne btnText="contact us" /> */}
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
