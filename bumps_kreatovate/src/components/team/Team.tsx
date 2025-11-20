'use client';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { BsFacebook } from 'react-icons/bs';
import { FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { gsap } from 'gsap';

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

const Team: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  // Fetch profiles.json
  useEffect(() => {
    let isMounted = true;
    fetch('/profiles.json')
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

  // Entrance animation for section
  useLayoutEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.set(sectionRef.current, { opacity: 0, y: 24 });
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              gsap.to(sectionRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: 'power3.out',
              });
              observer.disconnect();
            }
          });
        },
        { threshold: 0.2 }
      );
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
    });
    return () => ctx.revert();
  }, []);

  // Animate showing/hiding cards
  useLayoutEffect(() => {
    if (!cardsRef.current) return;
    const cards = Array.from(cardsRef.current.children) as HTMLElement[];
    if (!cards.length) return;

    gsap.to(cards, {
      height: 'auto',
      autoAlpha: 1,
      stagger: 0.1,
      duration: 0.5,
      ease: 'power2.out',
    });
  }, [showAll]);

  const displayedProfiles = showAll ? profiles : profiles.slice(0, 3);

  return (
    <div className="relative w-full" id="our_team">
      <div
        ref={sectionRef}
        className="custom-container px-4 md:px-5 lg:px-12 py-20 flex-col gap-8 justify-center items-center font-openSans"
      >
        {/* Heading */}
        <div className="w-fit mx-auto">
          <h2 className="text-3xl md:text-5xl text-center font-bold">
            Kreatovate{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#E93D3D] to-[#4E30FE]">
              Team
            </span>
          </h2>
        </div>

        {/* Loading */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="rounded-2xl p-2 shadow-2xl animate-pulse bg-[#1A1A1A]"
              >
                <div className="w-full aspect-2/3 bg-white/5 rounded-2xl" />
              </div>
            ))}
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <p className="text-center text-red-400">{error}</p>
        )}

        {/* Profiles Grid */}
        {!loading && !error && (
          <>
            <div
              ref={cardsRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden"
            >
              {displayedProfiles.map(p => (
                <article
                  key={p.id}
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
                            p.name ? `${p.name} – ${p.title}` : 'Team member'
                          }
                          className="w-full h-fit absolute md:top-15 top-6 object-cover transition-transform duration-700 group-hover:scale-100"
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
                              width={50}
                              height={50}
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
                          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center cursor-pointer">
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
                            <p className="italic text-gray-100">“{p.quote}”</p>
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

                      {/* Bottom Info */}
                      <div className="absolute left-4 right-4 bottom-4 opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                        <div
                          className="backdrop-blur-xl rounded-xl px-4 py-2 shadow-lg flex items-center gap-15"
                          style={{
                            background:
                              'linear-gradient(120deg, rgba(226, 15, 18, 0.2) 40%, rgba(56, 83, 255, 0.2) 60%)',
                            border: '2px solid rgba(255, 255, 255, 0.2)',
                          }}
                        >
                          <div className="min-w-0">
                            <div className="text-white font-semibold text-xs md:text-sm truncate">
                              {p.name}
                            </div>
                            <div className="text-white/70 text-[8px] md:text-xs truncate">
                              {p.title}
                            </div>
                          </div>
                          <div className="flex items-center justify-end md:gap-5 gap-2">
                            <div className="md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center">
                              <FaInstagram />
                            </div>
                            <div className="md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center">
                              <FaXTwitter />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Show All / Show Less Button */}
            {profiles.length > 3 && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="px-8 py-2 rounded-[10px] bg-gradient-to-r from-[#E21717] to-[#3700FF] text-white font-semibold hover:opacity-90 transition"
                >
                  {showAll ? 'Show Less' : 'Show All'}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Team;
