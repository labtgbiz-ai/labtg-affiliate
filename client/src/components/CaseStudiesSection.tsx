import { useCompanyReveal } from '@/hooks/useScrollReveal';

const cases = [
  {
    id: 1,
    category: 'Маркетинг',
    client: 'HABITAT | Денис Кусенков',
    subtitle: 'Загородный девелопмент',
    photo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663458361072/CLC9CvFw6EzBzRUxKGTfc6/case-habitat-photo_760893a1.png',
    problem: 'Сложность донесения ценности системного подхода в загородном девелопменте. Потенциальные партнёры и инвесторы не понимали масштаб опыта эксперта.',
    actions: [
      'Через бриф выявили ключевые компетенции в маркетинге и девелопменте',
      'Разработали навигационный пост-презентацию',
      'Структурировали опыт 15+ поселков по категориям',
      'Внедрили призыв к консультации для целевой аудитории',
    ],
    result: 'Канал превратился в профессиональное портфолио, которое закрывает вопросы доверия ещё до личного созвона. Рост входящих запросов на консалтинг в сфере ИЖС.',
    metric: 'Рост запросов',
    link: 'https://t.me/habitat_kusenkoff',
    linkText: 'HABITAT',
    categoryColor: '#6366f1',
    categoryBg: 'rgba(99,102,241,0.1)',
  },
  {
    id: 2,
    category: 'Автоматизация',
    client: 'EM Platform',
    subtitle: 'Чат-боты и автоматизация',
    photo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663458361072/CLC9CvFw6EzBzRUxKGTfc6/case-em-logo_7c204be7.png',
    problem: 'У бренда не было автоматизации бизнеса, продажи осуществлялись вручную, покупатели привлекались хаотично по "сарафанному радио".',
    actions: [
      'Разработали автоматизированную платформу с нативным сценарием в Telegram',
      'Внедрили полноценный интернет-магазин внутри бота',
      'Создали базу знаний и систему поддержки',
      'Интегрировали многоуровневую партнёрскую программу',
    ],
    result: 'Хаотичное "сарафанное радио" превратилось в управляемый маркетинговый инструмент, продажи перешли на автопилот, бренд получил систему сквозной аналитики.',
    metric: 'Продажи на автопилоте',
    link: null,
    linkText: 'EM Platform',
    categoryColor: '#0ea5e9',
    categoryBg: 'rgba(14,165,233,0.1)',
  },
  {
    id: 3,
    category: 'AI Лид-агент',
    client: 'Медицинское оборудование',
    subtitle: 'B2B продажи',
    photo: null,
    problem: 'Дорогие лиды в B2B, менеджеры тратят время на нецелевые контакты, долгий цикл сделки.',
    actions: [
      'Внедрили AI Лид-агента с обученной базой знаний по медоборудованию',
      'Настроили автоматическую квалификацию лидов через диалог',
      'Интегрировали систему мгновенной передачи горячего лида менеджеру',
    ],
    result: 'Привлечено 2000 контактов, получено 851 ответ (42,5%), запись на встречу 48 человек (5,6%). Стоимость лида снижена в 3 раза. Чек: от 150 000 до 2 млн руб.',
    metric: 'Стоимость лида ÷3',
    link: null,
    linkText: 'NDA',
    categoryColor: '#10b981',
    categoryBg: 'rgba(16,185,129,0.1)',
  },
  {
    id: 4,
    category: 'Трафик',
    client: 'Иван Попов | BST',
    subtitle: 'Трейдинг и обучение',
    photo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663458361072/CLC9CvFw6EzBzRUxKGTfc6/case-bst-photo_aa724e4b.png',
    problem: 'Высокая стоимость подписчика в нише трейдинга и низкая вовлечённость аудитории в обучающие продукты.',
    actions: [
      'Провели аудит текущего канала',
      'Разработали навигационный пост с чётким УТП эксперта',
      'Запустили кампании в Telegram Ads на аудиторию конкурентов',
    ],
    result: 'Канал вырос до 8 900+ целевых подписчиков, стоимость лида снизилась в 2 раза, выросла активность в комментариях и продажи обновлённых потоков обучения.',
    metric: '8 900+ подписчиков',
    link: 'https://t.me/bst_trading',
    linkText: 'Иван Попов | BST',
    categoryColor: '#f59e0b',
    categoryBg: 'rgba(245,158,11,0.1)',
  },
  {
    id: 5,
    category: 'Продюсирование',
    client: 'MEN MAFIA',
    subtitle: 'Мужская одежда',
    photo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663458361072/CLC9CvFw6EzBzRUxKGTfc6/case-men-mafia-logo_a1660a93.png',
    problem: 'Заказы принимались хаотично через разные мессенджеры (ВК, WhatsApp, Telegram), менеджеры не успевали обрабатывать запросы, теряя продажи.',
    actions: [
      'Провели полный ребрендинг канала',
      'Разработали навигационный пост с каталогом по категориям',
      'Внедрили кнопку "ЗАКАЗ" с автоматической связкой с менеджером',
      'Регламентировали условия доставки и самовывоза',
    ],
    result: 'Продажи выросли за счёт удобства интерфейса, нагрузка на поддержку снизилась на 60%, создана понятная воронка от выбора товара до оплаты.',
    metric: 'Нагрузка на поддержку −60%',
    link: null,
    linkText: 'MEN MAFIA',
    categoryColor: '#ef4444',
    categoryBg: 'rgba(239,68,68,0.1)',
  },
];

