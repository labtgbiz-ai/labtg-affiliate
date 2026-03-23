import { useCompanyReveal } from '@/hooks/useScrollReveal';

const stages = [
  { label: 'Этап 1', title: 'Настройка системы', items: ['Упаковка', 'Автоматизация', 'Контент', 'Трафик', 'Лидогенерация', 'Аналитика'] },
  { label: 'Этап 2', title: 'Анализ данных', items: ['Реклама → Подписчик', 'Подписчик → Лид', 'Лид → Квалифицированный лид', 'Квалифицированный лид → Клиент'] },
  { label: 'Этап 3', title: 'Видим потенциал', items: ['Проект готов к росту', 'Масштабирование'] },
];

const postpaySteps = [
  { num: '01', text: 'Обсуждаем и фиксируем стоимость подписчика и лида, которую вы готовы платить' },
  { num: '02', text: 'Мы инвестируем собственные средства в рекламу' },
  { num: '03', text: 'Получаем и передаём вам готовых целевых подписчиков и лидов' },
  { num: '04', text: 'Вы оплачиваете только по факту получения, в согласованные сроки' },
];

export default function ProducingSection() {
  const sectionRef = useCompanyReveal();

  return (
    <section ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden" style={{ background: '#ffffff' }}>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ background: '#f3e8ff', opacity: 0.3, position: 'absolute' }} />

      <div className="container relative z-10">
        <div className="text-center mb-14 fade-up">
          <span className="pill-badge pill-badge-light text-sm mb-4 inline-block">06 / Масштабирование</span>
          <h2 className="text-3xl md:text-5xl font-black mb-4" style={{ color: '#111827' }}>
            Продюсирование и масштабирование
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6b7280' }}>
            Переходим на постоплату, когда видим потенциал роста
          </p>
        </div>

        {/* 3 Stages */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 fade-up" data-delay="0.1">
          {stages.map((stage, i) => (
            <div key={i} className="rounded-2xl p-7 card-hover" style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid #e5e7eb', backdropFilter: 'blur(10px)' }}>
              <span className="pill-badge pill-badge-blue text-xs mb-4 inline-block">{stage.label}</span>
              <h3 className="font-bold text-lg mb-4" style={{ color: '#111827' }}>{stage.title}</h3>
              <ul className="space-y-2">
                {stage.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm" style={{ color: '#374151' }}>
                    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#1E9BF0' }}>
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Postpay model + Investment help */}
        <div className="grid lg:grid-cols-2 gap-8 fade-up" data-delay="0.2">
          {/* Postpay */}
          <div className="rounded-2xl p-8 md:p-10" style={{ background: 'linear-gradient(135deg, #1E9BF0 0%, #0d7fd8 100%)' }}>
            <h3 className="text-xl font-bold mb-6" style={{ color: '#ffffff' }}>Формат работы с постоплатой</h3>
            <div className="space-y-4">
              {postpaySteps.map((step) => (
                <div key={step.num} className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0" style={{ background: 'rgba(255,255,255,0.2)', color: '#ffffff' }}>{step.num}</span>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>{step.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.2)' }}>
              <p className="text-xs mb-2 font-semibold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.7)' }}>Почему мы можем себе это позволить:</p>
              <ul className="space-y-1.5 text-sm" style={{ color: 'rgba(255,255,255,0.85)' }}>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: 'rgba(255,255,255,0.6)' }}><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  Большой опыт и экспертиза команды
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: 'rgba(255,255,255,0.6)' }}><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  Эффективное применение инновационных маркетинговых и IT-технологий
                </li>
              </ul>
            </div>
          </div>

          {/* Investment help */}
          <div className="space-y-6">
            <div className="rounded-2xl p-8 md:p-10" style={{ background: 'linear-gradient(135deg, #E8EEFF 0%, #D4D4FF 100%)' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1e1b4b' }}>Помощь в инвестициях</h3>
              <p className="text-sm mb-6 leading-relaxed" style={{ color: '#374151' }}>
                При масштабировании проекта, для более быстрого роста, помогаем закрыть инвестиционный раунд.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ background: '#1E9BF0' }} />
                  <p className="text-sm" style={{ color: '#374151' }}>Официальные партнёры крупной инвестиционной компании</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ background: '#1E9BF0' }} />
                  <p className="text-sm" style={{ color: '#374151' }}>Опыт привлечения <strong style={{ color: '#111827' }}>150+ млн рублей</strong> в разные проекты на разных стадиях</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-8 text-center" style={{ background: 'linear-gradient(135deg, #D4D4FF 0%, #E8EEFF 100%)' }}>
              <span className="pill-badge pill-badge-dark text-xs mb-3 inline-block">Ключевой результат</span>
              <p className="text-lg font-black leading-snug" style={{ color: '#1e1b4b' }}>
                Вы платите только за результат. Мы рискуем своими деньгами вместе с вами.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
