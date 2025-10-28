"use client";

import { useEffect, useRef, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Logo from "../Logo";
import NavItems from "./NavItems";
import ButtonAll from "../ButtonAll";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let st: any;

    (async () => {
      const el = navRef.current;
      if (!el) return;

      el.classList.add(
        "transition-[backdrop-filter,background-color]",
        "duration-300"
      );

      const { default: gsap } = await import("gsap");
      const { default: ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      st = ScrollTrigger.create({
        trigger: document.documentElement,
        start: "top top",
        end: "+=150",
        onUpdate(self) {
          if (self.progress > 0) el.classList.add("is-scrolled");
          else el.classList.remove("is-scrolled");
        },
      });
    })();

    return () => {
      st?.kill?.();
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/50 px-4 sm:px-36 md:px-5 py-5 backdrop-blur-0 bg-black/0"
    >
      <div className="custom-container flex items-center justify-between">
        <Logo />

        <div className="hidden lg:block">
          <NavItems />
        </div>

        <div className="hidden lg:block">
          <ButtonAll
            btnText="book consultation now"
            href="/#contact_us"
            className="text-sm py-5"
          />
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

                <ButtonAll
                  btnText="book consultation now"
                  className="w-fit text-sm font-normal py-6!"
                  href="/#contact_us"
                />
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
