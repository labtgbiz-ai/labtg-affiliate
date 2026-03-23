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
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Введите имя';
    if (!formData.email.trim()) newErrors.email = 'Введите email';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Некорректный email';
    if (!formData.phone.trim()) newErrors.phone = 'Введите телефон';
    if (!formData.message.trim()) newErrors.message = 'Введите сообщение';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      alert('Пожалуйста, заполните все обязательные поля');
      return;
    }

    setLoading(true);
    try {
      // Simulate submission - in real app would call API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert('Спасибо! Мы получили вашу заявку и свяжемся с вами в ближайшее время.');
      
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      setErrors({});
    } catch (error) {
      alert('Не удалось отправить форму. Попробуйте ещё раз.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden" id="contact">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-10 -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-100 rounded-full blur-3xl opacity-10 -z-10" />

      <div className="container">
        {/* Section header */}
        <div className="mb-16 text-center reveal" data-initial="false">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Готовы начать?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Оставьте заявку и наша команда свяжется с вами в течение 24 часов
          </p>
        </div>

        {/* Form container */}
        <div className="max-w-2xl mx-auto reveal" data-initial="false">
          <div className="glass-card p-8 md:p-12 rounded-3xl">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Ваше имя *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1E9BF0] focus:outline-none focus:ring-2 focus:ring-[#1E9BF0]/20 transition-colors"
                  placeholder="Иван Петров"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1E9BF0] focus:outline-none focus:ring-2 focus:ring-[#1E9BF0]/20 transition-colors"
                  placeholder="ivan@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Телефон *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1E9BF0] focus:outline-none focus:ring-2 focus:ring-[#1E9BF0]/20 transition-colors"
                  placeholder="+7 (999) 999-99-99"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Компания
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1E9BF0] focus:outline-none focus:ring-2 focus:ring-[#1E9BF0]/20 transition-colors"
                  placeholder="Название компании"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Сообщение *
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1E9BF0] focus:outline-none focus:ring-2 focus:ring-[#1E9BF0]/20 transition-colors resize-none"
                  placeholder="Расскажите о вашем проекте и целях..."
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-gradient text-center py-4 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Отправка...' : 'Отправить заявку'}
              </button>

              {/* Note */}
              <p className="text-xs text-gray-500 text-center">
                Мы гарантируем конфиденциальность ваших данных. Ответим в течение 24 часов.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
