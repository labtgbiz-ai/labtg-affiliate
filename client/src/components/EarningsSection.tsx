/* LabTG Affiliate — Earnings / Conditions Section
   Design: White bg, two-stage layout, blue cards for stage 1, dark blue for stage 2
   Network image for referral visualization
*/
import { useScrollReveal } from '@/hooks/useScrollReveal';

const NETWORK_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663458361072/CLC9CvFw6EzBzRUxKGTfc6/partner-network-L8mnuMcbYkb7ea5qS7dA27.webp';
const STAGE2_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663458361072/CLC9CvFw6EzBzRUxKGTfc6/stage2-bg-bBPpxKqnjr5rwz7WdBWFBd.webp';

export default function EarningsSection() {
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
            Два уровня дохода
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
            Зарабатывайте на первом коммерческом этапе и получайте пожизненные выплаты на втором
          </p>
        </div>

        {/* Stage 1 */}
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
                    <h4 className="font-['Raleway'] font-bold text-gray-900">Личные лиды</h4>
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
                        <div className="font-['Raleway'] font-black text-3xl text-[#1E9BF0]">+1%</div>
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
                    <h4 className="font-['Raleway'] font-bold text-gray-900">Лиды вашего партнёра</h4>
                  </div>

                  <div className="rounded-2xl bg-gray-900 p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-gray-400 text-sm mb-1">С продаж привлечённого партнёра</div>
                        <div className="font-['Raleway'] font-black text-4xl text-white">4%</div>
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
                        <div className="font-['Raleway'] font-black text-3xl text-[#1E9BF0]">+1%</div>
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
              <div className="mt-6 rounded-2xl overflow-hidden bg-gray-950 flex items-center gap-6 p-4 md:p-6">
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

        {/* Stage 2 */}
        <div ref={stage2Ref as any} className="reveal">
          <div className="rounded-3xl overflow-hidden shadow-2xl relative bg-gradient-to-br from-[#1E9BF0] via-[#0d7fd8] to-[#0a5ba8]">
            {/* BG image - subtle overlay */}
            <div className="absolute inset-0 opacity-20">
              <img src={STAGE2_BG} alt="" className="w-full h-full object-cover" />
            </div>

            <div className="relative z-10 p-6 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-white/30 text-white text-sm font-bold px-3 py-1 rounded-full backdrop-blur-sm border border-white/50">Этап 2</span>
                <h3 className="font-['Raleway'] font-black text-2xl md:text-4xl text-white">
                  Пожизненные выплаты
                </h3>
              </div>

              <p className="text-white/95 text-base md:text-lg mb-8 max-w-2xl leading-relaxed">
                Когда проект переходит на <strong>постоплату</strong> (LabTG инвестирует в рекламный бюджет клиента), вы начинаете получать процент с рекламного бюджета — <strong className="text-yellow-300">пожизненно</strong>.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/40 shadow-lg">
                  <div className="text-white/90 text-sm font-semibold mb-2">Лично привлечённые лиды</div>
                  <div className="font-['Raleway'] font-black text-6xl text-white mb-2">7%</div>
                  <div className="text-white/80 text-base font-medium mb-3">с рекламного бюджета</div>
                  <div className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-300 flex-shrink-0">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span className="text-white/90 text-xs font-semibold">Пожизненно</span>
                  </div>
                </div>

                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/40 shadow-lg">
                  <div className="text-white/90 text-sm font-semibold mb-2">Лиды вашего партнёра</div>
                  <div className="font-['Raleway'] font-black text-6xl text-white mb-2">3%</div>
                  <div className="text-white/80 text-base font-medium mb-3">с рекламного бюджета</div>
                  <div className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-300 flex-shrink-0">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span className="text-white/90 text-xs font-semibold">Пожизненно</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 inline-flex items-center gap-2 bg-white/20 border border-white/40 rounded-xl px-4 py-3 backdrop-blur-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span className="text-white font-semibold text-sm">
                  Выплаты продолжаются, пока клиент работает с LabTG
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
