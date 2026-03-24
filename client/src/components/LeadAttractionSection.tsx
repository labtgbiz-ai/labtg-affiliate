import { useTranslation } from 'react-i18next';
import { useCompanyReveal } from '@/hooks/useScrollReveal';

export default function LeadAttractionSection() {
  const { t } = useTranslation();
  const sectionRef = useCompanyReveal();

  const methods = [
    { num: '01', title: t('leadAttraction.m1Title'), desc: t('leadAttraction.m1Desc') },
    { num: '02', title: t('leadAttraction.m2Title'), desc: t('leadAttraction.m2Desc') },
    { num: '03', title: t('leadAttraction.m3Title'), desc: t('leadAttraction.m3Desc') },
    { num: '04', title: t('leadAttraction.m4Title'), desc: t('leadAttraction.m4Desc') },
    { num: '05', title: t('leadAttraction.m5Title'), desc: t('leadAttraction.m5Desc') },
    { num: '06', title: t('leadAttraction.m6Title'), desc: t('leadAttraction.m6Desc') },
    { num: '07', title: t('leadAttraction.m7Title'), desc: t('leadAttraction.m7Desc') },
    { num: '08', title: t('leadAttraction.m8Title'), desc: t('leadAttraction.m8Desc') },
    { num: '09', title: t('leadAttraction.m9Title'), desc: t('leadAttraction.m9Desc') },
    { num: '10', title: t('leadAttraction.m10Title'), desc: t('leadAttraction.m10Desc') },
    { num: '11', title: t('leadAttraction.m11Title'), desc: t('leadAttraction.m11Desc') },
  ];

  return (
    <section ref={sectionRef} id="lead-attraction" className="py-20 md:py-32 relative overflow-hidden" style={{ background: '#ffffff' }}>
      <div className="absolute top-10 left-0 w-96 h-96 rounded-full blur-3xl" style={{ background: '#eff6ff', opacity: 0.5, position: 'absolute' }} />

      <div className="container relative z-10">
        <div className="text-center mb-14 fade-up">
          <span className="pill-badge pill-badge-light text-sm mb-4 inline-block">{t('leadAttraction.sectionLabel')}</span>
          <h2 className="text-3xl md:text-5xl font-black mb-4" style={{ color: '#111827' }}>
            {t('leadAttraction.title')}{' '}
            <br className="hidden md:block" />
            <span className="gradient-text">{t('leadAttraction.titleHighlight')}</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6b7280' }}>
            {t('leadAttraction.subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 fade-up" data-delay="0.15">
          {methods.map((m) => (
            <div key={m.num} className="rounded-2xl p-6 card-hover group" style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid #e5e7eb', backdropFilter: 'blur(10px)' }}>
              <div className="flex items-start gap-3">
                <span className="font-black text-lg shrink-0" style={{ color: '#1E9BF0' }}>{m.num}/</span>
                <div>
                  <h4 className="font-bold mb-1 text-sm" style={{ color: '#111827' }}>{m.title}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: '#6b7280' }}>{m.desc}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Result card */}
          <div className="rounded-2xl p-6 flex items-center" style={{ background: 'linear-gradient(135deg, #E8EEFF 0%, #D4D4FF 100%)' }}>
            <div>
              <span className="pill-badge pill-badge-dark text-xs mb-2 inline-block">{t('leadAttraction.resultLabel')}</span>
              <p className="text-sm font-bold leading-relaxed" style={{ color: '#1e1b4b' }}>
                {t('leadAttraction.resultText')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
