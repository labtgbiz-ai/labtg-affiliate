/* LabTG Company Landing — Services Section
   Design: Three service cards with detailed information
*/
import { useEffect, useRef, useState } from 'react';

export default function CompanyServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      number: '01',
      title: 'Проработка unit-экономики и маркетинг-стратегия',
      keyPhrase: 'Мы не навязываем инструменты, пока не понимаем экономику проекта.',
      steps: [
        { label: 'Считаем', desc: 'стоимость клиента, лида и подписчика' },
        { label: 'Анализируем', desc: 'ваши планы по лидам, продажам и конверсии' },
        { label: 'Подбираем', desc: 'каналы привлечения' },
        { label: 'Определяем', desc: 'необходимые маркетинговые и IT-инструменты' },
      ],
      result: 'Такой подход дает максимум результата на каждый вложенный рубль.',
    },
    {
      number: '02',
      title: 'Упаковка и презентация',
      keyPhrase: 'Первое впечатление решает всё',
      description: 'Мы помогаем создать продающий профиль, канал или чат, который вызывает доверие и привлекает целевую аудиторию.',
      items: [
        { title: 'Концепция развития', desc: 'Telegram-канала' },
        { title: 'Дизайн аватарки', desc: 'личного профиля, канала и чат-бота — для узнаваемости бренда' },
        { title: 'Навигационный пост', desc: 'для закреплённого сообщения — с синей клинабельной кнопкой' },
      ],
      result: 'Всё, что видит пользователь в первые 3 секунды, работает на продажу.',
    },
    {
      number: '03',
      title: 'Автоматизация маркетинга и продаж',
      keyPhrase: 'Чат-боты и искусственный интеллект экономят время и увеличивают конверсию',
      features: [
        { category: 'Чат-боты', items: [
          'Воронки и автоворонки для конвертации подписчиков в лиды',
          'Рассылки по базе чат-бота',
          'Реферальная система (до 10 уровней вознаграждений)',
          'Интеграция с сайтом, CRM и клиентскими менеджерами',
        ]},
        { category: 'Mini Apps', items: [
          'Интернет-магазин товаров и услуг с интеграцией платежных систем — прямо в Telegram',
        ]},
        { category: 'Сквозная аналитика', items: [
          'Отслеживаем: Откуда приходят подписчики (даже если уходят — остаются в базе)',
          'Наши лиды лучше квалифицируются и становятся клиентами',
          'Накой контент и когда работает эффективнее',
        ]},
      ],
      result: 'Полная автоматизация маркетинга и продаж 24/7.',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden" id="services">
      {/* Background elements */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-10 -z-10" />

      <div className="container">
        {/* Section header */}
        <div className="mb-16 text-center reveal" data-initial="false">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Наши услуги
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Комплексный подход к развитию вашего бизнеса в Telegram
          </p>
        </div>

        {/* Services tabs/cards */}
        <div className="space-y-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="reveal card-hover"
              data-initial="false"
              onClick={() => setActiveService(idx)}
            >
              <div className="glass-card p-8 md:p-10 rounded-3xl">
                {/* Header */}
                <div className="mb-8">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-5xl font-black text-[#1E9BF0] opacity-30">{service.number}</span>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <div className="inline-block pill-badge pill-badge-light">
                        {service.keyPhrase}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content based on service type */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Service 01: Steps */}
                  {idx === 0 && (
                    <>
                      <div className="space-y-4">
                        {service.steps?.map((step, i) => (
                          <div key={i} className="flex gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1E9BF0] text-white flex items-center justify-center font-bold text-sm">
                              {i + 1}
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900">{step.label}</h4>
                              <p className="text-gray-600 text-sm">{step.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="lavender-card p-6 rounded-2xl flex items-center">
                        <div>
                          <p className="text-sm font-semibold text-gray-700 mb-2">Вывод:</p>
                          <p className="text-lg font-bold text-gray-900">{service.result}</p>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Service 02: Items */}
                  {idx === 1 && (
                    <>
                      <div>
                        <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                        <div className="space-y-4">
                          {service.items?.map((item, i) => (
                            <div key={i} className="flex gap-3">
                              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1E9BF0] text-white flex items-center justify-center text-xs font-bold">
                                ✓
                              </div>
                              <div>
                                <h4 className="font-bold text-gray-900">{item.title}</h4>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="lavender-card p-6 rounded-2xl flex items-center">
                        <div>
                          <p className="text-sm font-semibold text-gray-700 mb-2">Результат:</p>
                          <p className="text-lg font-bold text-gray-900">{service.result}</p>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Service 03: Features */}
                  {idx === 2 && (
                    <>
                      <div className="space-y-6">
                        {service.features?.map((feature, i) => (
                          <div key={i}>
                            <h4 className="font-bold text-gray-900 mb-3 text-lg">{feature.category}</h4>
                            <ul className="space-y-2">
                              {feature.items.map((item, j) => (
                                <li key={j} className="flex gap-2 text-gray-600 text-sm">
                                  <span className="text-[#1E9BF0] font-bold">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="lavender-card p-6 rounded-2xl flex items-center">
                        <div>
                          <p className="text-sm font-semibold text-gray-700 mb-2">Результат:</p>
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
