/* LabTG Company Landing — Contact Section
   Design: CTA form for company inquiries
*/
import { useEffect, useRef, useState } from 'react';

export default function CompanyContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    const els = sectionRef.current?.querySelectorAll('.fade-up');
    els?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Введите имя';
    if (!formData.email.trim()) newErrors.email = 'Введите email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Некорректный email';
    if (!formData.phone.trim()) newErrors.phone = 'Введите телефон';
    if (!formData.message.trim()) newErrors.message = 'Введите сообщение';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Спасибо! Мы получили вашу заявку и свяжемся с вами в ближайшее время.');
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      setErrors({});
    } catch {
      alert('Не удалось отправить форму. Попробуйте ещё раз.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-xl border ${errors[field] ? 'border-red-300 bg-red-50/50' : 'border-gray-200 bg-white'} focus:border-[#1E9BF0] focus:outline-none focus:ring-2 focus:ring-[#1E9BF0]/20 transition-all text-sm`;

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-b from-blue-50/50 to-white relative overflow-hidden" id="contact">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-100 rounded-full blur-3xl opacity-10" />

      <div className="container relative z-10">
        {/* Section header */}
        <div className="mb-16 text-center fade-up" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
          <span className="pill-badge pill-badge-light text-sm mb-4 inline-block">Связаться с нами</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Готовы начать?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Оставьте заявку и наша команда свяжется с вами в течение 24 часов
          </p>
        </div>

        {/* Form container */}
        <div className="max-w-2xl mx-auto fade-up" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s' }}>
          <div className="glass-card p-8 md:p-12 rounded-3xl">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Ваше имя *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={inputClass('name')}
                    placeholder="Иван Петров"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputClass('email')}
                    placeholder="ivan@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Телефон *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={inputClass('phone')}
                    placeholder="+7 (999) 999-99-99"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Компания</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className={inputClass('company')}
                    placeholder="Название компании"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Сообщение *</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className={inputClass('message') + ' resize-none'}
                  placeholder="Расскажите о вашем проекте и целях..."
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-gradient text-center py-4 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Отправка...
                  </span>
                ) : 'Отправить заявку'}
              </button>

              <p className="text-xs text-gray-400 text-center">
                Мы гарантируем конфиденциальность ваших данных. Ответим в течение 24 часов.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
