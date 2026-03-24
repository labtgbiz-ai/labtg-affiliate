import { useCompanyReveal } from '@/hooks/useScrollReveal';
import { useTranslation } from 'react-i18next';

const stages_placeholder = [
  { label: 'Этап 1', title: 'Настройка системы', items: ['Упаковка', 'Автоматизация', 'Контент', 'Трафик', 'Лидогенерация', 'Аналитика'] },
  { label: 'Этап 2', title: 'Анализ данных', items: ['Реклама → Подписчик', 'Подписчик → Лид', 'Лид → Квалифицированный лид', 'Квалифицированный лид → Клиент'] },
  { label: 'Этап 3', title: 'Видим потенциал', items: ['Проект готов к росту', 'Масштабирование'] },
];

export default function ProducingSection() {
  const sectionRef = useCompanyReveal();
  const { t } = useTranslation();

  const stages = [
    { label: t('producing.stage1Label'), title: t('producing.stage1Title'), items: [t('producing.stage1i1'), t('producing.stage1i2'), t('producing.stage1i3'), t('producing.stage1i4'), t('producing.stage1i5'), t('producing.stage1i6')] },
    { label: t('producing.stage2Label'), title: t('producing.stage2Title'), items: [t('producing.stage2i1'), t('producing.stage2i2'), t('producing.stage2i3'), t('producing.stage2i4')] },
    { label: t('producing.stage3Label'), title: t('producing.stage3Title'), items: [t('producing.stage3i1'), t('producing.stage3i2')] },
  ];

  const postpaySteps = [
    { num: '01', text: t('producing.pp1') },
    { num: '02', text: t('producing.pp2') },
    { num: '03', text: t('producing.pp3') },
    { num: '04', text: t('producing.pp4') },
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden" style={{ background: '#ffffff' }}>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ background: '#f3e8ff', opacity: 0.3, position: 'absolute' }} />

      <div className="container relative z-10">
        <div className="text-center mb-14 fade-up">
          <span className="pill-badge pill-badge-light text-sm mb-4 inline-block">{t('producing.sectionLabel')}</span>
          <h2 className="text-3xl md:text-5xl font-black mb-4" style={{ color: '#111827' }}>
            {t('producing.title')}
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6b7280' }}>
            {t('producing.subtitle')}
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
            <h3 className="text-xl font-bold mb-6" style={{ color: '#ffffff' }}>{t('producing.postpayTitle')}</h3>
            <div className="space-y-4">
              {postpaySteps.map((step) => (
                <div key={step.num} className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0" style={{ background: 'rgba(255,255,255,0.2)', color: '#ffffff' }}>{step.num}</span>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>{step.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.2)' }}>
              <p className="text-xs mb-2 font-semibold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.7)' }}>{t('producing.whyLabel')}</p>
              <ul className="space-y-1.5 text-sm" style={{ color: 'rgba(255,255,255,0.85)' }}>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: 'rgba(255,255,255,0.6)' }}><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  {t('producing.why1')}
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: 'rgba(255,255,255,0.6)' }}><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  {t('producing.why2')}
                </li>
              </ul>
            </div>
          </div>

          {/* Investment help */}
          <div className="space-y-6">
            <div className="rounded-2xl p-8 md:p-10" style={{ background: 'linear-gradient(135deg, #E8EEFF 0%, #D4D4FF 100%)' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1e1b4b' }}>{t('producing.investTitle')}</h3>
              <p className="text-sm mb-6 leading-relaxed" style={{ color: '#374151' }}>
                {t('producing.investDesc')}
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ background: '#1E9BF0' }} />
                  <p className="text-sm" style={{ color: '#374151' }}>{t('producing.invest1')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ background: '#1E9BF0' }} />
                  <p className="text-sm" style={{ color: '#374151' }}>{t('producing.invest2')} <strong style={{ color: '#111827' }}>{t('producing.invest2Amount')}</strong> {t('producing.invest2Suffix')}</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-8 text-center" style={{ background: 'linear-gradient(135deg, #D4D4FF 0%, #E8EEFF 100%)' }}>
              <span className="pill-badge pill-badge-dark text-xs mb-3 inline-block">{t('producing.resultLabel')}</span>
              <p className="text-lg font-black leading-snug" style={{ color: '#1e1b4b' }}>
                {t('producing.resultText')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
