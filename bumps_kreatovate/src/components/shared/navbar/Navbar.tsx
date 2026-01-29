'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import NavItems from './NavItems';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import ButtonOne from '../buttons/ButtonOne';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useState } from 'react';
import Link from 'next/link';
import Logo from '../logo/Logo';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 left-0 w-full py-5 px-4 sm:px-36 md:px-5 z-50 border-b bg-[rgba(0,0,0,0.40)] border-white/30 backdrop-blur-xs font-[roboto]">
      <div className="custom-container flex  items-center justify-evenly gap-4 w-full">
        <div className=' '>
          <Logo />
        </div>
        <div className="hidden lg:flex justify-center w-full mx-auto">
          <NavItems />
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link href="/contact-us">
            <button className="btnOne-bg-gradient shape-squircle rounded-[32px] p-[1.5px] ">
              <button className="w-[142px] shape-squircle h-[42px] bg-black cursor-pointer rounded-[32px]">
                <span className="text-gradient">Contact Us</span>
              </button>
            </button>
          </Link>
        </div>

        {/* Mobile menu */}
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

                {/* Mobile CTA */}
                <div className="mt-4 ">
                  <Link href="/contact-us">
                    <button className="btnOne-bg-gradient w-full  rounded-[12px] p-px">
                      <button className="w-full h-[52px] rounded-[12px] bg-black cursor-pointer ">
                        <span className="text-gradient text-[18px]">
                          Contact Us
                        </span>
                      </button>
                    </button>
                  </Link>
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
