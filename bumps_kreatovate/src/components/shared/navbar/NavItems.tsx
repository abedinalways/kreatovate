'use client';

import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Link from 'next/link';
import { MouseEvent, useCallback, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type Props = {
  variant?: 'desktop' | 'mobile';
  headerSelector?: string;
};


gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const NavItems = ({ variant = 'desktop', headerSelector = 'nav' }: Props) => {
  const [active, setActive] = useState('#home');
  const router = useRouter();
  const pathname = usePathname();

  const items = [
    { id: '/#home', label: 'Home' },
    { id: '/#about_us', label: 'About Us' },
    { id: '/#our_solutions', label: 'Our Solutions' },
    // { id: '#our_services', label: 'Our Services' },
    { id: '/#our_model', label: 'Our Model' },
    { id: '/dashboard', label: 'Dashboard' },
    { id: '/#our_initiatives', label: 'Our Initiatives' },
    { id: '/#process_overview', label: 'Process Overview' },
    { id: '/#our_vision', label: 'Our Vision' },
    { id: '/price', label: 'Pricing Plan' },
    // { id: '#testimonial', label: 'Testimonial' },
    // { id: '#our_team', label: 'Our Team' },
  ];

  //useCallback ensures scrollToHash reference is stable, fixing ESLint warning
  const scrollToHash = useCallback(
    (hash: string) => {
      if (!hash || !hash.startsWith('#')) return;

      const target = document.querySelector(hash) as HTMLElement | null;
      if (!target) return;

      setActive(hash);
      history.replaceState(null, '', hash);

      const header = document.querySelector(
        headerSelector
      ) as HTMLElement | null;
      const offsetY = (header?.offsetHeight ?? 0) + 8;

      gsap.killTweensOf(window);
      gsap.to(window, {
        duration: 0.8,
        ease: 'power2.out',
        scrollTo: { y: target, offsetY, autoKill: true },
      });
    },
    [headerSelector]
  );

  useEffect(() => {
    if (pathname === '/') {
      setActive(window.location.hash || '#home');
    } else {
      setActive(pathname);
    }
  }, [pathname]);


  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    if (!id.startsWith('#')) {
      setActive(id);
      return;
    }

    if (pathname !== '/') {
      e.preventDefault();
      router.push(`/${id}`);
      return;
    }

    e.preventDefault();
    scrollToHash(id);
  };
  

  useEffect(() => {
    if (pathname !== '/') return;

    items.forEach(item => {
      if (!item.id.startsWith('#')) return;

      const section = document.querySelector(item.id);
      if (!section) return;

      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActive(item.id),
        onEnterBack: () => setActive(item.id),
      });
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, [pathname]);


  useEffect(() => {
    const applyFromHash = () => {
      const hash = window.location.hash;
      if (hash) {
        scrollToHash(hash);
      } else {
        setActive('#home');
      }
    };

    applyFromHash();
    window.addEventListener('hashchange', applyFromHash);
    return () => window.removeEventListener('hashchange', applyFromHash);
  }, [scrollToHash]);

  // ✅ Mobile navigation
  if (variant === 'mobile') {
    return (
      <div>
        <ul className="flex flex-col gap-1 capitalize">
          {items.map(item => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <Link
                  href={item.id}
                  onClick={e => handleNavClick(e, item.id)}
                  className={[
                    'block w-full rounded-lg px-4 py-3 transition-colors whitespace-nowrap',
                    isActive
                      ? 'bg-[#ED1C24] font-semibold'
                      : 'hover:bg-[#ED1C24]/40',
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

  // ✅ Desktop navigation
  return (
    <div>
      <ul className="flex items-center gap-7 lg:gap-3 capitalize bg-white/20 p-1 rounded-full">
        {items.map(item => (
          <li
            key={item.id}
            className={`px-4 md:px-2 md:py-1 rounded-full transition-all duration-200 ${
              active === item.id
                ? 'bg-[#ED1C24] font-semibold'
                : 'hover:bg-[#ED1C24]/40'
            }`}
          >
            <Link
              href={item.id}
              onClick={e => handleNavClick(e, item.id)}
              className="whitespace-nowrap py-1"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavItems;
