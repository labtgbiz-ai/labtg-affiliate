/*
   EarningsSection: Partner program conditions with new structure
   Design: White bg, tabs for Agent/Partner, two-stage layout with new percentages
*/
import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const NETWORK_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663458361072/CLC9CvFw6EzBzRUxKGTfc6/partner-network-L8mnuMcbYkb7ea5qS7dA27.webp';

export default function EarningsSection() {
  const [role, setRole] = useState<'agent' | 'partner'>('partner');
  const titleRef = useScrollReveal();
  const stage1Ref = useScrollReveal(0.1);
  const stage2Ref = useScrollReveal(0.1);

  return (
    <section id="earnings" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <span className="deco-number left-[-2rem] top-8">02</span>

      <div className="container relative z-10">
        {/* Title */}
        <div ref={titleRef as any} className="reveal text-center mb-16">
          <span className="pill-badge pill-badge-light mb-4 inline-flex">Условия программы</span>
          <h2 className="font-['Raleway'] font-black text-3xl md:text-5xl text-gray-900 mt-3">
            Выберите вашу роль
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
            Агенты и Партнеры получают разные условия вознаграждения
          </p>
        </div>

        {/* Role Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setRole('agent')}
            className={`px-8 py-4 rounded-full font-['Raleway'] font-bold text-lg transition-all border-2 ${
              role === 'agent'
                ? 'bg-[#1E9BF0] text-white shadow-lg border-[#1E9BF0]'
                : 'bg-white text-gray-900 border-gray-300 hover:border-[#1E9BF0]'
            }`}
          >
            Агент
          </button>
          <button
            onClick={() => setRole('partner')}
            className={`px-8 py-4 rounded-full font-['Raleway'] font-bold text-lg transition-all border-2 ${
              role === 'partner'
                ? 'bg-[#1E9BF0] text-white shadow-lg border-[#1E9BF0]'
                : 'bg-white text-gray-900 border-gray-300 hover:border-[#1E9BF0]'
            }`}
          >
            Партнер
          </button>
        </div>

        {/* AGENT SECTION */}
        {role === 'agent' && (
          <>
            {/* Stage 1 - Agent */}
            <div ref={stage1Ref as any} className="reveal mb-10">
              <div className="rounded-3xl overflow-hidden border border-blue-100 shadow-lg">
                {/* Stage header */}
                <div className="bg-[#1E9BF0] px-8 py-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="bg-white/20 text-white text-sm font-bold px-3 py-1 rounded-full">Этап 1</span>
                    <h3 className="font-['Raleway'] font-black text-xl md:text-2xl text-white">
                      Новый клиент
                    </h3>
                  </div>
                  <span className="hidden md:block text-white/80 text-sm">Тестирование бизнес-модели</span>
                </div>

                <div className="bg-white p-6 md:p-8">
                  <div className="space-y-4">
                    <div className="brand-card p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="text-white/80 text-sm mb-1">Система расчётов: Предоплата</div>
                          <div className="font-['Raleway'] font-black text-4xl text-white">11%</div>
                          <div className="text-white/70 text-xs mt-1">от стоимости услуги</div>
                        </div>
                        <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="lavender-card p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="text-gray-600 text-sm mb-1">Бонус с рекламного бюджета</div>
                          <div className="font-['Raleway'] font-black text-3xl text-[#1E9BF0]">+1.1%</div>
                          <div className="text-gray-500 text-xs mt-1">от рекламного бюджета</div>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-white/60 flex items-center justify-center flex-shrink-0">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E9BF0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 2 - Agent */}
            <div ref={stage2Ref as any} className="reveal">
              <div className="rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-100">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#1E9BF0] to-[#0d7fd8] p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-white/30 text-white text-sm font-bold px-3 py-1 rounded-full backdrop-blur-sm border border-white/50">Этап 2</span>
                    <h3 className="font-['Raleway'] font-black text-2xl md:text-3xl text-white">
                      Текущий клиент
                    </h3>
                  </div>
                  <p className="text-white/90 text-sm md:text-base">
                    Масштабирование бизнеса клиента
                  </p>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <p className="text-gray-600 text-base mb-6 leading-relaxed">
                    Система расчётов: <strong>Предоплата</strong>
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-[#1E9BF0]/10 to-[#D4D4FF]/10 rounded-2xl p-5 border border-[#1E9BF0]/20">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="text-gray-600 text-sm font-semibold mb-1">От стоимости услуги</div>
                          <div className="font-['Raleway'] font-black text-4xl text-[#1E9BF0]">11%</div>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-[#1E9BF0]/20 flex items-center justify-center flex-shrink-0">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="#1E9BF0">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        </div>
                      </div>
                      <div className="text-gray-500 text-xs font-medium">Предоплата</div>
                    </div>

                    <div className="bg-gradient-to-br from-[#1E9BF0]/10 to-[#D4D4FF]/10 rounded-2xl p-5 border border-[#1E9BF0]/20">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="text-gray-600 text-sm font-semibold mb-1">От рекламного бюджета</div>
                          <div className="font-['Raleway'] font-black text-4xl text-[#1E9BF0]">1.1%</div>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-[#1E9BF0]/20 flex items-center justify-center flex-shrink-0">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="#1E9BF0">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        </div>
                      </div>
                      <div className="text-gray-500 text-xs font-medium">Предоплата</div>
                    </div>

                    <div className="bg-gradient-to-br from-[#1E9BF0]/10 to-[#D4D4FF]/10 rounded-2xl p-5 border border-[#1E9BF0]/20">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="text-gray-600 text-sm font-semibold mb-1">От подписчиков</div>
                          <div className="font-['Raleway'] font-black text-4xl text-[#1E9BF0]">11%</div>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-[#1E9BF0]/20 flex items-center justify-center flex-shrink-0">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="#1E9BF0">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        </div>
                      </div>
                      <div className="text-gray-500 text-xs font-medium">Постоплата</div>
                    </div>

                    <div className="bg-gradient-to-br from-[#1E9BF0]/10 to-[#D4D4FF]/10 rounded-2xl p-5 border border-[#1E9BF0]/20">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="text-gray-600 text-sm font-semibold mb-1">От лидов</div>
                          <div className="font-['Raleway'] font-black text-4xl text-[#1E9BF0]">11%</div>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-[#1E9BF0]/20 flex items-center justify-center flex-shrink-0">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="#1E9BF0">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        </div>
                      </div>
                      <div className="text-gray-500 text-xs font-medium">Постоплата</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* PARTNER SECTION */}
        {role === 'partner' && (
          <>
            {/* Stage 1 - Partner */}
            <div ref={stage1Ref as any} className="reveal mb-10">
              <div className="rounded-3xl overflow-hidden border border-blue-100 shadow-lg">
                {/* Stage header */}
                <div className="bg-[#1E9BF0] px-8 py-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="bg-white/20 text-white text-sm font-bold px-3 py-1 rounded-full">Этап 1</span>
                    <h3 className="font-['Raleway'] font-black text-xl md:text-2xl text-white">
                      Коммерческий этап
                    </h3>
                  </div>
                  <span className="hidden md:block text-white/80 text-sm">Первый договор с клиентом</span>
                </div>

                <div className="bg-white p-6 md:p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Left: Personal referrals */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1E9BF0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                            <circle cx="12" cy="7" r="4"/>
                          </svg>
                        </div>
                        <h4 className="font-['Raleway'] font-bold text-gray-900">Линия 1: Личные лиды</h4>
                      </div>

                      <div className="brand-card p-5">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="text-white/80 text-sm mb-1">С каждой продажи</div>
                            <div className="font-['Raleway'] font-black text-4xl text-white">7%</div>
                            <div className="text-white/70 text-xs mt-1">от суммы договора</div>
                          </div>
                          <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="lavender-card p-4">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="text-gray-600 text-sm mb-1">Бонус с рекламного бюджета</div>
                            <div className="font-['Raleway'] font-black text-3xl text-[#1E9BF0]">+0.7%</div>
                            <div className="text-gray-500 text-xs mt-1">от рекламного бюджета лида</div>
                          </div>
                          <div className="w-10 h-10 rounded-xl bg-white/60 flex items-center justify-center flex-shrink-0">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E9BF0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right: Sub-partner referrals */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                            <circle cx="9" cy="7" r="4"/>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                          </svg>
                        </div>
                        <h4 className="font-['Raleway'] font-bold text-gray-900">Линия 2: Лиды партнёра</h4>
                      </div>

                      <div className="rounded-2xl bg-gray-900 p-5">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="text-gray-400 text-sm mb-1">С продаж привлечённого партнёра</div>
                            <div className="font-['Raleway'] font-black text-4xl" style={{color: '#0d81fd'}}>4%</div>
                            <div className="text-gray-500 text-xs mt-1">от суммы каждой сделки</div>
                          </div>
                          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="18" cy="5" r="3"/>
                              <circle cx="6" cy="12" r="3"/>
                              <circle cx="18" cy="19" r="3"/>
                              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="lavender-card p-4">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="text-gray-600 text-sm mb-1">Бонус с рекламного бюджета партнёра</div>
                            <div className="font-['Raleway'] font-black text-3xl text-[#1E9BF0]">+0.4%</div>
                            <div className="text-gray-500 text-xs mt-1">от рекламного бюджета его лидов</div>
                          </div>
                          <div className="w-10 h-10 rounded-xl bg-white/60 flex items-center justify-center flex-shrink-0">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E9BF0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Network visual */}
                  <div className="mt-6 rounded-2xl overflow-hidden bg-gray-950 flex items-center gap-6 p-4 md:p-6" style={{borderRadius: '17px'}}>
                    <img
                      src={NETWORK_IMG}
                      alt="Партнёрская сеть"
                      className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-xl flex-shrink-0"
                    />
                    <div>
                      <div className="text-white font-['Raleway'] font-bold text-lg mb-1">Двухуровневая сеть</div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Вы привлекаете партнёров, они привлекают лидов — вы зарабатываете с каждой сделки в вашей сети. Чем больше сеть, тем выше пассивный доход.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 2 - Partner */}
            <div ref={stage2Ref as any} className="reveal">
              <div className="rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-100">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#1E9BF0] to-[#0d7fd8] p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-white/30 text-white text-sm font-bold px-3 py-1 rounded-full backdrop-blur-sm border border-white/50">Этап 2</span>
                    <h3 className="font-['Raleway'] font-black text-2xl md:text-3xl text-white">
                      Масштабирование
                    </h3>
                  </div>
                  <p className="text-white/90 text-sm md:text-base">
                    Постоплата = пассивный доход
                  </p>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <p className="text-gray-600 text-base mb-6 leading-relaxed">
                    Когда проект переходит на <strong>постоплату</strong> (LabTG инвестирует в рекламный бюджет клиента), вы начинаете получать процент от подписчиков и лидов.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-[#1E9BF0]/10 to-[#D4D4FF]/10 rounded-2xl p-5 border border-[#1E9BF0]/20">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="text-gray-600 text-sm font-semibold mb-1">Линия 1: От подписчиков</div>
                          <div className="font-['Raleway'] font-black text-4xl text-[#1E9BF0]">7%</div>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-[#1E9BF0]/20 flex items-center justify-center flex-shrink-0">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="#1E9BF0">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        </div>
                      </div>
                      <div className="text-gray-500 text-xs font-medium">Постоплата</div>
                    </div>

                    <div className="bg-gradient-to-br from-[#1E9BF0]/10 to-[#D4D4FF]/10 rounded-2xl p-5 border border-[#1E9BF0]/20">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="text-gray-600 text-sm font-semibold mb-1">Линия 1: От лидов</div>
                          <div className="font-['Raleway'] font-black text-4xl text-[#1E9BF0]">7%</div>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-[#1E9BF0]/20 flex items-center justify-center flex-shrink-0">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="#1E9BF0">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        </div>
                      </div>
                      <div className="text-gray-500 text-xs font-medium">Постоплата</div>
                    </div>

                    <div className="bg-gradient-to-br from-[#1E9BF0]/10 to-[#D4D4FF]/10 rounded-2xl p-5 border border-[#1E9BF0]/20">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="text-gray-600 text-sm font-semibold mb-1">Линия 2: От подписчиков</div>
                          <div className="font-['Raleway'] font-black text-4xl text-[#1E9BF0]">4%</div>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-[#1E9BF0]/20 flex items-center justify-center flex-shrink-0">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="#1E9BF0">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        </div>
                      </div>
                      <div className="text-gray-500 text-xs font-medium">Постоплата</div>
                    </div>

                    <div className="bg-gradient-to-br from-[#1E9BF0]/10 to-[#D4D4FF]/10 rounded-2xl p-5 border border-[#1E9BF0]/20">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="text-gray-600 text-sm font-semibold mb-1">Линия 2: От лидов</div>
                          <div className="font-['Raleway'] font-black text-4xl text-[#1E9BF0]">4%</div>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-[#1E9BF0]/20 flex items-center justify-center flex-shrink-0">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="#1E9BF0">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        </div>
                      </div>
                      <div className="text-gray-500 text-xs font-medium">Постоплата</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
