/* LabTG — Producing & Scaling Section (Pages 10-11 of presentation)
   "Продюсирование и масштабирование бизнеса" + Постоплата + Инвестиции
*/
import { useEffect, useRef } from 'react';

const stages = [
  { label: 'Этап 1', title: 'Настройка системы', items: ['Упаковка', 'Автоматизация', 'Контент', 'Трафик', 'Лидогенерация', 'Аналитика'] },
  { label: 'Этап 2', title: 'Анализ данных', items: ['Реклама → Подписчик', 'Подписчик → Лид', 'Лид → Квалифицированный лид', 'Квалифицированный лид → Клиент'] },
  { label: 'Этап 3', title: 'Видим потенциал', items: ['Проект готов к росту', 'Масштабирование'] },
];

const postpaySteps = [
  { num: '01', text: 'Обсуждаем и фиксируем стоимость подписчика и лида, которую вы готовы платить' },
  { num: '02', text: 'Мы инвестируем собственные средства в рекламу' },
  { num: '03', text: 'Получаем и передаём вам готовых целевых подписчиков и лидов' },
  { num: '04', text: 'Вы оплачиваете только по факту получения, в согласованные сроки' },
];

export default function ProducingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );
    const els = sectionRef.current?.querySelectorAll('.fade-up');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden bg-white">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-50 rounded-full blur-3xl opacity-20" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-14 fade-up" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
          <span className="pill-badge pill-badge-light text-sm mb-4 inline-block">
            06 / Масштабирование
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
            Продюсирование и масштабирование
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Переходим на постоплату, когда видим потенциал роста
          </p>
        </div>

        {/* 3 Stages */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 fade-up" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s' }}>
          {stages.map((stage, i) => (
            <div key={i} className="glass-card rounded-2xl p-7 card-hover">
              <span className="pill-badge pill-badge-blue text-xs mb-4 inline-block">{stage.label}</span>
              <h3 className="font-bold text-gray-900 text-lg mb-4">{stage.title}</h3>
              <ul className="space-y-2">
                {stage.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-[#1E9BF0] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Postpay model + Investment help */}
        <div className="grid lg:grid-cols-2 gap-8 fade-up" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s' }}>
          {/* Postpay */}
          <div className="brand-card p-8 md:p-10">
            <h3 className="text-xl font-bold text-white mb-6">Формат работы с постоплатой</h3>
            <div className="space-y-4">
              {postpaySteps.map((step) => (
                <div key={step.num} className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center font-bold text-xs shrink-0">{step.num}</span>
                  <p className="text-white/90 text-sm leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-white/70 text-xs mb-2 font-semibold uppercase tracking-wider">Почему мы можем себе это позволить:</p>
              <ul className="space-y-1.5 text-sm text-white/80">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-white/60 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  Большой опыт и экспертиза команды
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-white/60 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  Эффективное применение инновационных маркетинговых и IT-технологий
                </li>
              </ul>
            </div>
          </div>

          {/* Investment help */}
          <div className="space-y-6">
            <div className="lavender-card p-8 md:p-10">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Помощь в инвестициях</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                При масштабировании проекта, для более быстрого роста, помогаем закрыть инвестиционный раунд.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#1E9BF0] mt-1.5 shrink-0" />
                  <p className="text-sm text-gray-700">Официальные партнёры крупной инвестиционной компании</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#1E9BF0] mt-1.5 shrink-0" />
                  <p className="text-sm text-gray-700">Опыт привлечения <strong>150+ млн рублей</strong> в разные проекты на разных стадиях</p>
                </div>
              </div>
            </div>

            {/* Key result */}
            <div className="bg-gradient-to-r from-[#D4D4FF] to-[#E8EEFF] rounded-2xl p-8 text-center">
              <span className="pill-badge pill-badge-dark text-xs mb-3 inline-block">Ключевой результат</span>
              <p className="text-lg font-black text-gray-900 leading-snug">
                Вы платите только за результат. Мы рискуем своими деньгами вместе с вами.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
