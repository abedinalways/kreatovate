'use client';

import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { MouseEvent, useCallback, useEffect, useState } from 'react';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

type Props = {
  variant?: 'desktop' | 'mobile';
  headerSelector?: string;
};

type NavItem = {
  label: string;
  href: string;
  hash?: string;
};

const ITEMS: NavItem[] = [
  { label: 'Home', href: '/', hash: '#home' },
  { label: 'About Us', href: '/', hash: '#about_us' },
  { label: 'Our Solutions', href: '/', hash: '#our_solutions' },
  { label: 'Our Model', href: '/', hash: '#our_model' },
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Our Initiatives', href: '/', hash: '#our_initiatives' },
  { label: 'Process Overview', href: '/', hash: '#process_overview' },
  { label: 'Our Vision', href: '/', hash: '#our_vision' },
  { label: 'Pricing Plan', href: '/price' },
];

const NavItems = ({ variant = 'desktop', headerSelector = 'nav' }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const [active, setActive] = useState<string>('#home');

  // 🔹 Smooth scroll helper
  const scrollToHash = useCallback(
    (hash: string) => {
      if (!hash) return;

      const target = document.querySelector(hash) as HTMLElement | null;
      if (!target) return;

      const header = document.querySelector(
        headerSelector,
      ) as HTMLElement | null;

      const offsetY = (header?.offsetHeight ?? 0) + 8;

      setActive(hash);
      history.replaceState(null, '', hash);

      gsap.killTweensOf(window);
      gsap.to(window, {
        duration: 0.8,
        ease: 'power2.out',
        scrollTo: { y: target, offsetY, autoKill: true },
      });
    },
    [headerSelector],
  );

  // 🔹 Handle click
  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    if (!item.hash) {
      setActive(item.href);
      return;
    }

    e.preventDefault();

    if (pathname !== '/') {
      router.push(`/${item.hash}`);
      return;
    }

    scrollToHash(item.hash);
  };

  // 🔹 Set active on route change
  useEffect(() => {
    if (pathname === '/') {
      setActive(window.location.hash || '#home');
    } else {
      setActive(pathname);
    }
  }, [pathname]);

  // 🔹 ScrollTrigger sync
  useEffect(() => {
    if (pathname !== '/') return;

    const triggers: ScrollTrigger[] = [];

    ITEMS.forEach(item => {
      if (!item.hash) return;

      const section = document.querySelector(item.hash);
      if (!section) return;

      const trigger = ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActive(item.hash!),
        onEnterBack: () => setActive(item.hash!),
      });

      triggers.push(trigger);
    });

    // 🔹 Add ScrollTrigger for contact_us section to clear active state
    const contactSection = document.querySelector('#contact_us');
    if (contactSection) {
      const contactTrigger = ScrollTrigger.create({
        trigger: contactSection,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActive(''), // Clear active state
        onEnterBack: () => {
          // When scrolling back up, set to the last nav item
          const lastNavItem = ITEMS.filter(item => item.hash).pop();
          if (lastNavItem?.hash) setActive(lastNavItem.hash);
        },
      });
      triggers.push(contactTrigger);
    }

    return () => triggers.forEach(t => t.kill());
  }, [pathname]);

  // 🔹 Apply hash on refresh / direct link
  useEffect(() => {
    const applyFromHash = () => {
      const hash = window.location.hash;
      if (hash) scrollToHash(hash);
    };

    applyFromHash();
    window.addEventListener('hashchange', applyFromHash);
    return () => window.removeEventListener('hashchange', applyFromHash);
  }, [scrollToHash]);

  // 🔹 Mobile UI
  if (variant === 'mobile') {
    return (
      <ul className="flex flex-col gap-1 capitalize">
        {ITEMS.map(item => {
          const isActive = item.hash
            ? active === item.hash
            : active === item.href;

          return (
            <li key={item.label}>
              <Link
                href={item.hash ? `${item.href}${item.hash}` : item.href}
                onClick={e => handleNavClick(e, item)}
                className={[
                  'block w-full rounded-lg px-4 py-3 transition-colors',
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
    );
  }

  // 🔹 Desktop UI
  return (
    <ul className="flex items-center capitalize bg-white/20 p-1 rounded-full ">
      {ITEMS.map(item => {
        const isActive = item.hash
          ? active === item.hash
          : active === item.href;

        return (
          <li
            key={item.label}
            className={`px-4 py-1 text-[16px] rounded-full transition-all ${
              isActive ? 'bg-[#ED1C24] font-semibold' : 'hover:bg-[#ED1C24]/40'
            }`}
          >
            <Link
              href={item.hash ? `${item.href}${item.hash}` : item.href}
              onClick={e => handleNavClick(e, item)}
              className="whitespace-nowrap"
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
