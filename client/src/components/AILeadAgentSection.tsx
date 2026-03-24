import { useTranslation } from 'react-i18next';
import { useCompanyReveal } from '@/hooks/useScrollReveal';

export default function AILeadAgentSection() {
  const { t } = useTranslation();
  const sectionRef = useCompanyReveal();

  const utpStats = [
    { value: t('ai.utp1Value'), label: t('ai.utp1Label') },
    { value: t('ai.utp2Value'), label: t('ai.utp2Label') },
    { value: t('ai.utp3Value'), label: t('ai.utp3Label') },
  ];

  const steps = [
    { num: 1, title: t('ai.step1Title'), desc: t('ai.step1Desc') },
    { num: 2, title: t('ai.step2Title'), desc: t('ai.step2Desc') },
    { num: 3, title: t('ai.step3Title'), desc: t('ai.step3Desc') },
  ];

  return (
    <section ref={sectionRef} id="ai-agent" className="py-20 md:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f0f7ff 50%, #ffffff 100%)' }}>
      <div className="container relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 fade-up">
          <span className="pill-badge pill-badge-blue text-sm mb-4 inline-block">{t('ai.sectionLabel')}</span>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#111827' }}>
            {t('ai.title')}
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#4b5563' }}>
            {t('ai.subtitle')}
          </p>
        </div>

        {/* UTP Banner */}
        <div className="fade-up mb-12" data-delay="0.05">
          <div className="rounded-3xl p-8 md:p-10 text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1E9BF0 0%, #6366f1 100%)' }}>
            <div className="absolute top-[-40px] right-[-40px] w-48 h-48 rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }} />
            <div className="absolute bottom-[-30px] left-[-30px] w-36 h-36 rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }} />
            <div className="relative z-10">
              <div className="inline-block rounded-full px-4 py-1.5 text-xs font-bold mb-4 tracking-widest uppercase" style={{ background: 'rgba(255,255,255,0.25)', color: '#ffffff' }}>
                {t('ai.utpLabel')}
              </div>
              <h3 className="text-2xl md:text-4xl font-black mb-3" style={{ color: '#ffffff' }}>
                {t('ai.utpTitle')}
              </h3>
              <p className="text-lg md:text-xl font-semibold mb-6" style={{ color: 'rgba(255,255,255,0.95)' }}>
                {t('ai.utpDesc1')} <span style={{ color: '#fde68a', fontWeight: 900 }}>{t('ai.utpHighlight')}</span>{t('ai.utpDesc2')}
              </p>
              <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                {utpStats.map((stat) => (
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
            <div className="rounded-2xl p-8 md:p-10" style={{ background: 'linear-gradient(135deg, #1E9BF0 0%, #0d7fd8 100%)' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#ffffff' }}>{t('ai.whatIsTitle')}</h3>
              <p className="text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.95)' }}>
                {t('ai.whatIsDesc')}
              </p>
            </div>

            <div className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #E8EEFF 0%, #D4D4FF 100%)' }}>
              <span className="pill-badge pill-badge-dark text-xs mb-5 inline-block">{t('ai.advantagesLabel')}</span>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl p-5 text-center" style={{ background: 'rgba(255,255,255,0.7)' }}>
                  <div className="text-3xl font-black" style={{ color: '#1E9BF0' }}>24/7</div>
                  <p className="text-sm font-medium" style={{ color: '#374151' }}>{t('ai.adv1')}</p>
                </div>
                <div className="rounded-xl p-5 text-center" style={{ background: 'rgba(255,255,255,0.7)' }}>
                  <div className="text-3xl font-black" style={{ color: '#1E9BF0' }}>1000+</div>
                  <p className="text-sm font-medium" style={{ color: '#374151' }}>{t('ai.adv2')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: How the funnel works */}
          <div className="space-y-4 fade-up" data-delay="0.2">
            <h3 className="text-xl font-bold mb-2" style={{ color: '#111827' }}>{t('ai.funnelTitle')}</h3>

            {steps.map((step) => (
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
                💡 {t('ai.tip')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
