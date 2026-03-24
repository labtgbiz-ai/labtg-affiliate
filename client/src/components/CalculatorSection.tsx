/*
   CalculatorSection: Interactive income calculator with new partner program structure
   Logic: Agent and Partner roles with different percentages for Stage 1 and Stage 2
*/
import { useState, useEffect, useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  const titleRef = useScrollReveal();
  const calcRef = useScrollReveal(0.05);

  // Inputs
  const [personalLeads, setPersonalLeads] = useState(50);
  const [subPartnerLeads, setSubPartnerLeads] = useState(30);
  const [adBudgetPerLead, setAdBudgetPerLead] = useState(150000);
  const [stage, setStage] = useState<'1' | '2'>('1');

  // Calculations
  const personalSales = Math.round(personalLeads * CONVERSION);
  const subPartnerSales = Math.round(subPartnerLeads * CONVERSION);

  // Partner calculations (simplified - only one role)
  let total = 0;

  if (stage === '1') {
    // Partner Stage 1: 7% + 0.7% from personal + 4% + 0.4% from sub-partner
    const partnerPersonalService = personalSales * AVG_CHECK * 0.07;
    const partnerPersonalAd = personalLeads * adBudgetPerLead * 0.007;
    const partnerSubPartnerService = subPartnerSales * AVG_CHECK * 0.04;
    const partnerSubPartnerAd = subPartnerLeads * adBudgetPerLead * 0.004;
    total = partnerPersonalService + partnerPersonalAd + partnerSubPartnerService + partnerSubPartnerAd;
  } else {
    // Partner Stage 2: 7% from subscribers + 7% from leads (personal) + 4% from subscribers + 4% from leads (sub-partner)
    const partnerPersonalSubscribers = personalLeads * adBudgetPerLead * 0.07;
    const partnerPersonalLeads = personalSales * AVG_CHECK * 0.07;
    const partnerSubPartnerSubscribers = subPartnerLeads * adBudgetPerLead * 0.04;
    const partnerSubPartnerLeads = subPartnerSales * AVG_CHECK * 0.04;
    total = partnerPersonalSubscribers + partnerPersonalLeads + partnerSubPartnerSubscribers + partnerSubPartnerLeads;
  }

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
        <img src={CALC_BG} alt="Income calculator background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-white/85" />
      </div>

      <div className="container relative z-10">
        {/* Title */}
        <div ref={titleRef as any} className="reveal text-center mb-12">
          <span className="pill-badge pill-badge-light mb-4 inline-flex">{t('partners.calcBadge')}</span>
          <h2 className="font-['Raleway'] font-black text-3xl md:text-5xl text-gray-900 mt-3">
            {t('partners.calcTitle')}
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
            {t('partners.calcSubtitle')}
          </p>
        </div>

        {/* Calculator */}
        <div ref={calcRef as any} className="reveal max-w-3xl mx-auto">
          <div className="glass-card rounded-3xl p-6 md:p-10 backdrop-blur-xl border border-white/20 shadow-2xl">
            {/* Stage Tabs */}
            <div className="flex gap-3 mb-8">
              <button
                onClick={() => setStage('1')}
                className={`flex-1 px-4 py-3 rounded-xl font-['Raleway'] font-bold transition-all ${
                  stage === '1'
                    ? 'bg-[#1E9BF0] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {t('partners.calcStage1')}
              </button>
              <button
                onClick={() => setStage('2')}
                className={`flex-1 px-4 py-3 rounded-xl font-['Raleway'] font-bold transition-all ${
                  stage === '2'
                    ? 'bg-[#1E9BF0] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {t('partners.calcStage2')}
              </button>
            </div>

            {/* Sliders */}
            <div className="space-y-6 mb-8">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="font-['Raleway'] font-bold text-gray-900">{t('partners.calcPersonalLeads')}</label>
                  <span className="text-[#1E9BF0] font-bold">{personalLeads}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="200"
                  value={personalLeads}
                  onChange={handleSlider(setPersonalLeads)}
                  className="slider w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1</span>
                  <span>100</span>
                  <span>200</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="font-['Raleway'] font-bold text-gray-900">{t('partners.calcSubPartnerLeads')}</label>
                  <span className="text-[#1E9BF0] font-bold">{subPartnerLeads}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={subPartnerLeads}
                  onChange={handleSlider(setSubPartnerLeads)}
                  className="slider w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0</span>
                  <span>100</span>
                  <span>200</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="font-['Raleway'] font-bold text-gray-900">{t('partners.calcAdBudget')}</label>
                  <span className="text-[#1E9BF0] font-bold">{formatRub(adBudgetPerLead)}</span>
                </div>
                <input
                  type="range"
                  min="150000"
                  max="5000000"
                  step="50000"
                  value={adBudgetPerLead}
                  onChange={handleSlider(setAdBudgetPerLead)}
                  className="slider w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>150К</span>
                  <span>2.5М</span>
                  <span>5М</span>
                </div>
              </div>
            </div>

            {/* Fixed params */}
            <div className="bg-gray-50 rounded-2xl p-4 mb-8">
              <div className="text-sm text-gray-600 font-semibold mb-3">{t('partners.calcFixedParams')}</div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-gray-500">{t('partners.calcAvgCheck')}</div>
                  <div className="font-['Raleway'] font-bold text-lg text-gray-900">800 000 ₽</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">{t('partners.calcConversion')}</div>
                  <div className="font-['Raleway'] font-bold text-lg text-gray-900">20%</div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="bg-gradient-to-br from-[#1E9BF0]/10 to-[#D4D4FF]/10 rounded-2xl p-6 border border-[#1E9BF0]/20">
              <div className="text-sm text-gray-600 font-semibold mb-2">{t('partners.calcYourIncome')}</div>
              <div className="font-['Raleway'] font-black text-4xl md:text-5xl text-[#1E9BF0] mb-1">
                <AnimatedNumber value={total} />
              </div>
              <div className="text-xs text-gray-500">
                {stage === '1' ? t('partners.calcStage1Suffix') : t('partners.calcStage2Suffix')}
              </div>
            </div>

            {/* CTA */}
            <a href="#contact" className="block w-full mt-8 bg-[#1E9BF0] hover:bg-[#1a7fb8] text-white font-['Raleway'] font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl text-center">
              {t('partners.calcCta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
