'use client';

import { PlusIcon } from 'lucide-react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from '@/components/ui/accordion';

const faqsLeft = [
  {
    id: '1',
    title: 'What is Bumps by Kreatovate?',
    content:
      "Bumps is our fundraising platform powered by BumpSale — every time someone buys, the price goes up by $1. It's a social, transparent, and fun way to crowdfund creative projects while rewarding early supporters.",
  },
  {
    id: '2',
    title: 'What do I get when I buy?',
    content:
      'You’ll receive full access to the digital bundle and any exclusive supporter-only materials immediately after purchase.',
  },
  {
    id: '3',
    title: 'Why does the price change?',
    content:
      'The price increases by $1 with each purchase to reward early supporters and create momentum for the project.',
  },
  {
    id: '4',
    title: 'Is this a donation or a product purchase?',
    content:
      'It’s a product purchase that supports creative development. You get real value while helping creators thrive.',
  },
  {
    id: '5',
    title: 'How will I receive my books?',
    content:
      'After checkout, you’ll receive an email with download links and instructions for accessing your materials.',
  },
];

const faqsRight = [
  {
    id: '6',
    title: 'Who is behind the NextGen Education Series?',
    content:
      'The series is produced by a collective of educators and designers passionate about accessible, future-ready learning.',
  },
  {
    id: '7',
    title: 'Why support now?',
    content:
      'Early support helps bring the project to life and rewards you with the best pricing and exclusive bonuses.',
  },
  {
    id: '8',
    title: 'Will there be physical copies?',
    content:
      'Currently, the bundle is digital-only, but physical copies may be available later depending on demand.',
  },
  {
    id: '9',
    title: 'Can I gift the bundle?',
    content:
      'Yes! You can purchase multiple bundles and send gift links to your friends and family.',
  },
  {
    id: '10',
    title: 'What happens after the campaign ends?',
    content:
      'After the campaign, the bundle will move to regular pricing, and supporters will retain lifetime access.',
  },
];

export default function FAQSection() {
  return (
    <div id="faq" className="bg-[#0F1016]">
      <div className="custom-container py-16 mx-auto  scroll-mt-20 px-4 md:px-0">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="md:text-5xl text-3xl text-center font-bold">
              Get Answers To{' '}
              <span className="text-color-gradient">Your Question</span>
            </h2>
            <p className="text-xs sm:text-sm font-normal md:mt-7">
              Explore our tailored solutions designed to elevate your brand and
              boost your market presence effectively{' '}
              <br className="hidden sm:block" />
              for sustainable growth and lasting success.
            </p>
          </div>
        </div>

        {/* accordion section */}
        <section className="w-full text-white py-20">
          <div className="  px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-20">
              {/* Left Column */}
              <div>
                <Accordion type="single" collapsible className="space-y-0">
                  {faqsLeft.map(item => (
                    <AccordionItem
                      value={item.id}
                      key={item.id}
                      className="border-b border-[#1f1f25] py-4"
                    >
                      <AccordionPrimitive.Header className="flex">
                        <AccordionPrimitive.Trigger className="flex w-full items-center justify-between py-2 text-left text-[15px] font-medium leading-6 transition-all outline-none hover:text-gray-300 focus-visible:ring-2 focus-visible:ring-ring/50 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0">
                          {item.title}
                          <PlusIcon
                            size={18}
                            className="pointer-events-none shrink-0 opacity-60 transition-transform duration-200"
                            aria-hidden="true"
                          />
                        </AccordionPrimitive.Trigger>
                      </AccordionPrimitive.Header>
                      <AccordionContent className="text-sm text-gray-400 pt-2 leading-relaxed">
                        {item.content}
                      </AccordionContent>
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
                    >
                      <AccordionPrimitive.Header className="flex">
                        <AccordionPrimitive.Trigger className="flex w-full items-center justify-between py-2 text-left text-[15px] font-medium leading-6 transition-all outline-none hover:text-gray-300 focus-visible:ring-2 focus-visible:ring-ring/50 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0">
                          {item.title}
                          <PlusIcon
                            size={18}
                            className="pointer-events-none shrink-0 opacity-60 transition-transform duration-200"
                            aria-hidden="true"
                          />
                        </AccordionPrimitive.Trigger>
                      </AccordionPrimitive.Header>
                      <AccordionContent className="text-sm text-gray-400 pt-2 leading-relaxed">
                        {item.content}
                      </AccordionContent>
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
