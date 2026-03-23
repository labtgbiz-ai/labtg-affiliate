/* LabTG Company Landing — Case Studies Section
   Design: Placeholder for case studies
*/
import { useEffect, useRef } from 'react';

export default function CaseStudiesSection() {
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
    <section ref={sectionRef} className="py-20 md:py-32 bg-white relative overflow-hidden" id="cases">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-100 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-100 rounded-full blur-3xl opacity-20" />

      <div className="container relative z-10">
        {/* Section header */}
        <div className="mb-16 text-center fade-up" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
          <span className="pill-badge pill-badge-light text-sm mb-4 inline-block">Портфолио</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Кейсы и результаты
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Реальные примеры успешных проектов с нашими клиентами
          </p>
        </div>

        {/* Placeholder grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Запуск Telegram-канала', metric: 'ROI', value: '+320%', period: '3 месяца' },
            { title: 'Автоматизация продаж', metric: 'Конверсия', value: '+180%', period: '2 месяца' },
            { title: 'Чат-бот для e-commerce', metric: 'Продажи', value: '+250%', period: '4 месяца' },
          ].map((item, i) => (
            <div
              key={i}
              className="fade-up"
              style={{ opacity: 0, transform: 'translateY(30px)', transition: `opacity 0.7s ease ${i * 0.1}s, transform 0.7s ease ${i * 0.1}s` }}
            >
              <div className="glass-card p-8 rounded-3xl card-hover min-h-[320px] flex flex-col">
                <div className="flex-1">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1E9BF0]/20 to-[#0d7fd8]/20 flex items-center justify-center mb-5">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#1E9BF0] to-[#0d7fd8]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6">
                    Описание проекта и достигнутых результатов
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-500 text-sm">{item.metric}:</span>
                    <span className="font-bold text-[#1E9BF0] text-lg">{item.value}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Период:</span>
                    <span className="font-semibold text-gray-900 text-sm">{item.period}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder message */}
        <div className="mt-12 text-center fade-up" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s' }}>
          <div className="lavender-card p-6 rounded-2xl inline-block max-w-lg">
            <p className="text-gray-600 text-sm">
              Кейсы находятся в процессе подготовки. Скоро здесь появятся подробные описания реальных проектов.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
