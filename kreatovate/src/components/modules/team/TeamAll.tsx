"use client";
import React, { useState, useEffect, useRef } from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import gsap from "gsap";
import Image from "next/image";
import HeadingButton from "@/components/shared/buttons/HeadingButton";

type Profile = {
  id: string | number;
  img: string;
  name: string;
  title: string;
  quote?: string;
  description?: string;
  superpower?: string;
  weakness?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
};

const TeamAll = () => {
  const [showAll, setShowAll] = useState(false);
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const cardsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let mounted = true;

    fetch("/profiles.json")
      .then((res) => res.json() as Promise<Profile[]>)
      .then((data) => {
        if (!mounted) return;

        const safe = (Array.isArray(data) ? data : []).filter(
          (p): p is Profile =>
            !!p &&
            typeof p === "object" &&
            "id" in p &&
            "img" in p &&
            "name" in p &&
            "title" in p
        );
        setProfiles(safe);
      })
      .catch((err) => console.error("Failed to load profiles:", err));

    return () => {
      mounted = false;
    };
  }, []);

  const visible = showAll ? profiles : profiles.slice(0, 3);

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
        ease: "power3.out",
      }
    );
  }, [visible]);

  useEffect(() => {
    const btn = buttonRef.current;
    if (!btn) return;

    const onEnter = () => gsap.to(btn, { scale: 1.05, duration: 0.2 });
    const onLeave = () => gsap.to(btn, { scale: 1, duration: 0.2 });
    const onDown = () => gsap.to(btn, { scale: 0.95, duration: 0.1 });
    const onUp = () => gsap.to(btn, { scale: 1.05, duration: 0.1 });

    btn.addEventListener("mouseenter", onEnter);
    btn.addEventListener("mouseleave", onLeave);
    btn.addEventListener("mousedown", onDown);
    btn.addEventListener("mouseup", onUp);

    return () => {
      btn.removeEventListener("mouseenter", onEnter);
      btn.removeEventListener("mouseleave", onLeave);
      btn.removeEventListener("mousedown", onDown);
      btn.removeEventListener("mouseup", onUp);
    };
  }, []);

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
        <div className="flex justify-center items-center mb-4 mt-6">
          <HeadingButton btnText="OUR AI WORKFORCE TEAM" />
        </div>

        <h2 className="text-3xl md:text-5xl text-center font-bold">
          Kreatovate <span className="text-color-gradient">Team</span>
        </h2>

        <div className="flex justify-center">
          <section className="max-w-6xl mx-auto py-12 px-4">
            {/* Grid */}
            <div
              ref={cardsRef}
              className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch"
            >
              {visible.map((p) => (
                <div
                  key={p.id}
                  className="relative rounded-2xl px-4 py-2 shadow-2xl group transition-all duration-500"
                >
                  <div className="relative w-full rounded-xl p-px bg-linear-to-r from-[#E93D3D] to-[#4E30FE]">
                    <div className="relative rounded-2xl overflow-hidden w-full h-full bg-[#1A1A1A] group-hover:scale-[1.02] transition-transform duration-500">
                      <div className="relative h-98 w-74">
                        <Image
                          width={500}
                          height={500}
                          src={p.img}
                          alt={p.name || "Team member image"}
                          className="object-cover w-full h-full mx-auto transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>

                      {/* Hover Overlay */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out p-6 flex flex-col justify-between text-white"
                        style={{
                          background:
                            "linear-gradient(90deg, rgba(226, 23, 23, 0.9) 0%, rgba(55, 0, 255, 0.9) 100%)",
                        }}
                      >
                        <div className="flex justify-around">
                          <div className="flex gap-2">
                            <div className="rounded-full w-1/4">
                              <Image
                                width={30}
                                height={30}
                                src={p.img}
                                alt={p.name || "Team member image"}
                                className="rounded-full border-1 border-[#D1C8C8] bg-[#D1C8C8]"
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
                          {p.quote && (
                            <p className="italic text-gray-200 mb-2">
                              “{p.quote}”
                            </p>
                          )}
                          {p.description && <p>{p.description}</p>}
                          {p.superpower && (
                            <p className="mt-2">
                              <span className="font-bold text-gray-200">
                                Superpower:
                              </span>{" "}
                              {p.superpower}
                            </p>
                          )}
                          {p.weakness && (
                            <p>
                              <span className="font-bold text-gray-200">
                                Weakness:
                              </span>{" "}
                              {p.weakness}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Info */}
                    <div className="absolute bottom-4 opacity-100 group-hover:opacity-0 transition-all duration-500 w-[274px] mx-4">
                      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl px-4 py-2 shadow-lg flex items-center gap-2">
                        <div className="flex-1">
                          <div className="text-white font-semibold text-sm">
                            {p.name}
                          </div>
                          <div className="text-white/70 text-xs">{p.title}</div>
                        </div>
                        <a
                          href={p.facebook || "#"}
                          aria-label="Facebook"
                          className="w-6 h-6 rounded-full bg-gradient-to-r from-white/10 to-white/5 flex items-center justify-center"
                        >
                          <BsFacebook />
                        </a>
                        <a
                          href={p.twitter || "#"}
                          aria-label="Twitter"
                          className="w-6 h-6 rounded-full bg-gradient-to-r from-white/10 to-white/5 flex items-center justify-center"
                        >
                          <BsTwitter />
                        </a>
                        <a
                          href={p.instagram || "#"}
                          aria-label="Instagram"
                          className="w-6 h-6 rounded-full bg-gradient-to-r from-white/10 to-white/5 flex items-center justify-center"
                        >
                          <BsInstagram />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Show All Button */}
            <div className="flex justify-center mt-10">
              <div className="rounded-[12px] p-[2px] bg-gradient-to-r from-[#E21717] to-[#3700FF] inline-block mx-auto z-5">
                <button
                  ref={buttonRef}
                  onClick={() => setShowAll((s) => !s)}
                  className="px-8 py-1 rounded-[10px] bg-black text-white transition-all duration-300"
                >
                  {showAll ? "Show Less" : "See All"}
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TeamAll;
