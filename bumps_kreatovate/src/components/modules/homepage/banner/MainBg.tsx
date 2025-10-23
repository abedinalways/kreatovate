"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

const MainBg = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const decorations = [
    {
      src: "/images/vector.png",
      alt: "dot 1",
      width: 8,
      height: 8,
      top: "10%",
      left: "15%",
      z: 10,
    },
    {
      src: "/images/vector.png",
      alt: "dot 2",
      width: 4,
      height: 4,
      top: "20%",
      right: "25%",
      z: 10,
    },
    {
      src: "/images/vector.png",
      alt: "dot 3",
      width: 3,
      height: 3,
      bottom: "15%",
      left: "10%",
      z: 10,
    },
    {
      src: "/images/vector.png",
      alt: "dot 4",
      width: 5,
      height: 5,
      bottom: "20%",
      right: "15%",
      z: 10,
    },
    {
      src: "/images/vector.png",
      alt: "dot 5",
      width: 4,
      height: 4,
      top: "50%",
      left: "40%",
      z: 10,
    },
    {
      src: "/images/vector.png",
      alt: "dot 6",
      width: 2,
      height: 2,
      top: "30%",
      right: "35%",
      z: 10,
    },
    {
      src: "/images/vector.png",
      alt: "dot 7",
      width: 6,
      height: 6,
      bottom: "25%",
      left: "45%",
      z: 10,
    },
    {
      src: "/images/vector.png",
      alt: "dot 8",
      width: 1,
      height: 1,
      top: "70%",
      left: "60%",
      z: 10,
    },
    {
      src: "/images/vector.png",
      alt: "dot 9",
      width: 3,
      height: 3,
      top: "15%",
      right: "50%",
      z: 10,
    },
    {
      src: "/images/vector.png",
      alt: "dot 10",
      width: 5,
      height: 5,
      bottom: "10%",
      right: "30%",
      z: 10,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 🌠 Shooting Star Animation
      const stars = document.querySelectorAll(".line");
      stars.forEach((star, i) => {
        const shoot = () => {
          // direction alternates (left→right, right→left)
          const fromLeft = i % 2 === 0;
          const startX = fromLeft ? -200 : 200;
          const endX = fromLeft ? 600 : -600;
          const startY = fromLeft ? -100 : 100;

          // reset position before shooting
          gsap.set(star, {
            opacity: 0,
            x: startX,
            y: startY,
            rotate: fromLeft ? 20 : -20,
            scale: 0.5,
          });

          // actual shooting star animation
          gsap.to(star, {
            opacity: 1,
            x: endX,
            y: fromLeft ? 300 : -300,
            duration: 1.5,
            scale: 1,
            ease: "power4.out",
            onComplete: () => {
              gsap.to(star, {
                opacity: 0,
                duration: 0.5,
                ease: "power2.inOut",
              });
              // re-trigger after random interval (3–7s)
              gsap.delayedCall(gsap.utils.random(3, 7), shoot);
            },
          });
        };

        // start each at a random time
        gsap.delayedCall(gsap.utils.random(1, 4), shoot);
      });

      // ✨ Dot Twinkling Effect (tim-tim)
      gsap.to(".dot", {
        opacity: "random(0.2, 1)",
        duration: "random(0.8, 2)",
        repeat: -1,
        yoyo: true,
        stagger: {
          amount: 3,
          from: "random",
        },
        ease: "sine.inOut",
      });

      // 🌈 Gentle floating of ellipses
      gsap.to(".ellipse", {
        y: 20,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <div>
        <Image
          src="/images/banner.png"
          alt="banner image bg"
          fill
          className="object-cover z-0"
        />
      </div>

      <Image
        src="/images/line1.png"
        alt="line 1"
        width={180}
        height={180}
        className="absolute top-48 md:top-72 left-1 md:left-20 z-10 rotate-3 md:rotate-12 line"
      />

      <Image
        src="/images/line1.png"
        alt="line 1.1"
        width={80}
        height={80}
        className="absolute top-28 left-0 z-10 line"
      />

      <Image
        src="/images/line1.png"
        alt="line 1.2"
        width={80}
        height={80}
        className="absolute top-32 right-20 scale-x-[-1] md:scale-x-50 z-10 line"
      />

      <Image
        src="/images/line1.png"
        alt="line 2"
        width={180}
        height={180}
        className="absolute top-48 md:top-72 right-0 md:right-20 z-10 scale-x-[-1] -rotate-3 md:-rotate-12 line"
      />

      <Image
        src="/images/ellipse3.png"
        alt="small circle 1"
        width={30}
        height={30}
        className="absolute bottom-28 left-20 z-10 ellipse"
      />

      <Image
        src="/images/ellipse3.png"
        alt="small circle 2"
        width={30}
        height={30}
        className="absolute bottom-[104px] left-[85px] opacity-50 z-10 ellipse"
      />

      <Image
        src="/images/ellipse3.png"
        alt="small circle 3"
        width={30}
        height={30}
        className="absolute bottom-72 right-20 z-10 ellipse"
      />

      <Image
        src="/images/ellipse3.png"
        alt="small circle 4"
        width={30}
        height={30}
        className="absolute bottom-[280px] right-[85px] opacity-50 z-10 ellipse"
      />

      {decorations.map((item, index) => (
        <Image
          key={index}
          src={item.src}
          alt={item.alt}
          width={item.width}
          height={item.height}
          className="absolute dot"
          style={{
            top: item.top,
            bottom: item.bottom,
            left: item.left,
            right: item.right,
            zIndex: item.z,
          }}
        />
      ))}

      <div className="w-1/2 h-full">
        <Image
          src="/images/ellipse2.png"
          alt="banner ellipse 2 left"
          width={1300}
          height={1000}
          className="absolute bottom-0 left-0 z-10 opacity-80"
        />
      </div>

      <div className="w-72 h-full">
        <Image
          src="/images/ellipse1.png"
          alt="banner ellipse 1 right"
          width={1400}
          height={1000}
          className="absolute bottom-0 right-0 z-10 opacity-80"
        />
      </div>
    </div>
  );
};

export default MainBg;
