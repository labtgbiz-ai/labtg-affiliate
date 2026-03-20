/* LabTG Affiliate — Team Section
   Design: White bg, blue cards for team members (like in presentation)
*/
import { useScrollReveal } from '@/hooks/useScrollReveal';

const team = [
  {
    name: 'Алексей Левин',
    role: 'Основатель и CEO',
    stats: [
      { value: '3 года', label: 'в политических технологиях' },
      { value: '5+ лет', label: 'продвижения в Telegram' },
      { value: '100+ млн ₽', label: 'реализованного бюджета' },
    ],
    desc: 'Сотни успешных кейсов с компаниями в топовых нишах Telegram (бизнес, маркетплейсы, недвижимость, инвестиции) на рынках России, СНГ, Европы.',
    initials: 'АЛ',
  },
  {
    name: 'Вадим Нижник',
    role: 'Сооснователь и COO',
    stats: [
      { value: '3+ лет', label: 'создания видеоконтента' },
      { value: '200+', label: 'человек в командах' },
      { value: '10+ лет', label: 'масштабирования бизнеса' },
    ],
    desc: 'Эксперт в управлении маркетинговыми и IT командами. Масштабирование и развитие бизнеса на рынках России, Европы, США.',
    initials: 'ВН',
  },
  {
    name: 'Владислав Хухарев',
    role: 'Сооснователь, CPO, CVO',
    stats: [
      { value: '5+ лет', label: 'IT-продукты автоматизации' },
      { value: '8+ лет', label: 'digital маркетинг' },
      { value: '10 млрд ₽', label: 'выручка клиентов' },
    ],
    desc: 'Эксперт в digital маркетинге и автоворонках продаж в мессенджерах. Сотни успешных кейсов на рынках России, СНГ, Европы, США.',
    initials: 'ВХ',
  },
];

export default function TeamSection() {
  const titleRef = useScrollReveal();
  const t1Ref = useScrollReveal(0.1);
  const t2Ref = useScrollReveal(0.1);
  const t3Ref = useScrollReveal(0.1);
  const teamRefs = [t1Ref, t2Ref, t3Ref];

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <span className="deco-number left-[-2rem] top-8">04</span>

      <div className="container relative z-10">
        {/* Title */}
        <div ref={titleRef as any} className="reveal text-center mb-14">
          <span className="pill-badge pill-badge-light mb-4 inline-flex">Команда</span>
          <h2 className="font-['Raleway'] font-black text-3xl md:text-5xl text-gray-900 mt-3">
            Эксперты, которым доверяют
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
            Три сооснователя с совокупным опытом более 20 лет в маркетинге, IT и масштабировании бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <div
              key={member.name}
              ref={teamRefs[i] as any}
              className="reveal card-hover brand-card p-6 md:p-7 flex flex-col gap-4"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Avatar + name */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-['Raleway'] font-black text-white text-lg">{member.initials}</span>
                </div>
                <div>
                  <h3 className="font-['Raleway'] font-black text-white text-lg leading-tight">{member.name}</h3>
                  <span className="bg-white/20 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full inline-block mt-1">
                    {member.role}
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2">
                {member.stats.map((stat) => (
                  <div key={stat.label} className="bg-white/10 rounded-xl p-2.5 text-center">
                    <div className="font-['Raleway'] font-black text-white text-sm leading-tight">{stat.value}</div>
                    <div className="text-white/60 text-[10px] leading-tight mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <p className="text-white/80 text-sm leading-relaxed">{member.desc}</p>
            </div>
          ))}
        </div>

        {/* Principles */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'Экологичность', desc: 'Работаем только с экологичными компаниями' },
            { title: 'Сверхрезультат', desc: 'Всегда делаем больше, чем от нас ожидают' },
            { title: 'Профи и фанаты', desc: 'Фанаты своего дела — это не просто работа' },
            { title: 'Репутация вдолгую', desc: 'Строим долгосрочные партнёрства' },
          ].map((p, i) => (
            <div
              key={p.title}
              className="lavender-card p-5 card-hover"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div className="pill-badge pill-badge-light text-xs mb-2 inline-flex">
                Принцип {i + 1}
              </div>
              <h4 className="font-['Raleway'] font-bold text-gray-900 text-base mb-1">{p.title}</h4>
              <p className="text-gray-600 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
