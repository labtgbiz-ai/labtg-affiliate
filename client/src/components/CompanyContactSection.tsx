/* LabTG Company Landing — Contact Section
   Design: CTA form for company inquiries — connected to Telegram bot
*/
import { useRef, useState } from 'react';
import { useCompanyReveal } from '@/hooks/useScrollReveal';
import { trpc } from '@/lib/trpc';

export default function CompanyContactSection() {
  const sectionRef = useCompanyReveal();
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const submitMutation = trpc.contact.submitForm.useMutation({
    onSuccess: (data) => {
      if (data.success) {
        setSubmitted(true);
        setFormData({ name: '', phone: '', message: '' });
        setErrors({});
      } else {
        setErrors({ submit: data.message });
      }
    },
    onError: (error) => {
      setErrors({ submit: error.message || 'Ошибка отправки. Попробуйте позже.' });
    },
  });

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Введите имя';
    else if (formData.name.trim().length < 2) newErrors.name = 'Имя должно быть минимум 2 символа';
    if (!formData.phone.trim()) newErrors.phone = 'Введите телефон';
    else if (!/^\+?[0-9\s\-()]{10,}$/.test(formData.phone)) newErrors.phone = 'Некорректный номер телефона';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    submitMutation.mutate({
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      message: formData.message.trim(),
      source: 'Основной сайт LabTG',
    });
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-xl border ${errors[field] ? 'border-red-300 bg-red-50/50' : 'border-gray-200 bg-white'} focus:border-[#1E9BF0] focus:outline-none focus:ring-2 focus:ring-[#1E9BF0]/20 transition-all text-sm`;

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-b from-blue-50/50 to-white relative overflow-hidden" id="company-contact">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-100 rounded-full blur-3xl opacity-10" />

      <div className="container relative z-10">
        {/* Section header */}
        <div className="mb-16 text-center fade-up">
          <span className="pill-badge pill-badge-light text-sm mb-4 inline-block">Связаться с нами</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Готовы начать?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Оставьте заявку и наша команда свяжется с вами в течение 24 часов
          </p>
        </div>

        {/* Form container */}
        <div className="max-w-2xl mx-auto fade-up" data-delay="0.15">
          <div className="glass-card p-8 md:p-12 rounded-3xl">
            {submitted ? (
              /* Success state */
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: 'linear-gradient(135deg, #1E9BF0, #0d7fd8)' }}>
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">Заявка отправлена!</h3>
                <p className="text-gray-600 mb-6">
                  Мы получили вашу заявку и свяжемся с вами в течение 24 часов.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sm font-semibold"
                  style={{ color: '#1E9BF0' }}
                >
                  Отправить ещё одну заявку
                </button>
              </div>
            ) : (
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
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Сообщение</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className={`${inputClass('message')} resize-none`}
                    placeholder="Расскажите о вашем проекте и целях..."
                  />
                </div>

                {errors.submit && (
                  <div className="rounded-xl p-3 bg-red-50 border border-red-200">
                    <p className="text-red-600 text-sm">{errors.submit}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitMutation.isPending}
                  className="w-full btn-gradient text-center py-4 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitMutation.isPending ? (
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
