'use client';

import React, { useEffect, useRef, useState } from 'react';
import { PlusIcon, MinusIcon } from 'lucide-react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { Accordion, AccordionItem } from '@/components/ui/accordion';

const faqsLeft = [
  {
    id: '1',
    title: 'What is the Kreatovate AI Workforce?',
    content:
      'Our AI Workforce is a collection of prebuilt, fully functional AI Employees — digital agents that automate sales, support, scheduling, follow-ups, and customer engagement for your business.',
  },
  {
    id: '2',
    title: 'What can these AI Employees do?',
    content:
      'You’ll receive full access to the digital bundle and any exclusive supporter-only materials immediately after purchase.',
  },
  {
    id: '3',
    title: 'How are they different from a chatbot?',
    content:
      'The price increases by $1 with each purchase to reward early supporters and create momentum for the project.',
  },
  {
    id: '4',
    title: 'What does setup include?',
    content:
      'It’s a product purchase that supports creative development. You get real value while helping creators thrive.',
  },
  {
    id: '5',
    title: 'Do I need to be tech-savvy?',
    content:
      'After checkout, you’ll receive an email with download links and instructions for accessing your materials.',
  }
];

const faqsRight = [
  {
    id: '6',
    title: 'What industries can use AI Employees?',
    content:
      'The series is produced by a collective of educators and designers passionate about accessible, future-ready learning.',
  },
  {
    id: '7',
    title: 'Can I try one before subscribing?',
    content:
      'Early support helps bring the project to life and rewards you with the best pricing and exclusive bonuses.',
  },
  {
    id: '8',
    title: 'How much does it cost?',
    content:
      'Currently, the bundle is digital-only, but physical copies may be available later depending on demand.',
  },
  {
    id: '9',
    title: 'Is this secure?',
    content:
      'Yes! You can purchase multiple bundles and send gift links to your friends and family.',
  },
  {
    id: '10',
    title: 'What’s next after I sign up?',
    content:
      'After the campaign, the bundle will move to regular pricing, and supporters will retain lifetime access.',
  },
];

export default function FAQSection() {
  // simple mount animation for the whole section
  const rootRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return setMounted(true);
    // next tick -> smooth transition
    const t = setTimeout(() => setMounted(true), 20);
    return () => clearTimeout(t);
  }, []);

  return (
    <div id="faq" className="bg-[#0F1016]">
      <div
        ref={rootRef}
        className={[
          'custom-container py-16 mx-auto scroll-mt-20 px-4 md:px-0',
          'transition-all duration-500 motion-safe:duration-500',
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3',
        ].join(' ')}
      >
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="md:text-5xl text-3xl text-center font-bold">
              Get Answers To{' '}
              <span className="text-jgradient">Your Question</span>
            </h2>
            <p className="text-xs sm:text-sm font-normal md:mt-7 text-white/80">
              Explore our tailored solutions designed to elevate your brand and
              boost your market presence effectively{' '}
              <br className="hidden sm:block" />
              for sustainable growth and lasting success.
            </p>
          </div>
        </div>

        {/* accordion section */}
        <section className="w-full text-white py-20">
          <div className="px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-20">
              {/* Left Column */}
              <div>
                <Accordion type="single" collapsible className="space-y-0">
                  {faqsLeft.map(item => (
                    <AccordionItem
                      value={item.id}
                      key={item.id}
                      className="border-b border-[#1f1f25] py-4"
                      data-faq-item="left"
                    >
                      <AccordionPrimitive.Header className="flex">
                        <AccordionPrimitive.Trigger
                          className={[
                            'group flex w-full items-center justify-between py-2 text-left',
                            'text-[15px] font-medium leading-6 transition-all outline-none',
                            'hover:text-gray-300 focus-visible:ring-2 focus-visible:ring-ring/50',
                            'cursor-pointer',
                          ].join(' ')}
                        >
                          {item.title}
                          <span className="relative inline-flex items-center justify-center">
                            {/* Plus when closed */}
                            <PlusIcon
                              size={18}
                              aria-hidden="true"
                              className="opacity-60 transition-all duration-200 group-data-[state=open]:opacity-0"
                            />
                            {/* Minus when open */}
                            <MinusIcon
                              size={18}
                              aria-hidden="true"
                              className="absolute opacity-0 transition-all duration-200 group-data-[state=open]:opacity-100"
                            />
                          </span>
                        </AccordionPrimitive.Trigger>
                      </AccordionPrimitive.Header>

                      {/* Smooth height animation (grid-rows trick) */}
                      <AccordionPrimitive.Content
                        className={[
                          'group',
                          'grid grid-rows-[0fr] data-[state=open]:grid-rows-[1fr]',
                          'transition-[grid-template-rows] duration-300 ease-out',
                        ].join(' ')}
                      >
                        <div
                          className={[
                            'overflow-hidden',
                            'text-sm text-gray-400 leading-relaxed',
                            'pr-0 pt-2',
                            // content fades & slides a touch when opening
                            'opacity-0 translate-y-1',
                            'group-data-[state=open]:opacity-100 group-data-[state=open]:translate-y-0',
                            'transition-all duration-300 ease-out',
                          ].join(' ')}
                        >
                          {item.content}
                        </div>
                      </AccordionPrimitive.Content>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Right Column */}
              <div>
                <Accordion type="single" collapsible className="space-y-0">
                  {faqsRight.map(item => (
                    <AccordionItem
                      value={item.id}
                      key={item.id}
                      className="border-b border-[#1f1f25] py-4"
                      data-faq-item="right"
                    >
                      <AccordionPrimitive.Header className="flex">
                        <AccordionPrimitive.Trigger
                          className={[
                            'group flex w-full items-center justify-between py-2 text-left',
                            'text-[15px] font-medium leading-6 transition-all outline-none',
                            'hover:text-gray-300 focus-visible:ring-2 focus-visible:ring-ring/50',
                            'cursor-pointer',
                          ].join(' ')}
                        >
                          {item.title}
                          <span className="relative inline-flex items-center justify-center">
                            {/* Plus when closed */}
                            <PlusIcon
                              size={18}
                              aria-hidden="true"
                              className="opacity-60 transition-all duration-200 group-data-[state=open]:opacity-0"
                            />
                            {/* Minus when open */}
                            <MinusIcon
                              size={18}
                              aria-hidden="true"
                              className="absolute opacity-0 transition-all duration-200 group-data-[state=open]:opacity-100"
                            />
                          </span>
                        </AccordionPrimitive.Trigger>
                      </AccordionPrimitive.Header>

                      <AccordionPrimitive.Content
                        className={[
                          'group',
                          'grid grid-rows-[0fr] data-[state=open]:grid-rows-[1fr]',
                          'transition-[grid-template-rows] duration-300 ease-out',
                        ].join(' ')}
                      >
                        <div
                          className={[
                            'overflow-hidden',
                            'text-sm text-gray-400 leading-relaxed',
                            'pr-0 pt-2',
                            'opacity-0 translate-y-1',
                            'group-data-[state=open]:opacity-100 group-data-[state=open]:translate-y-0',
                            'transition-all duration-300 ease-out',
                          ].join(' ')}
                        >
                          {item.content}
                        </div>
                      </AccordionPrimitive.Content>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
