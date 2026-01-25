import Image from 'next/image';
import Link from 'next/link';

const FooterLogo = () => {
  return (
    <Link href="/">
      <div className="relative w-[60px] h-[71px]">
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
