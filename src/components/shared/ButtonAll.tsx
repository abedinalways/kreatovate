import Link from "next/link";
import { Button } from "../ui/button";

type Btn = {
  btnText?: string;
  href?: string;
};

const ButtonAll = ({ btnText, href }: Btn) => {
  if (href) {
    return (
      <Button
        asChild
        variant="default"
        className="px-6 py-3.5 capitalize btn-gradient text-lg lg:text-sm font-medium leading-8 h-10 rounded-xl cursor-pointer"
      >
        <Link href={href} className="block w-full text-center">
          {btnText}
        </Link>
      </Button>
    );
  }
  return (
    <Button
      type="button"
      variant="default"
      className="px-6 py-3.5 capitalize btn-gradient text-lg lg:text-sm font-medium leading-8 h-10 rounded-xl cursor-pointer"
    >
      {btnText}
    </Button>
  );
};

export default ButtonAll;
