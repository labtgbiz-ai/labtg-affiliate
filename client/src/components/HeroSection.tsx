/* LabTG Affiliate — Hero Section
   Design: Full-screen, gradient mesh blobs, 3D Telegram crystal, asymmetric layout
   Text is dark (charcoal) because background is light/white
*/
import { useEffect, useRef } from 'react';

const HERO_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663458361072/CLC9CvFw6EzBzRUxKGTfc6/hero-3d-telegram-SURwPLygaKnTXXRSpeqSi2.webp';

export default function HeroSection() {
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
                🚀 Партнёрская программа LabTG
              </span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="font-['Raleway'] font-black text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-[1.1] tracking-tight">
                Зарабатывайте{' '}
                <span className="gradient-text">от 1 000 000 ₽</span>{' '}
                рекомендуя LabTG
              </h1>
            </div>

            {/* Sub */}
            <p ref={subRef} className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
              Рекомендуйте лучший маркетинговый продюсерский центр Telegram и получайте{' '}
              <strong className="text-gray-900">7% с каждой продажи</strong> + пожизненные выплаты на втором этапе.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6">
              {[
                { value: '7%', label: 'с каждой продажи' },
                { value: '800К', label: 'средний чек' },
                { value: '∞', label: 'пожизненно' },
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
                Стать партнёром →
              </a>
              <a
                href="#calculator"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-[#1E9BF0] text-[#1E9BF0] font-bold text-base hover:bg-blue-50 transition-colors"
              >
                Рассчитать доход
              </a>
            </div>

            {/* Trust line */}
            <p className="text-sm text-gray-400 flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-green-500 flex-shrink-0">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Выплаты по договору · Прозрачная аналитика · Поддержка 24/7
            </p>
          </div>

          {/* Right: 3D Image */}
          <div ref={imgRef} className="relative flex items-center justify-center">
            <div className="relative w-full max-w-[560px] mx-auto">
              {/* Glow behind image */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-200 to-purple-200 blur-3xl opacity-40 scale-110" />
              
              <div className="animate-float relative z-10">
                <img
                  src={HERO_IMG}
                  alt="LabTG — технология лид в 1 клик"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>

              {/* Floating badge: 1 клик */}
              <div className="absolute top-8 left-0 glass-card rounded-2xl px-4 py-3 shadow-xl z-20 animate-float" style={{ animationDelay: '-2s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#1E9BF0] flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Технология</div>
                    <div className="text-sm font-bold text-gray-900">Лид в 1 клик</div>
                  </div>
                </div>
              </div>

              {/* Floating badge: AI */}
              <div className="absolute bottom-12 right-0 glass-card rounded-2xl px-4 py-3 shadow-xl z-20 animate-float" style={{ animationDelay: '-4s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">AI</span>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">ChatGPT 5.2</div>
                    <div className="text-sm font-bold text-gray-900">AI-лид-агент</div>
                  </div>
                </div>
              </div>

              {/* Floating badge: Postpay */}
              <div className="absolute top-1/2 -right-4 glass-card rounded-2xl px-4 py-3 shadow-xl z-20 animate-float" style={{ animationDelay: '-1s' }}>
                <div className="text-center">
                  <div className="text-xs text-gray-500 font-medium">Оплата</div>
                  <div className="text-sm font-bold text-[#1E9BF0]">Постоплата</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 wave-divider">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 md:h-16">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#F7F9FC"/>
        </svg>
      </div>
    </section>
  );
}
