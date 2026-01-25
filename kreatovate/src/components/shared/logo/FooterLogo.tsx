import Image from 'next/image';
import Link from 'next/link';

const FooterLogo = () => {
  return (
    <Link href="/">
      <div className="relative w-[251px] h-[60px]">
        <Image
          src="/images/Footer000.png"
          alt="logo"
          fill
          className=""
        />
      </div>
    </Link>
  );
};

export default FooterLogo;
