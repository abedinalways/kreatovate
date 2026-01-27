'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';
import 'swiper/css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import SectionHead from '@/components/shared/SectionHead';
import SolutionProtectedModal from '@/components/shared/modals/SolutionProtectedModal';
import VideoModal from '@/components/shared/modals/VideoModal';
import { saveToken, setUnlocked } from '@/utils/unlockState';
import { authenticate } from '@/utils/authClient';
import ButtonOne from '@/components/shared/buttons/ButtonOne';
import OurDevelopmentCard, {
  DevelopmentItem,
} from './our-development/OurDevelopmentCard';

gsap.registerPlugin(ScrollTrigger);

type SlideItem = {
  logo: string;
  videoBg: string;
  title: string;
  subtitle: string;
  bullets: string[];
  videoUrl?: string;
};

const slides: SlideItem[] = [
  {
    logo: '/images/kopper-logo.png',
    videoBg: '/images/kopper_video_bg.png',
    title: 'KOPPER communities Net-\nZero SMART Properties',
    subtitle: 'Waste / Water / Energy / Mining / Private 5G + Rentals & Leases',
    bullets: [
      'Mixed-Use Resort Style Blockchain Backed Intelligent Microcities',
      'Smart meters + ESG dashboards',
      'Tokenized leases & rentals',
      'Private 5G connectivity',
      'Circular waste-to-energy',
      'Water capture & reuse',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    logo: '/images/kopper-logo.png',
    videoBg: '/images/kopper_video_bg.png',
    title: 'KOPPER Industrial Net-Zero\nCampuses',
    subtitle: 'Energy / Water / Security / Logistics',
    bullets: [
      'Industrial parks with on-site renewables',
      'AI-driven resource optimization',
      'Secure access & private network',
      'Real-time sustainability reporting',
      'Green financing ready',
      'Modular growth',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
];

const OurSolution = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [open, setOpen] = useState(false);

  const [videoOpen, setVideoOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [videoTitle, setVideoTitle] = useState<string>('');

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.js-solution-text', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (email: string, password: string) => {
    const res = await authenticate(email, password);
    if (!res.ok) throw new Error(res.error);
    setUnlocked(true);
    if (res.token) saveToken(res.token);
  };

  const openVideo = (src?: string, title?: string) => {
    if (!src) return;
    setVideoSrc(src);
    setVideoTitle(title || 'Video');
    setVideoOpen(true);
  };

  const ourDevelopementData: DevelopmentItem[] = [
    {
      id: 'workforce',
      title: 'AI Workforce & Business Automation',
      desc: 'Run sales, support, marketing, and operations with AI-powered workers. Automate workflows, communication, and decision-making with A.D.O.N.I.S. intelligence.',
      image: '/images/consulting/workforce.png',
      href: 'https://workforce.kreatovate.com',
      btnName: 'Enter AI Workforce',
    },
    {
      id: 'launchpad',
      title: 'Initiatives & Distribution Hub',
      desc: 'The launch hub for Kreatovate initiatives, educational programs, and fundraising. Explore live campaigns, book releases, and active initiatives.',
      image: '/images/consulting/launchpad.png',
      href: 'https://launchpad.kreatovate.com',
      btnName: 'Go to Launchpad',
    },
    {
      id: 'projects',
      title: 'Projects, Ventures & Investments',
      desc: 'Explore ongoing and upcoming developments, ventures, and investment opportunities. Track progress, scope, and strategic objectives.',
      image: '/images/consulting/projects.png',
      href: 'https://projects.kreatovate.com',
      btnName: 'View Projects',
    },
    {
      id: 'beta',
      title: 'KINpro + A.D.O.N.I.S. Beta Environment',
      desc: 'Early access environment for KINpro, Kommand Center, and A.D.O.N.I.S. intelligence—currently in development and testing.',
      image: '/images/consulting/beta.png',
      href: 'https://beta.kreatovate.com',
      btnName: 'Enter Beta',
    },
    {
      id: 'aid',
      title: 'Kindred Kares Foundation - Aid Network',
      desc: 'Kreatovate’s charitable and community aid network—built for transparency, speed, and measurable impact using tokenized assistance.',
      image: '/images/consulting/aid.png',
      href: 'https://aid.kreatovate.com',
      btnName: 'Visit Aid Network',
    },
  ];

  return (
    <div className="px-4 md:px-0 font-jakarta" id="our_developments">
      <div className="flex flex-col items-center gap-7 mb-10">
        <div className="w-fit js-solution-text">
          <SectionHead title="Our Developments" />
        </div>

        <h1 className="js-solution-text text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight max-w-4xl text-center">
          Our Projects, Products,
          <span className="block text-color-gradient">
            Solutions & Initiatives + Investor Resources
          </span>
        </h1>
      </div>

      <div className="custom-container mt-16">
        <div className="grid  gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 *:md:last:col-span-2">
          {ourDevelopementData.map(development => (
            <OurDevelopmentCard key={development.id} data={development} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurSolution;
