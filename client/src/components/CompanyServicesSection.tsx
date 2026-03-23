/* LabTG Company Landing — Services Section
   Design: Three service cards with detailed information
*/
import { useCompanyReveal } from '@/hooks/useScrollReveal';

export default function CompanyServicesSection() {
  const sectionRef = useCompanyReveal();

  const services = [
    {
      number: '01',
      title: 'Проработка unit-экономики и маркетинг-стратегия',
      keyPhrase: 'Мы не навязываем инструменты, пока не понимаем экономику проекта.',
      steps: [
        { label: 'Считаем', desc: 'стоимость клиента, лида и подписчика' },
        { label: 'Анализируем', desc: 'планы по лидам, продажам и конверсии' },
        { label: 'Подбираем', desc: 'каналы привлечения' },
        { label: 'Определяем', desc: 'необходимые маркетинговые и IT-инструменты' },
      ],
      result: 'Максимум результата на каждый вложенный рубль.',
    },
    {
      number: '02',
      title: 'Упаковка и презентация',
      keyPhrase: 'Первое впечатление решает всё',
      description: 'Создаём продающий профиль, канал или чат, который вызывает доверие и привлекает целевую аудиторию.',
      items: [
        { title: 'Концепция развития', desc: 'Telegram-канала' },
        { title: 'Дизайн аватарки', desc: 'профиля, канала и чат-бота — для узнаваемости бренда' },
        { title: 'Разработка названия', desc: 'запоминающегося и хорошо индексируемого в поиске' },
        { title: 'Разработка описания', desc: 'личного профиля, канала и чат-бота' },
        { title: 'Навигационный пост', desc: 'с кликабельной кнопкой, привлекающей внимание' },
      ],
      result: 'Всё, что видит пользователь в первые 3 секунды, работает на продажу.',
    },
    {
      number: '03',
      title: 'Автоматизация маркетинга и продаж',
      keyPhrase: 'Чат-боты и AI экономят время и увеличивают конверсию',
      features: [
        { category: 'Чат-боты', items: [
          'Воронки и автоворонки для конвертации подписчиков в лиды',
          'Рассылки по базе чат-бота',
          'Реферальная система (до 10 уровней)',
          'Интеграция с сайтом, CRM и менеджерами',
        ]},
        { category: 'Mini Apps', items: [
          'Интернет-магазин с платежными системами — прямо в Telegram',
        ]},
        { category: 'Сквозная аналитика', items: [
          'Откуда приходят подписчики',
          'Какие лиды лучше квалифицируются',
          'Какой контент работает эффективнее',
        ]},
      ],
      result: 'Полная автоматизация маркетинга и продаж 24/7.',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-b from-white to-blue-50/50 relative overflow-hidden" id="services">
      {/* Background elements */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-purple-100 rounded-full blur-3xl opacity-10" />

      <div className="container relative z-10">
        {/* Section header */}
        <div className="mb-16 text-center fade-up">
          <span className="pill-badge pill-badge-light text-sm mb-4 inline-block">Наши услуги</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Комплексный подход к развитию бизнеса
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Три ключевых направления для максимального результата в Telegram
          </p>
        </div>

        {/* Services cards */}
        <div className="space-y-8">
          {services.map((service, idx) => (
            <div key={idx} className="fade-up" data-delay={String(idx * 0.12)}>
              <div className="glass-card p-8 md:p-10 rounded-3xl card-hover">
                {/* Header */}
                <div className="flex items-start gap-4 md:gap-6 mb-8">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1E9BF0] to-[#0d7fd8] flex items-center justify-center">
                    <span className="text-2xl font-black text-white">{service.number}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-[#1E9BF0] font-medium text-sm md:text-base">
                      {service.keyPhrase}
                    </p>
                  </div>
                </div>

                {/* Content based on service type */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Service 01: Steps */}
                  {idx === 0 && (
                    <>
                      <div className="space-y-4">
                        {service.steps?.map((step, i) => (
                          <div key={i} className="flex gap-4 items-start">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1E9BF0]/10 text-[#1E9BF0] flex items-center justify-center font-bold text-sm">
                              {i + 1}
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900 text-sm">{step.label}</h4>
                              <p className="text-gray-500 text-sm">{step.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="lavender-card p-6 rounded-2xl flex items-center">
                        <div>
                          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Результат</p>
                          <p className="text-lg font-bold text-gray-900">{service.result}</p>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Service 02: Items */}
                  {idx === 1 && (
                    <>
                      <div>
                        <p className="text-gray-600 mb-5 leading-relaxed text-sm">{service.description}</p>
                        <div className="space-y-3">
                          {service.items?.map((item, i) => (
                            <div key={i} className="flex gap-3 items-start">
                              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#1E9BF0] text-white flex items-center justify-center mt-0.5">
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <div>
                                <span className="font-semibold text-gray-900 text-sm">{item.title}</span>
                                <span className="text-gray-500 text-sm"> — {item.desc}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="lavender-card p-6 rounded-2xl flex items-center">
                        <div>
                          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Результат</p>
                          <p className="text-lg font-bold text-gray-900">{service.result}</p>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Service 03: Features */}
                  {idx === 2 && (
                    <>
                      <div className="space-y-5">
                        {service.features?.map((feature, i) => (
                          <div key={i}>
                            <h4 className="font-bold text-gray-900 mb-2 text-sm">{feature.category}</h4>
                            <ul className="space-y-1.5">
                              {feature.items.map((item, j) => (
                                <li key={j} className="flex gap-2 text-gray-500 text-sm">
                                  <span className="text-[#1E9BF0] font-bold mt-0.5">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="lavender-card p-6 rounded-2xl flex items-center">
                        <div>
                          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Результат</p>
                          <p className="text-lg font-bold text-gray-900">{service.result}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
