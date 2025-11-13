"use client";

import { useEffect, useRef } from "react";
import TrustCard from "./TrustCard";
import gsap from "gsap";

const TrustedGrowth = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 🟣 Title Section Animation (fade + slide-up)
      gsap.from(".trusted-title > *", {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      });

      // 🟢 Cards Continuous Floating Motion
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
    },
    {
      id: 2,
      title: "5TH INDUSTRIAL REVOLUTION",
      description:
        "The next chapter beyond automation and connectivity, this book shows how human values, advanced ethics and collaboration with intelligent.",
      image: "/images/books/book2.png",
    },
    {
      id: 3,
      title: "CASH FLOW LEGACY",
      description:
        "This book guides entrepreneurs, investors and families to build financial systems that outlast them – not just for profit today...",
      image: "/images/books/book3.png",
    },
    {
      id: 4,
      title: "OWN THE GRID",
      description:
        "A powerful read for those ready to shift how power, energy and infrastructure are owned and run. This book explores how...",
      image: "/images/books/book4.png",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="custom-container pt-24 flex flex-col gap-12 px-4 py-12 font-jakarta"
    >
      <div className="space-y-2 trusted-title ">
        <p className="uppercase text-color-gradient font-roboto font-normal text-xs">
          [ our books ]
        </p>
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-5 lg:items-end justify-between">
          <h1 className="font-jakarta text-2xl lg:text-5xl font-bold">
            Trusted growth plans:
            <br /> data-driven, scalable.
          </h1>
          <p className="text-jakarta font-medium text-base lg:text-lg">
            Smart, simple ways to turn your ideas into real growth - <br />{" "}
            using data, hands-on strategy, and AI where it helps most.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {booksData?.map((book) => (
          <div key={book.id} className="trust-card w-full">
            <TrustCard
              title={book.title}
              description={book.description}
              image={book.image}
            />
          </div>
        ))}
        {/* <div className="trust-card w-full">
          <TrustCard />
        </div>
        <div className="trust-card w-full">
          <TrustCard />
        </div>
        <div className="trust-card w-full">
          <TrustCard />
        </div> */}
      </div>
    </div>
  );
};

export default TrustedGrowth;
