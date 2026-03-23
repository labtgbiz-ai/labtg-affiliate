/* LabTG — Principles Section (Page 13 of presentation)
   "Ключевые принципы LabTG" — Why work with us long-term
*/
import { useEffect, useRef } from 'react';

const principles = [
  {
    num: 1,
    title: 'Экологичность',
    headline: 'Работаем только с экологичными компаниями.',
    desc: 'Нам важно, чтобы ваш бизнес делал мир лучше, а не наоборот.',
    color: 'bg-purple-50 border-purple-100',
  },
  {
    num: 2,
    title: 'Сверхрезультат',
    headline: 'Всегда делаем больше, чем от нас ожидают.',
    desc: 'Потому что для нас это не просто работа, а дело жизни.',
    color: 'bg-purple-50 border-purple-100',
  },
  {
    num: 3,
    title: 'Профи и фанаты',
    headline: 'Мы фанаты и профи своего дела.',
    desc: 'Очень любим, когда наши клиенты так же относятся к своему бизнесу, как мы — к своему. С такими клиентами мы сворачиваем горы.',
    color: 'bg-blue-50 border-blue-100',
  },
  {
    num: 4,
    title: 'Репутация вдолгую',
    headline: 'Дорожим репутацией — работаем на результат.',
    desc: 'Успешный кейс с вами — лучшая награда для нас. Мы не ищем быстрых денег, мы строим долгосрочные партнёрства.',
    color: 'bg-blue-50 border-blue-100',
  },
];

export default function PrinciplesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );
    const els = sectionRef.current?.querySelectorAll('.fade-up');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="principles" className="py-20 md:py-32 relative overflow-hidden bg-white">
      <div className="absolute bottom-20 right-0 w-[500px] h-[500px] bg-purple-50 rounded-full blur-3xl opacity-20" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-14 fade-up" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
          <span className="pill-badge pill-badge-light text-sm mb-4 inline-block">
            Принципы
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
            Ключевые принципы LabTG
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Почему с нами можно и нужно работать вдолгую
          </p>
        </div>

        {/* Principles grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {principles.map((p, i) => (
            <div
              key={p.num}
              className="fade-up"
              style={{ opacity: 0, transform: 'translateY(30px)', transition: `opacity 0.7s ease ${0.1 + i * 0.08}s, transform 0.7s ease ${0.1 + i * 0.08}s` }}
            >
              <div className={`${p.color} border rounded-2xl p-7 md:p-8 h-full card-hover`}>
                <span className="pill-badge pill-badge-light text-xs mb-3 inline-block">
                  Принцип {p.num}. {p.title}
                </span>
                <h3 className="text-lg md:text-xl font-black text-gray-900 mb-2 leading-snug">
                  {p.headline}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Big motto */}
        <div className="text-center fade-up" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s' }}>
          <div className="inline-block">
            <p className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
              Ваш успех <span className="gradient-text">= наша репутация</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
