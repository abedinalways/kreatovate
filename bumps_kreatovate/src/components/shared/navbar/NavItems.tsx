'use client';

import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Link from 'next/link';
import { MouseEvent, useCallback, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

type Props = {
  variant?: 'desktop' | 'mobile';
  headerSelector?: string;
};

gsap.registerPlugin(ScrollToPlugin);

const NavItems = ({ variant = 'desktop', headerSelector = 'nav' }: Props) => {
  const [active, setActive] = useState('#home');
  const router = useRouter();
  const pathname = usePathname();

  const items = [
    { id: '#home', label: 'Home' },
    { id: '#about_us', label: 'About Us' },
    { id: '#our_solutions', label: 'Our Solutions' },
    { id: '#our_services', label: 'Our Services' },
    { id: '#our_books', label: 'Our Books' },
    { id: '/price', label: 'Pricing Plan' },
    { id: '#testimonial', label: 'Testimonial' },
    { id: '#our_team', label: 'Our Team' },
  ];

  // ✅ useCallback ensures scrollToHash reference is stable, fixing ESLint warning
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
    [headerSelector] // ✅ dependency properly declared
  );

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    // Non-hash routes (e.g., /price) should navigate normally
    if (!id.startsWith('#')) return;

    // If not on the homepage, redirect to '/#section'
    if (pathname !== '/') {
      e.preventDefault();
      router.push(`/${id}`);
      return;
    }

    // Already on homepage → smooth scroll
    e.preventDefault();
    scrollToHash(id);
  };

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
  }, [scrollToHash]); // ✅ Added dependency

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
