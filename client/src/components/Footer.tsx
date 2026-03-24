/* LabTG Affiliate — Footer
   Design: Dark bg, brand info, links
*/
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  const navLinks = [
    { href: '#how-it-works', label: t('partners.footerNavHowItWorks') },
    { href: '#earnings', label: t('partners.footerNavConditions') },
    { href: '#calculator', label: t('partners.footerNavCalculator') },
    { href: '#about', label: t('partners.footerNavAbout') },
    { href: '#contact', label: t('partners.footerNavContact') },
  ];

  return (
    <footer className="bg-white text-gray-900 py-12 md:py-16 border-t border-gray-100">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663458361072/CLC9CvFw6EzBzRUxKGTfc6/логотип_1_a8a68d00.png" alt="LabTG" className="h-10 w-auto" />
              <div>
                <span className="font-['Raleway'] font-black text-lg tracking-tight text-gray-900">LabTG</span>
                <span className="block text-[10px] font-medium text-gray-400">{t('partners.footerSubtitle')}</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {t('partners.footerDesc')}
            </p>
            <div className="flex items-center gap-1.5 mt-3">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-gray-500 text-xs">{t('partners.footerAccepting')}</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-['Raleway'] font-bold text-sm text-gray-900 mb-4 uppercase tracking-wider">
              {t('partners.footerNavTitle')}
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-[#1E9BF0] text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-['Raleway'] font-bold text-sm text-gray-900 mb-4 uppercase tracking-wider">
              {t('partners.footerContactTitle')}
            </h4>
            <div className="space-y-3">
              <a
                href="https://t.me/labtg_manager"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-gray-600 hover:text-[#1E9BF0] transition-colors text-sm"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.932z"/>
                </svg>
                @labtg_manager
              </a>
              <p className="text-gray-500 text-xs">
                {t('partners.footerResponse')}
              </p>
            </div>

            <div className="mt-6">
              <a
                href="#contact"
                className="btn-gradient text-sm px-6 py-2.5 inline-block"
              >
                {t('partners.footerCta')}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            {t('partners.footerRights')}
          </p>
          <p className="text-gray-600 text-xs">
            {t('partners.footerTagline')}
          </p>
        </div>
      </div>
    </footer>
  );
}
