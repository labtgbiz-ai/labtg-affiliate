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
    <section ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f0f7ff 50%, #ffffff 100%)' }}>
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="fade-up">
            <span className="pill-badge pill-badge-light text-sm mb-4 inline-block">05 / Контент</span>
            <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: '#111827' }}>
              Контент и вовлечение
            </h2>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: '#6b7280' }}>
              Чтобы аудитория оставалась активной, нужен продуманный и качественный контент
            </p>

            <div className="space-y-4">
              {items.map((item, i) => (
                <div key={i} className="rounded-xl p-5 card-hover flex items-start gap-4" style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid #e5e7eb', backdropFilter: 'blur(10px)' }}>
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h4 className="font-bold text-sm mb-0.5" style={{ color: '#111827' }}>{item.title}</h4>
                    <p className="text-sm" style={{ color: '#6b7280' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Key result */}
          <div className="fade-up" data-delay="0.15">
            <div className="rounded-2xl p-10 md:p-12 text-center" style={{ background: 'linear-gradient(135deg, #E8EEFF 0%, #D4D4FF 100%)' }}>
              <span className="pill-badge pill-badge-dark text-xs mb-6 inline-block">Ключевой результат</span>
              <p className="text-xl md:text-2xl font-black leading-snug" style={{ color: '#1e1b4b' }}>
                Системный контент = постоянный контакт с аудиторией = стабильные продажи
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.7)' }}>
                  <p className="text-xs mb-1" style={{ color: '#6b7280' }}>Прогрев аккаунтов</p>
                  <p className="font-bold text-sm" style={{ color: '#111827' }}>Получение охватов</p>
                </div>
                <div className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.7)' }}>
                  <p className="text-xs mb-1" style={{ color: '#6b7280' }}>Развитие медийности</p>
                  <p className="font-bold text-sm" style={{ color: '#111827' }}>Рост доверия к бренду</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