export default function CaseStudiesSection() {
  const sectionRef = useCompanyReveal();

  return (
    <section ref={sectionRef} id="cases" className="py-20 md:py-32 relative overflow-hidden" style={{ background: '#f8fafc' }}>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ background: '#bfdbfe', opacity: 0.25 }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl" style={{ background: '#e9d5ff', opacity: 0.2 }} />

      <div className="container relative z-10">
        <div className="mb-14 text-center fade-up">
          <span className="pill-badge pill-badge-light text-sm mb-4 inline-block">Портфолио</span>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#111827' }}>
            Кейсы и результаты
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6b7280' }}>
            Реальные проекты с измеримыми результатами — от маркетинга до AI-автоматизации
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 fade-up" data-delay="0.1">
          {cases.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl overflow-hidden card-hover flex flex-col"
              style={{ background: '#ffffff', border: '1px solid #e5e7eb', boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}
            >
              {/* Card Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center gap-3 mb-4">
                  {item.photo ? (
                    <img
                      src={item.photo}
                      alt={item.client}
                      className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                      style={{ border: '2px solid #e5e7eb' }}
                    />
                  ) : (
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold"
                      style={{ background: item.categoryBg, color: item.categoryColor }}
                    >
                      {item.client.charAt(0)}
                    </div>
                  )}
                  <div className="min-w-0">
                    <div className="font-bold text-sm leading-tight truncate" style={{ color: '#111827' }}>
                      {item.client}
                    </div>
                    <div className="text-xs" style={{ color: '#9ca3af' }}>{item.subtitle}</div>
                  </div>
                  <span
                    className="ml-auto text-xs font-semibold px-2 py-1 rounded-full flex-shrink-0"
                    style={{ background: item.categoryBg, color: item.categoryColor }}
                  >
                    {item.category}
                  </span>
                </div>

                {/* Problem */}
                <div className="mb-3">
                  <div className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: '#9ca3af' }}>Задача</div>
                  <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>{item.problem}</p>
                </div>
              </div>

              {/* Result block */}
              <div className="mx-6 mb-4 rounded-2xl p-4" style={{ background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)' }}>
                <div className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: '#0369a1' }}>Результат</div>
                <p className="text-sm leading-relaxed" style={{ color: '#1e40af' }}>{item.result}</p>
              </div>

              {/* Footer */}
              <div className="px-6 pb-5 mt-auto flex items-center justify-between">
                <div
                  className="text-sm font-bold px-3 py-1.5 rounded-xl"
                  style={{ background: item.categoryBg, color: item.categoryColor }}
                >
                  {item.metric}
                </div>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold flex items-center gap-1 hover:underline"
                    style={{ color: '#1E9BF0' }}
                  >
                    {item.linkText} →
                  </a>
                ) : (
                  <span className="text-xs" style={{ color: '#9ca3af' }}>
                    {item.id === 3 ? 'Конфиденциально (NDA)' : item.linkText}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* All cases link */}
        <div className="mt-12 text-center fade-up" data-delay="0.2">
          <div className="rounded-2xl p-6 inline-block max-w-lg" style={{ background: 'linear-gradient(135deg, #1E9BF0 0%, #0d7fd8 100%)' }}>
            <p className="text-sm font-semibold mb-3" style={{ color: '#ffffff' }}>
              Все кейсы вы сможете посмотреть по ссылке
            </p>
            <a
              href="https://t.me/labtg_manager"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:opacity-90"
              style={{ background: '#ffffff', color: '#1E9BF0' }}
            >
              Смотреть все кейсы →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
