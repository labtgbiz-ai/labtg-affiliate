import { useCompanyReveal } from '@/hooks/useScrollReveal';

const methods = [
  { num: '01', title: 'Telegram Ads', desc: 'Официальная таргетированная реклама в Telegram' },
  { num: '02', title: 'Посевы в каналах', desc: 'Прямые размещения в рекламных Telegram-каналах с маркировкой или без' },
  { num: '03', title: 'Нейрокомментинг', desc: 'Нативные комментарии к постам публичных каналов с помощью AI' },
  { num: '04', title: 'Коллаборации', desc: 'Нативные интеграции с блогерами и авторскими каналами' },
  { num: '05', title: 'Реферальная система', desc: 'Существующие подписчики привлекают новых за вознаграждение' },
  { num: '06', title: 'Рассылки по базам', desc: 'Массовые целевые диалоги с полезной информацией (не спам)' },
  { num: '07', title: 'Массовая аудитория из соцсетей', desc: 'Целевая аудитория для увеличения медийности канала' },
  { num: '08', title: 'AI-видеоконтент', desc: 'Говорящие головы и полноростовые модели для привлечения из соцсетей' },
  { num: '09', title: 'Яндекс.Директ', desc: 'Контекстная реклама — показы в момент, когда ищут ваш товар или услугу' },
  { num: '10', title: 'Яндекс.Карты', desc: 'Повышение репутации — метка «Хорошее место» (органический трафик)' },
  { num: '11', title: 'Авито', desc: 'AI-отзывы для увеличения рейтинга и видимости объявлений' },
];

export default function LeadAttractionSection() {
  const sectionRef = useCompanyReveal();

  return (
    <section ref={sectionRef} id="lead-attraction" className="py-20 md:py-32 relative overflow-hidden" style={{ background: '#ffffff' }}>
      <div className="absolute top-10 left-0 w-96 h-96 rounded-full blur-3xl" style={{ background: '#eff6ff', opacity: 0.5, position: 'absolute' }} />

      <div className="container relative z-10">
        <div className="text-center mb-14 fade-up">
          <span className="pill-badge pill-badge-light text-sm mb-4 inline-block">04 / Привлечение</span>
          <h2 className="text-3xl md:text-5xl font-black mb-4" style={{ color: '#111827' }}>
            11 способов привлечения{' '}
            <br className="hidden md:block" />
            <span className="gradient-text">целевых подписчиков и лидов</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6b7280' }}>
            Без аудитории нет продаж. Используем самые эффективные технологии привлечения
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 fade-up" data-delay="0.15">
          {methods.map((m) => (
            <div key={m.num} className="rounded-2xl p-6 card-hover group" style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid #e5e7eb', backdropFilter: 'blur(10px)' }}>
              <div className="flex items-start gap-3">
                <span className="font-black text-lg shrink-0" style={{ color: '#1E9BF0' }}>{m.num}/</span>
                <div>
                  <h4 className="font-bold mb-1 text-sm" style={{ color: '#111827' }}>{m.title}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: '#6b7280' }}>{m.desc}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Result card */}
          <div className="rounded-2xl p-6 flex items-center" style={{ background: 'linear-gradient(135deg, #E8EEFF 0%, #D4D4FF 100%)' }}>
            <div>
              <span className="pill-badge pill-badge-dark text-xs mb-2 inline-block">Главный результат</span>
              <p className="text-sm font-bold leading-relaxed" style={{ color: '#1e1b4b' }}>
                Все 11 методов работают на одну цель — привести платежеспособных подписчиков и лидов в ваш бизнес
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
