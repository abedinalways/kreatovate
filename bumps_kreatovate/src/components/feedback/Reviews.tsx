'use client';
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const reviews = [
  {
    name: 'John Doe',
    location: 'Los Angeles, USA',
    image: '/images/Avter01.png',
    text: 'Investly has completely transformed how I manage my investments. The portfolio tracker is intuitive and helps me see my diversification at a glance.',
  },
  {
    name: 'Michael Brown',
    location: 'New York, USA',
    image: '/images/Avter02.png',
    text: 'The dividend tracker is a game-changer. I can easily monitor my passive income and plan better for the future.',
  },
  {
    name: 'Sarah Johnson',
    location: 'Miami, USA',
    image: '/images/Avter03.png',
    text: 'I love the community feature! It’s great to see what other investors are tracking and learn from their strategies.',
  },
  {
    name: 'Lily Carter',
    location: 'Chicago, USA',
    image: '/images/Avter01.png',
    text: 'I found Investly’s educational tools and preset portfolio templates so helpful. I feel more confident in my investment decisions now.',
  },
  {
    name: 'Lily Carter',
    location: 'Chicago, USA',
    image: '/images/Avter01.png',
    text: 'I found Investly’s educational tools and preset portfolio templates so helpful. I feel more confident in my investment decisions now.',
  },
  {
    name: 'Lily Carter',
    location: 'Chicago, USA',
    image: '/images/Avter02.png',
    text: 'I found Investly’s educational tools and preset portfolio templates so helpful. I feel more confident in my investment decisions now.',
  },
  {
    name: 'Lily Carter',
    location: 'Chicago, USA',
    image: '/images/Avter03.png',
    text: 'I found Investly’s educational tools and preset portfolio templates so helpful. I feel more confident in my investment decisions now.',
  },
  {
    name: 'Emma Wilson',
    location: 'Austin, USA',
    image: '/images/Avter02.png',
    text: 'The analytics dashboard helps me make smarter investment decisions every week!',
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
    <section className="w-full max-w-6xl mx-auto py-14 text-white relative">
      {/* ---- Top Right Navigation Buttons ---- */}
      <div className="absolute top-[-20] right-6 flex items-center gap-3 z-10">
        <button
          onClick={scrollPrev}
          className="p-3 rounded-full border border-[#2a2a30] bg-[#121218]/70 hover:bg-[#1c1c22] transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 text-gray-300" />
        </button>
        <button
          onClick={scrollNext}
          className="p-3 rounded-full bg-gradient-to-r from-[#E21717] via-[#A000FF] to-[#3700FF] hover:opacity-90 transition-all duration-300"
        >
          <ArrowRight className="w-4 h-4 text-white" />
        </button>
      </div>

      {/* ---- Carousel Viewport ---- */}
      <div className="overflow-hidden px-4" ref={emblaRef}>
        <div className="flex gap-4">
          {reviews.map((review, index) => {
            const isActive = index === selectedIndex;
            return (
              <div
                key={index}
                className="flex-[0_0_80%] sm:flex-[0_0_60%] md:flex-[0_0_40%] lg:flex-[0_0_33%] transition-all duration-500"
              >
                <div
  className={`rounded-2xl p-6 h-full flex flex-col justify-between transition-all duration-500 ${
    isActive
      ? 'bg-gradient-to-br from-[#E21717] via-[#3700FF] to-[#0B0B0F] text-white shadow-[0_0_20px_rgba(226,23,23,0.3)] scale-[1.02]'
      : 'bg-[#121218] text-gray-400 scale-95 opacity-70'
  }`}
  style={
    isActive
      ? { border: '2px solid transparent' }
      : { border: '2px solid #1f1f25' }
  }
>

                  <p className="text-sm leading-relaxed mb-6">{review.text}</p>
                  <div className="flex items-center gap-4">
                    <Image
                      src={review.image}
                      alt={review.name}
                      width={44}
                      height={44}
                      className="rounded-full bg-gray-300 object-cover"
                    />
                    <div>
                      <h4
                        className={`font-semibold ${
                          isActive ? 'text-white' : 'text-gray-300'
                        }`}
                      >
                        {review.name}
                      </h4>
                      <p
                        className={`text-xs ${
                          isActive ? 'text-gray-200/80' : 'text-gray-500'
                        }`}
                      >
                        {review.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
