/* LabTG Affiliate — Footer
   Design: Dark bg, brand info, links
*/
export default function Footer() {
  return (
    <footer className="bg-white text-gray-900 py-12 md:py-16 border-t border-gray-100">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[#1E9BF0] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L3 7L12 12L21 7L12 2Z" fill="white" opacity="0.9"/>
                  <path d="M3 12L12 17L21 12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M3 17L12 22L21 17" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
                </svg>
              </div>
              <span className="font-['Raleway'] font-900 text-xl tracking-tight text-gray-900">LabTG</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Продюсерский центр полного цикла. Маркетинг «под ключ», AI-агенты и целевые лиды в Telegram.
            </p>
            <div className="flex items-center gap-1.5 mt-3">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-gray-500 text-xs">Принимаем партнёров</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-['Raleway'] font-bold text-sm text-gray-900 mb-4 uppercase tracking-wider">
              Навигация
            </h4>
            <ul className="space-y-2">
              {[
                { href: '#how-it-works', label: 'Как это работает' },
                { href: '#earnings', label: 'Условия программы' },
                { href: '#calculator', label: 'Калькулятор дохода' },
                { href: '#about', label: 'О компании' },
                { href: '#contact', label: 'Стать партнёром' },
              ].map((link) => (
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
              Контакты
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
                Ответим в течение 24 часов
              </p>
            </div>

            <div className="mt-6">
              <a
                href="#contact"
                className="btn-gradient text-sm px-6 py-2.5 inline-block"
              >
                Стать партнёром
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © 2024 LabTG — Продюсерский центр. Все права защищены.
          </p>
          <p className="text-gray-600 text-xs">
            Партнёрская программа · Выплаты по договору
          </p>
        </div>
      </div>
    </footer>
  );
}
