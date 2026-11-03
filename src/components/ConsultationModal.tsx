import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { LEGAL_SERVICES } from '../data/firmData';
import {
  X,
  Calendar,
  Send,
  CheckCircle2,
  Paperclip,
  AlertCircle,
  Phone
} from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId
}) => {
  const { language, t } = useLanguage();
  const { submitInquiry, user } = useAuth();

  const [formData, setFormData] = useState({
    fullName: user?.name || '',
    email: user?.email || '',
    phone: '',
    serviceId: preselectedServiceId || LEGAL_SERVICES[0].id,
    subject: '',
    message: '',
    preferredDate: '',
    fileName: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setErrorMessage(
        language === 'ar'
          ? 'يرجى استكمال الحقول الإلزامية (الاسم، البريد، الهاتف، والتفاصيل).'
          : 'Please complete all required fields.'
      );
      return;
    }

    setIsSubmitting(true);
    try {
      const id = await submitInquiry({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        serviceId: formData.serviceId,
        subject: formData.subject || (language === 'ar' ? 'طلب استشارة قانونية عامة' : 'General Consultation Request'),
        message: formData.message,
        preferredDate: formData.preferredDate || undefined
      });
      setSubmittedId(id);
      setIsSubmitting(false);
    } catch {
      setIsSubmitting(false);
      setErrorMessage(
        language === 'ar' ? 'تعذر إرسال الطلب، يرجى المحاولة مرة أخرى.' : 'Error submitting request.'
      );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-[#E8DFD3] shadow-2xl p-6 sm:p-8 relative space-y-5 text-start">
        <button
          onClick={onClose}
          className="absolute top-5 end-5 p-2 rounded-full bg-[#FAF8F5] hover:bg-[#E8DFD3] text-[#1C2024] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="border-b border-[#FAF8F5] pb-3 pe-8">
          <span className="text-[10px] uppercase tracking-wider font-bold text-[#8E6F34]">
            {t('Confidential Booking', 'حجز استشارة سرية')}
          </span>
          <h3 className="font-serif font-bold text-2xl text-[#1C2024]">
            {language === 'ar' ? 'طلب استشارة قانونية فورية' : 'Book a Legal Consultation'}
          </h3>
          <p className="text-xs text-[#6B7280] font-light mt-0.5">
            {t('Diplomatic Area, Manama • Available In-Person or Virtually', 'المنطقة الدبلوماسية، المنامة • حضورياً أو مرئياً')}
          </p>
        </div>

        {submittedId ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#1F382E] text-white flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="font-serif font-bold text-2xl text-[#1F382E]">
              {language === 'ar' ? 'تم تسجيل موعدك بنجاح' : 'Consultation Scheduled'}
            </h4>
            <p className="text-xs sm:text-sm text-[#4A525D] max-w-md mx-auto">
              {language === 'ar'
                ? `الرقم المرجعي: ${submittedId}. سيتواصل معك مستشارنا لتأكيد الموعد وملف القضية.`
                : `Reference ID: ${submittedId}. Our counsel will confirm timing and preliminary review within 2 business hours.`}
            </p>
            <button
              onClick={onClose}
              className="py-2.5 px-6 rounded-xl bg-[#581D2D] text-white text-xs font-semibold cursor-pointer"
            >
              {t('Done', 'تم')}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {errorMessage && (
              <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs border border-red-200 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#1C2024]">
                  {t('Full Name *', 'الاسم الكامل *')}
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder={language === 'ar' ? 'الاسم' : 'e.g. Tariq Al-Ghamdi'}
                  className="w-full px-3.5 py-2 rounded-xl border border-[#D8CFC3] text-xs bg-[#FAF8F5]/60 focus:outline-none focus:border-[#B38F4D]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#1C2024]">
                  {t('Email Address *', 'البريد الإلكتروني *')}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@organization.com"
                  className="w-full px-3.5 py-2 rounded-xl border border-[#D8CFC3] text-xs bg-[#FAF8F5]/60 focus:outline-none focus:border-[#B38F4D]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#1C2024]">
                  {t('Phone Number *', 'رقم الهاتف *')}
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+973 3900 0000"
                  className="w-full px-3.5 py-2 rounded-xl border border-[#D8CFC3] text-xs bg-[#FAF8F5]/60 focus:outline-none focus:border-[#B38F4D]"
                  dir="ltr"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#1C2024]">
                  {t('Practice Area *', 'المجال القانوني *')}
                </label>
                <select
                  value={formData.serviceId}
                  onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-[#D8CFC3] text-xs bg-[#FAF8F5]/60 focus:outline-none focus:border-[#B38F4D]"
                >
                  {LEGAL_SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title[language]}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-[#1C2024]">
                {t('Subject / Case Summary', 'موضوع الاستشارة')}
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder={language === 'ar' ? 'ملخص الاستفسار' : 'e.g. Commercial tenancy dispute'}
                className="w-full px-3.5 py-2 rounded-xl border border-[#D8CFC3] text-xs bg-[#FAF8F5]/60 focus:outline-none focus:border-[#B38F4D]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-[#1C2024]">
                {t('Details & Background *', 'التفاصيل والوقائع *')}
              </label>
              <textarea
                rows={3}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={language === 'ar' ? 'يرجى توضيح النقاط القانونية المطلوبة...' : 'Describe your legal matter...'}
                className="w-full px-3.5 py-2 rounded-xl border border-[#D8CFC3] text-xs bg-[#FAF8F5]/60 focus:outline-none focus:border-[#B38F4D]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#1C2024]">
                  {t('Preferred Date (Optional)', 'الموعد المفضل')}
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-[#D8CFC3] text-xs bg-[#FAF8F5]/60"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#1C2024]">
                  {t('Attach Document', 'إرفاق وثيقة')}
                </label>
                <label className="flex items-center gap-2 px-3 py-2 rounded-xl border border-dashed border-[#B38F4D] text-xs text-[#8E6F34] bg-[#B38F4D]/5 cursor-pointer hover:bg-[#B38F4D]/10">
                  <Paperclip className="w-3.5 h-3.5" />
                  <span className="truncate">
                    {formData.fileName || t('Upload file...', 'رفع ملف...')}
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setFormData({ ...formData, fileName: e.target.files[0].name });
                      }
                    }}
                  />
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-xl bg-[#581D2D] hover:bg-[#77293E] text-white font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
            >
              <Send className="w-4 h-4 text-[#CBB079]" />
              <span>
                {isSubmitting
                  ? t('Transmitting...', 'جاري الإرسال...')
                  : t('Confirm Consultation Request', 'تأكيد طلب الاستشارة')}
              </span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
