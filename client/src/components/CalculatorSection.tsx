/* LabTG Affiliate — Income Calculator Section
   Design: Gradient mesh bg, glass card calculator, animated number output
   Logic: Stage 1 (7% of sale + 1% ad budget) + Stage 2 (7% ad budget lifetime)
*/
import { useState, useEffect, useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const CALC_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663458361072/CLC9CvFw6EzBzRUxKGTfc6/calculator-bg-iW3uGWb6ahmahUqFdSc4gL.webp';

const AVG_CHECK = 800000; // 800,000 RUB
const CONVERSION = 0.20; // 20%

function formatRub(n: number): string {
  if (n >= 1000000) return `${(n / 1000000).toFixed(1).replace('.0', '')} млн ₽`;
  if (n >= 1000) return `${Math.round(n / 1000)} тыс. ₽`;
  return `${n.toLocaleString('ru-RU')} ₽`;
}

function AnimatedNumber({ value, duration = 600 }: { value: number; duration?: number }) {
  const [displayed, setDisplayed] = useState(value);
  const prevRef = useRef(value);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const start = prevRef.current;
    const end = value;
    const startTime = performance.now();

    cancelAnimationFrame(rafRef.current);

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayed(Math.round(start + (end - start) * eased));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        prevRef.current = end;
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [value, duration]);

  return <>{formatRub(displayed)}</>;
}

