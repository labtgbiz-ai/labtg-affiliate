import { useCompanyReveal } from '@/hooks/useScrollReveal';

export default function AILeadAgentSection() {
  const sectionRef = useCompanyReveal();

  return (
    <section ref={sectionRef} id="ai-agent" className="py-20 md:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f0f7ff 50%, #ffffff 100%)' }}>
      <div className="container relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 fade-up">
          <span className="pill-badge pill-badge-blue text-sm mb-4 inline-block">Наша суперсила</span>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#111827' }}>
            AI-лид-агент
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#4b5563' }}>
            Создаём, внедряем и обучаем под ключ — искусственный интеллект, который превращает подписчиков в квалифицированные лиды
          </p>
        </div>

        {/* UTP Banner — Lead in 1 Click */}
        <div className="fade-up mb-12" data-delay="0.05">
          <div className="rounded-3xl p-8 md:p-10 text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1E9BF0 0%, #6366f1 100%)' }}>
            <div className="absolute top-[-40px] right-[-40px] w-48 h-48 rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }} />
            <div className="absolute bottom-[-30px] left-[-30px] w-36 h-36 rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }} />
            <div className="relative z-10">
              <div className="inline-block rounded-full px-4 py-1.5 text-xs font-bold mb-4 tracking-widest uppercase" style={{ background: 'rgba(255,255,255,0.25)', color: '#ffffff' }}>
                Ключевое УТП
              </div>
              <h3 className="text-2xl md:text-4xl font-black mb-3" style={{ color: '#ffffff' }}>
                Технология «Лид в 1 клик»
              </h3>
              <p className="text-lg md:text-xl font-semibold mb-6" style={{ color: 'rgba(255,255,255,0.95)' }}>
                Получаем целевые лиды в <span style={{ color: '#fde68a', fontWeight: 900 }}>5–10 раз дешевле</span>, чем любая компания на рынке
              </p>
              <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                {[
                  { value: '5–10×', label: 'дешевле рынка' },
                  { value: '1 клик', label: 'подписчик → лид' },
                  { value: '24/7', label: 'без выходных' },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.18)' }}>
                    <div className="text-2xl font-black" style={{ color: '#ffffff' }}>{stat.value}</div>
                    <div className="text-sm" style={{ color: 'rgba(255,255,255,0.85)' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: What it is + Key advantages */}
          <div className="space-y-6 fade-up" data-delay="0.1">
            {/* What it is */}
            <div className="rounded-2xl p-8 md:p-10" style={{ background: 'linear-gradient(135deg, #1E9BF0 0%, #0d7fd8 100%)' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#ffffff' }}>Что это?</h3>
              <p className="text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.95)' }}>
                Искусственный интеллект в виде личного профиля живого человека с Telegram-Premium. Работает на последней платной версии ChatGPT. Выглядит и общается как реальный консультант.
              </p>
            </div>

            {/* Key advantages */}
            <div className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #E8EEFF 0%, #D4D4FF 100%)' }}>
              <span className="pill-badge pill-badge-dark text-xs mb-5 inline-block">Ключевые преимущества</span>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl p-5 text-center" style={{ background: 'rgba(255,255,255,0.7)' }}>
                  <div className="text-3xl font-black" style={{ color: '#1E9BF0' }}>24/7</div>
                  <p className="text-sm font-medium" style={{ color: '#374151' }}>Работает без перерывов</p>
                </div>
                <div className="rounded-xl p-5 text-center" style={{ background: 'rgba(255,255,255,0.7)' }}>
                  <div className="text-3xl font-black" style={{ color: '#1E9BF0' }}>1000+</div>
                  <p className="text-sm font-medium" style={{ color: '#374151' }}>Диалогов одновременно</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: How the funnel works */}
          <div className="space-y-4 fade-up" data-delay="0.2">
            <h3 className="text-xl font-bold mb-2" style={{ color: '#111827' }}>Как работает воронка:</h3>

            {[
              {
                num: 1,
                title: 'Пишет первым',
                desc: 'В личные сообщения всем, кто перешёл по рекламе и подписался на ваш канал — мгновенно, в 1 клик',
              },
              {
                num: 2,
                title: 'Консультирует и квалифицирует',
                desc: 'Выявляет боли и потребности, отвечает на вопросы, прогревает — подписчик становится квалифицированным лидом',
              },
              {
                num: 3,
                title: 'Передаёт на менеджера',
                desc: 'Согласует встречу с менеджером, загружает саммари диалога в CRM — менеджер получает уже «горячего» клиента, готового к сделке',
              },
            ].map((step) => (
              <div key={step.num} className="rounded-2xl p-6 card-hover" style={{ background: 'rgba(255,255,255,0.9)', border: '1px solid #e5e7eb' }}>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0" style={{ background: '#1E9BF0', color: '#ffffff' }}>{step.num}</div>
                  <div>
                    <h4 className="font-bold mb-1" style={{ color: '#111827' }}>{step.title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: '#4b5563' }}>{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="rounded-2xl p-5" style={{ background: 'linear-gradient(135deg, #f0f7ff 0%, #e8eeff 100%)', border: '1px solid #c7d7f5' }}>
              <p className="text-sm font-semibold" style={{ color: '#1e40af' }}>
                💡 Менеджер подключается только к тёплым, квалифицированным лидам — экономия времени и рост конверсии в сделку
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
