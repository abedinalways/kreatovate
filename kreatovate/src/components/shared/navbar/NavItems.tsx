'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState, useMemo } from 'react';
import TransitionLink from '../TransitionLink';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Props = {
  variant?: 'desktop' | 'mobile';
};

const SECTIONS = [
  'home',
  'about_us',
  'who_we_are',
  'our_services',
  // 'our_pricing',
  'our_team',
  'our_developments',
  'testimonial',
];

const getInitialActive = (pathname: string) => {
  if (pathname === '/' || pathname === '') return 'home';
  if (pathname === '/team') return 'our_team';
  return '';
};

const NavItems = ({ variant = 'desktop' }: Props) => {
  const pathname = usePathname();
  const isHome = pathname === '/' || pathname === '';

  // Derive the active section from pathname - this is the source of truth
  const activeFromRoute = useMemo(() => getInitialActive(pathname), [pathname]);

  // Track scroll-based active section (only used on home page)
  const [scrollActiveSection, setScrollActiveSection] = useState('');

  // Determine which active section to use
  const activeSection =
    isHome && scrollActiveSection ? scrollActiveSection : activeFromRoute;

  const items = [
    { key: 'home', label: 'home' },
    { key: 'about_us', label: 'about us' },
    { key: 'who_we_are', label: 'who we are' },
    { key: 'our_services', label: 'our services' },
    // { key: 'our_pricing', label: 'our pricing' },
    { key: 'our_team', label: 'our team' },
    // { key: 'our_developments', label: 'our developments' },
    {
      external: true,
      href: 'https://kreatovate-projects.lovable.app/projects',
      target: '_blank',
      rel: 'noopener noreferrer',
      label: 'our projects',
    },
    { key: 'testimonial', label: 'testimonial' },
  ];

 
  useEffect(() => {
    if (!isHome) return;

    const triggers: ScrollTrigger[] = [];

    SECTIONS.forEach(id => {
      const section = document.getElementById(id);
      if (!section) return;

      const trigger = ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: () => {
          if (id === 'testimonial') {
            const contact = document.getElementById('contact_us');
            return contact ? contact.offsetTop : 'bottom center';
          }
          return 'bottom center';
        },
        onEnter: () => setScrollActiveSection(id),
        onEnterBack: () => setScrollActiveSection(id),
        onLeave: () => {
          if (id === 'testimonial') {
            setScrollActiveSection('');
          }
        },
      });

      triggers.push(trigger);
    });

    ScrollTrigger.refresh();

    return () => {
      triggers.forEach(t => t.kill());
    };
  }, [isHome]);

  const isActive = (key?: string) => key === activeSection;
  const getHref = (key: string) => (isHome ? `#${key}` : `/#${key}`);

  /* ================= DESKTOP ================= */
  if (variant === 'desktop') {
    return (
      <ul className="flex items-center gap-7 lg:gap-3 capitalize nav-bg p-1 rounded-full">
        {items.map(item => {
          if ('external' in item && item.href) {
            return (
              <li key={item.label} className="px-4 py-2">
                <TransitionLink
                  href={item.href}
                  target={item.target}
                  className="text-white whitespace-nowrap"
                >
                  {item.label}
                </TransitionLink>
              </li>
            );
          }

          const key = item.key;
          if (!key) return null;

          return (
            <li
              key={key}
              className={`px-4 py-2 rounded-[24px] transition-all ${
                isActive(key)
                  ? 'bg-[#ED1C24]/20 border-2 border-red-950 font-semibold'
                  : 'hover:bg-[#ED1C24]/20'
              }`}
            >
              <TransitionLink
                href={getHref(key)}
                className="text-white whitespace-nowrap"
              >
                {item.label}
              </TransitionLink>
            </li>
          );
        })}
      </ul>
    );
  }

  /* ================= MOBILE ================= */
  return (
    <ul className="flex flex-col gap-1 capitalize">
      {items.map(item => {
        if ('external' in item && item.href) {
          return (
            <li key={item.label}>
              <TransitionLink
                href={item.href}
                target={item.target}
                className="block px-4 py-3 text-white rounded-lg"
              >
                {item.label}
              </TransitionLink>
            </li>
          );
        }

        const key = item.key;
        if (!key) return null;

        return (
          <li key={key}>
            <TransitionLink
              href={getHref(key)}
              className={`block px-4 py-3 rounded-lg text-white transition-colors ${
                isActive(key)
                  ? 'bg-[#ED1C24] font-semibold'
                  : 'hover:bg-[#ED1C24]/40'
              }`}
            >
              {item.label}
            </TransitionLink>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
