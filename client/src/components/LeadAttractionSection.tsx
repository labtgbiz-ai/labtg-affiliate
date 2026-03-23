/* LabTG — Lead Attraction Section (Pages 7-8 of presentation)
   "11 самых эффективных технологий привлечения подписчиков и лидов"
*/
import { useEffect, useRef } from 'react';

const methods = [
  { num: '01', title: 'Telegram Ads', desc: 'Официальная таргетированная реклама в Telegram' },
  { num: '02', title: 'Посевы в каналах', desc: 'Прямые размещения в рекламных Telegram-каналах с маркировкой или без' },
  { num: '03', title: 'Нейрокомментинг', desc: 'Нативные комментарии к постам публичных каналов с помощью AI' },
  { num: '04', title: 'Коллаборации', desc: 'Нативные интеграции с блогерами и авторскими каналами' },
  { num: '05', title: 'Реферальная система', desc: 'Существующие подписчики привлекают новых за вознаграждение' },
  { num: '06', title: 'Рассылки по базам', desc: 'Массовые целевые диалоги с полезной информацией (не спам)' },
  { num: '07', title: 'Массовая аудитория из соцсетей', desc: 'Целевая аудитория для увеличения медийности канала' },
  { num: '08', title: 'AI-видеоконтент', desc: 'Говорящие головы и полноростовые модели для привлечения из соцсетей' },
  { num: '09', title: 'Яндекс.Директ', desc: 'Контекстная реклама — показы в момент, когда ищут ваш товар или услугу' },
  { num: '10', title: 'Яндекс.Карты', desc: 'Повышение репутации — метка «Хорошее место» (органический трафик)' },
  { num: '11', title: 'Авито', desc: 'AI-отзывы для увеличения рейтинга и видимости объявлений' },
];

export default function LeadAttractionSection() {
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
    <section ref={sectionRef} id="lead-attraction" className="py-20 md:py-32 relative overflow-hidden bg-white">
      <div className="absolute top-10 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl opacity-30" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-14 fade-up" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
          <span className="pill-badge pill-badge-light text-sm mb-4 inline-block">
            04 / Привлечение
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
            11 способов привлечения <br className="hidden md:block" />
            <span className="gradient-text">целевых подписчиков и лидов</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Без аудитории нет продаж. Используем самые эффективные технологии и способы привлечения
          </p>
        </div>

        {/* Grid of 11 methods */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 fade-up" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s' }}>
          {methods.map((m) => (
            <div key={m.num} className="glass-card rounded-2xl p-6 card-hover group">
              <div className="flex items-start gap-3">
                <span className="text-[#1E9BF0] font-black text-lg shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">{m.num}/</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 text-sm">{m.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{m.desc}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Result card */}
          <div className="lavender-card p-6 flex items-center">
            <div>
              <span className="pill-badge pill-badge-dark text-xs mb-2 inline-block">Главный результат</span>
              <p className="text-sm font-bold text-gray-900 leading-relaxed">
                Все 11 методов работают на одну цель — привести платежеспособных подписчиков и лидов в ваш бизнес
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
