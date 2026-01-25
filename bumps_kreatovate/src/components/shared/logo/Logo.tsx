import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="relative ">
        <Image
          src="/images/logowhitetransparent88.png"
          alt="logo"
          fill
          className="object-contain"
        />
      </div>
    </Link>
  );
};

export default Logo;
