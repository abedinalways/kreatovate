'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { smoothScrollTo } from '@/lib/smoothScroll';

/* ================= TYPES ================= */

type Props = {
  variant?: 'desktop' | 'mobile';
  headerSelector?: string;
};

type InternalNavItem = {
  id: string;
  label: string;
  sectionId: string;
};

type ExternalNavItem = {
  external: true;
  href: string;
  label: string;
  target?: string;
  rel?: string;
};

type NavItem = InternalNavItem | ExternalNavItem;

/* ================= DATA ================= */

const ITEMS: NavItem[] = [
  { id: '/', label: 'home', sectionId: '#home' },
  { id: '/#about_us', label: 'about us', sectionId: '#about_us' },
  {
    id: '/#our_solutions',
    label: 'our solutions',
    sectionId: '#our_solutions',
  },
  { id: '/#pricing', label: 'pricing', sectionId: '#pricing' },
  {
    external: true,
    href: 'https://beta.kreatovate.com/',
    target: '_blank',
    rel: 'noopener noreferrer',
    label: 'Meet the OS',
  },
];

/* ================= COMPONENT ================= */

const NavItems = ({ variant = 'desktop' }: Props) => {
  const [active, setActive] = useState('#home');
  const isClickingRef = useRef(false);
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});
  const triggersRef = useRef<any[]>([]);

  useEffect(() => {
    sectionsRef.current = ITEMS.reduce(
      (acc, item) => {
        if ('external' in item) return acc;
        acc[item.sectionId] = document.querySelector(item.sectionId);
        return acc;
      },
      {} as Record<string, HTMLElement | null>,
    );

    setActive(window.location.hash || '#home');

    (async () => {
      const [{ default: gsap }, { default: ScrollTrigger }] = await Promise.all(
        [import('gsap'), import('gsap/ScrollTrigger')],
      );

      gsap.registerPlugin(ScrollTrigger);

      ITEMS.forEach(item => {
        if ('external' in item) return;

        const section = sectionsRef.current[item.sectionId];
        if (!section) return;

        const st = ScrollTrigger.create({
          trigger: section,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => {
            if (!isClickingRef.current) setActive(item.sectionId);
          },
          onEnterBack: () => {
            if (!isClickingRef.current) setActive(item.sectionId);
          },
        });

        triggersRef.current.push(st);
      });
    })();

    return () => {
      triggersRef.current.forEach(t => t?.kill?.());
    };
  }, []);

  const handleNavClick = (e: any, sectionId: string) => {
    setActive(sectionId);
    isClickingRef.current = true;

    smoothScrollTo(e, sectionId);

    setTimeout(() => {
      isClickingRef.current = false;
    }, 1000);
  };

  /* ================= MOBILE ================= */

  if (variant === 'mobile') {
    return (
      <ul className="flex flex-col gap-1 capitalize">
        {ITEMS.map(item => {
          if ('external' in item) {
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  target={item.target}
                  rel={item.rel}
                  className="block w-full rounded-lg px-4 py-3 hover:bg-[#ED1C24]/60"
                >
                  {item.label}
                </a>
              </li>
            );
          }

          const isActive = active === item.sectionId;

          return (
            <li key={item.id}>
              <Link
                href={item.id}
                onClick={e => handleNavClick(e, item.sectionId)}
                className={[
                  'block w-full rounded-lg px-4 py-3 transition-colors whitespace-nowrap cursor-pointer',
                  isActive
                    ? 'navbar-background border-red-900 font-semibold'
                    : 'hover:bg-[#ED1C24]/60',
                ].join(' ')}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }

  /* ================= DESKTOP ================= */

  return (
    <ul className="flex items-center gap-7 lg:gap-3 capitalize nav-bg p-1 rounded-full">
      {ITEMS.map(item => {
        if ('external' in item) {
          return (
            <li key={item.href}>
              <a
                href={item.href}
                target={item.target}
                rel={item.rel}
                className="px-6 lg:px-2 py-[7px] rounded-full hover:bg-[#ED1C24]/40 whitespace-nowrap"
              >
                {item.label}
              </a>
            </li>
          );
        }

        const isActive = active === item.sectionId;

        return (
          <li
            key={item.id}
            className={[
              'px-6 lg:px-2 py-[7px] rounded-full transition-all duration-200',
              isActive
                ? 'bg-red-950 border-2 border-red-900 font-semibold'
                : 'hover:bg-[#ED1C24]/40',
            ].join(' ')}
          >
            <Link
              href={item.id}
              onClick={e => handleNavClick(e, item.sectionId)}
              className="whitespace-nowrap py-2"
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
