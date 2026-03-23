/* LabTG Company Landing — Footer
   Design: Dark footer with company info and links
*/

export default function CompanyFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16 md:py-20">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663458361072/CLC9CvFw6EzBzRUxKGTfc6/логотип_1_a8a68d00.png" alt="LabTG" className="h-10 w-auto" />
              <div>
                <span className="font-['Raleway'] font-900 text-lg text-white tracking-tight">LabTG</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Продюсерский центр полного цикла для развития вашего бизнеса в Telegram.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Unit-экономика</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Упаковка & Дизайн</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Автоматизация</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Аналитика</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
              <li><a href="#cases" className="hover:text-white transition-colors">Кейсы</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="https://t.me/labtg_manager" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Telegram
                </a>
              </li>
              <li>
                <a href="mailto:info@labtg.ru" className="hover:text-white transition-colors">
                  info@labtg.ru
                </a>
              </li>
              <li>
                <a href="tel:+79999999999" className="hover:text-white transition-colors">
                  +7 (999) 999-99-99
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {currentYear} LabTG. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
