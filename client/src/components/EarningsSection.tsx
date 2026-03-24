/* LabTG Affiliate — EarningsSection
   Design: White bg, Partner role only, two-stage layout with new percentages
*/
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useTranslation } from 'react-i18next';

const NETWORK_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663458361072/CLC9CvFw6EzBzRUxKGTfc6/partner-network-L8mnuMcbYkb7ea5qS7dA27.webp';

export default function EarningsSection() {
  const { t } = useTranslation();
  const titleRef = useScrollReveal();
  const stage1Ref = useScrollReveal(0.1);
  const stage2Ref = useScrollReveal(0.1);

  return (
    <section id="earnings" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <span className="deco-number left-[-2rem] top-8">02</span>

      <div className="container relative z-10">
        {/* Title */}
        <div ref={titleRef as any} className="reveal text-center mb-16">
          <span className="pill-badge pill-badge-light mb-4 inline-flex">{t('partners.earnBadge')}</span>
          <h2 className="font-['Raleway'] font-black text-3xl md:text-5xl text-gray-900 mt-3">
            {t('partners.earnTitle')}
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
            {t('partners.earnSubtitle')}
          </p>
        </div>

        {/* PARTNER SECTION */}
        <>
          {/* Stage 1 - Partner */}
          <div ref={stage1Ref as any} className="reveal mb-10">
            <div className="rounded-3xl overflow-hidden border border-blue-100 shadow-lg">
              {/* Stage header */}
              <div className="bg-[#1E9BF0] px-8 py-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="bg-white/20 text-white text-sm font-bold px-3 py-1 rounded-full">{t('partners.stage1Label')}</span>
                  <h3 className="font-['Raleway'] font-black text-xl md:text-2xl text-white">
                    {t('partners.stage1Title')}
                  </h3>
                </div>
                <span className="hidden md:block text-white/80 text-sm">{t('partners.stage1Sub')}</span>
              </div>

              <div className="bg-white p-6 md:p-8">
                <div className="space-y-4">
                  {/* Line 1 - Personal leads */}
                  <div>
                    <div className="text-gray-600 text-sm font-semibold mb-3">{t('partners.line1Label')}</div>
                    <div className="space-y-3">
                      <div className="brand-card p-5">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="text-white/80 text-sm mb-1">{t('partners.line1Rate')}</div>
                            <div className="font-['Raleway'] font-black text-4xl text-white">7%</div>
                            <div className="text-white/70 text-xs mt-1">{t('partners.line1RateSub')}</div>
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
                            <div className="text-gray-600 text-sm mb-1">{t('partners.line1Bonus')}</div>
                            <div className="font-['Raleway'] font-black text-3xl text-[#1E9BF0]">+0.7%</div>
                            <div className="text-gray-500 text-xs mt-1">{t('partners.line1BonusSub')}</div>
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

                  {/* Line 2 - Partner's leads */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="text-gray-600 text-sm font-semibold mb-3">{t('partners.line2Label')}</div>
                    <div className="space-y-3">
                      <div className="brand-card p-5">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="text-white/80 text-sm mb-1">{t('partners.line2Rate')}</div>
                            <div className="font-['Raleway'] font-black text-4xl text-white">4%</div>
                            <div className="text-white/70 text-xs mt-1">{t('partners.line2RateSub')}</div>
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
                            <div className="text-gray-600 text-sm mb-1">{t('partners.line2Bonus')}</div>
                            <div className="font-['Raleway'] font-black text-3xl text-[#1E9BF0]">+0.4%</div>
                            <div className="text-gray-500 text-xs mt-1">{t('partners.line2BonusSub')}</div>
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
            </div>

            {/* Network visual */}
            <div className="mt-6 rounded-2xl overflow-hidden bg-gray-950 flex items-center gap-6 p-4 md:p-6" style={{borderRadius: '17px'}}>
              <img
                src={NETWORK_IMG}
                alt="Partner network"
                className="w-32 md:w-48 flex-shrink-0 object-cover"
              />
              <div>
                <h4 className="font-['Raleway'] font-black text-lg md:text-xl text-white mb-2">
                  {t('partners.networkTitle')}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {t('partners.networkDesc')}
                </p>
              </div>
            </div>
          </div>

          {/* Stage 2 - Partner */}
          <div ref={stage2Ref as any} className="reveal mt-10">
            <div className="rounded-3xl overflow-hidden border border-blue-100 shadow-lg">
              {/* Stage header */}
              <div className="bg-[#1E9BF0] px-8 py-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="bg-white/20 text-white text-sm font-bold px-3 py-1 rounded-full">{t('partners.stage2Title')}</span>
                  <h3 className="font-['Raleway'] font-black text-xl md:text-2xl text-white">
                    {t('partners.stage2Title')}
                  </h3>
                </div>
                <span className="hidden md:block text-white/80 text-sm">{t('partners.stage2Sub')}</span>
              </div>

              {/* Content */}
              <div className="bg-white p-6 md:p-8">
                <p className="text-gray-600 text-sm font-semibold mb-6">{t('partners.stage2Desc')}</p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Line 1 - Subscribers */}
                  <div className="bg-gradient-to-br from-[#1E9BF0]/10 to-[#D4D4FF]/10 rounded-2xl p-5 border border-[#1E9BF0]/20">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="text-gray-600 text-sm font-semibold mb-1">{t('partners.fromSubscribersL1')}</div>
                        <div className="font-['Raleway'] font-black text-4xl text-[#1E9BF0]">7%</div>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-[#1E9BF0]/20 flex items-center justify-center flex-shrink-0">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#1E9BF0">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="text-gray-500 text-xs font-medium">{t('partners.postpayLabel')}</div>
                  </div>

                  {/* Line 1 - Leads */}
                  <div className="bg-gradient-to-br from-[#1E9BF0]/10 to-[#D4D4FF]/10 rounded-2xl p-5 border border-[#1E9BF0]/20">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="text-gray-600 text-sm font-semibold mb-1">{t('partners.fromLeadsL1')}</div>
                        <div className="font-['Raleway'] font-black text-4xl text-[#1E9BF0]">7%</div>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-[#1E9BF0]/20 flex items-center justify-center flex-shrink-0">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#1E9BF0">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="text-gray-500 text-xs font-medium">{t('partners.postpayLabel')}</div>
                  </div>

                  {/* Line 2 - Subscribers */}
                  <div className="bg-gradient-to-br from-[#1E9BF0]/10 to-[#D4D4FF]/10 rounded-2xl p-5 border border-[#1E9BF0]/20">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="text-gray-600 text-sm font-semibold mb-1">{t('partners.fromSubscribersL2')}</div>
                        <div className="font-['Raleway'] font-black text-4xl text-[#1E9BF0]">4%</div>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-[#1E9BF0]/20 flex items-center justify-center flex-shrink-0">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#1E9BF0">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="text-gray-500 text-xs font-medium">{t('partners.postpayLabel')}</div>
                  </div>

                  {/* Line 2 - Leads */}
                  <div className="bg-gradient-to-br from-[#1E9BF0]/10 to-[#D4D4FF]/10 rounded-2xl p-5 border border-[#1E9BF0]/20">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="text-gray-600 text-sm font-semibold mb-1">{t('partners.fromLeadsL2')}</div>
                        <div className="font-['Raleway'] font-black text-4xl text-[#1E9BF0]">4%</div>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-[#1E9BF0]/20 flex items-center justify-center flex-shrink-0">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#1E9BF0">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="text-gray-500 text-xs font-medium">{t('partners.postpayLabel')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </section>
  );
}
