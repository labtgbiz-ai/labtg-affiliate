/* LabTG — Next Step CTA Section (Page 14 of presentation)
   "Следующий шаг к росту вашего бизнеса"
*/
import { useCompanyReveal } from '@/hooks/useScrollReveal';

const steps = [
  { num: '01', text: 'Перейдите по ссылке — LabTG Менеджер' },
  { num: '02', text: 'Напишите нашему менеджеру' },
  { num: '03', text: 'Согласуйте время личной встречи с экспертами LabTG' },
];

const benefits = [
  'Проанализируем ваш бизнес',
  'Определим потенциал работы с нами',
  'Обсудим следующие шаги',
];

export default function NextStepSection() {
  const sectionRef = useCompanyReveal();

  return (
    <section ref={sectionRef} id="contact" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-blue-50/30 to-white">
      {/* Background LabTG watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <svg className="w-[600px] h-[600px]" viewBox="0 0 200 200" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <polygon points="100,20 170,160 30,160" fill="#1E9BF0" />
        </svg>
      </div>

      <div className="container relative z-10 max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 fade-up">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
            Следующий шаг<br />к росту вашего бизнеса
          </h2>
        </div>

        {/* Steps */}
        <div className="space-y-4 mb-10 fade-up" data-delay="0.1">
          {steps.map((step) => (
            <div key={step.num} className="flex items-center gap-4 bg-blue-50/60 rounded-2xl px-6 py-4">
              <span className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4D4FF] to-[#E8EEFF] text-gray-700 flex items-center justify-center font-bold text-sm shrink-0">
                {step.num}
              </span>
              <p className="text-gray-900 font-bold text-base md:text-lg">{step.text}</p>
            </div>
          ))}
        </div>

        {/* What you get */}
        <div className="mb-10 fade-up" data-delay="0.2">
          <span className="pill-badge pill-badge-light text-xs mb-4 inline-block">Что получите на встрече</span>
          <div className="flex flex-wrap gap-3">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                <svg className="w-5 h-5 text-[#1E9BF0] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {b}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center fade-up" data-delay="0.3">
          <a
            href="https://t.me/labtg_manager"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient inline-flex items-center gap-3 text-lg px-10 py-5 shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            Написать менеджеру
          </a>
        </div>
      </div>
    </section>
  );
}
