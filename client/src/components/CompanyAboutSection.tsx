/* LabTG Company Landing — About Section
   Design: Glassmorphism cards with gradient backgrounds
*/
import { useCompanyReveal } from '@/hooks/useScrollReveal';

export default function CompanyAboutSection() {
  const sectionRef = useCompanyReveal();

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-white relative overflow-hidden" id="about">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-100 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-100 rounded-full blur-3xl opacity-20" />

      <div className="container relative z-10">
        {/* Section header */}
        <div className="mb-16 text-center fade-up">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Кто мы
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            LabTG — продюсерский центр полного цикла, команда экспертов по маркетингу и IT
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left: Description */}
          <div className="fade-up" data-delay="0.1">
            <div className="brand-card p-8 md:p-10 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Что мы делаем</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  Мы помогаем предпринимателям, экспертам и брендам запускать, упаковывать и масштабировать бизнес через Telegram «под ключ».
                </p>
              </div>
              
              <div className="pt-4 border-t border-white/20">
                <p className="text-white/80 text-sm mb-2">Главный результат:</p>
                <p className="text-white font-bold text-xl">
                  Превращаем подписчиков в платежеспособных клиентов всего за 1 клик.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Stats/Benefits */}
          <div className="fade-up" data-delay="0.2">
            <div className="space-y-4">
              {[
                { title: 'Полный цикл', desc: 'От стратегии до автоматизации' },
                { title: 'Экспертная команда', desc: 'Маркетинг, IT и продакшн' },
                { title: 'Результат-ориентированно', desc: 'Максимум ROI на каждый рубль' },
                { title: 'Telegram-фокус', desc: 'Все инструменты в одной платформе' },
              ].map((item, i) => (
                <div key={i} className="glass-card p-6 rounded-2xl hover:shadow-lg transition-all duration-300 card-hover">
                  <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
