/* LabTG Company Landing — Footer
   Design: Dark footer with high contrast text, company info, links and partner program, i18n
*/
import { useTranslation } from 'react-i18next';

export default function CompanyFooter() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden" style={{ background: '#0D1117', color: '#ffffff' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E9BF0]/40 to-transparent" />

      <div className="container py-16 md:py-20">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663458361072/CLC9CvFw6EzBzRUxKGTfc6/логотип_1_a8a68d00.png" alt="LabTG" className="h-10 w-auto" />
              <div>
                <span className="font-['Raleway'] font-black text-lg tracking-tight" style={{ color: '#ffffff' }}>LabTG</span>
                <span className="block text-[10px] font-medium" style={{ color: '#9CA3AF' }}>{t('footer.tagline')}</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#D1D5DB' }}>
              {t('footer.description')}
            </p>
            <a
              href="/partners"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors group"
              style={{ color: '#1E9BF0' }}
            >
              <span>{t('footer.affiliateProgram')}</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider" style={{ color: '#ffffff' }}>{t('footer.services')}</h4>
            <ul className="space-y-2.5 text-sm" style={{ color: '#D1D5DB' }}>
              <li><a href="#services" className="hover:text-white transition-colors">{t('footer.unitEcon')}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{t('footer.packaging')}</a></li>
              <li><a href="#ai-agent" className="hover:text-white transition-colors">{t('footer.aiAgent')}</a></li>
              <li><a href="#lead-attraction" className="hover:text-white transition-colors">{t('footer.leadAttraction')}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{t('footer.automation')}</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider" style={{ color: '#ffffff' }}>{t('footer.company')}</h4>
            <ul className="space-y-2.5 text-sm" style={{ color: '#D1D5DB' }}>
              <li><a href="#about" className="hover:text-white transition-colors">{t('footer.aboutUs')}</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">{t('footer.teamLink')}</a></li>
              <li><a href="#principles" className="hover:text-white transition-colors">{t('footer.principles')}</a></li>
              <li><a href="#cases" className="hover:text-white transition-colors">{t('footer.cases')}</a></li>
              <li><a href="/partners" className="hover:text-white transition-colors">{t('footer.partners')}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider" style={{ color: '#ffffff' }}>{t('nav.contacts')}</h4>
            <ul className="space-y-2.5 text-sm" style={{ color: '#D1D5DB' }}>
              <li>
                <a href="https://t.me/labtg_manager" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" style={{ color: '#1E9BF0' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  Telegram
                </a>
              </li>
              <li>
                <a href="mailto:info@labtg.ru" className="hover:text-white transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" style={{ color: '#1E9BF0' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  info@labtg.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8" style={{ borderTop: '1px solid #1f2937' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm" style={{ color: '#9CA3AF' }}>
            <p>&copy; {currentYear} LabTG. {t('footer.rights')}</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-300 transition-colors">{t('footer.privacy')}</a>
              <a href="#" className="hover:text-gray-300 transition-colors">{t('footer.terms')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
