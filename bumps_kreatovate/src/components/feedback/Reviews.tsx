'use client';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const reviews = [
  {
    name: 'Judith Lowe',
    company: 'Agency Nova',
    image: '/images/user01.png',
    text: "Quotex-WordPress allows us to offer premium technical services under our brand, without dealing with WordPress complexities. It's a game-changer for our agency!",
  },
  {
    name: 'Richa Shankar',
    company: 'Marketing Plus',
    image: '/images/user02.png',
    text: 'Their white-label approach helped us strengthen client trust while benefiting from expert technical support. An essential solution!',
  },
  {
    name: 'David Miller',
    company: 'TechVision',
    image: '/images/user03.png',
    text: 'Superb service and seamless integration! We expanded our offerings without hiring extra developers.',
  },
  {
    name: 'Amira Khan',
    company: 'Creative Loop',
    image: '/images/user03.png',
    text: 'The support team is incredibly responsive and knowledgeable. My clients love the fast turnaround.',
  },
  {
    name: 'Liam Carter',
    company: 'BrightPixel',
    image: '/images/user02.png',
    text: 'A fantastic platform that saves us time and cost. Their backend support is unmatched.',
  },
  {
    name: 'Sophia Nguyen',
    company: 'NextGen Agency',
    image: '/images/user01.png',
    text: 'Our projects now run smoother than ever. The UI and experience are top-notch!',
  },
  {
    name: 'Noah Patel',
    company: 'Visionary Tech',
    image: '/images/user02.png',
    text: 'Reliable, professional, and innovative — the perfect combo for agencies looking to scale.',
  },
  {
    name: 'Isabella Rossi',
    company: 'DigitalCraft',
    image: '/images/user02.png',
    text: 'Quotex-WordPress exceeded all our expectations. Our workflow efficiency improved dramatically.',
  },
];

const Reviews = () => {
    const autoplay = React.useRef(
      Autoplay({ delay: 4000, stopOnInteraction: false })
    );
    const [emblaRef, emblaApi] = useEmblaCarousel(
      { loop: true, align: 'center' },
      [autoplay.current]
    );
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    React.useEffect(() => {
      if (!emblaApi) return;
      const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
      emblaApi.on('select', onSelect);
      onSelect();
    }, [emblaApi]);

    // Navigation Handlers
    const scrollPrev = React.useCallback(
      () => emblaApi && emblaApi.scrollPrev(),
      [emblaApi]
    );
    const scrollNext = React.useCallback(
      () => emblaApi && emblaApi.scrollNext(),
      [emblaApi]
    );


  return (
    <div className="w-full  mx-auto py-14 text-white relative">
      {/* ---- Top Right Navigation Buttons ---- */}
      <div className="custom-container absolute top-[-16] md:top-[-20] md:right-65 right-10 flex items-center gap-3 z-5">
        <button
          onClick={scrollPrev}
          className="p-3 rounded-full border border-[#2a2a30] bg-[#121218]/70 hover:bg-[#1c1c22] transition-all duration-300 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-gray-300" />
        </button>
        <button
          onClick={scrollNext}
          className="p-3 rounded-full bg-gradient-to-r from-[#E21717] via-[#A000FF] to-[#3700FF] hover:opacity-90 transition-all duration-300 cursor-pointer"
        >
          <ArrowRight className="w-4 h-4 text-white" />
        </button>
      </div>

      <div className="w-full relative">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex -ml-2">
            {reviews.map((review, index) => {
              const isActive = index === selectedIndex;
              return (
                <div
                  key={index}
                  className="pl-2 min-w-0 shrink-0 grow-0 basis-[85%] sm:basis-[70%] md:basis-[50%] lg:basis-[23%]"
                >
                  <div className="md:p-4">
                    <Card
                      className={`border border-[#E21717] text-white shadow-lg rounded-2xl  md:h-62 transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient text-white shadow-[0_0_20px_rgba(226,23,23,0.3)]'
                          : 'bg-[#121218] text-gray-400 scale-95 opacity-70'
                      }`}
                      style={{
                        border: isActive
                          ? '1px solid transparent'
                          : '1px solid #1f1f25',
                        backgroundImage: isActive
                          ? `linear-gradient(to bottom right, rgba(226,23,23,0.85), rgba(55,0,255,0.85), rgba(11,11,15,0.9)), url('/images/testimonioal02.png')`
                          : `url('/images/testimonioal02.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
                    >
                      <CardContent className="p-6 flex flex-col justify-between">
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {review.text}
                        </p>
                        <div className="flex items-center gap-3 mt-8">
                          <Image
                            width={500}
                            height={500}
                            src={review.image}
                            alt={review.name}
                            className="w-12 h-12 rounded-full object-cover border-2 border-pink-500"
                          />
                          <div>
                            <h3 className="font-semibold text-lg">
                              {review.name}
                            </h3>
                            <p className="text-sm text-gray-400">
                              {review.company}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
