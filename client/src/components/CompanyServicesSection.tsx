import { useCompanyReveal } from '@/hooks/useScrollReveal';

const services = [
  {
    num: '01',
    title: 'Проработка unit-экономики и стратегия',
    desc: 'Не навязываем инструменты, пока не понимаем экономику проекта. Считаем стоимость клиента, лида и подписчика, анализируем планы по продажам и конверсии.',
    features: ['Анализ unit-экономики', 'Подбор каналов привлечения', 'Маркетинговая стратегия', 'Максимум ROI на рубль'],
    dark: true,
  },
  {
    num: '02',
    title: 'Упаковка и презентация',
    desc: 'Создаём продающий профиль, канал или чат, который вызывает доверие. Дизайн, название, описание, навигационный пост — всё, что видит пользователь в первые 3 секунды.',
    features: ['Концепция Telegram-канала', 'Дизайн аватарки и профиля', 'Разработка названия', 'Навигационный пост'],
    dark: false,
  },
  {
    num: '03',
    title: 'Автоматизация маркетинга и продаж',
    desc: 'Чат-боты, воронки, AI-агенты и сквозная аналитика. Полная автоматизация 24/7 — от первого касания до закрытия сделки.',
    features: ['Воронки и автоворонки', 'Рассылки по базе', 'Реферальная система', 'Сквозная аналитика'],
    dark: true,
  },
];

export default function CompanyServicesSection() {
  const sectionRef = useCompanyReveal();

  return (
    <section ref={sectionRef} id="services" className="py-20 md:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #f8faff 0%, #ffffff 100%)' }}>
      <div className="container relative z-10">
        <div className="text-center mb-14 fade-up">
          <span className="pill-badge pill-badge-blue text-sm mb-4 inline-block">Наши услуги</span>
          <h2 className="text-3xl md:text-5xl font-black mb-4" style={{ color: '#111827' }}>
            Комплексный подход
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6b7280' }}>
            Три ключевых направления для максимального результата в Telegram
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.num}
              className="fade-up rounded-2xl p-7 card-hover"
              data-delay={String(0.1 + i * 0.1)}
              style={s.dark
                ? { background: 'linear-gradient(135deg, #1E9BF0 0%, #6366f1 100%)' }
                : { background: '#ffffff', border: '1px solid #e5e7eb' }
              }
            >
              <div
                className="inline-block rounded-full px-3 py-1 text-xs font-bold mb-4"
                style={s.dark
                  ? { background: 'rgba(255,255,255,0.25)', color: '#ffffff' }
                  : { background: '#eff6ff', color: '#1E9BF0' }
                }
              >
                {s.num}
              </div>

              <h3 className="text-xl font-black mb-3" style={{ color: s.dark ? '#ffffff' : '#111827' }}>
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: s.dark ? 'rgba(255,255,255,0.85)' : '#6b7280' }}>
                {s.desc}
              </p>

              <ul className="space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm" style={{ color: s.dark ? 'rgba(255,255,255,0.9)' : '#374151' }}>
                    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: s.dark ? 'rgba(255,255,255,0.6)' : '#1E9BF0' }}>
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
