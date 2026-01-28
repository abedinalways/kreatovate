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
  { id: '/#about_us', label: 'about us', sectionId: '#about_us' },
  { id: '/#our_solutions', label: 'our solutions', sectionId: '#our_solutions' },
  { id: '/#pricing', label: 'pricing', sectionId: '#pricing' },
  { id: 'meet-the-os', label: 'meet the os', sectionId: '#meet-the-os' },
 
] as const;

const NavItems = ({ variant = 'desktop', headerSelector = 'nav' }: Props) => {
  const [active, setActive] = useState('#home');
  const isClickingRef = useRef(false);
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});
  const gsapRef = useRef<any>(null);
  const triggersRef = useRef<any[]>([]);

  useEffect(() => {
    sectionsRef.current = ITEMS.reduce(
      (acc, item) => {
        // Skip items that don't have valid selectors
        if (item.sectionId) {
          acc[item.sectionId] = document.querySelector(
            item.sectionId,
          ) as HTMLElement | null;
        }
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
      gsapRef.current = gsap;

      ITEMS.forEach(({ sectionId }) => {
        const section = sectionsRef.current[sectionId];
        if (!section) return;

        const st = ScrollTrigger.create({
          trigger: section,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => {
            if (!isClickingRef.current) {
              setActive(sectionId);
            }
          },
          onEnterBack: () => {
            if (!isClickingRef.current) {
              setActive(sectionId);
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

 const handleNavClick = (e: any, sectionId: string) => {
   setActive(sectionId);
   isClickingRef.current = true;

   smoothScrollTo(e, sectionId);

   setTimeout(() => {
     isClickingRef.current = false;
   }, 1000);
 };


 if (variant === 'mobile') {
   return (
     <div>
       <ul className="flex flex-col gap-1 capitalize">
         {ITEMS.map(item => {
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
     </div>
   );
 }


  return (
    <div>
      <ul className="flex items-center gap-7 lg:gap-3 capitalize nav-bg p-1 rounded-full">
        {ITEMS.map(item => {
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
    </div>
  );
};

export default NavItems;
