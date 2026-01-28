import Image from 'next/image';
import Link from 'next/link';

const FooterLogo = () => {
  return (
    <Link href="/">
      <div className="relative ">
        <Image
          src="/images/Footer.png"
          alt="logo"
          width={251}
          height={60}
          className=""
        />
      </div>
    </Link>
  );
};

export default FooterLogo;
