export const smoothScrollTo = async (
  e: any,
  id: string,
  headerSelector = "nav"
) => {
  if (!id.startsWith("#")) return;

  const target = document.querySelector(id) as HTMLElement | null;
  if (!target) return;

  e.preventDefault();

  const header = document.querySelector(headerSelector) as HTMLElement | null;
  const offsetY = (header?.offsetHeight ?? 0) + 8;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    const top = target.getBoundingClientRect().top + window.scrollY - offsetY;
    window.scrollTo({ top, behavior: "smooth" });
    history.replaceState(null, "", id);
    return;
  }

  const { default: gsap } = await import("gsap");
  const { default: ScrollToPlugin } = await import("gsap/ScrollToPlugin");

  gsap.registerPlugin(ScrollToPlugin);

  gsap.to(window, {
    duration: 0.8,
    ease: "power2.out",
    scrollTo: { y: target, offsetY, autoKill: true },
    onComplete: () => {
      history.replaceState(null, "", id);
    },
  });
};
