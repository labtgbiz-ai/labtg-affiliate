import { useTranslation } from 'react-i18next';
import { useCompanyReveal } from '@/hooks/useScrollReveal';

export default function CompanyAboutSection() {
  const { t } = useTranslation();
  const sectionRef = useCompanyReveal();

  const stats = [
    { value: t('about.stat1Value'), label: t('about.stat1Label') },
    { value: t('about.stat2Value'), label: t('about.stat2Label') },
    { value: t('about.stat3Value'), label: t('about.stat3Label') },
    { value: t('about.stat4Value'), label: t('about.stat4Label') },
  ];

  const points = [
    { title: t('about.feature1Title'), desc: t('about.feature1Desc') },
    { title: t('about.feature2Title'), desc: t('about.feature2Desc') },
    { title: t('about.feature3Title'), desc: t('about.feature3Desc') },
    { title: t('about.feature4Title'), desc: t('about.feature4Desc') },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 md:py-32 relative overflow-hidden" style={{ background: '#ffffff' }}>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ background: '#bfdbfe', opacity: 0.2, position: 'absolute' }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl" style={{ background: '#e9d5ff', opacity: 0.2, position: 'absolute' }} />

      <div className="container relative z-10">
        <div className="text-center mb-14 fade-up">
          <span className="pill-badge pill-badge-blue text-sm mb-4 inline-block">{t('about.sectionLabel')}</span>
          <h2 className="text-3xl md:text-5xl font-black mb-4" style={{ color: '#111827' }}>
            {t('about.title')}
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6b7280' }}>
            {t('about.description')}
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
