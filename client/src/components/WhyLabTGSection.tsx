/* LabTG Affiliate — Why LabTG / About Section
   Design: Light bg, stats, services overview, killer feature "1 click"
*/
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useScrollReveal';
import { useTranslation } from 'react-i18next';



function StatItem({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const ref = useCountUp(end, 2000);
  return (
    <div className="text-center">
      <div className="font-['Raleway'] font-black text-4xl md:text-5xl text-[#1E9BF0] flex items-end justify-center gap-0.5">
        <span ref={ref as any}>0</span>
        <span>{suffix}</span>
      </div>
      <div className="text-gray-500 text-sm mt-1 font-medium">{label}</div>
    </div>
  );
}

export default function WhyLabTGSection() {
  const { t } = useTranslation();
  const titleRef = useScrollReveal();
  const statsRef = useScrollReveal(0.1);
  const featureRef = useScrollReveal(0.1);


  return (
    <section id="about" className="py-20 md:py-28 bg-[#F7F9FC] relative overflow-hidden">
      <span className="deco-number right-[-2rem] bottom-8">03</span>

      <div className="container relative z-10">
        {/* Title */}
        <div ref={titleRef as any} className="reveal text-center mb-16">
          <span className="pill-badge pill-badge-light mb-4 inline-flex">{t('partners.whyBadge')}</span>
          <h2 className="font-['Raleway'] font-black text-3xl md:text-5xl text-gray-900 mt-3">
            {t('partners.whyTitle')}
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
            {t('partners.whySubtitle')}
          </p>
        </div>

        {/* Stats */}
        <div ref={statsRef as any} className="reveal glass-card rounded-3xl p-8 md:p-12 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem end={100} suffix="+" label={t('partners.whyStat1Label')} />
            <StatItem end={150} suffix="+" label={t('partners.whyStat2Label')} />
            <StatItem end={11} suffix="" label={t('partners.whyStat3Label')} />
            <StatItem end={1000} suffix="" label={t('partners.whyStat4Label')} />
          </div>
        </div>

        {/* Killer Feature: 1 Click */}
        <div ref={featureRef as any} className="reveal mb-12">
          <div className="brand-card p-6 md:p-10 relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/10" />
            <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-white/5" />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <div className="flex-1">
                <div className="pill-badge bg-white/20 text-white text-xs mb-3 inline-flex">{t('partners.whyKillerBadge')}</div>
                <h3 className="font-['Raleway'] font-black text-2xl md:text-3xl text-white mb-2">
                  {t('partners.whyKillerTitle')}
                </h3>
                <p className="text-white/80 text-base leading-relaxed max-w-2xl">
                  {t('partners.whyKillerDesc')}
                </p>
              </div>
              <div className="flex flex-col gap-2 flex-shrink-0">
                <div className="bg-white/20 rounded-xl px-4 py-2 text-white text-sm font-semibold text-center">
                  {t('partners.whyBadge1')}
                </div>
                <div className="bg-white/20 rounded-xl px-4 py-2 text-white text-sm font-semibold text-center">
                  {t('partners.whyBadge2')}
                </div>
                <div className="bg-white/20 rounded-xl px-4 py-2 text-white text-sm font-semibold text-center">
                  {t('partners.whyBadge3')}
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
