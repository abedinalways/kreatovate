'use client';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

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
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center' },
    [autoplay.current]
  );

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [slidesCount, setSlidesCount] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;

    setSlidesCount(emblaApi.scrollSnapList().length);
    setSelectedIndex(emblaApi.selectedScrollSnap());

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi]);


  return (
    <div className="w-full max-w-6xl mx-auto py-10">
      <div className="w-full relative">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex -ml-2">
            {reviews.map((review, index) => {
              const isActive = index === selectedIndex;
              return (
                <div
                  key={index}
                  className="pl-2 min-w-0 shrink-0 grow-0 basis-[85%] sm:basis-[70%] md:basis-[50%] lg:basis-[33%]"
                >
                  <div className="p-4">
                    <Card
                      className={`border-1 border-[#E21717] text-white shadow-lg rounded-2xl  md:h-82 transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-br from-[#E21717] via-[#3700FF] to-[#0B0B0F] text-white shadow-[0_0_20px_rgba(226,23,23,0.3)]'
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
                        <div className="flex items-center gap-3 mb-4">
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

                        <div className="flex gap-1 text-yellow-400 mb-3">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} size={16} fill="currentColor" />
                          ))}
                        </div>

                        <p className="text-gray-300 text-sm leading-relaxed">
                          {review.text}
                        </p>
                      </CardContent>
                      <div className="ml-10">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 38 28"
                          fill="none"
                        >
                          <path
                            d="M28.853 16.368C29.2642 16.3613 29.6579 16.2935 30.0498 16.2312C29.9294 16.6517 29.8054 17.0794 29.6014 17.4652C29.4003 18.024 29.0799 18.5109 28.7614 19.0013C28.497 19.5306 28.0215 19.8937 27.6747 20.3486C27.3112 20.791 26.8106 21.0896 26.4163 21.4587C26.0297 21.8438 25.5182 22.0416 25.1132 22.3152C24.6892 22.562 24.321 22.8332 23.9247 22.966L22.9372 23.3826L22.0688 23.7521L23.0205 27.2324L24.1173 26.9547C24.4681 26.8624 24.8962 26.7544 25.3829 26.6256C25.8812 26.5272 26.4102 26.2714 27.0003 26.0363C27.5826 25.7706 28.2585 25.5864 28.8825 25.1649C29.5105 24.7614 30.2373 24.4212 30.8742 23.8841C31.4905 23.331 32.2371 22.848 32.7828 22.1482C33.3808 21.4927 33.971 20.8048 34.4249 20.0253C34.9533 19.2807 35.3071 18.4668 35.6813 17.6615C36.0186 16.8569 36.2874 16.0354 36.505 15.2381C36.9161 13.6404 37.0868 12.126 37.1413 10.8317C37.1828 9.53589 37.1283 8.45988 37.0381 7.68209C37.0044 7.31466 36.947 6.95844 36.906 6.71198L36.855 6.40977L36.8072 6.42137C36.4547 4.92845 35.677 3.56393 34.5642 2.48567C33.4514 1.4074 32.049 0.659447 30.519 0.328334C28.9891 -0.00277992 27.3943 0.0964747 25.919 0.614616C24.4437 1.13276 23.1483 2.04861 22.1826 3.25623C21.2168 4.46385 20.6203 5.9139 20.4619 7.43862C20.3035 8.96334 20.5898 10.5004 21.2876 11.8721C21.9854 13.2438 23.0663 14.3939 24.4051 15.1896C25.7439 15.9852 27.286 16.3938 28.853 16.368ZM8.56608 16.6999C8.97735 16.6932 9.37102 16.6254 9.76293 16.5631C9.64252 16.9835 9.51854 17.4113 9.31455 17.797C9.11339 18.3559 8.79299 18.8428 8.47449 19.3332C8.21012 19.8624 7.73458 20.2256 7.38783 20.6804C7.02427 21.1229 6.52369 21.4215 6.12942 21.7905C5.74278 22.1757 5.23133 22.3734 4.82627 22.647C4.40232 22.8939 4.03412 23.1651 3.63782 23.2978L2.65032 23.7144L1.78195 24.084L2.73359 27.5643L3.83036 27.2866C4.1812 27.1943 4.60926 27.0862 5.09601 26.9574C5.59433 26.8591 6.12328 26.6033 6.71345 26.3682C7.29386 26.1007 7.97159 25.9183 8.59558 25.495C9.22357 25.0915 9.95037 24.7513 10.5873 24.2141C11.2036 23.6611 11.9502 23.1781 12.4959 22.4801C13.0939 21.8245 13.6841 21.1366 14.138 20.3571C14.6664 19.6125 15.0202 18.7986 15.3944 17.9934C15.7317 17.1888 16.0005 16.3672 16.2181 15.57C16.6292 13.9723 16.7999 12.4578 16.8544 11.1636C16.8959 9.86774 16.8414 8.79174 16.7512 8.01395C16.7175 7.64651 16.6601 7.29029 16.6191 7.04383L16.5681 6.74163L16.5203 6.75323C16.1678 5.2603 15.3901 3.89579 14.2773 2.81752C13.1645 1.73926 11.7621 0.9913 10.2321 0.660187C8.70222 0.329073 7.10738 0.428327 5.6321 0.946468C4.15682 1.46461 2.86139 2.38046 1.89568 3.58809C0.929954 4.79571 0.333401 6.24575 0.175025 7.77047C0.0166536 9.29519 0.302925 10.8323 1.00073 12.2039C1.69854 13.5756 2.77937 14.7258 4.11819 15.5214C5.457 16.317 6.99909 16.7256 8.56608 16.6999Z"
                            fill="url(#paint0_linear_6442_11351)"
                            fillOpacity="0.4"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_6442_11351"
                              x1="37.2167"
                              y1="13.4984"
                              x2="0.221646"
                              y2="14.1036"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#E21717" />
                              <stop offset="1" stopColor="#3700FF" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination Dots */}
        {slidesCount > 1 && (
          <div className="flex flex-col items-center mt-4 gap-2">
            <div className="flex justify-center gap-2">
              {Array.from({ length: slidesCount }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? 'bg-[linear-gradient(90deg,#E21717_0%,#3700FF_100%)] scale-150'
                      : 'bg-[linear-gradient(245deg,#E20F12_0.72%,#3853FF_59.79%)] scale-100 opacity-70'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reviews;
