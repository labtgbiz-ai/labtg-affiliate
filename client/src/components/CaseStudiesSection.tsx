/* LabTG Company Landing — Case Studies Section
   Design: Placeholder for case studies (to be filled later)
*/
import { useEffect, useRef } from 'react';

export default function CaseStudiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-white relative overflow-hidden" id="cases">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-100 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-100 rounded-full blur-3xl opacity-20 -z-10" />

      <div className="container">
        {/* Section header */}
        <div className="mb-16 text-center reveal" data-initial="false">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Кейсы и результаты
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Реальные примеры успешных проектов с нашими клиентами
          </p>
        </div>

        {/* Placeholder grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="reveal glass-card p-8 rounded-3xl hover:shadow-lg transition-all duration-300 min-h-[400px] flex flex-col items-center justify-center"
              data-initial="false"
            >
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1E9BF0] to-[#0d7fd8] opacity-20 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Кейс #{i}
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  Описание проекта и результатов
                </p>
                <div className="space-y-2 text-left">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Результат:</span>
                    <span className="font-bold text-[#1E9BF0]">+X%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Период:</span>
                    <span className="font-bold text-gray-900">X месяцев</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder message */}
        <div className="mt-12 text-center reveal" data-initial="false">
          <div className="lavender-card p-8 rounded-2xl inline-block">
            <p className="text-gray-700 font-medium">
              📝 Кейсы находятся в процессе подготовки. Скоро здесь появятся реальные примеры успешных проектов.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
