import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X } from 'lucide-react';
import { siteConfig, buildWhatsAppLink } from '../config/siteConfig';
import { BrandLogo } from './BrandLogo';
import { WhatsAppIcon } from './WhatsAppIcon';
import { HeaderGlassEtchings } from './HeaderGlassEtchings';

/**
 * Isolated Scroll Progress Bar
 * Uses direct GPU-composited transform updates throttled via requestAnimationFrame.
 * Employs cached document dimensions and change-guarded DOM attribute updates
 * to completely eliminate layout reflows and prevent re-rendering the Header.
 */
const ScrollProgressBar: React.FC = React.memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const glowTipRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let ticking = false;
    let rafId: number | null = null;
    let lastReportedValue = -1;
    let lastGlowState = false;

    // Cache scrollable height to avoid querying layout dimensions (scrollHeight / innerHeight)
    // synchronously on every scroll event, preventing forced layout reflows.
    let maxScrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);

    const recalculateDimensions = () => {
      maxScrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      requestUpdate();
    };

    const updateProgress = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const progress = Math.min(100, Math.max(0, (scrollY / maxScrollable) * 100));

      // GPU hardware-accelerated translation: zero layout reflow, composite-only
      if (barRef.current) {
        barRef.current.style.transform = `translate3d(-${(100 - progress).toFixed(2)}%, 0, 0)`;
      }

      // Update ARIA attribute only when integer value actually changes
      const rounded = Math.round(progress);
      if (rounded !== lastReportedValue && containerRef.current) {
        containerRef.current.setAttribute('aria-valuenow', String(rounded));
        lastReportedValue = rounded;
      }

      // Toggle glow tip opacity only on boundary transition
      const hasGlow = progress > 0.5;
      if (hasGlow !== lastGlowState && glowTipRef.current) {
        glowTipRef.current.style.opacity = hasGlow ? '1' : '0';
        lastGlowState = hasGlow;
      }

      ticking = false;
    };

    const requestUpdate = () => {
      if (!ticking) {
        ticking = true;
        rafId = requestAnimationFrame(updateProgress);
      }
    };

    // Passive scroll listener: throttled to screen refresh rate via requestAnimationFrame
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', recalculateDimensions, { passive: true });

    // Efficiently listen for dynamic content expansions (accordions, lazy images)
    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined' && document.body) {
      resizeObserver = new ResizeObserver(() => {
        recalculateDimensions();
      });
      resizeObserver.observe(document.body);
    }

    // Initial calculation
    updateProgress();

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', recalculateDimensions);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      role="progressbar"
      aria-label="Progresso de rolagem da página"
      aria-valuenow={0}
      aria-valuemin={0}
      aria-valuemax={100}
      className="absolute top-0 left-0 w-full h-[3px] bg-black/30 pointer-events-none overflow-hidden z-50"
    >
      <div
        ref={barRef}
        className="scroll-progressbar-fill w-full h-full bg-gradient-to-r from-[#165C2A] via-[#2B921D] to-[#77D100] relative"
        style={{ transform: 'translate3d(-100%, 0, 0)' }}
      >
        <span
          ref={glowTipRef}
          aria-hidden="true"
          className="absolute right-0 top-0 h-full w-[8px] rounded-r-full pointer-events-none transition-opacity duration-150"
          style={{
            opacity: 0,
            background: 'linear-gradient(90deg, rgba(203, 213, 225, 0.3), #CBD5E1 35%, #E2E8F0 70%, #FFFFFF 100%)',
            boxShadow: '0 0 3px rgba(226, 232, 240, 0.95), 1px 0 3px rgba(255, 255, 255, 0.95)',
          }}
        />
      </div>
    </div>
  );
});

ScrollProgressBar.displayName = 'ScrollProgressBar';

