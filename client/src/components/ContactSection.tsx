/* LabTG Affiliate — Contact / CTA Section
   Design: White bg, centered form, glass card, blue CTA
*/
import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ContactSection() {
  const titleRef = useScrollReveal();
  const formRef = useScrollReveal(0.1);

  const [form, setForm] = useState({ name: '', phone: '', telegram: '', comment: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submit
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Gradient blobs */}
      <div className="blob w-[400px] h-[400px] bg-blue-100 top-0 right-0" style={{ position: 'absolute', opacity: 0.4 }} />
      <div className="blob w-[300px] h-[300px] bg-purple-100 bottom-0 left-0" style={{ position: 'absolute', opacity: 0.3 }} />

      <div className="container relative z-10">
        {/* Title */}
        <div ref={titleRef as any} className="reveal text-center mb-12">
          <span className="pill-badge pill-badge-blue mb-4 inline-flex">Присоединиться</span>
          <h2 className="font-['Raleway'] font-black text-3xl md:text-5xl text-gray-900 mt-3">
            Стать партнёром LabTG
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
            Оставьте заявку — мы свяжемся в течение 24 часов, ответим на вопросы и подпишем партнёрский договор
          </p>
        </div>

        <div ref={formRef as any} className="reveal max-w-2xl mx-auto">
          {!submitted ? (
            <div className="glass-card rounded-3xl p-6 md:p-10 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Ваше имя <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Алексей Иванов"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E9BF0]/30 focus:border-[#1E9BF0] transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Телефон <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+7 (999) 000-00-00"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E9BF0]/30 focus:border-[#1E9BF0] transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Telegram <span className="text-gray-400 font-normal">(для связи)</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">@</span>
                    <input
                      type="text"
                      name="telegram"
                      value={form.telegram}
                      onChange={handleChange}
                      placeholder="username"
                      className="w-full pl-8 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E9BF0]/30 focus:border-[#1E9BF0] transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Расскажите о себе
                  </label>
                  <textarea
                    name="comment"
                    value={form.comment}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Кто вы, какая аудитория, почему хотите стать партнёром..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E9BF0]/30 focus:border-[#1E9BF0] transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gradient w-full text-base py-4 flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="3" strokeDasharray="30 60"/>
                      </svg>
                      Отправляем...
                    </>
                  ) : (
                    <>
                      Отправить заявку
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-gray-400">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                </p>
              </form>

              {/* Or Telegram */}
              <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                <p className="text-sm text-gray-500 mb-3">Или напишите нам напрямую</p>
                <a
                  href="https://t.me/labtg_manager"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1E9BF0]/10 hover:bg-[#1E9BF0]/20 text-[#1E9BF0] font-semibold px-6 py-3 rounded-full transition-colors text-sm"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.932z"/>
                  </svg>
                  Написать в Telegram
                </a>
              </div>
            </div>
          ) : (
            <div className="glass-card rounded-3xl p-10 md:p-14 shadow-xl text-center">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <h3 className="font-['Raleway'] font-black text-2xl text-gray-900 mb-3">
                Заявка отправлена!
              </h3>
              <p className="text-gray-500 text-base leading-relaxed">
                Наш менеджер свяжется с вами в течение 24 часов. Пока можете изучить условия программы или написать нам в Telegram.
              </p>
              <a
                href="https://t.me/labtg_manager"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient inline-block mt-6 text-sm px-8 py-3"
              >
                Написать в Telegram
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
