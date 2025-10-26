'use client';
import React, { useState, useEffect, useRef } from 'react';
import { BsFacebook } from 'react-icons/bs';
import { gsap } from 'gsap';
import Image from 'next/image';
import HeadingButton from '@/components/shared/buttons/HeadingButton';
import SectionHead from '@/components/shared/SectionHead';

const TeamAll = () => {
  const [profiles, setProfiles] = useState<any[]>([]);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('/profiles.json')
      .then(res => res.json())
      .then(data => setProfiles(data))
      .catch(err => console.error('Failed to load profiles:', err));
  }, []);

  // Animate cards on mount
  useEffect(() => {
    if (!cardsRef.current) return;
    const cards = Array.from(cardsRef.current.children) as HTMLElement[];

    gsap.fromTo(
      cards,
      { opacity: 0, y: 20, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      }
    );
  }, [profiles]);

  return (
    <div className="relative w-full" id="team">
      {/* Background Image 1 */}
      <div className="absolute -top-40 md:left-370 w-full h-full z-0">
        <Image
          src="/images/team-ellipse1.png"
          alt="team bg 1"
          width={500}
          height={500}
          className="object-cover w-[400px] h-[400px] rounded-full opacity-80"
        />
      </div>

      {/* Background Image 2 */}
      <div className="absolute top-10 right-10 w-full h-full z-0">
        <Image
          src="/images/team-ellipse-2.png"
          alt="team bg 2"
          width={500}
          height={500}
          className="object-cover w-[400px] h-[400px] rounded-full opacity-80"
        />
      </div>

      {/* Team Section */}
      <div className="custom-container px-4 sm:px-36 md:px-5 py-20 flex-col gap-8 justify-center items-center">
        <div className="w-fit mx-auto">
          <SectionHead title="OUR TEAM" />
        </div>

        <h2 className=" text-3xl md:text-5xl text-center font-bold">
          The People Behind{' '}
          <span className="text-color-gradient">Kreatovate</span>
        </h2>

        <div className="flex justify-center">
          <section className="w-full max-w-6xl mx-auto py-12 px-4">
            {/* Grid */}
            <div
              ref={cardsRef}
              className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch"
            >
              {profiles.map(p => (
                <div
                  key={p.id}
                  className="relative rounded-2xl px-2 py-2 shadow-2xl group transition-all duration-500"
                >
                  <div className="relative w-full rounded-xl p-px bg-linear-to-r from-[#E93D3D] to-[#4E30FE]">
                    <div className="relative rounded-2xl overflow-hidden w-full h-full bg-[#1A1A1A]  group-hover:scale-[1.02] transition-transform duration-500">
                      <div className="relative h-90 w-60">
                        <Image
                          width={500}
                          height={500}
                          src={p.img}
                          alt={p.name || 'Team member image'}
                          className="object-cover w-full h-full mx-auto transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>

                      {/* Hover Overlay */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out p-6 flex flex-col justify-between text-white"
                        style={{
                          background:
                            'linear-gradient(90deg, rgba(226, 23, 23, 0.9) 0%, rgba(55, 0, 255, 0.9) 100%)',
                        }}
                      >
                        <div className="flex justify-around">
                          <div className="flex gap-2">
                            <div className="rounded-full w-1/4">
                              <Image
                                width={30}
                                height={30}
                                src={p.img}
                                alt={p.name || 'Team member image'}
                                className="rounded-full  border-1 border-[#D1C8C8] bg-[#D1C8C8]"
                              />
                            </div>
                            <div>
                              <h3 className="text-sm font-semibold">
                                {p.name}
                              </h3>
                              <p className="text-xs text-gray-300">{p.title}</p>
                            </div>
                          </div>
                          <div className="w-12 h-8 rounded-md bg-gradient-to-r from-white/10 to-white/5 flex items-center justify-center">
                            <BsFacebook />
                          </div>
                        </div>

                        <div className="mt-3 text-sm leading-relaxed">
                          <p className="italic text-gray-200 mb-2">
                            “{p.quote}”
                          </p>
                          <p>{p.description}</p>
                          <p className="mt-2">
                            <span className="font-bold text-gray-200">
                              Superpower:
                            </span>{' '}
                            {p.superpower}
                          </p>
                          <p>
                            <span className="font-bold text-gray-200">
                              Weakness:
                            </span>{' '}
                            {p.weakness}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Info */}
                    <div className="absolute left-4 right-4 bottom-4 opacity-100 group-hover:opacity-0 transition-all duration-500">
                      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl px-4 py-3 shadow-lg flex items-center justify-between">
                        <div>
                          <div className="text-white font-semibold text-sm">
                            {p.name}
                          </div>
                          <div className="text-white/70 text-xs">{p.title}</div>
                        </div>
                        <div className="w-12 h-8 rounded-md bg-gradient-to-r from-white/10 to-white/5 flex items-center justify-center">
                          <BsFacebook />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TeamAll;