export default function CalculatorSection() {
  const titleRef = useScrollReveal();
  const calcRef = useScrollReveal(0.05);

  // Inputs
  const [personalLeads, setPersonalLeads] = useState(50);
  const [subPartnerLeads, setSubPartnerLeads] = useState(30);
  const [adBudgetPerLead, setAdBudgetPerLead] = useState(50000);
  const [stage, setStage] = useState<'1' | '2'>('1');

  // Calculations
  const personalSales = Math.round(personalLeads * CONVERSION);
  const subPartnerSales = Math.round(subPartnerLeads * CONVERSION);

  // Stage 1
  const stage1Personal = personalSales * AVG_CHECK * 0.07;
  const stage1SubPartner = subPartnerSales * AVG_CHECK * 0.04;
  const stage1AdPersonal = personalLeads * adBudgetPerLead * 0.01;
  const stage1AdSubPartner = subPartnerLeads * adBudgetPerLead * 0.01;
  const stage1Total = stage1Personal + stage1SubPartner + stage1AdPersonal + stage1AdSubPartner;

  // Stage 2 (monthly, from ad budget)
  const stage2Personal = personalLeads * adBudgetPerLead * 0.07;
  const stage2SubPartner = subPartnerLeads * adBudgetPerLead * 0.03;
  const stage2Total = stage2Personal + stage2SubPartner;

  const total = stage === '1' ? stage1Total : stage2Total;

  const updateSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const min = Number(input.min);
    const max = Number(input.max);
    const val = Number(input.value);
    const pct = ((val - min) / (max - min)) * 100;
    input.style.setProperty('--value', `${pct}%`);
  };

  const handleSlider = (setter: (v: number) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setter(Number(e.target.value));
    updateSlider(e);
  };

  return (
    <section id="calculator" className="py-20 md:py-28 relative overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0">
        <img src={CALC_BG} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-white/85" />
      </div>

      <div className="container relative z-10">
        {/* Title */}
        <div ref={titleRef as any} className="reveal text-center mb-14">
          <span className="pill-badge pill-badge-blue mb-4 inline-flex">Калькулятор дохода</span>
          <h2 className="font-['Raleway'] font-black text-3xl md:text-5xl text-gray-900 mt-3">
            Посчитайте свой доход
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
            Настройте параметры и увидите, сколько вы можете заработать с партнёрской программой LabTG
          </p>
        </div>

        <div ref={calcRef as any} className="reveal max-w-5xl mx-auto">
          <div className="glass-card rounded-3xl overflow-hidden shadow-2xl border border-white/80">
            {/* Stage toggle */}
            <div className="bg-gray-50 border-b border-gray-100 p-3 md:p-6">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
                <span className="text-xs sm:text-sm text-gray-500 font-medium">Этап:</span>
                <div className="flex bg-white rounded-xl p-1 shadow-sm border border-gray-100">
                  <button
                    onClick={() => setStage('1')}
                    className={`px-2 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                      stage === '1'
                        ? 'bg-[#1E9BF0] text-white shadow-md'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Этап 1
                  </button>
                  <button
                    onClick={() => setStage('2')}
                    className={`px-2 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                      stage === '2'
                        ? 'bg-gray-900 text-white shadow-md'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Этап 2
                  </button>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left: Sliders */}
              <div className="p-3 md:p-8 border-r border-gray-100 overflow-x-hidden">
                <h3 className="font-['Raleway'] font-bold text-gray-900 text-base sm:text-lg mb-4">Параметры</h3>

                <div className="space-y-5">
                  {/* Personal leads */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs sm:text-sm font-semibold text-gray-700">
                        Лично лидов
                      </label>
                      <span className="font-['Raleway'] font-black text-lg sm:text-xl text-[#1E9BF0]">{personalLeads}</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="200"
                      value={personalLeads}
                      onChange={handleSlider(setPersonalLeads)}
                      style={{ '--value': `${((personalLeads - 1) / 199) * 100}%` } as any}
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>1</span>
                      <span>100</span>
                      <span>200</span>
                    </div>
                  </div>

                  {/* Sub-partner leads */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs sm:text-sm font-semibold text-gray-700">
                        От партнёра
                      </label>
                      <span className="font-['Raleway'] font-black text-lg sm:text-xl text-[#1E9BF0]">{subPartnerLeads}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="200"
                      value={subPartnerLeads}
                      onChange={handleSlider(setSubPartnerLeads)}
                      style={{ '--value': `${(subPartnerLeads / 200) * 100}%` } as any}
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>0</span>
                      <span>100</span>
                      <span>200</span>
                    </div>
                  </div>

                  {/* Ad budget */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs sm:text-sm font-semibold text-gray-700">
                        Рекл. бюджет
                      </label>
                      <span className="font-['Raleway'] font-black text-lg sm:text-xl text-[#1E9BF0]">
                        {(adBudgetPerLead / 1000).toFixed(0)}К ₽
                      </span>
                    </div>
                    <input
                      type="range"
                      min="10000"
                      max="300000"
                      step="5000"
                      value={adBudgetPerLead}
                      onChange={handleSlider(setAdBudgetPerLead)}
                      style={{ '--value': `${((adBudgetPerLead - 10000) / 290000) * 100}%` } as any}
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>10К</span>
                      <span>150К</span>
                      <span>300К</span>
                    </div>
                  </div>
                </div>

                {/* Fixed params note */}
                <div className="mt-6 bg-blue-50 rounded-xl p-4 border border-blue-100">
                  <div className="text-xs text-gray-500 font-medium mb-2">Фиксированные параметры LabTG:</div>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-[#1E9BF0]" />
                      <span className="text-xs text-gray-600">Средний чек: <strong>800 000 ₽</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-[#1E9BF0]" />
                      <span className="text-xs text-gray-600">Конверсия в продажу: <strong>20%</strong></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Results */}
              <div className="p-3 md:p-8 bg-gradient-to-br from-gray-50 to-blue-50/30 overflow-x-hidden">
                <h3 className="font-['Raleway'] font-bold text-gray-900 text-base sm:text-lg mb-4">Ваш доход</h3>

                {stage === '1' ? (
                  <div className="space-y-3">
                    <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-sm border border-blue-50">
                      <div className="text-[10px] sm:text-xs text-gray-500 mb-1">7% с личных ({personalSales})</div>
                      <div className="font-['Raleway'] font-black text-lg sm:text-2xl text-gray-900">
                        <AnimatedNumber value={stage1Personal} duration={400} />
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-sm border border-blue-50">
                      <div className="text-[10px] sm:text-xs text-gray-500 mb-1">4% с партнёра ({subPartnerSales})</div>
                      <div className="font-['Raleway'] font-black text-lg sm:text-2xl text-gray-900">
                        <AnimatedNumber value={stage1SubPartner} duration={400} />
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-sm border border-blue-50">
                      <div className="text-[10px] sm:text-xs text-gray-500 mb-1">1% рекл. личных</div>
                      <div className="font-['Raleway'] font-black text-lg sm:text-2xl text-gray-900">
                        <AnimatedNumber value={stage1AdPersonal} duration={400} />
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-sm border border-blue-50">
                      <div className="text-[10px] sm:text-xs text-gray-500 mb-1">1% рекл. партнёра</div>
                      <div className="font-['Raleway'] font-black text-lg sm:text-2xl text-gray-900">
                        <AnimatedNumber value={stage1AdSubPartner} duration={400} />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-sm border border-blue-50">
                      <div className="text-[10px] sm:text-xs text-gray-500 mb-1">7% рекл. личных (мес.)</div>
                      <div className="font-['Raleway'] font-black text-lg sm:text-2xl text-gray-900">
                        <AnimatedNumber value={stage2Personal} duration={400} />
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-sm border border-blue-50">
                      <div className="text-[10px] sm:text-xs text-gray-500 mb-1">3% рекл. партнёра (мес.)</div>
                      <div className="font-['Raleway'] font-black text-lg sm:text-2xl text-gray-900">
                        <AnimatedNumber value={stage2SubPartner} duration={400} />
                      </div>
                    </div>

                    <div className="mt-2 bg-yellow-50 rounded-xl p-2 sm:p-3 border border-yellow-100">
                      <div className="text-[10px] sm:text-xs text-yellow-700 font-medium">
                        Пожизненные выплаты
                      </div>
                    </div>
                  </div>
                )}

                {/* Total */}
                <div className="mt-4 brand-card p-4 sm:p-5 text-center">
                  <div className="text-white/80 text-xs sm:text-sm mb-1">
                    {stage === '1' ? 'Итого' : 'В месяц'}
                  </div>
                  <div className="font-['Raleway'] font-black text-2xl sm:text-4xl md:text-5xl text-white">
                    <AnimatedNumber value={total} duration={400} />
                  </div>
                  {stage === '2' && (
                    <div className="text-white/70 text-[10px] sm:text-xs mt-1">пожизненно</div>
                  )}
                </div>

                <a
                  href="#contact"
                  className="btn-gradient w-full text-center block mt-3 text-xs sm:text-base py-3 sm:py-4"
                >
                  Хочу столько →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
