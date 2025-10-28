'use client';
import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import Image from 'next/image';
import { BsFacebook } from 'react-icons/bs';
import { gsap } from 'gsap';
import HeadingButton from '../shared/buttons/HeadingButton';

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
  const [showAll, setShowAll] = useState(false);
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const cardsRef = useRef<HTMLDivElement>(null);

  // Fetch data from /public/profiles.json
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

  const visible = useMemo(
    () => (showAll ? profiles : profiles.slice(0, 4)),
    [showAll, profiles]
  );

  // Animate cards whenever the visible list changes
  useLayoutEffect(() => {
    if (!cardsRef.current) return;
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('[data-card]');
      gsap.fromTo(
        cards,
        { opacity: 0, y: 20, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power3.out',
        }
      );
    }, cardsRef);
    return () => ctx.revert();
  }, [visible.length, showAll]);

  // Optional: animate section on enter viewport
  const sectionRef = useRef<HTMLDivElement>(null);
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
    <div className="relative w-full" id="team">
      {/* Decorative Backgrounds */}
      <div className="pointer-events-none absolute -top-40 left-0 w-full h-full -z-10">
        <Image
          src="/images/team-ellipse1.png"
          alt=""
          width={500}
          height={500}
          className="object-cover w-[320px] h-80 md:w-[400px] md:h-[400px] rounded-full opacity-70"
          priority
        />
      </div>

      <div className="pointer-events-none absolute top-10 right-10 w-full h-full -z-10">
        <Image
          src="/images/team-ellipse-2.png"
          alt=""
          width={500}
          height={500}
          className="object-cover w-[320px] h-80 md:w-[400px] md:h-[400px] rounded-full opacity-70"
          priority
        />
      </div>

      {/* Team Section */}
      <div
        ref={sectionRef}
        className="custom-container px-4 md:px-5 lg:px-12 py-20 flex-col gap-8 justify-center items-center"
      >
        <div className="flex justify-center items-center mb-4 mt-6">
          <HeadingButton btnText="Our Team" />
        </div>

        <h2 className="text-3xl md:text-5xl text-center font-bold">
          The People Behind{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E93D3D] to-[#4E30FE]">
            Kreatovate
          </span>
        </h2>

        <div className="flex justify-center">
          <section className="w-full max-w-6xl mx-auto py-12 px-2 sm:px-4">
            {/* Grid */}
            <div
              ref={cardsRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
            >
              {loading &&
                Array.from({ length: 4 }).map((_, i) => (
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

              {!loading && error && (
                <div className="col-span-full text-center text-red-400">
                  {error}
                </div>
              )}

              {!loading &&
                !error &&
                visible.map(p => (
                  <article
                    key={p.id}
                    data-card
                    className="relative rounded-2xl p-2 shadow-2xl group transition-all duration-500 focus-within:ring-2 focus-within:ring-white/20"
                  >
                    <div className="relative w-full rounded-2xl p-px bg-gradient-to-r from-[#E93D3D] to-[#4E30FE]">
                      <div className="relative rounded-2xl overflow-hidden bg-[#1A1A1A] group-hover:scale-[1.01] transition-transform duration-500">
                        <div className="w-full aspect-3/4">
                          <Image
                            width={800}
                            height={1066}
                            src={p.img}
                            alt={
                              p.name ? `${p.name} – ${p.title}` : 'Team member'
                            }
                            className="object-cover w-full h-full mx-auto transition-transform duration-700 group-hover:scale-105"
                            sizes="(min-width: 1024px) 22rem, (min-width: 640px) 50vw, 100vw"
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
                                alt=""
                                className="rounded-full border border-[#D1C8C8] bg-white/10 shrink-0"
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
                            <div className="w-10 h-8 rounded-md bg-white/10 flex items-center justify-center">
                              {p.facebookUrl ? (
                                <a
                                  href={p.facebookUrl}
                                  target="_blank"
                                  rel="noreferrer noopener"
                                  aria-label={`Open ${p.name}'s Facebook profile`}
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

                      {/* Bottom Info (shown when not hovered) */}
                      <div className="absolute left-4 right-4 bottom-4 opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                        <div className="backdrop-blur-xl  bg-white/20 border border-white/20 rounded-xl px-4 py-2 shadow-lg flex items-center justify-between">
                          <div className="min-w-0">
                            <div className="text-white font-semibold text-sm truncate">
                              {p.name}
                            </div>
                            <div className="text-white/70 text-xs truncate">
                              {p.title}
                            </div>
                          </div>
                          <div className="w-10 h-8 rounded-md bg-white/10 flex items-center justify-center">
                            {p.facebookUrl ? (
                              <a
                                href={p.facebookUrl}
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label={`Open ${p.name}'s Facebook profile`}
                                className="inline-flex"
                              >
                                <BsFacebook />
                              </a>
                            ) : (
                              <BsFacebook aria-hidden />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
            </div>

            {/* Toggle Button */}
            {!loading && profiles.length > 4 && (
              <div className="flex justify-center mt-10">
                <div className="rounded-[12px] p-0.5 bg-gradient-to-r from-[#E21717] to-[#3700FF] inline-block">
                  <button
                    onClick={() => setShowAll(s => !s)}
                    className="px-8 py-2 rounded-[10px] bg-black text-white transition-transform duration-200  active:scale-95 cursor-pointer"
                    aria-expanded={showAll}
                    aria-controls="team-grid"
                  >
                    {showAll ? 'Show Less' : 'See All'}
                  </button>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Team;
