import { useTranslation } from 'react-i18next';
import { useCompanyReveal } from '@/hooks/useScrollReveal';

export default function CompanyServicesSection() {
  const { t } = useTranslation();
  const sectionRef = useCompanyReveal();

  const services = [
    {
      num: t('services.s1Label'),
      title: t('services.s1Title'),
      desc: t('services.s1Desc'),
      features: [t('services.s1f1'), t('services.s1f2'), t('services.s1f3'), t('services.s1f4')],
      dark: true,
    },
    {
      num: t('services.s2Label'),
      title: t('services.s2Title'),
      desc: t('services.s2Desc'),
      features: [t('services.s2f1'), t('services.s2f2'), t('services.s2f3'), t('services.s2f4')],
      dark: false,
    },
    {
      num: t('services.s3Label'),
      title: t('services.s3Title'),
      desc: t('services.s3Desc'),
      features: [t('services.s3f1'), t('services.s3f2'), t('services.s3f3'), t('services.s3f4')],
      dark: true,
    },
  ];

  return (
    <section ref={sectionRef} id="services" className="py-20 md:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #f8faff 0%, #ffffff 100%)' }}>
      <div className="container relative z-10">
        <div className="text-center mb-14 fade-up">
          <span className="pill-badge pill-badge-blue text-sm mb-4 inline-block">{t('services.sectionLabel')}</span>
          <h2 className="text-3xl md:text-5xl font-black mb-4" style={{ color: '#111827' }}>
            {t('services.title')}
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6b7280' }}>
            {t('services.subtitle')}
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
