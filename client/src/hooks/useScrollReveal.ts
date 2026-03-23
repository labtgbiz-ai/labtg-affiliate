import { useEffect, useRef } from 'react';

/**
 * Original hook for partner page (single element reveal)
 */
export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

export function useScrollRevealAll(selector: string, threshold = 0.15) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector, threshold]);
}

export function useCountUp(end: number, duration = 2000, start = 0) {
  const ref = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const startTime = performance.now();
            
            const animate = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = Math.round(start + (end - start) * eased);
              
              if (el) el.textContent = current.toLocaleString('ru-RU');
              
              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };
            
            requestAnimationFrame(animate);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration, start]);

  return ref;
}

/**
 * New robust hook for company landing page.
 * Hides elements via JS on mount, then reveals on intersection.
 * Safety net: if observer never fires within 3s, elements become visible anyway.
 */
export function useCompanyReveal() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const els = section.querySelectorAll('.fade-up');
    const readyEls: HTMLElement[] = [];

    els.forEach((el) => {
      const htmlEl = el as HTMLElement;
      if (!htmlEl.classList.contains('animate-in')) {
        htmlEl.style.opacity = '0';
        htmlEl.style.transform = 'translateY(24px)';
        readyEls.push(htmlEl);
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const htmlEl = entry.target as HTMLElement;
            const delay = htmlEl.dataset.delay || '0';
            htmlEl.style.transition = `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`;
            htmlEl.style.opacity = '1';
            htmlEl.style.transform = 'translateY(0)';
            htmlEl.classList.add('animate-in');
            observer.unobserve(htmlEl);
          }
        });
      },
      { threshold: 0.02, rootMargin: '50px 0px -2% 0px' }
    );

    readyEls.forEach((el) => observer.observe(el));

    // Safety net: force-show any still-hidden elements after 2.5s
    const safetyTimeout = setTimeout(() => {
      readyEls.forEach((el) => {
        if (!el.classList.contains('animate-in')) {
          el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          el.classList.add('animate-in');
        }
      });
    }, 2500);

    return () => {
      observer.disconnect();
      clearTimeout(safetyTimeout);
    };
  }, []);

  return sectionRef;
}
