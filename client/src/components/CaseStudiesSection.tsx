import { useCompanyReveal } from '@/hooks/useScrollReveal';

const cases = [
  { title: 'Запуск Telegram-канала', metric: 'ROI', value: '+320%', period: '3 месяца' },
  { title: 'Автоматизация продаж', metric: 'Конверсия', value: '+180%', period: '2 месяца' },
  { title: 'Чат-бот для e-commerce', metric: 'Продажи', value: '+250%', period: '4 месяца' },
];

export default function CaseStudiesSection() {
  const sectionRef = useCompanyReveal();

  return (
    <section ref={sectionRef} id="cases" className="py-20 md:py-32 relative overflow-hidden" style={{ background: '#ffffff' }}>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ background: '#bfdbfe', opacity: 0.2, position: 'absolute' }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl" style={{ background: '#e9d5ff', opacity: 0.2, position: 'absolute' }} />

      <div className="container relative z-10">
        <div className="mb-14 text-center fade-up">
          <span className="pill-badge pill-badge-light text-sm mb-4 inline-block">Портфолио</span>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#111827' }}>
            Кейсы и результаты
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6b7280' }}>
            Реальные примеры успешных проектов с нашими клиентами
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 fade-up" data-delay="0.1">
          {cases.map((item, i) => (
            <div key={i} className="rounded-3xl p-8 card-hover min-h-[320px] flex flex-col" style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid #e5e7eb', backdropFilter: 'blur(10px)' }}>
              <div className="flex-1">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: 'linear-gradient(135deg, rgba(30,155,240,0.15), rgba(13,127,216,0.15))' }}>
                  <div className="w-5 h-5 rounded-full" style={{ background: 'linear-gradient(135deg, #1E9BF0, #0d7fd8)' }} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#111827' }}>
                  {item.title}
                </h3>
                <p className="text-sm mb-6" style={{ color: '#6b7280' }}>
                  Описание проекта и достигнутых результатов
                </p>
              </div>
              <div className="pt-4" style={{ borderTop: '1px solid #f3f4f6' }}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm" style={{ color: '#6b7280' }}>{item.metric}:</span>
                  <span className="font-bold text-lg" style={{ color: '#1E9BF0' }}>{item.value}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm" style={{ color: '#6b7280' }}>Период:</span>
                  <span className="font-semibold text-sm" style={{ color: '#111827' }}>{item.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center fade-up" data-delay="0.2">
          <div className="rounded-2xl p-6 inline-block max-w-lg" style={{ background: 'linear-gradient(135deg, #E8EEFF 0%, #D4D4FF 100%)' }}>
            <p className="text-sm" style={{ color: '#374151' }}>
              Кейсы находятся в процессе подготовки. Скоро здесь появятся подробные описания реальных проектов.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
