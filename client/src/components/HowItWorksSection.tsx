/* LabTG Affiliate — How It Works Section
   Design: Light gray bg, numbered steps, glass cards, reveal animation
*/
import { useScrollReveal } from '@/hooks/useScrollReveal';

const steps = [
  {
    number: '01',
    title: 'Регистрируетесь',
    desc: 'Заполняете форму и получаете персональную партнёрскую ссылку с уникальным трекингом.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Рекомендуете',
    desc: 'Рассказываете предпринимателям и экспертам о LabTG. Приводите лидов или привлекаете других партнёров.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'LabTG закрывает сделку',
    desc: 'Наш AI-лид-агент и команда обрабатывают лидов, проводят встречи и закрывают продажи.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4"/>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Получаете выплату',
    desc: 'Начисляем вознаграждение по договору. Прозрачная аналитика в личном кабинете.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
];

export default function HowItWorksSection() {
  const titleRef = useScrollReveal();
  const step1Ref = useScrollReveal(0.1);
  const step2Ref = useScrollReveal(0.1);
  const step3Ref = useScrollReveal(0.1);
  const step4Ref = useScrollReveal(0.1);
  const stepRefs = [step1Ref, step2Ref, step3Ref, step4Ref];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#F7F9FC] relative overflow-hidden">
      {/* Decorative number */}
      <span className="deco-number right-[-2rem] top-[-2rem]">01</span>

      <div className="container relative z-10">
        {/* Title */}
        <div ref={titleRef as any} className="reveal text-center mb-16">
          <span className="pill-badge pill-badge-light mb-4 inline-flex">Как это работает</span>
          <h2 className="font-['Raleway'] font-black text-3xl md:text-5xl text-gray-900 mt-3">
            4 шага к стабильному доходу
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
            Простая схема без сложных требований — рекомендуйте и зарабатывайте
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              ref={stepRefs[i] as any}
              className="reveal card-hover glass-card rounded-2xl p-6 relative"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Number badge */}
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-[#1E9BF0] text-white font-['Raleway'] font-black text-sm flex items-center justify-center shadow-lg">
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#1E9BF0] flex items-center justify-center mb-4 mt-2">
                {step.icon}
              </div>

              <h3 className="font-['Raleway'] font-bold text-lg text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>

              {/* Arrow connector (not on last) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-6 h-6 rounded-full bg-[#1E9BF0] flex items-center justify-center shadow-md">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-sm border border-blue-50">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <p className="text-gray-700 font-medium text-sm md:text-base">
              Никаких скрытых условий — всё фиксируется в партнёрском договоре
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
