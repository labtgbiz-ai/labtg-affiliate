/* LabTG — Team Section with i18n */
import { useTranslation } from 'react-i18next';
import { useCompanyReveal } from '@/hooks/useScrollReveal';

export default function TeamSection() {
  const { t } = useTranslation();
  const sectionRef = useCompanyReveal();

  const team = [
    {
      name: 'Алексей Левин',
      role: t('team.role1'),
      initials: 'АЛ',
      photo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663458361072/CLC9CvFw6EzBzRUxKGTfc6/alexey-levin_7627f79f.png',
      highlights: [
        { label: '3 ' + t('team.years'), desc: t('team.m1h1') },
        { label: '5+ ' + t('team.years'), desc: t('team.m1h2') },
      ],
      achievements: [t('team.m1a1'), t('team.m1a2'), t('team.m1a3')],
      bgStyle: { background: 'linear-gradient(135deg, #1E9BF0 0%, #0d7fd8 100%)' },
    },
    {
      name: 'Вадим Нижник',
      role: t('team.role2'),
      initials: 'ВН',
      photo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663458361072/CLC9CvFw6EzBzRUxKGTfc6/vadim-nizhnik_2a88e512.png',
      highlights: [
        { label: '3+ ' + t('team.years'), desc: t('team.m2h1') },
        { label: '200+', desc: t('team.m2h2') },
      ],
      achievements: [t('team.m2a1'), t('team.m2a2'), t('team.m2a3')],
      bgStyle: { background: 'linear-gradient(135deg, #1E9BF0 0%, #6366f1 100%)' },
    },
    {
      name: 'Владислав Хухарев',
      role: t('team.role3'),
      initials: 'ВХ',
      photo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663458361072/CLC9CvFw6EzBzRUxKGTfc6/vladislav-khukharev_b72dc611.png',
      highlights: [
        { label: '5+ ' + t('team.years'), desc: t('team.m3h1') },
        { label: '8+ ' + t('team.years'), desc: t('team.m3h2') },
      ],
      achievements: [t('team.m3a1'), t('team.m3a2'), t('team.m3a3')],
      bgStyle: { background: 'linear-gradient(135deg, #6366f1 0%, #1E9BF0 100%)' },
    },
  ];

  return (
    <section ref={sectionRef} id="team" className="py-20 md:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #f8faff 0%, #eef4ff 50%, #f8faff 100%)' }}>
      <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-blue-200 rounded-full blur-3xl opacity-20" style={{ position: 'absolute' }} />

      <div className="container relative z-10">
        <div className="text-center mb-14 fade-up">
          <span className="pill-badge pill-badge-blue text-sm mb-4 inline-block">{t('team.sectionLabel')}</span>
          <h2 className="text-3xl md:text-5xl font-black mb-4" style={{ color: '#111827' }}>{t('team.title')}</h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#6b7280' }}>{t('team.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <div key={member.name} className="fade-up" data-delay={String(0.1 + i * 0.1)}>
              <div className="rounded-2xl p-7 md:p-8 h-full card-hover" style={{ ...member.bgStyle, color: '#ffffff' }}>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.25)', border: '2px solid rgba(255,255,255,0.4)' }}>
                    {member.photo ? (
                      <img src={member.photo} alt={member.name} className="w-full h-full object-cover" style={{ objectPosition: 'center top' }} />
                    ) : (
                      <span className="font-black text-lg" style={{ color: '#ffffff' }}>{member.initials}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-black" style={{ color: '#ffffff' }}>{member.name}</h3>
                    <span className="inline-block rounded-full px-3 py-1 text-xs font-semibold mt-1" style={{ backgroundColor: 'rgba(255,255,255,0.25)', color: '#ffffff' }}>
                      {member.role}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-5">
                  {member.highlights.map((h, j) => (
                    <div key={j} className="rounded-xl p-3 text-center" style={{ backgroundColor: 'rgba(255,255,255,0.18)' }}>
                      <div className="text-lg font-black" style={{ color: '#ffffff' }}>{h.label}</div>
                      <p className="text-xs" style={{ color: 'rgba(255,255,255,0.8)' }}>{h.desc}</p>
                    </div>
                  ))}
                </div>

                <ul className="space-y-2.5">
                  {member.achievements.map((a, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
                      <svg className="w-4 h-4 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: 'rgba(255,255,255,0.6)' }}>
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
