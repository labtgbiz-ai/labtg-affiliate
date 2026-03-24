/* LabTG Affiliate — Navbar
   Design: Glassmorphism, sticky, brand blue CTA, i18n language switcher
*/
import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES } from '@/i18n';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Close lang dropdown on outside click
  useEffect(() => {
    if (!langOpen) return;
    const handler = () => setLangOpen(false);
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [langOpen]);

  const navLinks = [
    { href: '#how-it-works', label: t('partners.navHowItWorks') },
    { href: '#earnings', label: t('partners.navConditions') },
    { href: '#calculator', label: t('partners.navCalculator') },
    { href: '#about', label: t('partners.navAbout') },
  ];

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  }, []);

  const currentLang = SUPPORTED_LANGUAGES.find(l => l.code === i18n.language) || SUPPORTED_LANGUAGES[0];

  const changeLang = (code: string) => {
    i18n.changeLanguage(code);
    setLangOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-blue-50'
          : 'bg-transparent'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group flex-shrink-0"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663458361072/CLC9CvFw6EzBzRUxKGTfc6/логотип_1_a8a68d00.png" alt="LabTG" className="h-9 md:h-10 w-auto" />
            <div className="hidden sm:block">
              <span className="font-['Raleway'] font-black text-lg md:text-xl text-gray-900 tracking-tight">LabTG</span>
              <span className="block text-[10px] text-gray-400 font-medium leading-none -mt-0.5">{t('partners.navSubtitle')}</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium px-3 py-2 rounded-full text-gray-600 hover:text-[#1E9BF0] hover:bg-gray-50 transition-all duration-200 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side: Language switcher + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-[#1E9BF0] px-3 py-2 rounded-full hover:bg-gray-50 transition-all border border-gray-200 hover:border-blue-200"
              >
                <span>{currentLang.flag}</span>
                <span>{currentLang.label}</span>
                <svg className={`w-3 h-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-1 bg-white border border-gray-100 rounded-xl shadow-lg py-1 min-w-[140px] z-50">
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLang(lang.code)}
                      className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm hover:bg-blue-50 hover:text-[#1E9BF0] transition-colors text-left ${
                        i18n.language === lang.code ? 'text-[#1E9BF0] bg-blue-50 font-medium' : 'text-gray-700'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-gradient text-sm px-5 py-2.5 inline-block whitespace-nowrap"
            >
              {t('partners.navCta')}
            </a>
          </div>

          {/* Mobile: Language + Burger */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Mobile Language Switcher */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 text-sm font-medium text-gray-600 px-2 py-1.5 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
              >
                <span>{currentLang.flag}</span>
                <span className="text-xs">{currentLang.label}</span>
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-1 bg-white border border-gray-100 rounded-xl shadow-lg py-1 min-w-[130px] z-50">
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLang(lang.code)}
                      className={`w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-blue-50 hover:text-[#1E9BF0] transition-colors text-left ${
                        i18n.language === lang.code ? 'text-[#1E9BF0] bg-blue-50 font-medium' : 'text-gray-700'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Burger Button */}
            <button
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Open menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`block h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0 scale-0' : ''}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-16 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden fixed top-16 left-0 right-0 transition-all duration-300 ${
          menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-white/98 backdrop-blur-xl border-b border-gray-100 shadow-xl px-4 py-5 flex flex-col gap-1 mx-4 rounded-2xl mt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium py-3 px-4 rounded-xl text-gray-700 hover:text-[#1E9BF0] hover:bg-gray-50 transition-all"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-gradient text-sm text-center mt-3"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            {t('partners.navCta')}
          </a>
        </div>
      </div>
    </header>
  );
}
