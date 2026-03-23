/* LabTG — Team Section (Page 12 of presentation)
   "Наша команда" — 3 co-founders with detailed achievements
   FIX: Use inline styles for card backgrounds to guarantee dark bg + white text contrast
*/
import { useCompanyReveal } from '@/hooks/useScrollReveal';

const team = [
  {
    name: 'Алексей Левин',
    role: 'Основатель и CEO',
    initials: 'АЛ',
    highlights: [
      { label: '3 года', desc: 'в политических технологиях' },
      { label: '5+ лет', desc: 'в продвижении в Telegram' },
    ],
    achievements: [
      'Более 100 млн рублей успешно реализованного маркетингового бюджета',
      'Сотни успешных кейсов в топовых нишах Telegram (бизнес, маркетплейсы, недвижимость, инвестиции)',
      'Опыт работы на разных рынках: Россия, СНГ, Европа',
    ],
    bgStyle: { background: 'linear-gradient(135deg, #1E9BF0 0%, #0d7fd8 100%)' },
  },
  {
    name: 'Вадим Нижник',
    role: 'Сооснователь и COO',
    initials: 'ВН',
    highlights: [
      { label: '3+ лет', desc: 'в создании видеоконтента' },
      { label: '200+', desc: 'человек в управлении' },
    ],
    achievements: [
      'Эксперт в управлении маркетинговыми и IT командами',
      'Более 10 лет опыта в масштабировании и развитии бизнеса',
      'Опыт на разных рынках: Россия, Европа, США',
    ],
    bgStyle: { background: 'linear-gradient(135deg, #1E9BF0 0%, #6366f1 100%)' },
  },
  {
    name: 'Владислав Хухарев',
    role: 'Сооснователь, CPO, CVO',
    initials: 'ВХ',
    highlights: [
      { label: '5+ лет', desc: 'в создании IT-продуктов' },
      { label: '8+ лет', desc: 'в digital маркетинге' },
    ],
    achievements: [
      'Суммарная капитализация компаний более 10 млн$',
      'Эксперт в автоворонках продаж в мессенджерах и соцсетях',
      'Опыт работы со стартапами и компаниями с 10+ млрд руб. выручки в год',
    ],
    bgStyle: { background: 'linear-gradient(135deg, #6366f1 0%, #1E9BF0 100%)' },
  },
];

export default function TeamSection() {
  const sectionRef = useCompanyReveal();

  return (
    <section ref={sectionRef} id="team" className="py-20 md:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #f8faff 0%, #eef4ff 50%, #f8faff 100%)' }}>
      <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-blue-200 rounded-full blur-3xl opacity-20" style={{ position: 'absolute' }} />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-14 fade-up">
          <span className="pill-badge pill-badge-blue text-sm mb-4 inline-block">
            Команда
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-4" style={{ color: '#111827' }}>
            Наша команда
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#6b7280' }}>
            Эксперты с многолетним опытом в маркетинге, IT и развитии бизнеса
          </p>
        </div>

        {/* Team cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <div key={member.name} className="fade-up" data-delay={String(0.1 + i * 0.1)}>
              <div
                className="rounded-2xl p-7 md:p-8 h-full card-hover"
                style={{ ...member.bgStyle, color: '#ffffff' }}
              >
                {/* Avatar + Name */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: 'rgba(255,255,255,0.25)' }}
                  >
                    <span className="font-black text-lg" style={{ color: '#ffffff' }}>{member.initials}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-black" style={{ color: '#ffffff' }}>{member.name}</h3>
                    <span
                      className="inline-block rounded-full px-3 py-1 text-xs font-semibold mt-1"
                      style={{ backgroundColor: 'rgba(255,255,255,0.25)', color: '#ffffff' }}
                    >
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {member.highlights.map((h, j) => (
                    <div
                      key={j}
                      className="rounded-xl p-3 text-center"
                      style={{ backgroundColor: 'rgba(255,255,255,0.18)' }}
                    >
                      <div className="text-lg font-black" style={{ color: '#ffffff' }}>{h.label}</div>
                      <p className="text-xs" style={{ color: 'rgba(255,255,255,0.8)' }}>{h.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Achievements */}
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
