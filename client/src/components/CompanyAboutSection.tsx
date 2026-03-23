import { useCompanyReveal } from '@/hooks/useScrollReveal';

const stats = [
  { value: '100+', label: 'успешных проектов' },
  { value: '3', label: 'года на рынке' },
  { value: '100M+', label: 'рублей бюджета' },
  { value: '3', label: 'рынка: RU, СНГ, EU' },
];

const points = [
  { title: 'Полный цикл', desc: 'От стратегии и контента до автоматизации продаж и аналитики — всё под ключ' },
  { title: 'AI-технологии', desc: 'Используем собственные AI-инструменты, недоступные другим агентствам' },
  { title: 'Результат', desc: 'Работаем за результат: лиды, подписчики, продажи — не просто «охваты»' },
  { title: 'Экспертиза', desc: 'Команда с опытом в политтехнологиях, IT-продуктах и digital-маркетинге' },
];

export default function CompanyAboutSection() {
  const sectionRef = useCompanyReveal();

  return (
    <section ref={sectionRef} id="about" className="py-20 md:py-32 relative overflow-hidden" style={{ background: '#ffffff' }}>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ background: '#bfdbfe', opacity: 0.2, position: 'absolute' }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl" style={{ background: '#e9d5ff', opacity: 0.2, position: 'absolute' }} />

      <div className="container relative z-10">
        <div className="text-center mb-14 fade-up">
          <span className="pill-badge pill-badge-blue text-sm mb-4 inline-block">О компании</span>
          <h2 className="text-3xl md:text-5xl font-black mb-4" style={{ color: '#111827' }}>
            Кто мы такие
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6b7280' }}>
            LabTG — агентство полного цикла маркетинга в Telegram. Мы не просто ведём каналы — мы строим системы привлечения клиентов.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14 fade-up" data-delay="0.1">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl p-6 text-center" style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #eef2ff 100%)', border: '1px solid #dbeafe' }}>
              <div className="text-3xl font-black mb-1" style={{ color: '#1E9BF0' }}>{s.value}</div>
              <div className="text-sm font-medium" style={{ color: '#374151' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Points */}
        <div className="grid md:grid-cols-2 gap-5 fade-up" data-delay="0.2">
          {points.map((p, i) => (
            <div key={i} className="rounded-2xl p-6 flex gap-4 items-start card-hover" style={{ background: '#f9fafb', border: '1px solid #e5e7eb' }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #1E9BF0, #6366f1)' }}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold mb-1" style={{ color: '#111827' }}>{p.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
