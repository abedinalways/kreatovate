'use client';

import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { gsap } from 'gsap';
import { Phone, Mail } from 'lucide-react';

const Support = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Animate heading
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );
    }

    // Animate cards
    if (cardsRef.current) {
      const cards = gsap.utils.toArray(
        cardsRef.current.children
      ) as HTMLElement[];

      gsap.fromTo(
        cards,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
        }
      );

      // Hover animation for each card
      cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -8,
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out',
          });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: 'power2.inOut',
          });
        });
      });
    }
  }, []);

  const contactItems = [
    {
      icon: <Phone className="w-6 h-6 text-white" />,
      title: 'Company Phone',
      detail: '+1 (866) 879-2929',
    },
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      title: 'Main Email',
      detail: 'consulting@kreatovate.com',
    },
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      title: 'Client Support',
      detail: 'support@kreatovate.com',
    },
  ];

  return (
    <section className="w-full py-20 bg-[#0B0B0F] text-white flex flex-col items-center justify-center overflow-hidden">
      {/* Heading */}
      <h2
        ref={headingRef}
        className="text-center text-3xl md:text-5xl font-bold mb-12 leading-snug"
      >
        Need a hand?{' '}
        <span className="text-color-gradient bg-clip-text ">Get in touch</span>
        <br />
        <span className="text-color-gradient bg-clip-text ">with us</span>
      </h2>

      {/* Cards Grid */}
      <div
        ref={cardsRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-20 max-w-6xl"
      >
        {contactItems.map((item, idx) => (
          <Card
            key={idx}
            className="bg-color-gradient p-px rounded-xl h-full border border-white/10 hover:border-[#4E30FE]/80 
                       transition-all duration-500  shadow-lg"
          >
            <div className="bg-black rounded-xl p-6 h-full flex flex-col">

            <CardContent className="flex flex-col  gap-3 py-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#E21717] to-[#3700FF] flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.detail}</p>
            </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Support;
