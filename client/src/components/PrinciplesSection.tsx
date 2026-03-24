import { useCompanyReveal } from '@/hooks/useScrollReveal';
import { useTranslation } from 'react-i18next';

export default function PrinciplesSection() {
  const sectionRef = useCompanyReveal();
  const { t } = useTranslation();

  const principles = [
    { num: t('principles.p1Num'), title: t('principles.p1Title'), headline: t('principles.p1Headline'), desc: t('principles.p1Desc') },
    { num: t('principles.p2Num'), title: t('principles.p2Title'), headline: t('principles.p2Headline'), desc: t('principles.p2Desc') },
    { num: t('principles.p3Num'), title: t('principles.p3Title'), headline: t('principles.p3Headline'), desc: t('principles.p3Desc') },
    { num: t('principles.p4Num'), title: t('principles.p4Title'), headline: t('principles.p4Headline'), desc: t('principles.p4Desc') },
  ];

  return (
    <section ref={sectionRef} id="principles" className="py-20 md:py-32 relative overflow-hidden" style={{ background: '#ffffff' }}>
      <div className="absolute bottom-20 right-0 w-96 h-96 rounded-full blur-3xl" style={{ background: '#f3e8ff', opacity: 0.3, position: 'absolute' }} />

      <div className="container relative z-10">
        <div className="text-center mb-14 fade-up">
          <span className="pill-badge pill-badge-light text-sm mb-4 inline-block">{t('principles.sectionLabel')}</span>
          <h2 className="text-3xl md:text-5xl font-black mb-4" style={{ color: '#111827' }}>
            {t('principles.title')}
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#6b7280' }}>
            {t('principles.subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12 fade-up" data-delay="0.1">
          {principles.map((p) => (
            <div key={p.num} className="rounded-2xl p-7 md:p-8 card-hover" style={{ background: '#faf5ff', border: '1px solid #e9d5ff' }}>
              <span className="pill-badge pill-badge-light text-xs mb-3 inline-block">
                {t('principles.principleLabel')} {p.num}. {p.title}
              </span>
              <h3 className="text-lg md:text-xl font-black mb-2 leading-snug" style={{ color: '#111827' }}>
                {p.headline}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#4b5563' }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center fade-up" data-delay="0.25">
          <p className="text-3xl md:text-5xl font-black leading-tight" style={{ color: '#111827' }}>
            {t('principles.tagline')} <span className="gradient-text">{t('principles.taglineHighlight')}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
