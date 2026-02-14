import Image from 'next/image';
import Link from 'next/link';

const FooterLogo = () => {
  return (
    <Link href="/">
      <div className="relative w-[180px] sm:w-[251px] md:w-[170px] h-[60px]">
        <Image src="/images/books/Footer.png" alt="logo" fill className="" />
      </div>
    </Link>
  );
};

export default FooterLogo;
