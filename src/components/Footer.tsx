import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FIRM_DETAILS, LEGAL_SERVICES, INDUSTRY_EXPERTISE } from '../data/firmData';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  ArrowUpRight,
  Award,
  Globe
} from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string, param?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { language, t, isRTL } = useLanguage();

  return (
    <footer className="bg-[#181B1E] text-[#D8CFC3] border-t border-[#2C3238] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#2C3238]">
          {/* Col 1 & 2: Firm Branding & Credentials */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-4 bg-transparent">
              <img
                src="/logo-emblem.svg"
                alt="Manal Dhahi Legal Group Emblem"
                className="h-14 sm:h-16 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(212,175,55,0.4)] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] bg-transparent"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.endsWith('/logo.png')) {
                    target.src = '/logo.png';
                  }
                }}
              />
              <div className="text-start">
                <h3 className="font-cinzel font-bold text-xl sm:text-2xl text-white tracking-wider">
                  {language === 'ar' ? 'مجموعة منال ضاحي' : 'MANAL DHAHI'}
                </h3>
                <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold mt-1">
                  {language === 'ar' ? 'محامون ومستشارون قانونيون • المنامة' : 'LEGAL GROUP • BAHRAIN'}
                </p>
              </div>
            </div>

            <p className="text-sm text-[#A0AAB5] leading-relaxed max-w-md font-light">
              {language === 'ar'
                ? 'مجموعة قانونية بحرينية رائدة متخصصة في التقاضي أمام محكمة التمييز، التوثيق الخاص، الوساطة، عقود الإنشاءات، ودعم المستثمرين في التوسع عبر المملكة العربية السعودية والخليج.'
                : 'Premier law firm in the Kingdom of Bahrain providing strategic counsel before the Court of Cassation, authorized private notarization, corporate structuring, construction law, and GCC cross-border advisory.'}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#242A30] border border-[#3A434D] text-xs text-[#E8DFD3]">
                <Shield className="w-3.5 h-3.5 text-[#B38F4D]" />
                <span>CR No. {FIRM_DETAILS.crNumber}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#242A30] border border-[#3A434D] text-xs text-[#E8DFD3]">
                <Award className="w-3.5 h-3.5 text-[#B38F4D]" />
                <span>ISO 9001:2015 Quality</span>
              </div>
            </div>

            {/* Verified Social Media Channels */}
            <div className="pt-2">
              <p className="text-xs uppercase tracking-wider text-[#A0AAB5] font-semibold mb-3">
                {t('Official Social Channels', 'القنوات الرسمية المعتمدة')}
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={FIRM_DETAILS.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#242A30] hover:bg-[#0A66C2] text-white flex items-center justify-center transition-all duration-200 border border-[#3A434D] hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <span className="font-bold text-xs">in</span>
                </a>
                <a
                  href={FIRM_DETAILS.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#242A30] hover:bg-black text-white flex items-center justify-center transition-all duration-200 border border-[#3A434D] hover:scale-110"
                  aria-label="X (formerly Twitter)"
                >
                  <span className="font-bold text-xs">𝕏</span>
                </a>
                <a
                  href={FIRM_DETAILS.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#242A30] hover:bg-[#1877F2] text-white flex items-center justify-center transition-all duration-200 border border-[#3A434D] hover:scale-110"
                  aria-label="Facebook"
                >
                  <span className="font-bold text-xs">f</span>
                </a>
                <a
                  href={FIRM_DETAILS.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#242A30] hover:bg-[#E4405F] text-white flex items-center justify-center transition-all duration-200 border border-[#3A434D] hover:scale-110"
                  aria-label="Instagram"
                >
                  <span className="font-bold text-xs">IG</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Core Legal Services */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-base text-white border-b border-[#2C3238] pb-2">
              {t('Legal Services', 'الخدمات القانونية')}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A0AAB5]">
              {LEGAL_SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => onNavigate('services', service.id)}
                    className="hover:text-[#B38F4D] transition-colors flex items-center gap-1.5 text-start cursor-pointer"
                  >
                    <ArrowUpRight className="w-3 h-3 text-[#B38F4D]" />
                    <span>{service.title[language]}</span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-[#B38F4D] hover:underline font-semibold pt-1 flex items-center gap-1 cursor-pointer"
                >
                  <span>{t('View All Practice Areas →', 'كافة الخدمات والتخصصات →')}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Navigation */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-base text-white border-b border-[#2C3238] pb-2">
              {t('Quick Links', 'روابط سريعة')}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A0AAB5]">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#B38F4D] transition-colors cursor-pointer"
                >
                  {t('About Our Firm', 'من نحن وتاريخ المكتب')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('founder')}
                  className="hover:text-[#B38F4D] transition-colors cursor-pointer"
                >
                  {t("Founder's Message", 'كلمة الأستاذة منال ضاحي')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('team')}
                  className="hover:text-[#B38F4D] transition-colors cursor-pointer"
                >
                  {t('Our Attorneys & Team', 'فريق المحامين والمستشارين')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('expertise')}
                  className="hover:text-[#B38F4D] transition-colors cursor-pointer"
                >
                  {t('Construction & Sector Expertise', 'قطاع المقاولات والهندسة')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blog')}
                  className="hover:text-[#B38F4D] transition-colors cursor-pointer"
                >
                  {t('Legal Insights & Articles', 'الأبحاث والمقالات القانونية')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('portal')}
                  className="hover:text-[#B38F4D] transition-colors cursor-pointer font-medium text-[#CBB079]"
                >
                  {t('Client Portal & Lead CRM', 'بوابة الموكلين وإدارة القضايا')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#B38F4D] transition-colors cursor-pointer"
                >
                  {t('Schedule Legal Consultation', 'طلب استشارة فورية')}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Direct Contact Details */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-base text-white border-b border-[#2C3238] pb-2">
              {t('Office Details', 'بيانات التواصل')}
            </h4>
            <div className="space-y-3 text-xs text-[#A0AAB5]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B38F4D] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {language === 'ar' ? FIRM_DETAILS.addressAr : FIRM_DETAILS.addressEn}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B38F4D] shrink-0" />
                <a
                  href={`tel:${FIRM_DETAILS.phone}`}
                  className="hover:text-white transition-colors"
                  dir="ltr"
                >
                  {FIRM_DETAILS.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B38F4D] shrink-0" />
                <a
                  href={`mailto:${FIRM_DETAILS.email}`}
                  className="hover:text-white transition-colors"
                >
                  {FIRM_DETAILS.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#B38F4D] shrink-0 mt-0.5" />
                <span>
                  {language === 'ar' ? FIRM_DETAILS.workingHoursAr : FIRM_DETAILS.workingHoursEn}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#828D99]">
          <p>
            © {new Date().getFullYear()} {language === 'ar' ? FIRM_DETAILS.nameAr : FIRM_DETAILS.nameEn}.{' '}
            {t('All rights reserved.', 'جميع الحقوق محفوظة.')}
          </p>
          <div className="flex items-center gap-6">
            <span>{t('Commercial Registration CR: 108662-2', 'سجل تجاري رقم: 108662-2')}</span>
            <span>•</span>
            <span>{t('Kingdom of Bahrain', 'مملكة البحرين')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
