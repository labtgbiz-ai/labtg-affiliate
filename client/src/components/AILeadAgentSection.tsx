/* LabTG — AI Lead Agent Section (Page 6 of presentation)
   "Наша суперсила" — AI agent that converts subscribers to clients in 1 click
*/
import { useEffect, useRef } from 'react';

export default function AILeadAgentSection() {
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
    <section ref={sectionRef} id="ai-agent" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-15" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-100 rounded-full blur-3xl opacity-15" />

      <div className="container relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 fade-up" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
          <span className="pill-badge pill-badge-blue text-sm mb-4 inline-block shadow-lg shadow-blue-500/20">
            Наша суперсила
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            AI-лид-агент
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Создаём, внедряем и обучаем под ключ — искусственный интеллект, который превращает подписчиков в клиентов
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: What it is + Key advantages */}
          <div className="space-y-6 fade-up" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s' }}>
            {/* What it is */}
            <div className="brand-card p-8 md:p-10">
              <h3 className="text-xl font-bold text-white mb-4">Что это?</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                Искусственный интеллект в виде личного профиля живого человека с Telegram-Premium. Работает на последней платной версии ChatGPT 5.2.
              </p>
            </div>

            {/* Key advantages */}
            <div className="lavender-card p-8">
              <h4 className="pill-badge pill-badge-dark text-xs mb-5 inline-block">Ключевые преимущества</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/60 rounded-xl p-5 text-center">
                  <div className="text-3xl font-black text-[#1E9BF0] mb-1">24/7</div>
                  <p className="text-sm text-gray-600 font-medium">Работает без перерывов</p>
                </div>
                <div className="bg-white/60 rounded-xl p-5 text-center">
                  <div className="text-3xl font-black text-[#1E9BF0] mb-1">1000+</div>
                  <p className="text-sm text-gray-600 font-medium">Диалогов одновременно</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: What it does */}
          <div className="space-y-4 fade-up" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s' }}>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Что делает AI-агент:</h3>

            {/* Step 1 */}
            <div className="glass-card rounded-2xl p-6 card-hover">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#1E9BF0] text-white flex items-center justify-center font-bold text-sm shrink-0">1</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Пишет первым</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">В личные сообщения всем, кто перешёл по рекламе и подписался на ваш канал</p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="glass-card rounded-2xl p-6 card-hover">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#1E9BF0] text-white flex items-center justify-center font-bold text-sm shrink-0">2</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Квалифицирует лиды</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Выявляет боли, потребности, предлагает решения</p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="glass-card rounded-2xl p-6 card-hover">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#1E9BF0] text-white flex items-center justify-center font-bold text-sm shrink-0">3</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Доводит до целевого действия</h4>
                  <ul className="space-y-1.5 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-[#1E9BF0] mt-0.5">&#8226;</span>
                      <span>Согласует встречу с менеджером (добавляет в календарь, загружает саммари в CRM)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1E9BF0] mt-0.5">&#8226;</span>
                      <span>Совершает продажу (договор, счёт, приём платежа)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1E9BF0] mt-0.5">&#8226;</span>
                      <span>Договаривается о следующем диалоге и пишет в назначенное время</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14 fade-up" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s' }}>
          <div className="inline-block lavender-card px-10 py-6">
            <p className="text-lg font-bold text-gray-900">
              Лид в 1 клик — подписчик становится клиентом без участия менеджера
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
