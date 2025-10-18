import Logo from "../Logo";
import NavItems from "./NavItems";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 w-full px-36 z-50 border-b border-white/50">
      <div className="flex flex-row items-center justify-between">
        <Logo />

        <NavItems />

        <Button
          variant="default"
          className="px-6 py-3.5 capitalize btn-gradient text-lg font-medium leading-8 h-10 rounded-xl"
        >
          book consultation now
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
