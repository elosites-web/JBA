import { useEffect } from 'react';

/**
 * Hook to automatically observe elements with class 'reveal-on-scroll'
 * and add 'is-revealed' class when they scroll into view.
 *
 * Respects 'prefers-reduced-motion' by immediately revealing elements
 * without animation when the user prefers reduced motion.
 */
export function useScrollReveal() {
  useEffect(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    const revealAllImmediately = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll');
      elements.forEach((el) => {
        el.classList.add('is-revealed');
      });
    };

    if (prefersReducedMotion.matches) {
      revealAllImmediately();
      return;
    }

    // Set up IntersectionObserver
    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          // Unobserve once revealed to keep performance optimal
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1,
    });

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => {
      observer.observe(el);
    });

    // Handle dynamic motion preference changes
    const handleMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        revealAllImmediately();
      }
    };

    prefersReducedMotion.addEventListener('change', handleMotionChange);

    return () => {
      observer.disconnect();
      prefersReducedMotion.removeEventListener('change', handleMotionChange);
    };
  }, []);
}
