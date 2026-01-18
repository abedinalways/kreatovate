import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="relative w-[180px] sm:w-[251px] md:w-[170px] h-[60px]">
        <Image
          src="/images/logowhitetransparent.png"
          alt="logo"
          fill
          className="object-contain"
        />
      </div>
    </Link>
  );
};

export default Logo;
