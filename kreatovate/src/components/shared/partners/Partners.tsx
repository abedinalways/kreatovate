'use client';
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from '@/components/ui/shadcn-io/marquee';
import Image from 'next/image';

const logos = [
  '/images/partners/startup-slang.png',
  '/images/partners/vifiber.png',
  '/images/partners/cets.png',
  '/images/partners/zeitgeist.png',
  '/images/partners/bitmain.png',
];

const Partners = () => (
  <section className="bg-[#0b0b0b] py-12 text-center text-white font-jakarta">
    <h2 className="text-3xl md:text-5xl font-bold mb-8">
      Our Trusted <span className="text-gradient">Partners & Vendors</span>
    </h2>

    <div className="flex w-full items-center justify-center">
      <Marquee className="">
        <MarqueeFade side="left" />
        <MarqueeFade side="right" />

        <MarqueeContent speed={40}>
          {logos.map((src, index) => (
            <MarqueeItem
              key={index}
              className="mx-8 flex items-center justify-center"
            >
              <Image
                src={src}
                alt={`Partner ${index + 1}`}
                width={150}
                height={80}
                className="object-contain  transition duration-300"
              />
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>
    </div>
  </section>
);

export default Partners;
