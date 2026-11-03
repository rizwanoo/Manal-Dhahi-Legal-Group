import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FOUNDER_INFO, FIRM_DETAILS } from '../data/firmData';
import { AOS } from '../components/AOS';
import {
  Shield,
  Award,
  CheckCircle2,
  Calendar,
  Phone,
  Mail,
  Scale,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface FoundersMessageViewProps {
  onOpenConsultationModal: () => void;
  onNavigate: (view: string) => void;
}

export const FoundersMessageView: React.FC<FoundersMessageViewProps> = ({
  onOpenConsultationModal,
  onNavigate
}) => {
  const { language, t } = useLanguage();

  return (
    <div className="w-full bg-[#FAF8F5] pb-24 text-start">
      {/* Editorial Header with HD Background */}
      <section
        className="relative py-24 text-white border-b border-[#2C3238] overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(rgba(20, 24, 28, 0.88), rgba(20, 24, 28, 0.94)), url(/assets/banners/skyline_of_bahrain.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10 text-center space-y-4">
          <AOS direction="down">
            <span className="text-xs uppercase tracking-widest font-bold text-[#CBB079] bg-[#B38F4D]/20 px-3.5 py-1 rounded-full border border-[#B38F4D]/30 inline-block">
              {t("Founder's Vision", 'رؤية المؤسس')}
            </span>
          </AOS>
          <AOS direction="up" delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">
              {language === 'ar' ? 'كلمة المؤسس • الأستاذة منال ضاحي' : "Founder's Message • Manal Dhahi"}
            </h1>
          </AOS>
          <AOS direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-[#A0AAB5] max-w-2xl mx-auto font-light">
              {language === 'ar'
                ? 'رسالة قيادية حول أمانة العمل القانوني، استباق التحديات، وصون مصالح الموكلين في البحرين وخارجها.'
                : 'A personal address on the responsibilities of legal stewardship, risk anticipation, and lasting client trust.'}
            </p>
          </AOS>
        </div>
      </section>

      {/* Main Content Body with AOS */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-8 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Portrait Column with AOS */}
          <AOS direction="right" duration={0.65} className="md:col-span-5 space-y-6">
            <div className="rounded-3xl overflow-hidden border-2 border-[#E8DFD3] bg-white shadow-xl p-3">
              <div className="rounded-2xl overflow-hidden relative aspect-4/5 bg-[#ECE5DC]">
                <img
                  src={FOUNDER_INFO.image}
                  alt={FOUNDER_INFO.nameEn}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.currentTarget.src = 'https://www.manalfirm.com/web/image/39583-89127b0b/manal-image.webp';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C2024]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 inset-x-4 text-white">
                  <h3 className="text-xl font-serif font-bold">
                    {language === 'ar' ? FOUNDER_INFO.nameAr : FOUNDER_INFO.nameEn}
                  </h3>
                  <p className="text-xs text-[#CBB079]">
                    {language === 'ar' ? FOUNDER_INFO.titleAr : FOUNDER_INFO.titleEn}
                  </p>
                </div>
              </div>

              {/* Credentials list */}
              <div className="p-4 space-y-2.5">
                <div className="text-[11px] uppercase tracking-wider font-bold text-[#8E6F34] border-b border-[#FAF8F5] pb-1.5">
                  {t('Verified Accreditations', 'الاعتمادات والتراخيص الرسمية')}
                </div>
                {(language === 'ar' ? FOUNDER_INFO.credentialsAr : FOUNDER_INFO.credentialsEn).map((cred, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#333940]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B38F4D] shrink-0 mt-0.5" />
                    <span className="font-light">{cred}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="p-5 rounded-2xl bg-white border border-[#E8DFD3] space-y-3">
              <h4 className="font-serif font-bold text-sm text-[#1C2024]">
                {t('Direct Consultation Chambers', 'غرفة الاستشارات المباشرة')}
              </h4>
              <p className="text-xs text-[#6B7280]">
                {t(
                  'To request a high-stakes consultation directly with Mrs. Manal Dhahi:',
                  'لحجز استشارة خاصة ومباشرة مع الأستاذة منال ضاحي:'
                )}
              </p>
              <button
                onClick={onOpenConsultationModal}
                className="w-full py-2.5 rounded-xl bg-[#581D2D] hover:bg-[#77293E] text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5 text-[#CBB079]" />
                <span>{t('Request Consultation with Founder', 'حجز استشارة مع المؤسس')}</span>
              </button>
            </div>
          </AOS>

          {/* Letter Column with AOS */}
          <AOS direction="left" duration={0.65} className="md:col-span-7 space-y-8 bg-white p-8 sm:p-12 rounded-3xl border border-[#E8DFD3] shadow-sm">
            <div className="border-b border-[#E8DFD3] pb-6 space-y-2">
              <span className="text-xs font-bold text-[#B38F4D] tracking-widest uppercase">
                {t('Official Statement of Purpose', 'بيان الرؤية والمنهج المهني')}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C2024] leading-snug">
                {language === 'ar'
                  ? 'بناء الثقة التي تدوم واستباق المخاطر قبل تفاقمها'
                  : 'Building Enduring Trust by Safeguarding Rights with Absolute Precision'}
              </h2>
            </div>

            {/* Paragraphs */}
            <div className="space-y-6 text-sm sm:text-base text-[#333940] leading-relaxed font-light">
              {(language === 'ar' ? FOUNDER_INFO.messageAr : FOUNDER_INFO.messageEn).map((paragraph, index) => (
                <p key={index} className="first-letter:text-2xl first-letter:font-serif first-letter:font-bold first-letter:text-[#581D2D]">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Signature Block */}
            <div className="pt-8 border-t border-[#E8DFD3] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-serif font-bold text-lg text-[#1C2024]">
                  {language === 'ar' ? FOUNDER_INFO.nameAr : FOUNDER_INFO.nameEn}
                </p>
                <p className="text-xs text-[#8E6F34] font-medium">
                  {language === 'ar' ? FOUNDER_INFO.titleAr : FOUNDER_INFO.titleEn}
                </p>
                <p className="text-[11px] text-[#6B7280]">
                  {language === 'ar' ? FIRM_DETAILS.nameAr : FIRM_DETAILS.nameEn}
                </p>
              </div>

              <div className="text-end rtl:text-start">
                <span className="inline-block px-3 py-1 rounded-lg bg-[#FAF8F5] border border-[#E8DFD3] text-xs font-mono text-[#581D2D]">
                  Manama, Bahrain
                </span>
              </div>
            </div>
          </AOS>
        </div>
      </section>
    </div>
  );
};
