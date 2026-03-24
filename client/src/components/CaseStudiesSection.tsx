import { useTranslation } from 'react-i18next';
import { useCompanyReveal } from '@/hooks/useScrollReveal';

export default function CaseStudiesSection() {
  const { t } = useTranslation();
  const sectionRef = useCompanyReveal();

  const cases = [
    {
      id: 1,
      category: t('cases.cat1'),
      client: 'HABITAT | Денис Кусенков',
      subtitle: t('cases.c1Subtitle'),
      photo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663458361072/CLC9CvFw6EzBzRUxKGTfc6/case-habitat-photo_760893a1.png',
      problem: t('cases.c1Problem'),
      result: t('cases.c1Result'),
      metric: t('cases.c1Metric'),
      link: 'https://t.me/habitat_kusenkoff',
      linkText: 'HABITAT',
      categoryColor: '#6366f1',
      categoryBg: 'rgba(99,102,241,0.1)',
    },
    {
      id: 2,
      category: t('cases.cat2'),
      client: 'EM Platform',
      subtitle: t('cases.c2Subtitle'),
      photo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663458361072/CLC9CvFw6EzBzRUxKGTfc6/case-em-logo_7c204be7.png',
      problem: t('cases.c2Problem'),
      result: t('cases.c2Result'),
      metric: t('cases.c2Metric'),
      link: null,
      linkText: 'EM Platform',
      categoryColor: '#0ea5e9',
      categoryBg: 'rgba(14,165,233,0.1)',
    },
    {
      id: 3,
      category: t('cases.cat3'),
      client: t('cases.c3Client'),
      subtitle: t('cases.c3Subtitle'),
      photo: null,
      problem: t('cases.c3Problem'),
      result: t('cases.c3Result'),
      metric: t('cases.c3Metric'),
      link: null,
      linkText: 'NDA',
      categoryColor: '#10b981',
      categoryBg: 'rgba(16,185,129,0.1)',
    },
    {
      id: 4,
      category: t('cases.cat4'),
      client: 'Иван Попов | BST',
      subtitle: t('cases.c4Subtitle'),
      photo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663458361072/CLC9CvFw6EzBzRUxKGTfc6/case-bst-photo_aa724e4b.png',
      problem: t('cases.c4Problem'),
      result: t('cases.c4Result'),
      metric: t('cases.c4Metric'),
      link: 'https://t.me/bst_trading',
      linkText: 'Иван Попов | BST',
      categoryColor: '#f59e0b',
      categoryBg: 'rgba(245,158,11,0.1)',
    },
    {
      id: 5,
      category: t('cases.cat5'),
      client: 'MEN MAFIA',
      subtitle: t('cases.c5Subtitle'),
      photo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663458361072/CLC9CvFw6EzBzRUxKGTfc6/case-men-mafia-logo_a1660a93.png',
      problem: t('cases.c5Problem'),
      result: t('cases.c5Result'),
      metric: t('cases.c5Metric'),
      link: null,
      linkText: 'MEN MAFIA',
      categoryColor: '#ef4444',
      categoryBg: 'rgba(239,68,68,0.1)',
    },
  ];

  return (
    <section ref={sectionRef} id="cases" className="py-20 md:py-32 relative overflow-hidden" style={{ background: '#f8fafc' }}>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ background: '#bfdbfe', opacity: 0.25 }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl" style={{ background: '#e9d5ff', opacity: 0.2 }} />

      <div className="container relative z-10">
        <div className="mb-14 text-center fade-up">
          <span className="pill-badge pill-badge-light text-sm mb-4 inline-block">{t('cases.sectionLabel')}</span>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#111827' }}>{t('cases.title')}</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6b7280' }}>{t('cases.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 fade-up" data-delay="0.1">
          {cases.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl overflow-hidden card-hover flex flex-col"
              style={{ background: '#ffffff', border: '1px solid #e5e7eb', boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}
            >
              {/* Card Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center gap-3 mb-4">
                  {item.photo ? (
                    <img src={item.photo} alt={item.client} className="w-12 h-12 rounded-full object-cover flex-shrink-0" style={{ border: '2px solid #e5e7eb' }} />
                  ) : (
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold" style={{ background: item.categoryBg, color: item.categoryColor }}>
                      {item.client.charAt(0)}
                    </div>
                  )}
                  <div className="min-w-0">
                    <div className="font-bold text-sm leading-tight truncate" style={{ color: '#111827' }}>{item.client}</div>
                    <div className="text-xs" style={{ color: '#9ca3af' }}>{item.subtitle}</div>
                  </div>
                  <span className="ml-auto text-xs font-semibold px-2 py-1 rounded-full flex-shrink-0" style={{ background: item.categoryBg, color: item.categoryColor }}>
                    {item.category}
                  </span>
                </div>

                <div className="mb-3">
                  <div className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: '#9ca3af' }}>{t('cases.taskLabel')}</div>
                  <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>{item.problem}</p>
                </div>
              </div>

              {/* Result block */}
              <div className="mx-6 mb-4 rounded-2xl p-4" style={{ background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)' }}>
                <div className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: '#0369a1' }}>{t('cases.resultLabel')}</div>
                <p className="text-sm leading-relaxed" style={{ color: '#1e40af' }}>{item.result}</p>
              </div>

              {/* Footer */}
              <div className="px-6 pb-5 mt-auto flex items-center justify-between">
                <div className="text-sm font-bold px-3 py-1.5 rounded-xl" style={{ background: item.categoryBg, color: item.categoryColor }}>
                  {item.metric}
                </div>
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold flex items-center gap-1 hover:underline" style={{ color: '#1E9BF0' }}>
                    {item.linkText} →
                  </a>
                ) : (
                  <span className="text-xs" style={{ color: '#9ca3af' }}>
                    {item.id === 3 ? t('cases.nda') : item.linkText}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* All cases link */}
        <div className="mt-12 text-center fade-up" data-delay="0.2">
          <div className="rounded-2xl p-6 inline-block max-w-lg" style={{ background: 'linear-gradient(135deg, #1E9BF0 0%, #0d7fd8 100%)' }}>
            <p className="text-sm font-semibold mb-3" style={{ color: '#ffffff' }}>{t('cases.allCasesText')}</p>
            <a
              href="https://t.me/labtg_manager"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:opacity-90"
              style={{ background: '#ffffff', color: '#1E9BF0' }}
            >
              {t('cases.allCasesBtn')} →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
