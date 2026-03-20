/* LabTG Affiliate — Why LabTG / About Section
   Design: Light bg, stats, services overview, killer feature "1 click"
*/
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useScrollReveal';

const services = [
  { icon: '📊', title: 'Unit-экономика и стратегия', desc: 'Считаем стоимость лида и клиента до запуска' },
  { icon: '📦', title: 'Упаковка и презентация', desc: 'Продающий профиль, канал и чат-бот' },
  { icon: '🤖', title: 'AI-автоматизация', desc: 'ChatGPT 5.2 агент работает 24/7 за вас' },
  { icon: '🎯', title: 'Привлечение лидов', desc: '11 методов: Telegram Ads, посевы, нейрокомментинг' },
  { icon: '📝', title: 'Контент и вовлечение', desc: 'AI-видеоролики, контент-стратегия, медиа' },
  { icon: '🚀', title: 'Масштабирование', desc: 'Постоплата + инвестиции в рекламный бюджет' },
];

function StatItem({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const ref = useCountUp(end, 2000);
  return (
    <div className="text-center">
      <div className="font-['Raleway'] font-black text-4xl md:text-5xl text-[#1E9BF0] flex items-end justify-center gap-0.5">
        <span ref={ref as any}>0</span>
        <span>{suffix}</span>
      </div>
      <div className="text-gray-500 text-sm mt-1 font-medium">{label}</div>
    </div>
  );
}

export default function WhyLabTGSection() {
  const titleRef = useScrollReveal();
  const statsRef = useScrollReveal(0.1);
  const featureRef = useScrollReveal(0.1);
  const servicesRef = useScrollReveal(0.05);

  return (
    <section id="about" className="py-20 md:py-28 bg-[#F7F9FC] relative overflow-hidden">
      <span className="deco-number right-[-2rem] bottom-8">03</span>

      <div className="container relative z-10">
        {/* Title */}
        <div ref={titleRef as any} className="reveal text-center mb-16">
          <span className="pill-badge pill-badge-light mb-4 inline-flex">О компании</span>
          <h2 className="font-['Raleway'] font-black text-3xl md:text-5xl text-gray-900 mt-3">
            Почему партнёры выбирают LabTG
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
            Продюсерский центр полного цикла — от стратегии до масштабирования через Telegram
          </p>
        </div>

        {/* Stats */}
        <div ref={statsRef as any} className="reveal glass-card rounded-3xl p-8 md:p-12 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem end={100} suffix="+" label="млн ₽ реализованного бюджета" />
            <StatItem end={150} suffix="+" label="млн ₽ привлечённых инвестиций" />
            <StatItem end={11} suffix="" label="методов привлечения лидов" />
            <StatItem end={1000} suffix="" label="диалогов AI-агент одновременно" />
          </div>
        </div>

        {/* Killer Feature: 1 Click */}
        <div ref={featureRef as any} className="reveal mb-12">
          <div className="brand-card p-6 md:p-10 relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/10" />
            <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-white/5" />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <div className="flex-1">
                <div className="pill-badge bg-white/20 text-white text-xs mb-3 inline-flex">Киллер-фича</div>
                <h3 className="font-['Raleway'] font-black text-2xl md:text-3xl text-white mb-2">
                  Технология «Лид в 1 клик»
                </h3>
                <p className="text-white/80 text-base leading-relaxed max-w-2xl">
                  Наш AI-лид-агент на базе ChatGPT 5.2 работает как живой человек в Telegram Premium. Он пишет первым всем подписчикам, квалифицирует лидов, выявляет боли и доводит до целевого действия — встречи или продажи — <strong className="text-white">автоматически, 24/7</strong>.
                </p>
              </div>
              <div className="flex flex-col gap-2 flex-shrink-0">
                <div className="bg-white/20 rounded-xl px-4 py-2 text-white text-sm font-semibold text-center">
                  Работает 24/7
                </div>
                <div className="bg-white/20 rounded-xl px-4 py-2 text-white text-sm font-semibold text-center">
                  1000 диалогов
                </div>
                <div className="bg-white/20 rounded-xl px-4 py-2 text-white text-sm font-semibold text-center">
                  ChatGPT 5.2
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services grid */}
        <div ref={servicesRef as any} className="reveal">
          <h3 className="font-['Raleway'] font-bold text-2xl text-gray-900 mb-6 text-center">
            6 направлений работы с клиентами
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="card-hover glass-card rounded-2xl p-5 flex items-start gap-4"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <div className="text-3xl flex-shrink-0">{s.icon}</div>
                <div>
                  <h4 className="font-['Raleway'] font-bold text-gray-900 text-sm mb-1">{s.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
