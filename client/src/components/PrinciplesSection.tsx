import { useCompanyReveal } from '@/hooks/useScrollReveal';

const principles = [
  {
    num: 1,
    title: 'Экологичность',
    headline: 'Работаем только с экологичными компаниями.',
    desc: 'Нам важно, чтобы ваш бизнес делал мир лучше, а не наоборот.',
  },
  {
    num: 2,
    title: 'Сверхрезультат',
    headline: 'Всегда делаем больше, чем от нас ожидают.',
    desc: 'Потому что для нас это не просто работа, а дело жизни.',
  },
  {
    num: 3,
    title: 'Профи и фанаты',
    headline: 'Мы фанаты и профи своего дела.',
    desc: 'Очень любим, когда наши клиенты так же относятся к своему бизнесу, как мы — к своему. С такими клиентами мы сворачиваем горы.',
  },
  {
    num: 4,
    title: 'Репутация вдолгую',
    headline: 'Дорожим репутацией — работаем на результат.',
    desc: 'Успешный кейс с вами — лучшая награда для нас. Мы не ищем быстрых денег, мы строим долгосрочные партнёрства.',
  },
];

export default function PrinciplesSection() {
  const sectionRef = useCompanyReveal();

  return (
    <section ref={sectionRef} id="principles" className="py-20 md:py-32 relative overflow-hidden" style={{ background: '#ffffff' }}>
      <div className="absolute bottom-20 right-0 w-96 h-96 rounded-full blur-3xl" style={{ background: '#f3e8ff', opacity: 0.3, position: 'absolute' }} />

      <div className="container relative z-10">
        <div className="text-center mb-14 fade-up">
          <span className="pill-badge pill-badge-light text-sm mb-4 inline-block">Принципы</span>
          <h2 className="text-3xl md:text-5xl font-black mb-4" style={{ color: '#111827' }}>
            Ключевые принципы LabTG
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#6b7280' }}>
            Почему с нами можно и нужно работать вдолгую
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12 fade-up" data-delay="0.1">
          {principles.map((p) => (
            <div key={p.num} className="rounded-2xl p-7 md:p-8 card-hover" style={{ background: '#faf5ff', border: '1px solid #e9d5ff' }}>
              <span className="pill-badge pill-badge-light text-xs mb-3 inline-block">
                Принцип {p.num}. {p.title}
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
            Ваш успех <span className="gradient-text">= наша репутация</span>
          </p>
        </div>
      </div>
    </section>
  );
}