export const Header: React.FC = () => {
  const headerRef = useRef<HTMLElement>(null);
  const headerBarRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState<number>(80);
  const headerHeightRef = useRef<number>(80);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobileMenuOpenRef = useRef(false);
  isMobileMenuOpenRef.current = isMobileMenuOpen;
  const [activeSection, setActiveSection] = useState<string>('servicos');
  const activeSectionRef = useRef<string>('servicos');
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const isScrollLockedRef = useRef(false);
  const isNavigatingRef = useRef(false);
  const navigationTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Exact navigation order matching actual page scroll sequence
  const navLinks = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Destaques', href: '#destaques' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Perguntas Frequentes', href: '#faq' },
    { label: 'Solicitar Visita', href: '#orcamento' },
  ];

  // Single authoritative source of truth: measure actual sticky header rendered height and sync CSS variable
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (!headerRef.current) return;
      const height = Math.round(headerRef.current.getBoundingClientRect().height);
      if (height > 0) {
        document.documentElement.style.setProperty('--jba-header-height', `${height}px`);
        headerHeightRef.current = height;
        setHeaderHeight((prev) => (Math.abs(prev - height) >= 2 ? height : prev));
      }
    };

    updateHeaderHeight();

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined' && headerRef.current) {
      resizeObserver = new ResizeObserver(() => {
        updateHeaderHeight();
      });
      resizeObserver.observe(headerRef.current);
    }

    window.addEventListener('resize', updateHeaderHeight, { passive: true });
    window.addEventListener('orientationchange', updateHeaderHeight, { passive: true });

    return () => {
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener('resize', updateHeaderHeight);
      window.removeEventListener('orientationchange', updateHeaderHeight);
    };
  }, []);

  // High-precision, deterministic Scroll Spy driven by authoritative header height
  // Automatically paused when mobile menu is open or during programmatic navigation
  useEffect(() => {
    const sectionIds = ['servicos', 'destaques', 'galeria', 'como-funciona', 'diferenciais', 'faq', 'orcamento'];

    const calculateActiveSection = () => {
      // Never override user selection while mobile menu is open or during programmatic smooth scrolling
      if (isMobileMenuOpenRef.current || isNavigatingRef.current) return;

      const scrollY = window.scrollY || window.pageYOffset || 0;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Bottom of page detection (highlights 'orcamento')
      if (windowHeight + scrollY >= docHeight - 80) {
        if (activeSectionRef.current !== 'orcamento') {
          activeSectionRef.current = 'orcamento';
          setActiveSection('orcamento');
        }
        return;
      }

      // Very top of page (Hero area before 'servicos')
      if (scrollY < 200) {
        if (activeSectionRef.current !== 'servicos') {
          activeSectionRef.current = 'servicos';
          setActiveSection('servicos');
        }
        return;
      }

      // Detection line right below sticky header
      const currentHeaderHeight =
        headerHeightRef.current || (headerRef.current?.getBoundingClientRect().height ?? 80);
      const detectionLine = currentHeaderHeight + 70;

      let matchedId = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= detectionLine && rect.bottom > currentHeaderHeight) {
          matchedId = id;
          break;
        }
      }

      if (matchedId && matchedId !== activeSectionRef.current) {
        activeSectionRef.current = matchedId;
        setActiveSection(matchedId);
      }
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          calculateActiveSection();
          ticking = false;
        });
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    calculateActiveSection();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [headerHeight]);

  const lockBodyScroll = () => {
    if (isScrollLockedRef.current) return;
    document.body.style.overflow = 'hidden';
    isScrollLockedRef.current = true;
  };

  const unlockBodyScroll = () => {
    if (!isScrollLockedRef.current) return;
    isScrollLockedRef.current = false;
    document.body.style.overflow = '';
  };

  const closeMobileMenu = (restoreFocus = true) => {
    setIsMobileMenuOpen(false);
    unlockBodyScroll();
    if (restoreFocus) {
      menuButtonRef.current?.focus({ preventScroll: true });
    }
  };

  // Close mobile drawer on Escape key and return focus without causing scroll
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMobileMenu(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Mobile scroll lock while menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      lockBodyScroll();
    } else {
      unlockBodyScroll();
    }

    return () => {
      unlockBodyScroll();
    };
  }, [isMobileMenuOpen]);

  // Centralized single navigation execution path
  const handleNavClick = (href: string) => {
    const id = href.replace('#', '');
    if (id) {
      activeSectionRef.current = id;
      setActiveSection(id);
    }

    // Set navigating flag to prevent scroll spy overrides during smooth scrolling
    isNavigatingRef.current = true;
    if (navigationTimerRef.current) clearTimeout(navigationTimerRef.current);
    navigationTimerRef.current = setTimeout(() => {
      isNavigatingRef.current = false;
    }, 1200);

    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      unlockBodyScroll();
    }

    // Measure target and execute single smooth scroll in next frame once layout has settled
    requestAnimationFrame(() => {
      const target = document.querySelector<HTMLElement>(href);
      if (target) {
        const actualHeaderHeight =
          headerHeightRef.current ||
          (headerRef.current ? headerRef.current.getBoundingClientRect().height : 80);
        const targetTop = target.getBoundingClientRect().top + window.scrollY;
        const scrollPosition = Math.max(0, Math.round(targetTop - actualHeaderHeight));

        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth',
        });

        // Delay state update slightly to avoid synchronous layout re-evaluation during initial smooth scroll frame
        setTimeout(() => {
          if (window.history && window.history.replaceState) {
            window.history.replaceState(null, '', href);
          }
        }, 50);
      }
    });
  };

  // Support direct URL hash and browser history (popstate) navigation
  useEffect(() => {
    const scrollToTarget = (targetElement: HTMLElement, smooth = true) => {
      const actualHeaderHeight =
        headerHeightRef.current ||
        (headerRef.current ? headerRef.current.getBoundingClientRect().height : 80);
      const targetTop = targetElement.getBoundingClientRect().top + window.scrollY;
      const scrollPosition = Math.max(0, Math.round(targetTop - actualHeaderHeight));

      window.scrollTo({
        top: scrollPosition,
        behavior: smooth ? 'smooth' : 'auto',
      });
    };

    // On initial mount, if URL has a hash, align section exactly with sticky header bottom
    if (window.location.hash) {
      const hash = window.location.hash;
      const align = (smooth = false) => {
        const target = document.querySelector<HTMLElement>(hash);
        if (target) {
          scrollToTarget(target, smooth);
          const id = hash.replace('#', '');
          activeSectionRef.current = id;
          setActiveSection(id);
        }
      };

      // Progressively realign as images, fonts, and responsive layout settle
      const timer1 = setTimeout(() => align(false), 50);
      const timer2 = setTimeout(() => align(false), 250);
      const timer3 = setTimeout(() => align(false), 600);
      const timer4 = setTimeout(() => align(false), 1200);

      window.addEventListener('load', () => align(false), { once: true });

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
      };
    }

    const handlePopState = () => {
      if (window.location.hash) {
        const target = document.querySelector<HTMLElement>(window.location.hash);
        if (target) {
          scrollToTarget(target, true);
          const id = window.location.hash.replace('#', '');
          activeSectionRef.current = id;
          setActiveSection(id);
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Intercept external internal anchor links on the page (e.g. Hero CTA) for consistent exact alignment
  useEffect(() => {
    const handleDocumentAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      // Ignore links inside header or mobile drawer (they have their own direct React handler)
      if (headerRef.current?.contains(anchor) || anchor.closest('#mobile-menu-drawer')) {
        return;
      }

      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector<HTMLElement>(href);
      if (target) {
        e.preventDefault();
        handleNavClick(href);
      }
    };

    document.addEventListener('click', handleDocumentAnchorClick);
    return () => document.removeEventListener('click', handleDocumentAnchorClick);
  }, []);

  return (
    <>
      <header ref={headerRef} className="sticky top-0 z-50 w-full header-frosted-glass">
        {/* High-performance RAF scroll progress bar (zero Header re-renders on scroll) */}
        <ScrollProgressBar />

        {/* Subtle wind-swept botanical leaf etchings embedded into frosted glass */}
        <HeaderGlassEtchings />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div ref={headerBarRef} className="flex items-center justify-between h-20 animate-header-fade-in">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (isMobileMenuOpen) {
                  closeMobileMenu(true);
                }
                window.scrollTo({ top: 0, behavior: 'smooth' });
                if (window.history && window.history.pushState) {
                  window.history.pushState(null, '', window.location.pathname);
                }
              }}
              className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#77D100] rounded-lg p-1"
              aria-label={`${siteConfig.brand.shortName} - Início`}
            >
              <BrandLogo height={52} />
            </a>

            {/* Desktop Navigation with Active Section Highlighting */}
            <nav className="hidden lg:flex items-center gap-1.5 xl:gap-3" aria-label="Navegação Principal">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleNavClick(link.href);
                    }}
                    aria-current={isActive ? 'location' : undefined}
                    className={`text-xs xl:text-sm font-semibold text-white transition-colors duration-150 rounded-lg px-2.5 py-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#77D100] border ${
                      isActive
                        ? 'bg-[#165C2A]/60 shadow-sm border-[#77D100]/40 font-bold'
                        : 'border-transparent hover:bg-[#165C2A]/30'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Right CTA with Animated Perimeter Light Sweep */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="header-cta-sweep">
                <a
                  href={buildWhatsAppLink('Olá, Aristeu! Gostaria de solicitar uma visita para avaliação e orçamento com a JBA em Jundiaí.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2B921D] hover:bg-[#34ab23] active:bg-[#207016] text-white text-sm font-bold shadow-sm hover:shadow-emerald-900/50 hover:scale-[1.01] active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#77D100]"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Solicitar visita</span>
                </a>
              </div>
            </div>

            {/* Mobile & Tablet Controls (< 1024px: No gap between breakpoints) */}
            <div className="flex lg:hidden items-center gap-2 sm:gap-3">
              <div className="header-cta-sweep">
                <a
                  href={buildWhatsAppLink('Olá, Aristeu! Gostaria de solicitar uma visita para avaliação e orçamento com a JBA em Jundiaí.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 inline-flex items-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-[#2B921D] hover:bg-[#34ab23] text-white text-xs sm:text-sm font-bold shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#77D100]"
                  aria-label="Solicitar visita no WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  <span>Solicitar visita</span>
                </a>
              </div>

              <button
                ref={menuButtonRef}
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`w-9 h-9 aspect-square flex items-center justify-center shrink-0 rounded-xl border transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#77D100] ${
                  isMobileMenuOpen
                    ? 'bg-[#165C2A] text-white border-[#77D100]/60 shadow-inner'
                    : 'bg-[#165C2A]/50 hover:bg-[#165C2A] text-emerald-100 hover:text-white border-[#2B921D]/40'
                }`}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu-drawer"
                aria-label={isMobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              >
                <span className={`inline-flex items-center justify-center transition-transform duration-300 ease-out ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
                  {isMobileMenuOpen ? <X className="w-5 h-5 text-[#77D100]" /> : <Menu className="w-5 h-5" />}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Menu with smooth vertical collapse */}
        <div
          id="mobile-menu-drawer"
          role="region"
          aria-label="Menu móvel de navegação"
          aria-hidden={!isMobileMenuOpen}
          className={`mobile-drawer-collapse ${isMobileMenuOpen ? 'is-open' : ''} lg:hidden absolute top-full left-0 w-full bg-gradient-to-b from-[#0A2F0D]/98 via-[#0e3b12]/98 to-[#051a07]/98 backdrop-blur-xl border-b border-[#2B921D]/40 shadow-2xl z-50`}
        >
          <div className="mobile-drawer-content max-h-[calc(100vh-var(--jba-header-height,5rem))] max-h-[calc(100dvh-var(--jba-header-height,5rem))] overflow-y-auto overscroll-contain px-4 pt-3 pb-6 space-y-3.5">
            <div className="flex flex-col space-y-1.5" role="menu">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    role="menuitem"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleNavClick(link.href);
                    }}
                    aria-current={isActive ? 'location' : undefined}
                    className={`mobile-nav-link flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#77D100] ${
                      isActive
                        ? 'bg-[#165C2A] text-[#77D100] border-l-4 border-l-[#77D100] border-t border-r border-b border-[#77D100]/40 shadow-sm font-bold pl-3'
                        : 'text-emerald-100 hover:bg-[#165C2A]/60 hover:text-white border border-transparent'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="flex items-center gap-1.5">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-[#77D100]/90">
                          Atual
                        </span>
                        <span
                          aria-hidden="true"
                          className="w-2.5 h-2.5 rounded-full bg-[#77D100] shadow-[0_0_8px_#77D100]"
                        />
                      </span>
                    )}
                  </a>
                );
              })}
            </div>

            <div className="pt-3 border-t border-[#165C2A]/70 space-y-3">
              <div className="flex items-center gap-2 text-xs text-emerald-300/80 px-2">
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#77D100] shrink-0" />
                <span>WhatsApp: {siteConfig.brand.phoneFormatted} • Jundiaí, SP</span>
              </div>

              <a
                href={buildWhatsAppLink('Olá, Aristeu! Gostaria de solicitar uma visita para avaliação e orçamento com a JBA em Jundiaí.')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => closeMobileMenu(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#2B921D] hover:bg-[#34ab23] active:bg-[#207016] text-white font-bold shadow-lg shadow-emerald-950/50 transition-all text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#77D100]"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>Solicitar visita no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Opaque Backdrop with smooth fade rendered via Portal */}
      {typeof document !== 'undefined' &&
        createPortal(
          <div
            aria-hidden="true"
            onClick={() => closeMobileMenu(true)}
            className={`fixed inset-0 z-40 bg-[#051a07]/80 backdrop-blur-sm transition-opacity duration-300 ${
              isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
          />,
          document.body
        )}
    </>
  );
};
