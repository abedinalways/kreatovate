"use client";

import { useEffect, useRef } from "react";
import TrustCard from "./TrustCard";
import gsap from "gsap";
import BumpsaleButton from "@/components/BumpsaleButton";
import SiteBigBadge from "@/components/shared/site-big-badge/SiteBigBadge";
import Image from "next/image";

const TrustedGrowth = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".trusted-title > *", {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      });

      const cards = gsap.utils.toArray<HTMLElement>(".trust-card");

      cards.forEach((card, i) => {
        gsap.to(card, {
          y: 15,
          duration: 3 + i * 0.3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.2,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const booksData = [
    {
      id: 1,
      title: "4TH INDUSTRIAL REVOLUTION",
      description:
        "This book takes you into the heart of the digital transformation era: where artificial intelligence, the Internet of Things, big data and connectivity...",
      image: "/images/books/book1.png",
      bumpsaleId: "uPpDJDrVPbXPq28McoDrNFJf",
      price: "$2",
    },
    {
      id: 2,
      title: "5TH INDUSTRIAL REVOLUTION",
      description:
        "The next chapter beyond automation and connectivity, this book shows how human values, advanced ethics and collaboration with intelligent.",
      image: "/images/books/book2.png",
      bumpsaleId: "uPpDJDrVPbXPq28McoDrNFJf",
    },
    {
      id: 3,
      title: "CASH FLOW LEGACY",
      description:
        "This book guides entrepreneurs, investors and families to build financial systems that outlast them – not just for profit today...",
      image: "/images/books/book3.png",
      bumpsaleId: "uPpDJDrVPbXPq28McoDrNFJf",
    },
    {
      id: 4,
      title: "OWN THE GRID",
      description:
        "A powerful read for those ready to shift how power, energy and infrastructure are owned and run. This book explores how...",
      image: "/images/books/book4.png",
      bumpsaleId: "uPpDJDrVPbXPq28McoDrNFJf",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="custom-container pt-24 flex flex-col  px-4 py-12 font-jakarta "
      id="our_books"
    >
      <div className="space-y-2 trusted-title ">
        <div className="w-full flex justify-center items-center mb-10">
          <SiteBigBadge title="our books" />
        </div>
        {/* <p className="uppercase text-color-gradient font-roboto font-normal text-xs">
          [ our books ]
        </p> */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between">
          <h1 className="font-jakarta text-xl md:text-5xl font-bold">
            Trusted growth plans:
            <br /> data-driven, scalable.
          </h1>
          <p className="text-jakarta font-medium text-center md:text-start text-xs lg:text-lg">
            Smart, simple ways to turn your ideas into real growth - <br />{" "}
            using data, hands-on strategy, and AI where it helps most.
          </p>
        </div>
      </div>

      <div className="">
       
        {/* <Image width={1236} height={924} alt='' src='/images/books/img.png' className="mx-auto" /> */}
      </div>
      <div className="mb-6">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 ">
          {booksData.map((book) => (
            <TrustCard key={book.id} description={book.description} image={book.image}/>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center">
        <BumpsaleButton />
      </div>
    </div>
  );
};

export default TrustedGrowth;
