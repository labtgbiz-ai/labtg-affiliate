/* LabTG Company Landing — Hero Section
   Design: Full-screen, gradient mesh blobs, 3D Telegram crystal, asymmetric layout, i18n
*/
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const HERO_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663458361072/CLC9CvFw6EzBzRUxKGTfc6/hero-3d-telegram-SURwPLygaKnTXXRSpeqSi2.webp';

export default function CompanyHeroSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.hero-animate');
    els?.forEach((el, i) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = '0';
      htmlEl.style.transform = 'translateY(24px)';
      setTimeout(() => {
        htmlEl.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        htmlEl.style.opacity = '1';
        htmlEl.style.transform = 'translateY(0)';
      }, 150 + i * 120);
    });
  }, []);

  const stats = [
    { value: t('hero.stat1Value'), label: t('hero.stat1Label') },
    { value: t('hero.stat2Value'), label: t('hero.stat2Label') },
    { value: t('hero.stat3Value'), label: t('hero.stat3Label') },
  ];

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20" style={{overflowX: 'hidden'}}>
      {/* Gradient mesh blobs */}
      <div className="blob animate-blob w-[600px] h-[600px] bg-blue-200/60 top-[-100px] right-[-100px]" style={{ position: 'absolute' }} />
      <div className="blob animate-blob-delay w-[500px] h-[500px] bg-purple-200/40 bottom-[-50px] left-[-100px]" style={{ position: 'absolute' }} />
      <div className="blob w-[300px] h-[300px] bg-blue-100/30 top-1/2 left-1/3" style={{ position: 'absolute' }} />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 items-center min-h-[calc(100vh-80px)] py-12">
          {/* Left: Text */}
          <div className="flex flex-col gap-6 lg:gap-7">
            {/* Badge */}
            <div className="hero-animate">
              <span className="pill-badge pill-badge-blue text-sm shadow-lg shadow-blue-500/20">
                {t('hero.badge')}
              </span>
            </div>

            {/* Headline */}
            <div className="hero-animate">
              <h1 className="font-['Raleway'] font-black text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl text-gray-900 leading-[1.08] tracking-tight">
                {t('hero.title1')}{' '}
                <span className="gradient-text">{t('hero.title2')}</span>
                {t('hero.title3')}{' '}
                {t('hero.title4')}
              </h1>
            </div>

            {/* Sub */}
            <p className="hero-animate text-base md:text-lg text-gray-500 leading-relaxed max-w-lg">
              {t('hero.subtitle')}
            </p>

            {/* Stats row */}
            <div className="hero-animate flex flex-wrap gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-['Raleway'] font-black text-2xl md:text-3xl text-[#1E9BF0]">{stat.value}</span>
                  <span className="text-xs md:text-sm text-gray-400 font-medium mt-0.5">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="hero-animate flex flex-col sm:flex-row gap-3 pt-2">
              <a href="#contact" className="btn-gradient text-center text-base px-8 py-4 animate-pulse-glow shadow-xl shadow-blue-500/25">
                {t('hero.ctaPrimary')}
              </a>
              <a href="#services" className="btn-outline text-center text-base px-8 py-4 border-2 border-[#1E9BF0] text-[#1E9BF0] rounded-full font-semibold hover:bg-blue-50 transition-colors">
                {t('hero.ctaSecondary')}
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="hero-animate relative hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/10 rounded-full blur-3xl scale-110" />
              <img
                src={HERO_IMG}
                alt="LabTG Marketing Platform"
                className="relative w-full h-auto max-w-md animate-float drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
