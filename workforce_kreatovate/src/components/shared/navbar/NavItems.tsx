'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { smoothScrollTo } from '@/lib/smoothScroll';

type Props = {
  variant?: 'desktop' | 'mobile';
  headerSelector?: string;
};

const ITEMS = [
  { id: '/', label: 'home', sectionId: '#home' },
  { id: '#about_us', label: 'about us', sectionId: '#about_us' },
  { id: '#our_blurbs', label: 'our blurbs', sectionId: '#our_blurbs' },
  { id: '#price', label: 'price', sectionId: '#price' },
  { id: 'meet-the-os', label: 'meet the os', sectionId: '#meet-the-os' },
  // { id: '#contact_us', label: 'contact us', sectionId: '#contact_us' },
] as const;

const NavItems = ({ variant = 'desktop', headerSelector = 'nav' }: Props) => {
  const [active, setActive] = useState('/');
  const isClickingRef = useRef(false);
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});
  const gsapRef = useRef<any>(null);
  const triggersRef = useRef<any[]>([]);

  useEffect(() => {
    sectionsRef.current = ITEMS.reduce(
      (acc, item) => {
        // Skip items that don't have valid selectors
        if (item.sectionId) {
          acc[item.id] = document.querySelector(
            item.sectionId,
          ) as HTMLElement | null;
        }
        return acc;
      },
      {} as Record<string, HTMLElement | null>,
    );

    setActive(window.location.hash || '/');

    (async () => {
      const [{ default: gsap }, { default: ScrollTrigger }] = await Promise.all(
        [import('gsap'), import('gsap/ScrollTrigger')],
      );
      gsap.registerPlugin(ScrollTrigger);
      gsapRef.current = gsap;

      ITEMS.forEach(({ id, sectionId }) => {
        const section = sectionsRef.current[id];
        if (!section) return;

        const st = (ScrollTrigger as any).create({
          trigger: section,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => {
            if (!isClickingRef.current) {
              setActive(id);
            }
          },
          onEnterBack: () => {
            if (!isClickingRef.current) {
              setActive(id);
            }
          },
        });
        triggersRef.current.push(st);
      });
    })();

    return () => {
      triggersRef.current.forEach(t => t?.kill?.());
    };
  }, []);

  const handleNavClick = (e: any, id: string) => {
    // Immediately set active state
    setActive(id);

    // Disable ScrollTrigger updates during smooth scroll
    isClickingRef.current = true;

    smoothScrollTo(e, id);

    // Re-enable ScrollTrigger after scroll completes
    setTimeout(() => {
      isClickingRef.current = false;
    }, 1000); // Adjust timing based on your smooth scroll duration
  };

  if (variant === 'mobile') {
    return (
      <div>
        <ul className="flex flex-col gap-1 capitalize">
          {ITEMS.map(item => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <Link
                  href={item.id}
                  onClick={e => handleNavClick(e, item.id)}
                  className={[
                    'block w-full rounded-lg px-4 py-3 transition-colors whitespace-nowrap cursor-pointer',
                    isActive
                      ? 'bg-[#ED1C24] font-semibold'
                      : 'hover:bg-[#ED1C24]/60',
                  ].join(' ')}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <div>
      <ul className="flex items-center gap-7 lg:gap-3 capitalize bg-white/10 p-1 rounded-full">
        {ITEMS.map(item => {
          const isActive = active === item.id;
          return (
            <li
              key={item.id}
              className={[
                'px-4 lg:px-2 py-1 rounded-full transition-all duration-200',
                isActive
                  ? 'bg-[#ED1C24] font-semibold'
                  : 'hover:bg-[#ED1C24]/40',
              ].join(' ')}
            >
              <Link
                href={item.id}
                onClick={e => handleNavClick(e, item.id)}
                className="whitespace-nowrap py-2"
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavItems;
