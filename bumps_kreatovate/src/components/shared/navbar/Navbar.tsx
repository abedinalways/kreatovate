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

const Navbar = () => {
  return (
    <nav
      //   ref={navRef}
      className="fixed inset-x-0 top-0 left-0 w-full py-5 px-4 sm:px-36 md:px-5 z-1500 border-b border-white/50 "
    >
      <div className="custom-container flex flex-row items-center justify-between">
        <Logo />

        <div className="hidden lg:block">
          <NavItems />
        </div>

        <div className="hidden lg:block">
          <ButtonOne btnText="contact us" />
        </div>

        <div className="lg:hidden">
          <Sheet
          //   open={open} onOpenChange={setOpen}
          >
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

                <Button
                  variant="default"
                  className="px-6 py-3.5 capitalize btn-gradient text-sm font-medium leading-8 h-10 rounded-xl cursor-pointer"
                >
                  book consultation now
                </Button>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
