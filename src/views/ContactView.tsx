import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { FIRM_DETAILS, LEGAL_SERVICES } from '../data/firmData';
import { AOS } from '../components/AOS';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Calendar,
  Send,
  CheckCircle2,
  Paperclip,
  AlertCircle
} from 'lucide-react';

interface ContactViewProps {
  preselectedServiceId?: string;
  onNavigateToPortal?: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({
  preselectedServiceId,
  onNavigateToPortal
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setErrorMessage(
        language === 'ar'
          ? 'يرجى استكمال الحقول الإلزامية (الاسم، البريد الإلكتروني، رقم الهاتف، وتفاصيل الاستشارة).'
          : 'Please complete all required fields (Full Name, Email, Phone, and Details).'
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
        subject: formData.subject || (language === 'ar' ? 'طلب استشارة قانونية عامة' : 'General Legal Consultation'),
        message: formData.message,
        preferredDate: formData.preferredDate || undefined
      });
      setSubmittedId(id);
      setIsSubmitting(false);
    } catch {
      setIsSubmitting(false);
      setErrorMessage(
        language === 'ar'
          ? 'حدث خطأ أثناء إرسال الطلب، يرجى المحاولة مرة أخرى أو الاتصال هاتفياً.'
          : 'Failed to submit inquiry. Please try again or call us directly.'
      );
    }
  };

  return (
    <div className="w-full bg-[#FAF8F5] pb-24 text-start">
      {/* Top Banner with HD Background */}
      <section
        className="relative py-24 text-white border-b border-[#2C3238] overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(rgba(20, 24, 28, 0.88), rgba(20, 24, 28, 0.94)), url(/assets/banners/skyline_of_bahrain.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-4">
          <AOS direction="down">
            <span className="text-xs uppercase tracking-widest font-bold text-[#CBB079] bg-[#B38F4D]/20 px-3.5 py-1 rounded-full border border-[#B38F4D]/30 inline-block">
              {t('Diplomatic Area • Manama', 'المنطقة الدبلوماسية • المنامة')}
            </span>
          </AOS>
          <AOS direction="up" delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">
              {language === 'ar' ? 'اتصل بنا • حجز استشارة قانونية' : 'Contact Us • Legal Consultation'}
            </h1>
          </AOS>
          <AOS direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-[#A0AAB5] max-w-3xl font-light">
              {language === 'ar'
                ? 'يسعدنا استقبالكم في مقر المجموعة بالمنطقة الدبلوماسية في المنامة، أو تقديم الاستشارات عبر القنوات الرقمية الآمنة.'
                : 'We welcome you at our Diplomatic Area chambers in Manama, or connect through our confidential consultation portal.'}
            </p>
          </AOS>
        </div>
      </section>

      {/* Main Grid: Details & Inquiry Form with AOS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Office Details & Map with AOS */}
          <AOS direction="right" duration={0.65} className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-white border border-[#E8DFD3] shadow-sm space-y-6">
              <div className="border-b border-[#FAF8F5] pb-4">
                <span className="text-xs uppercase tracking-wider font-bold text-[#8E6F34]">
                  {t('Direct Office Channels', 'معلومات التواصل المباشر')}
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#1C2024] mt-1">
                  {language === 'ar' ? FIRM_DETAILS.nameAr : FIRM_DETAILS.nameEn}
                </h3>
              </div>

              <div className="space-y-4 text-sm text-[#4A525D]">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#581D2D]/10 text-[#581D2D] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1C2024] text-xs uppercase tracking-wider">
                      {t('Office Address', 'العنوان')}
                    </h4>
                    <p className="font-light mt-0.5 leading-relaxed">
                      {language === 'ar' ? FIRM_DETAILS.addressAr : FIRM_DETAILS.addressEn}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#B38F4D]/15 text-[#8E6F34] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1C2024] text-xs uppercase tracking-wider">
                      {t('Telephone', 'الهاتف المباشر')}
                    </h4>
                    <a
                      href={`tel:${FIRM_DETAILS.phone}`}
                      className="font-semibold text-[#581D2D] hover:underline block mt-0.5"
                      dir="ltr"
                    >
                      {FIRM_DETAILS.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#1F382E]/10 text-[#1F382E] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1C2024] text-xs uppercase tracking-wider">
                      {t('Official Email', 'البريد الإلكتروني')}
                    </h4>
                    <a
                      href={`mailto:${FIRM_DETAILS.email}`}
                      className="font-medium text-[#1C2024] hover:text-[#581D2D] block mt-0.5"
                    >
                      {FIRM_DETAILS.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] text-[#6B7280] border border-[#E8DFD3] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1C2024] text-xs uppercase tracking-wider">
                      {t('Office Hours', 'أوقات العمل')}
                    </h4>
                    <p className="font-light mt-0.5 text-xs">
                      {language === 'ar' ? FIRM_DETAILS.workingHoursAr : FIRM_DETAILS.workingHoursEn}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map Card */}
            <div className="rounded-3xl bg-white border border-[#E8DFD3] overflow-hidden shadow-sm">
              <div className="p-4 bg-[#FAF8F5] border-b border-[#E8DFD3] flex items-center justify-between">
                <span className="text-xs font-bold text-[#1C2024] flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#B38F4D]" />
                  {t('Diplomatic Area Location', 'موقع المكتب بالمنطقة الدبلوماسية')}
                </span>
                <span className="text-[11px] text-[#6B7280]">Block 317, Road 1704</span>
              </div>
              <div className="relative aspect-16/9 bg-[#E8DFD3]">
                <iframe
                  title="Manal Dhahi Legal Group Location Map"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src="https://www.openstreetmap.org/export/embed.html?bbox=50.584%2C26.235%2C50.604%2C26.248&amp;layer=mapnik&amp;marker=26.2415%2C50.5940"
                  className="w-full h-full border-0 filter contrast-[1.05]"
                />
              </div>
              <div className="p-4 bg-white text-xs text-[#6B7280] flex items-center justify-between">
                <span>Building 240, Office 42</span>
                <a
                  href="https://maps.google.com/?q=Diplomatic+Area,+Manama,+Bahrain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#581D2D] hover:underline"
                >
                  {t('Open in Google Maps →', 'فتح في خرائط جوجل →')}
                </a>
              </div>
            </div>
          </AOS>

          {/* Right Column: Consultation Enquiry Form with AOS */}
          <AOS direction="left" duration={0.65} className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E8DFD3] shadow-md space-y-8">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-[#8E6F34]">
                  {t('Confidential Case Intake', 'تسجيل استشارة سرية')}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C2024] mt-1">
                  {language === 'ar' ? 'طلب موعد أو استشارة قانونية' : 'Schedule a Legal Consultation'}
                </h3>
                <p className="text-xs sm:text-sm text-[#6B7280] mt-1 font-light">
                  {language === 'ar'
                    ? 'يتم التعامل مع كافة البيانات والوثائق المرفقة بسرية مهنية مطلقة وفقاً للقانون.'
                    : 'All inquiries and documents are treated with strict professional confidentiality under legal privilege.'}
                </p>
              </div>

              {submittedId ? (
                <div className="p-8 rounded-2xl bg-[#1F382E]/10 border border-[#1F382E]/30 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#1F382E] text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif font-bold text-2xl text-[#1F382E]">
                    {language === 'ar' ? 'تم استلام طلب الاستشارة بنجاح' : 'Consultation Request Received'}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#333940] max-w-md mx-auto">
                    {language === 'ar'
                      ? `تم قيد طلبك برقم مرجعي: ${submittedId}. سيتواصل معك فريق الاستشارات خلال ساعتي عمل.`
                      : `Your request has been logged under Reference ID: ${submittedId}. Our senior counsel will review and contact you within 2 business hours.`}
                  </p>
                  <div className="pt-2 flex flex-wrap gap-3 justify-center">
                    <button
                      onClick={() => {
                        setSubmittedId(null);
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          serviceId: LEGAL_SERVICES[0].id,
                          subject: '',
                          message: '',
                          preferredDate: '',
                          fileName: ''
                        });
                      }}
                      className="py-2.5 px-5 rounded-xl border border-[#D8CFC3] bg-white text-xs font-semibold text-[#1C2024] hover:bg-[#FAF8F5] cursor-pointer"
                    >
                      {t('Submit Another Inquiry', 'إرسال طلب استشارة آخر')}
                    </button>
                    {onNavigateToPortal && (
                      <button
                        onClick={onNavigateToPortal}
                        className="py-2.5 px-5 rounded-xl bg-[#581D2D] text-white text-xs font-semibold hover:bg-[#77293E] cursor-pointer"
                      >
                        {t('Track in Client Portal', 'متابعة في بوابة الموكلين')}
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#1C2024]">
                        {t('Full Name *', 'الاسم الكامل *')}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder={language === 'ar' ? 'الاسم الثلاثي' : 'e.g. Johnathan Smith'}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#D8CFC3] text-xs focus:outline-none focus:border-[#B38F4D] bg-[#FAF8F5]/60"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#1C2024]">
                        {t('Email Address *', 'البريد الإلكتروني *')}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#D8CFC3] text-xs focus:outline-none focus:border-[#B38F4D] bg-[#FAF8F5]/60"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#1C2024]">
                        {t('Contact Number *', 'رقم الهاتف والتواصل *')}
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+973 3900 0000"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#D8CFC3] text-xs focus:outline-none focus:border-[#B38F4D] bg-[#FAF8F5]/60"
                        dir="ltr"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#1C2024]">
                        {t('Legal Practice Area *', 'المجال القانوني المطلوب *')}
                      </label>
                      <select
                        value={formData.serviceId}
                        onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-[#D8CFC3] text-xs focus:outline-none focus:border-[#B38F4D] bg-[#FAF8F5]/60"
                      >
                        {LEGAL_SERVICES.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.title[language]}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#1C2024]">
                      {t('Matter Subject / Inquiry Title', 'موضوع الاستشارة / عنوان القضية')}
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder={language === 'ar' ? 'مثال: نزاع عقد مقاولة في مشروع سكني' : 'e.g. Subcontractor delay penalty dispute'}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D8CFC3] text-xs focus:outline-none focus:border-[#B38F4D] bg-[#FAF8F5]/60"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#1C2024]">
                      {t('Case Details & Specific Questions *', 'تفاصيل الموضوع والاستفسارات *')}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        language === 'ar'
                          ? 'يرجى تقديم ملخص موجز لوقائع الموضوع أو الاستفسار القانوني المطلوب...'
                          : 'Please describe the commercial context, contract background, or legal assistance required...'
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D8CFC3] text-xs focus:outline-none focus:border-[#B38F4D] bg-[#FAF8F5]/60 resize-y"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#1C2024]">
                        {t('Preferred Consultation Date (Optional)', 'الموعد المفضل (اختياري)')}
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#D8CFC3] text-xs bg-[#FAF8F5]/60"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#1C2024]">
                        {t('Attach Document (PDF, Word, Scan)', 'إرفاق مستند (PDF أو Word)')}
                      </label>
                      <label className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-dashed border-[#B38F4D] text-xs text-[#8E6F34] bg-[#B38F4D]/5 cursor-pointer hover:bg-[#B38F4D]/10 transition-colors">
                        <Paperclip className="w-4 h-4" />
                        <span className="truncate">
                          {formData.fileName || t('Select contract or notice...', 'اختيار عقد أو إشعار...')}
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
                    className="w-full py-4 rounded-xl bg-[#581D2D] hover:bg-[#77293E] text-white font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4 text-[#CBB079]" />
                    <span>
                      {isSubmitting
                        ? t('Transmitting Confidential Request...', 'جاري إرسال الطلب...')
                        : t('Submit Confidential Consultation Request', 'إرسال طلب الاستشارة')}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </AOS>
        </div>
      </section>
    </div>
  );
};
