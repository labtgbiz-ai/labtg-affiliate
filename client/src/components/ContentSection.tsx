/* LabTG — Content & Engagement Section (Page 9 of presentation)
   "Контент и вовлечение"
*/
import { useCompanyReveal } from '@/hooks/useScrollReveal';

const items = [
  { icon: '📋', title: 'Контент-стратегия', desc: 'Разработка контент-стратегии и ведение канала' },
  { icon: '🎬', title: 'Медиа-контент', desc: 'Еженедельные ТЗ по медиа-контенту' },
  { icon: '🎓', title: 'Обучение', desc: 'Обучение владельца Telegram-канала созданию медиаконтента' },
  { icon: '🤖', title: 'AI-видеоролики', desc: 'Создание цифровых AI-видеороликов и видеоподкастов для соцсетей' },
];

export default function ContentSection() {
  const sectionRef = useCompanyReveal();

  return (
    <section ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-white">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="fade-up">
            <span className="pill-badge pill-badge-light text-sm mb-4 inline-block">
              05 / Контент
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Контент и вовлечение
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              Чтобы аудитория оставалась активной, нужен продуманный и качественный контент
            </p>

            <div className="space-y-4">
              {items.map((item, i) => (
                <div key={i} className="glass-card rounded-xl p-5 card-hover flex items-start gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-0.5">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Key result */}
          <div className="fade-up" data-delay="0.15">
            <div className="lavender-card p-10 md:p-12 text-center">
              <span className="pill-badge pill-badge-dark text-xs mb-6 inline-block">Ключевой результат</span>
              <p className="text-xl md:text-2xl font-black text-gray-900 leading-snug">
                Системный контент = постоянный контакт с аудиторией = стабильные продажи
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white/60 rounded-xl p-4">
                  <p className="text-xs text-gray-500 mb-1">Прогрев аккаунтов</p>
                  <p className="font-bold text-gray-900 text-sm">Получение охватов</p>
                </div>
                <div className="bg-white/60 rounded-xl p-4">
                  <p className="text-xs text-gray-500 mb-1">Развитие медийности</p>
                  <p className="font-bold text-gray-900 text-sm">Рост доверия к бренду</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
