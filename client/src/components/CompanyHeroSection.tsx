/* LabTG Company Landing — Hero Section
   Design: Full-screen, gradient mesh blobs, 3D Telegram crystal, asymmetric layout
   Text is dark (charcoal) because background is light/white
*/
import { useEffect, useRef } from 'react';

const HERO_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663458361072/CLC9CvFw6EzBzRUxKGTfc6/hero-3d-telegram-SURwPLygaKnTXXRSpeqSi2.webp';

export default function CompanyHeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [headingRef.current, subRef.current, ctaRef.current, imgRef.current];
    els.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      setTimeout(() => {
        if (!el) return;
        el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 200 + i * 150);
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20">
      {/* Gradient blobs */}
      <div className="blob animate-blob w-[600px] h-[600px] bg-blue-200 top-[-100px] right-[-100px]" style={{ position: 'absolute' }} />
      <div className="blob animate-blob-delay w-[500px] h-[500px] bg-purple-200 bottom-[-50px] left-[-100px]" style={{ position: 'absolute' }} />
      <div className="blob w-[300px] h-[300px] bg-blue-100 top-1/2 left-1/3" style={{ position: 'absolute', opacity: 0.3 }} />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-80px)] py-12">
          {/* Left: Text */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Badge */}
            <div ref={headingRef as any} className="inline-flex">
              <span className="pill-badge pill-badge-blue text-sm">
                🚀 Маркетинг под ключ
              </span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="font['Raleway'] font-black text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-[1.1] tracking-tight">
                Маркетинг{' '}
                <span className="gradient-text">«под ключ»</span>,{' '}
                AI-агенты и целевые лиды в Telegram
              </h1>
            </div>

            {/* Sub */}
            <p ref={subRef} className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
              Полный цикл маркетинга и продаж для вашего бизнеса. От стратегии до автоматизации — всё в Telegram.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6">
              {[
                { value: '100%', label: 'под ключ' },
                { value: '24/7', label: 'автоматизация' },
                { value: '∞', label: 'масштабируемость' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-['Raleway'] font-black text-3xl text-[#1E9BF0]">{stat.value}</span>
                  <span className="text-sm text-gray-500 font-medium">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="btn-gradient text-center text-base px-8 py-4 animate-pulse-glow">
                Начать проект →
              </a>
              <a href="#services" className="btn-outline text-center text-base px-8 py-4 border-2 border-[#1E9BF0] text-[#1E9BF0] rounded-full font-semibold hover:bg-blue-50 transition-colors">
                Узнать больше
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div ref={imgRef} className="relative h-full min-h-[500px] hidden lg:flex items-center justify-center">
            <img
              src={HERO_IMG}
              alt="LabTG Marketing Platform"
              className="w-full h-auto max-w-md animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
