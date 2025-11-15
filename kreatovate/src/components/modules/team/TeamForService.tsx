'use client';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsFacebook } from 'react-icons/bs';
import { gsap } from 'gsap';
import { FaInstagram, FaXTwitter } from 'react-icons/fa6';

// shadcn carousel
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

// --- Types ---
interface Profile {
  id: number | string;
  name: string;
  title: string;
  img: string;
  hoverImg: string;
  quote?: string;
  description?: string;
  superpower?: string;
  weakness?: string;
  facebookUrl?: string;
}

const TeamForService: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const sectionRef = useRef<HTMLDivElement>(null);
  const autoplay = useRef(
    Autoplay({
      delay: 3500,
      stopOnMouseEnter: true,
      stopOnInteraction: false,
    })
  );

  // Fetch data
  useEffect(() => {
    let isMounted = true;
    fetch('/profileAll.json')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data: Profile[]) => {
        if (isMounted) setProfiles(Array.isArray(data) ? data : []);
      })
      .catch(err => {
        console.error('Failed to load profiles:', err);
        if (isMounted) setError("Couldn't load team profiles.");
      })
      .finally(() => isMounted && setLoading(false));
    return () => {
      isMounted = false;
    };
  }, []);

  // Entrance animation
  useLayoutEffect(() => {
    if (!sectionRef.current) return;
    const el = sectionRef.current;
    const ctx = gsap.context(() => {
      gsap.set(el, { opacity: 0, y: 24 });
      const io = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              gsap.to(el, {
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: 'power3.out',
              });
              io.disconnect();
            }
          });
        },
        { threshold: 0.2 }
      );
      io.observe(el);
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full" id="our_team">
      <div className="absolute top-0 right-20 z-0 rotate-180 rounded-full">
        <Image
          src="/images/strategy-ellipse1.png"
          alt="bg light"
          width={513}
          height={208}
        />
      </div>
      <div
        ref={sectionRef}
        className="custom-container px-4 md:px-5 lg:px-12 py-20 flex-col gap-8 justify-center items-center font-openSans"
      >
        {/* heading */}
        <div className="w-fit mx-auto">
          <div className="flex items-center justify-center bg-white/10  md:px-4  rounded-full mx-auto banner-tagline border border-gray-400 px-2">
            <Image
              src="/images/hrline1.png"
              alt="heading line vector 1"
              width={60}
              height={16}
            />
            <p className="mx-2 font-[roboto]  text-[10px] text-center py-2 font-bold text-gradient-special  uppercase">
              workforce team
            </p>
            <Image
              src="/images/hrline1.png"
              alt="heading line vector 1"
              width={60}
              height={16}
              className="scale-x-[-1]"
            />
          </div>
        </div>
        {/*  */}

        <h2 className="text-3xl md:text-5xl text-center font-bold">
          Kreatovate{' '}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#E93D3D] to-[#4E30FE]">
            Team
          </span>
        </h2>

        <section className="w-full max-w-6xl mx-auto py-12 px-2 sm:px-4">
          {/* Loading / Error */}
          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={`skeleton-${i}`}
                  className="rounded-2xl p-2 shadow-2xl"
                >
                  <div className="rounded-2xl overflow-hidden bg-[#1A1A1A] animate-pulse">
                    <div className="w-full aspect-3/4 bg-white/5" />
                    <div className="p-4 space-y-2">
                      <div className="h-4 w-2/3 bg-white/10 rounded" />
                      <div className="h-3 w-1/2 bg-white/10 rounded" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {!loading && error && (
            <div className="text-center text-red-400">{error}</div>
          )}

          {!loading && !error && profiles.length > 0 && (
            <Carousel
              className="w-full"
              opts={{ align: 'start', loop: true }}
              plugins={[autoplay.current]}
              onMouseEnter={autoplay.current.stop}
            >
              <CarouselContent>
                {profiles.map(p => (
                  <CarouselItem
                    key={p.id}
                    className="basis-full md:basis-1/3 lg:basis-1/4 px-4 sm:px-3"
                  >
                    <article
                      data-card
                      className="relative rounded-2xl p-2 shadow-2xl group transition-all duration-500 focus-within:ring-2 focus-within:ring-white/20 h-full"
                    >
                      <div className="relative w-full rounded-2xl p-px bg-linear-to-r from-[#E93D3D] to-[#4E30FE] h-full">
                        <div className="relative rounded-2xl overflow-hidden bg-[#1A1A1A] group-hover:scale-[1.01] transition-transform duration-500 h-full">
                          <div className="w-full aspect-2/3">
                            <Image
                              width={800}
                              height={1066}
                              src={p.img}
                              alt={
                                p.name
                                  ? `${p.name} – ${p.title}`
                                  : 'Team member'
                              }
                              className="w-full h-fit absolute md:top-15 top-6 object-cover transition-transform duration-700 group-hover:scale-100"
                              sizes="(min-width:1280px) 20rem, (min-width:1024px) 18rem, (min-width:640px) 50vw, 100vw"
                            />
                          </div>

                          {/* Hover Overlay */}
                          <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out p-4 sm:p-5 text-white flex flex-col justify-between"
                            style={{
                              background:
                                'linear-gradient(90deg, rgba(226, 23, 23, 0.9) 0%, rgba(55, 0, 255, 0.9) 100%)',
                            }}
                            aria-hidden
                          >
                            <header className="flex items-center justify-between gap-3">
                              <div className="flex items-center gap-3 min-w-0">
                                <Image
                                  width={40}
                                  height={40}
                                  src={p.hoverImg}
                                  alt="image"
                                  className="rounded-full border border-[#D1C8C8] bg-purple-200 shrink-0"
                                />
                                <div className="min-w-0">
                                  <h3 className="text-sm font-semibold truncate">
                                    {p.name}
                                  </h3>
                                  <p className="text-xs text-gray-200 truncate">
                                    {p.title}
                                  </p>
                                </div>
                              </div>
                              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                {p.facebookUrl ? (
                                  <a
                                    href={p.facebookUrl}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="inline-flex"
                                  >
                                    <BsFacebook />
                                  </a>
                                ) : (
                                  <BsFacebook aria-hidden />
                                )}
                              </div>
                            </header>

                            <div className="mt-3 text-sm leading-relaxed space-y-1.5">
                              {p.quote && (
                                <p className="italic text-gray-100">
                                  “{p.quote}”
                                </p>
                              )}
                              {p.description && <p>{p.description}</p>}
                              {(p.superpower || p.weakness) && (
                                <ul className="mt-2 space-y-0.5">
                                  {p.superpower && (
                                    <li>
                                      <span className="font-semibold text-gray-100">
                                        Superpower:
                                      </span>{' '}
                                      {p.superpower}
                                    </li>
                                  )}
                                  {p.weakness && (
                                    <li>
                                      <span className="font-semibold text-gray-100">
                                        Weakness:
                                      </span>{' '}
                                      {p.weakness}
                                    </li>
                                  )}
                                </ul>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Bottom Info */}
                        <div className="absolute left-4 right-4 bottom-4 opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                          <div
                            className="backdrop-blur-xl rounded-xl px-4 py-3 shadow-lg flex items-center justify-between gap-3"
                            style={{
                              background:
                                'linear-gradient(120deg, rgba(226, 15, 18, 0.2) 40%, rgba(56, 83, 255, 0.2) 60%)',
                              border: '2px solid rgba(255, 255, 255, 0.2)',
                            }}
                          >
                            {/* Name + Title */}
                            <div className="min-w-0 flex-1">
                              <div className="text-white font-semibold text-sm md:text-base truncate">
                                {p.name}
                              </div>
                              <div className="text-white/70 text-[10px] md:text-xs truncate">
                                {p.title}
                              </div>
                            </div>

                            {/* Social Icons */}
                            <div className="flex items-center gap-3 shrink-0">
                              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center">
                                {p.facebookUrl ? (
                                  <a
                                    href={p.facebookUrl}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="cursor-pointer"
                                  >
                                    <FaInstagram />
                                  </a>
                                ) : (
                                  <FaInstagram aria-hidden />
                                )}
                              </div>

                              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center">
                                {p.facebookUrl ? (
                                  <a
                                    href={p.facebookUrl}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="cursor-pointer"
                                  >
                                    <FaXTwitter />
                                  </a>
                                ) : (
                                  <FaXTwitter aria-hidden />
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Arrows */}
              <CarouselPrevious className="left-[-24px] md:left-[-38px] bg-white/20 hover:bg-white/30 border border-white/20 backdrop-blur-md text-white" />
              <CarouselNext className="right-[-18px] bg-gradient-to-r from-[#E21717] via-[#A000FF] to-[#3700FF] border border-black backdrop-blur-md text-white" />
            </Carousel>
          )}

          {/* See All Button -> Team Page */}
          {!loading && profiles.length > 0 && (
            <div className="flex justify-center mt-10">
              <div className="rounded-[12px] p-0.5 bg-linear-to-r from-[#E21717] to-[#3700FF] inline-block">
                <Link
                  href="/team"
                  className="px-8 py-2 rounded-[10px] bg-black text-white transition-transform duration-200 active:scale-95 cursor-pointer inline-block"
                >
                  See All
                </Link>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default TeamForService;
