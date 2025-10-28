import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="relative">
        <Image
          src="/images/logo2.png"
          alt="logo"
          width={60}
          height={60}
          className="object-contain"
        />
      </div>
    </Link>
  );
};

export default Logo;
