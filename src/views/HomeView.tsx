import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import {
  FIRM_DETAILS,
  FOUNDER_INFO,
  TEAM_MEMBERS,
  LEGAL_SERVICES,
  INDUSTRY_EXPERTISE,
  BLOG_ARTICLES,
  TESTIMONIALS
} from '../data/firmData';
import { AnimatedHeading } from '../components/AnimatedHeading';
import { CardStack } from '../components/CardStack';
import { AOS, AOSItem } from '../components/AOS';
import {
  Scale,
  Shield,
  Gavel,
  FileCheck,
  Building2,
  Globe,
  Award,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Star,
  Users,
  Compass,
  HardHat,
  Calendar,
  Sparkles,
  Phone,
  Clock,
  Layers,
  MapPin
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: string, param?: string) => void;
  onOpenConsultationModal: (preselectedServiceId?: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenConsultationModal
}) => {
  const { language, t, isRTL } = useLanguage();
  const [heroTheme, setHeroTheme] = React.useState<'manama' | 'interior'>('manama');

  return (
    <div className="w-full overflow-hidden bg-[#FAF8F5]">
      {/* 1. HERO SECTION: FULL-BLEED HD MANAMA ARCHITECTURE EXTENDING DIRECTLY BEHIND THE TRANSPARENT NAVBAR */}
      <section
        className="relative min-h-[96vh] flex items-center justify-center pt-36 sm:pt-44 lg:pt-48 pb-28 sm:pb-36 border-b border-[#2C3440] overflow-hidden transition-all duration-700"
        style={{
          backgroundImage:
            heroTheme === 'manama'
              ? 'linear-gradient(to right, rgba(12, 16, 23, 0.62) 0%, rgba(16, 22, 32, 0.42) 50%, rgba(20, 28, 40, 0.20) 100%), linear-gradient(to top, rgba(10, 14, 20, 0.70) 0%, transparent 50%), url(/assets/banners/bahrain_skyline_hd.webp)'
              : 'linear-gradient(to right, rgba(12, 16, 23, 0.65) 0%, rgba(16, 22, 32, 0.45) 50%, rgba(20, 28, 40, 0.22) 100%), linear-gradient(to top, rgba(10, 14, 20, 0.70) 0%, transparent 50%), url(/assets/banners/office_interior_hd.webp)',
          backgroundSize: 'cover',
          backgroundPosition: heroTheme === 'manama' ? 'center 38%' : 'center center'
        }}
      >
        {/* Soft Ambient Radial Glow */}
        <div className="absolute top-1/4 end-10 w-96 h-96 bg-[#B38F4D]/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 start-10 w-80 h-80 bg-[#581D2D]/15 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Editorial Text Column with Generous Whitespace & Controlled Line Length */}
            <div className="lg:col-span-7 space-y-8 text-start">
              {/* Perspective Switcher - Minimalist Editorial Pill-free Controls */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center p-1 bg-black/60 backdrop-blur-md border border-white/20 text-xs shadow-md"
              >
                <button
                  onClick={() => setHeroTheme('manama')}
                  className={`px-4 py-2 transition-all flex items-center gap-2 cursor-pointer font-medium uppercase tracking-wider text-[11px] border-0 ${
                    heroTheme === 'manama'
                      ? 'bg-[#B38F4D] text-[#14181F] font-bold shadow-xs'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span>{t('Manama Architecture', 'معمارية المنامة')}</span>
                </button>
                <button
                  onClick={() => setHeroTheme('interior')}
                  className={`px-4 py-2 transition-all flex items-center gap-2 cursor-pointer font-medium uppercase tracking-wider text-[11px] border-0 ${
                    heroTheme === 'interior'
                      ? 'bg-[#B38F4D] text-[#14181F] font-bold shadow-xs'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>{t('Executive Interior', 'المكتب التنفيذي')}</span>
                </button>
              </motion.div>

              {/* Major Editorial Headline with Spacious Leading */}
              <div className="space-y-4">
                <AnimatedHeading
                  as="h1"
                  text={
                    language === 'ar'
                      ? 'الريادة القانونية وحماية استدامة الأعمال في البحرين والخليج'
                      : 'Defining the Legal Road Ahead with Precision & Authority'
                  }
                  className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.16] drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]"
                />
              </div>

              {/* Subheading with Generous Typographic Breathing Room */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base sm:text-lg lg:text-xl text-[#F0F4F8] max-w-2xl font-light leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
              >
                {language === 'ar'
                  ? 'مجموعة منال ضاحي القانونية: صرح قانوني متكامل يجمع بين خبرة التقاضي أمام المحاكم العليا، والتوثيق الخاص، واستشارات عقود الإنشاءات، ودعم التوسع التجاري في المملكة العربية السعودية والأسواق الدولية.'
                  : 'Manal Dhahi Legal Group delivers premier counsel combining high-court courtroom advocacy, authorized private notarization, construction contract protection, and cross-border expansion across Saudi Arabia and the GCC.'}
              </motion.p>

              {/* Architectural CTAs (Zero Pill / No Rounded Full) */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3"
              >
                <button
                  onClick={() => onOpenConsultationModal()}
                  className="py-4 px-8 bg-[#581D2D] hover:bg-[#722339] text-white font-medium text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 shadow-xl flex items-center justify-center gap-3 cursor-pointer hover:-translate-y-0.5 active:translate-y-0 group border-0"
                >
                  <Calendar className="w-4 h-4 text-[#D4AF37]" />
                  <span>{t('Book Legal Consultation', 'طلب استشارة قانونية')}</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </button>

                <button
                  onClick={() => onNavigate('services')}
                  className="py-4 px-8 border border-white/30 hover:border-[#D4AF37] bg-black/40 hover:bg-black/60 text-white font-medium text-xs sm:text-sm tracking-widest uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer backdrop-blur-md shadow-md"
                >
                  <span>{t('Explore Practice Areas', 'استعراض مجالات الممارسة')}</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                </button>
              </motion.div>

              {/* Verified Firm Indicators with Ample Space */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="pt-8 border-t border-white/20 grid grid-cols-2 sm:grid-cols-3 gap-6"
              >
                <div>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">15+</div>
                  <div className="text-xs text-[#CBD5E1] mt-1 font-light tracking-wide">{t('Years in Bahrain', 'عاماً في مملكة البحرين')}</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-[#D4AF37] tracking-tight">ISO 9001</div>
                  <div className="text-xs text-[#CBD5E1] mt-1 font-light tracking-wide">{t('Quality Managed', 'معايير الجودة الدولية')}</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">CR 108662-2</div>
                  <div className="text-xs text-[#CBD5E1] mt-1 font-light tracking-wide">{t('Official Registration', 'قيد تجاري معتمد')}</div>
                </div>
              </motion.div>
            </div>

            {/* Right Visual Image Card Composition: Founder Mrs. Manal Dhahi Spotlight (Large HD Portrait, Architectural Frame) */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="relative mx-auto max-w-md lg:max-w-none"
              >
                {/* Prestige Glassmorphic Card: Crisp Lines, Borderless Luxury, No Pill Corners */}
                <div className="relative overflow-hidden shadow-2xl border border-white/20 bg-[#12161E]/95 backdrop-blur-xl">
                  {/* Large High-Definition Featured Portrait Container */}
                  <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-[#181D26]">
                    <img
                      src={FOUNDER_INFO.image}
                      alt={language === 'ar' ? FOUNDER_INFO.nameAr : FOUNDER_INFO.nameEn}
                      className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = 'https://www.manalfirm.com/web/image/39583-89127b0b/manal-image.webp';
                      }}
                    />
                    {/* Soft gradient overlay at bottom for smooth text transition */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12161E] via-transparent to-black/30 pointer-events-none" />

                    {/* Top Location & Authority Badge Floating on Image */}
                    <div className="absolute top-4 start-4 end-4 flex items-center justify-between z-10 pointer-events-none">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/70 backdrop-blur-md border border-white/20 text-white shadow-md text-[11px] font-medium tracking-wider uppercase">
                        <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>
                          {t('Diplomatic Area • Manama', 'المنطقة الدبلوماسية • المنامة')}
                        </span>
                      </div>
                      <div className="w-8 h-8 bg-[#581D2D]/90 border border-[#D4AF37]/70 flex items-center justify-center text-white text-xs shadow-md">
                        ⚖️
                      </div>
                    </div>

                    {/* Sub-badge over lower part of image */}
                    <div className="absolute bottom-4 start-5 z-10">
                      <span className="inline-block px-3 py-1 bg-[#D4AF37] text-[#14181F] text-[10px] font-bold uppercase tracking-widest shadow-sm">
                        {t('Kingdom of Bahrain Headquarters', 'المقر الرئيسي بمملكة البحرين')}
                      </span>
                    </div>
                  </div>

                  {/* Founder Profile Details & Quote with Generous Breathing Room */}
                  <div className="p-8 space-y-5 text-start">
                    <div>
                      <span className="text-[11px] uppercase font-bold tracking-widest text-[#D4AF37] block">
                        {t('Founder & Managing Director', 'المؤسس ورئيس المجموعة')}
                      </span>
                      <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white mt-1">
                        {language === 'ar' ? 'المحامية منال علي عباس ضاحي' : 'Mrs. Manal Ali Abbas Dhahi'}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#CBD5E1] mt-1.5 leading-relaxed font-light">
                        {t(
                          'Court of Cassation Certified Attorney & Ministry of Justice Authorized Private Notary',
                          'محامية مجازة أمام محكمة التمييز وموثقة خاصة معتمدة من وزارة العدل'
                        )}
                      </p>
                    </div>

                    {/* Direct Founder Quote */}
                    <div className="p-4 bg-white/5 border border-white/10 text-xs sm:text-sm text-[#E2E8F0] italic leading-relaxed">
                      "{t(
                        'Every case is championed with uncompromising integrity, rigorous precision, and deep respect for the rule of law.',
                        'نتولى كل قضية بمسؤولية صارمة، ودقة علمية، والتزام راسخ بحماية حقوق موكلينا واستدامة أعمالهم.'
                      )}"
                    </div>

                    {/* Quick Access CTA Buttons (Sharp, No Rounded Pills) */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <button
                        onClick={() => onNavigate('founder')}
                        className="py-3 px-4 bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                      >
                        <span>{t("Founder's Message", 'كلمة المؤسس')}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => onNavigate('services', 'private-notary')}
                        className="py-3 px-4 bg-[#D4AF37] hover:bg-[#E5C158] text-[#14181F] text-xs font-bold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs border-0"
                      >
                        <Shield className="w-3.5 h-3.5 text-[#14181F]" />
                        <span>{t('Private Notary', 'التوثيق الخاص')}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FIRM VERIFIED STATISTICS SECTION WITH GENEROUS BREATHING ROOM */}
      <section className="bg-white py-16 sm:py-20 border-b border-[#E8DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <AOS
            direction="up"
            staggerChildren={0.12}
            className="grid grid-cols-2 md:grid-cols-4 gap-10 divide-y sm:divide-y-0 sm:divide-x rtl:sm:divide-x-reverse divide-[#E8DFD3]"
          >
            {FIRM_DETAILS.stats.map((stat, i) => (
              <AOSItem
                key={i}
                className={`pt-6 sm:pt-0 ${i !== 0 ? 'sm:px-8' : 'sm:pe-8'} text-start`}
              >
                <div className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#581D2D] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-[#4A525D] mt-2.5 leading-snug">
                  {language === 'ar' ? stat.labelAr : stat.labelEn}
                </div>
              </AOSItem>
            ))}
          </AOS>
        </div>
      </section>

      {/* 3. ABOUT THE FIRM & FOUNDER INTRODUCTION WITH EDITORIAL SPACING */}
      <section className="py-28 sm:py-36 bg-[#FAF8F5] border-b border-[#E8DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">
            {/* Founder Portrait & Credentials Card with Architectural Frame */}
            <AOS direction="right" duration={0.7} className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative overflow-hidden border border-[#D8CFC3] bg-white shadow-xl p-4">
                <div className="overflow-hidden relative aspect-4/5 bg-[#ECE5DC]">
                  <img
                    src={FOUNDER_INFO.image}
                    alt={FOUNDER_INFO.nameEn}
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = 'https://www.manalfirm.com/web/image/39583-89127b0b/manal-image.webp';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C2024]/90 via-[#1C2024]/20 to-transparent" />
                  <div className="absolute bottom-6 inset-x-6 text-white space-y-1.5">
                    <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
                      {FOUNDER_INFO.titleEn}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                      {language === 'ar' ? FOUNDER_INFO.nameAr : FOUNDER_INFO.nameEn}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#E8DFD3] pt-1">
                      {t('Founder of Manal Dhahi Legal Group (Est. 2011)', 'مؤسس مجموعة منال ضاحي القانونية (تأسس 2011)')}
                    </p>
                  </div>
                </div>

                {/* Licenses strip */}
                <div className="p-5 bg-white space-y-3">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-[#333940]">
                    <CheckCircle2 className="w-4 h-4 text-[#B38F4D] shrink-0" />
                    <span>{t('Court of Cassation & Constitutional Court Licensed', 'إجازة الترافع أمام محكمة التمييز والمحكمة الدستورية')}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-[#333940]">
                    <CheckCircle2 className="w-4 h-4 text-[#B38F4D] shrink-0" />
                    <span>{t('Ministry of Justice Licensed Private Notary', 'موثق خاص مرخص من وزارة العدل')}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-[#333940]">
                    <CheckCircle2 className="w-4 h-4 text-[#B38F4D] shrink-0" />
                    <span>{t('Certified Mediator & Private Enforcement Officer', 'وسيط معتمد ومنفذ خاص')}</span>
                  </div>
                </div>
              </div>
            </AOS>

            {/* Content description with Editorial Whitespace */}
            <AOS direction="left" duration={0.7} className="lg:col-span-7 order-1 lg:order-2 space-y-8 text-start">
              <span className="text-xs uppercase tracking-widest font-bold text-[#8E6F34] bg-[#B38F4D]/10 px-4 py-1.5 border border-[#B38F4D]/30 inline-block">
                {t('About Manal Dhahi Legal Group', 'نبذة عن المجموعة القانونية')}
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C2024] leading-[1.2]">
                {language === 'ar'
                  ? 'رؤية قانونية ترتكز على استباق المخاطر وصون استدامة الأعمال'
                  : 'A Vision Grounded in Anticipating Risks & Safeguarding Growth'}
              </h2>

              <p className="text-base sm:text-lg text-[#4A525D] font-light leading-relaxed max-w-2xl">
                {language === 'ar'
                  ? 'منذ تأسيس المجموعة في عام 2011 في مملكة البحرين، وضعنا نصب أعيننا تقديم خدمات قانونية تتجاوز تسوية النزاعات لتشمل استباق التحديات، وحماية مصالح الموكلين، وتقديم استراتيجيات قابلة للتنفيذ تدعم مسيرة المشاريع والمؤسسات في اقتصاد إقليمي سريع التطور.'
                  : 'Since our establishment in 2011 in the Kingdom of Bahrain, our mission has been clear: to provide professional legal services that transcend mere dispute resolution. We anticipate legal liabilities, structure resilient contracts, and enforce rights with total transparency and precision.'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="p-6 bg-white border border-[#E8DFD3] space-y-3 shadow-xs">
                  <div className="w-10 h-10 bg-[#581D2D]/10 text-[#581D2D] flex items-center justify-center">
                    <Scale className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif font-bold text-base text-[#1C2024]">
                    {t('Sector-Specific Mastery', 'تخصص قطاعي دقيق')}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                    {t(
                      'Deep experience in construction, engineering, FIDIC contracts, real estate, and high-risk industries.',
                      'خبرة متعمقة في عقود الفيديك، الإنشاءات والهندسة، والتطوير العقاري والصناعات الحيوية.'
                    )}
                  </p>
                </div>

                <div className="p-6 bg-white border border-[#E8DFD3] space-y-3 shadow-xs">
                  <div className="w-10 h-10 bg-[#1F382E]/10 text-[#1F382E] flex items-center justify-center">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif font-bold text-base text-[#1C2024]">
                    {t('ISO 9001:2015 Standards', 'معايير الجودة العالمية')}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                    {t(
                      'Strict adherence to international quality management systems, data security, and client care.',
                      'التزام كامل بأنظمة إدارة الجودة العالمية والسرية التامة وسرعة الاستجابة.'
                    )}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => onNavigate('founder')}
                  className="py-3.5 px-7 bg-[#1C2024] hover:bg-[#581D2D] text-white text-xs sm:text-sm font-medium tracking-wider uppercase transition-colors flex items-center gap-2 cursor-pointer shadow-sm border-0"
                >
                  <span>{t("Read Founder's Full Message", 'قراءة كلمة المؤسس كاملة')}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('about')}
                  className="py-3.5 px-7 border border-[#D8CFC3] hover:border-[#B38F4D] text-[#1C2024] text-xs sm:text-sm font-medium tracking-wider uppercase transition-colors bg-white cursor-pointer"
                >
                  <span>{t('Discover Our Heritage', 'تاريخ وإنجازات المكتب')}</span>
                </button>
              </div>
            </AOS>
          </div>
        </div>
      </section>

      {/* 4. CARD STACK SCROLL EFFECT FOR FEATURED SERVICES */}
      <section className="py-28 sm:py-36 bg-white border-b border-[#E8DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <AOS direction="up" className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#8E6F34] bg-[#B38F4D]/10 px-4 py-1.5 border border-[#B38F4D]/30 inline-block">
              {t('Comprehensive Legal Solutions', 'حلول قانونية متكاملة')}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1C2024] leading-[1.2]">
              {language === 'ar' ? 'مجالات الممارسة والخدمات القانونية' : 'Legal Services & Specialized Practices'}
            </h2>
            <p className="text-base sm:text-lg text-[#6B7280] font-light leading-relaxed">
              {language === 'ar'
                ? 'نجمع بين أركان العمل القانوني من تقاضٍ وتوثيق ووساطة واستشارات تجارية تحت مظلة واحدة متكاملة.'
                : 'Integrating core courtroom litigation, private notarization, alternative dispute resolution, and corporate governance under one roof.'}
            </p>
          </AOS>

          {/* Interactive CardStack Component */}
          <CardStack
            services={LEGAL_SERVICES}
            onSelectService={(service) => onNavigate('services', service.id)}
            onBookConsultation={(service) => onOpenConsultationModal(service.id)}
          />

          <AOS direction="up" delay={0.2} className="text-center mt-16">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#581D2D] hover:text-[#77293E] hover:underline cursor-pointer tracking-wider uppercase"
            >
              <span>{t('Browse All 12 Practice Areas in Detail', 'استعراض كافة مجالات الممارسة الـ 12 بالتفصيل')}</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </button>
          </AOS>
        </div>
      </section>

      {/* 5. INDUSTRY EXPERTISE SECTION WITH EDITORIAL CARDS */}
      <section className="py-28 sm:py-36 bg-[#FAF8F5] border-b border-[#E8DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <AOS direction="up" className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-4 max-w-2xl text-start">
              <span className="text-xs uppercase tracking-widest font-bold text-[#8E6F34] bg-[#B38F4D]/10 px-4 py-1.5 border border-[#B38F4D]/30 inline-block">
                {t('Sectors We Protect', 'القطاعات الحيوية')}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C2024] leading-[1.2]">
                {language === 'ar' ? 'الخبرة القطاعية والهندسية المتخصصة' : 'Industry Expertise & Construction Law'}
              </h2>
              <p className="text-base sm:text-lg text-[#6B7280] font-light leading-relaxed">
                {language === 'ar'
                  ? 'حماية مشاريع البنية التحتية، عقود المقاولات، التطوير العقاري، وحقوق المصممين والموردين.'
                  : 'Defending infrastructure developments, contracting agreements, real estate funds, and architectural IP.'}
              </p>
            </div>

            <button
              onClick={() => onNavigate('expertise')}
              className="py-3.5 px-7 border border-[#D8CFC3] hover:border-[#B38F4D] bg-white text-xs sm:text-sm font-medium uppercase tracking-wider text-[#1C2024] transition-colors flex items-center gap-2 self-start cursor-pointer shadow-xs"
            >
              <span>{t('View All Sectors', 'كافة القطاعات')}</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </button>
          </AOS>

          <AOS
            direction="up"
            staggerChildren={0.1}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {INDUSTRY_EXPERTISE.map((item) => (
              <AOSItem key={item.id}>
                <div
                  onClick={() => onNavigate('expertise', item.id)}
                  className="group p-8 sm:p-10 bg-white border border-[#E8DFD3] hover:border-[#B38F4D] transition-all duration-300 hover:shadow-xl cursor-pointer flex flex-col justify-between text-start h-full"
                >
                  <div className="space-y-5">
                    <div className="w-12 h-12 bg-[#581D2D]/5 text-[#581D2D] group-hover:bg-[#581D2D] group-hover:text-white transition-all flex items-center justify-center">
                      {item.id === 'construction-engineering' ? (
                        <HardHat className="w-6 h-6" />
                      ) : item.id === 'real-estate' ? (
                        <Building2 className="w-6 h-6" />
                      ) : item.id === 'architectural-design' ? (
                        <Compass className="w-6 h-6" />
                      ) : (
                        <Scale className="w-6 h-6" />
                      )}
                    </div>

                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#1C2024] group-hover:text-[#581D2D] transition-colors">
                      {item.title[language]}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#4A525D] font-light leading-relaxed">
                      {item.shortDesc[language]}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#FAF8F5] flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#8E6F34]">
                    <span>{t('Explore Practice Details', 'تفاصيل التخصص')}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 text-[#D4AF37]" />
                  </div>
                </div>
              </AOSItem>
            ))}
          </AOS>
        </div>
      </section>

      {/* 6. REGIONAL & INTERNATIONAL DESKS (KSA & RUSSIAN DESKS) */}
      <section className="py-28 sm:py-36 bg-[#161B22] text-white border-b border-[#2C3238] relative overflow-hidden">
        <div className="absolute top-0 end-0 w-96 h-96 bg-[#B38F4D]/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <AOS direction="up" className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#D4AF37] bg-[#B38F4D]/20 px-4 py-1.5 border border-[#B38F4D]/30 inline-block">
              {t('Cross-Border Legal Bridges', 'جسور قانونية عابرة للحدود')}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-[1.2]">
              {language === 'ar' ? 'التمثيل الإقليمي والتوسع الدولي' : 'Regional Reach & International Desks'}
            </h2>
            <p className="text-base sm:text-lg text-[#A0AAB5] font-light leading-relaxed">
              {language === 'ar'
                ? 'ربط الأعمال والمستثمرين بين البحرين والمملكة العربية السعودية ورابطة الدول المستقلة برؤية موثوقة.'
                : 'Connecting investors and expanding enterprises across Bahrain, Saudi Arabia (KSA), and international markets.'}
            </p>
          </AOS>

          <AOS
            direction="up"
            staggerChildren={0.15}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          >
            {/* KSA Desk */}
            <AOSItem>
              <div className="bg-[#1E2530] border border-[#3A434D] p-8 md:p-12 flex flex-col justify-between space-y-8 h-full">
                <div className="space-y-5 text-start">
                  <div className="flex items-center justify-between">
                    <span className="px-3.5 py-1 text-xs font-semibold bg-[#B38F4D]/20 text-[#D4AF37] border border-[#B38F4D]/30 uppercase tracking-wider">
                      {t('Saudi Arabia Desk (KSA)', 'القسم السعودي (KSA)')}
                    </span>
                    <Compass className="w-6 h-6 text-[#D4AF37]" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-snug">
                    {language === 'ar' ? 'التوسع والتمثيل القانوني في المملكة العربية السعودية' : 'Legal Representation & Expansion into Saudi Arabia'}
                  </h3>

                  <p className="text-sm sm:text-base text-[#A0AAB5] font-light leading-relaxed">
                    {language === 'ar'
                      ? 'دعم استراتيجي للشركات البحرينية والدولية في تأسيس الفروع والحصول على تراخيص وزارة الاستثمار (MISA) والتوافق مع نظام الشركات الجديد في إطار رؤية 2030.'
                      : 'Facilitating Ministry of Investment (MISA) licensing, branch setups, RHQ compliance, and cross-border commercial transactions between Bahrain and the Kingdom of Saudi Arabia.'}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 text-xs sm:text-sm text-[#E8DFD3]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>{t('MISA Foreign Licensing', 'تراخيص الاستثمار الأجنبي MISA')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>{t('Causeway Logistics Advisory', 'تنظيم العمليات عبر الجسر')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>{t('Dual VAT & Tax Alignment', 'التنسيق الضريبي المزدوج')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>{t('GCC Commercial Treaty Rights', 'حقوق الاتفاقية الاقتصادية الموحدة')}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#3A434D]">
                  <button
                    onClick={() => onNavigate('services', 'saudi-arabia-desk')}
                    className="py-3.5 px-7 bg-[#D4AF37] hover:bg-[#E5C158] text-[#1C2024] font-semibold text-xs sm:text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer border-0"
                  >
                    <span>{t('Explore KSA Advisory Services', 'تفاصيل خدمات التوسع في السعودية')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </AOSItem>

            {/* Russian & International Desk */}
            <AOSItem>
              <div className="bg-[#1E2530] border border-[#3A434D] p-8 md:p-12 flex flex-col justify-between space-y-8 h-full">
                <div className="space-y-5 text-start">
                  <div className="flex items-center justify-between">
                    <span className="px-3.5 py-1 text-xs font-semibold bg-[#581D2D]/40 text-[#E8DFD3] border border-[#581D2D] uppercase tracking-wider">
                      {t('Russian & International Desk', 'القسم الروسي والمستثمرون الدوليون')}
                    </span>
                    <Globe className="w-6 h-6 text-[#D4AF37]" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-snug">
                    {language === 'ar' ? 'خدمات المستثمرين الدوليين وحماية رؤوس الأموال' : 'Legal Advisory for International & Russian Investors'}
                  </h3>

                  <p className="text-sm sm:text-base text-[#A0AAB5] font-light leading-relaxed">
                    {language === 'ar'
                      ? 'بقيادة محمود ضاحي، يقدم القسم استشارات متكاملة باللغات الروسية والإنجليزية والعربية لتأسيس الكيانات، الإقامة الذهبية، وتملك العقارات وحماية الأصول.'
                      : 'Led by Mahmood Dhahi, offering native trilingual counsel (Russian, English, Arabic) for capital relocation, company formation, investor Golden Residency, and asset security in the GCC.'}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 text-xs sm:text-sm text-[#E8DFD3]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>{t('Native Russian Communication', 'تواصل باللغة الروسية الأم')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>{t('10-Year Golden Residency Filing', 'معاملات الإقامة الذهبية 10 سنوات')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>{t('Holding Entity Incorporation', 'تأسيس الشركات القابضة والملاذات')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>{t('Property Escrow Verification', 'تدقيق عقود وحسابات ضمان العقار')}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#3A434D]">
                  <button
                    onClick={() => onNavigate('services', 'russian-desk')}
                    className="py-3.5 px-7 bg-white hover:bg-[#FAF8F5] text-[#1C2024] font-semibold text-xs sm:text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer border-0"
                  >
                    <span>{t('Discover Russian Desk Guidance', 'تفاصيل القسم الروسي والدولي')}</span>
                    <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                  </button>
                </div>
              </div>
            </AOSItem>
          </AOS>
        </div>
      </section>

      {/* 7. REAL TEAM MEMBERS SHOWCASE */}
      <section className="py-28 sm:py-36 bg-[#FAF8F5] border-b border-[#E8DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <AOS direction="up" className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-4 max-w-2xl text-start">
              <span className="text-xs uppercase tracking-widest font-bold text-[#8E6F34] bg-[#B38F4D]/10 px-4 py-1.5 border border-[#B38F4D]/30 inline-block">
                {t('Our Legal Minds', 'فريقنا القانوني')}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C2024] leading-[1.2]">
                {language === 'ar' ? 'نخبة المحامين والمستشارين القانونيين' : 'Distinguished Attorneys & Legal Consultants'}
              </h2>
              <p className="text-base sm:text-lg text-[#6B7280] font-light leading-relaxed">
                {language === 'ar'
                  ? 'أكثر من 20 متخصصاً يجمعون بين المعرفة التشريعية العميقة والكفاءة التنفيذية في محاكم البحرين.'
                  : 'An elite multidisciplinary team of over 20 legal professionals, litigators, and international advisors.'}
              </p>
            </div>

            <button
              onClick={() => onNavigate('team')}
              className="py-3.5 px-7 border border-[#D8CFC3] hover:border-[#B38F4D] bg-white text-xs sm:text-sm font-medium uppercase tracking-wider text-[#1C2024] transition-colors flex items-center gap-2 self-start cursor-pointer shadow-xs"
            >
              <Users className="w-4 h-4 text-[#B38F4D]" />
              <span>{t('View Complete Team Directory (10 Profiles)', 'دليل فريق العمل الكامل')}</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </button>
          </AOS>

          <AOS
            direction="up"
            staggerChildren={0.1}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {TEAM_MEMBERS.slice(0, 4).map((member) => (
              <AOSItem key={member.id}>
                <div
                  onClick={() => onNavigate('team')}
                  className="group bg-white border border-[#E8DFD3] hover:border-[#B38F4D] overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer flex flex-col justify-between h-full"
                >
                  <div className="relative aspect-4/5 bg-[#ECE5DC] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name[language]}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = `https://www.manalfirm.com/web/image/60229-bc8e601f/${member.id}.webp`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C2024]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-4 start-4 end-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[11px] bg-[#D4AF37] text-[#1C2024] font-bold px-2.5 py-1 uppercase tracking-wider inline-block">
                        {member.experience[language]}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-2 text-start flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif font-bold text-lg sm:text-xl text-[#1C2024] group-hover:text-[#581D2D] transition-colors">
                        {member.name[language]}
                      </h3>
                      <p className="text-xs font-semibold text-[#8E6F34]">
                        {member.role[language]}
                      </p>
                      <p className="text-xs text-[#6B7280] line-clamp-2 mt-2.5 font-light leading-relaxed">
                        {member.bio[language]}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-[#FAF8F5] flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#581D2D]">
                      <span>{t('View Credentials', 'السيرة المهنية')}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                    </div>
                  </div>
                </div>
              </AOSItem>
            ))}
          </AOS>
        </div>
      </section>

      {/* 8. FEATURED LEGAL INSIGHTS & ARTICLES */}
      <section className="py-28 sm:py-36 bg-white border-b border-[#E8DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <AOS direction="up" className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-4 max-w-2xl text-start">
              <span className="text-xs uppercase tracking-widest font-bold text-[#8E6F34] bg-[#B38F4D]/10 px-4 py-1.5 border border-[#B38F4D]/30 inline-block">
                {t('Legal Commentary & Guidance', 'دراسات وأبحاث قانونية')}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C2024] leading-[1.2]">
                {language === 'ar' ? 'المقالات والتحليلات القانونية' : 'Latest Legal Insights & Bahrain Law Updates'}
              </h2>
              <p className="text-base sm:text-lg text-[#6B7280] font-light leading-relaxed">
                {language === 'ar'
                  ? 'رؤى تحليلية متخصصة في قوانين العقارات والإنشاءات والشركات وتأسيس الأعمال بمملكة البحرين.'
                  : 'Practical legal commentary covering real estate ownership, LMRA regulations, corporate structures, and construction guarantees.'}
              </p>
            </div>

            <button
              onClick={() => onNavigate('blog')}
              className="py-3.5 px-7 border border-[#D8CFC3] hover:border-[#B38F4D] bg-white text-xs sm:text-sm font-medium uppercase tracking-wider text-[#1C2024] transition-colors flex items-center gap-2 self-start cursor-pointer shadow-xs"
            >
              <span>{t('Explore All Legal Articles', 'كافة المقالات')}</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </button>
          </AOS>

          <AOS
            direction="up"
            staggerChildren={0.12}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10"
          >
            {BLOG_ARTICLES.slice(0, 3).map((article) => (
              <AOSItem key={article.id}>
                <article
                  onClick={() => onNavigate('blog', article.slug)}
                  className="group bg-[#FAF8F5] border border-[#E8DFD3] hover:border-[#B38F4D] overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer flex flex-col justify-between text-start h-full"
                >
                  <div>
                    <div className="relative aspect-16/10 bg-[#ECE5DC] overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title[language]}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.src = `https://www.manalfirm.com/web/image/62228/${article.id}.png`;
                        }}
                      />
                      <div className="absolute top-4 start-4">
                        <span className="px-3 py-1 text-[11px] font-semibold bg-[#1C2024]/90 text-white backdrop-blur-sm uppercase tracking-wider">
                          {article.category[language]}
                        </span>
                      </div>
                    </div>

                    <div className="p-7 space-y-4">
                      <div className="flex items-center gap-3 text-xs text-[#6B7280]">
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#B38F4D]" />
                          {article.readTime[language]}
                        </span>
                        <span>•</span>
                        <span>{article.date}</span>
                      </div>

                      <h3 className="font-serif font-bold text-xl text-[#1C2024] group-hover:text-[#581D2D] transition-colors leading-snug">
                        {article.title[language]}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#4A525D] font-light line-clamp-3 leading-relaxed">
                        {article.excerpt[language]}
                      </p>
                    </div>
                  </div>

                  <div className="p-7 pt-0 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#8E6F34]">
                    <span>{t('Read Full Article', 'قراءة المقال كاملاً')}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 text-[#D4AF37]" />
                  </div>
                </article>
              </AOSItem>
            ))}
          </AOS>
        </div>
      </section>

      {/* 9. TESTIMONIALS SECTION WITH GENEROUS BREATHING ROOM */}
      <section className="py-28 sm:py-36 bg-[#FAF8F5] border-b border-[#E8DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <AOS direction="up" className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#8E6F34] bg-[#B38F4D]/10 px-4 py-1.5 border border-[#B38F4D]/30 inline-block">
              {t('Client Trust & Partnership', 'ثقة عملائنا وشركاء النجاح')}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1C2024] leading-[1.2]">
              {language === 'ar' ? 'شهادات وآراء موكلينا' : 'Verified Client Testimonials'}
            </h2>
            <p className="text-base sm:text-lg text-[#6B7280] font-light leading-relaxed">
              {language === 'ar'
                ? 'آراء حقيقية من كبرى شركات المقاولات والمطورين العقاريين والمستثمرين الدوليين في البحرين.'
                : 'Direct feedback from contracting executives, institutional property developers, and international investors.'}
            </p>
          </AOS>

          <AOS
            direction="up"
            staggerChildren={0.12}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10"
          >
            {TESTIMONIALS.map((test) => (
              <AOSItem key={test.id}>
                <div className="p-8 sm:p-10 bg-white border border-[#E8DFD3] shadow-sm hover:shadow-md transition-shadow space-y-6 text-start flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <div className="flex items-center gap-1.5 text-[#B38F4D]">
                      {[...Array(test.rating)].map((_, r) => (
                        <Star key={r} className="w-4 h-4 fill-[#B38F4D]" />
                      ))}
                    </div>

                    <p className="text-sm sm:text-base text-[#333940] font-serif italic leading-relaxed">
                      "{test.feedback[language]}"
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[#FAF8F5] flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-[#1C2024]">{test.clientName[language]}</h4>
                      <p className="text-xs text-[#6B7280] mt-0.5">
                        {test.role[language]} • {test.company?.[language]}
                      </p>
                    </div>
                    <span className="px-3.5 py-1 text-[11px] font-semibold bg-[#581D2D]/10 text-[#581D2D] uppercase tracking-wider">
                      {test.serviceArea[language]}
                    </span>
                  </div>
                </div>
              </AOSItem>
            ))}
          </AOS>
        </div>
      </section>

      {/* 10. CALL TO ACTION CONSULTATION STRIP */}
      <section className="py-28 sm:py-36 bg-gradient-to-br from-[#581D2D] to-[#38111B] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:28px_28px] opacity-15 pointer-events-none" />

        <AOS direction="up" className="max-w-5xl mx-auto px-4 sm:px-8 text-center relative z-10 space-y-8">
          <span className="px-4 py-1.5 text-xs font-semibold tracking-widest uppercase bg-white/10 text-[#D4AF37] border border-white/20 inline-block">
            {t('Confidential Legal Counsel', 'استشارات قانونية موثوقة وسرية')}
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.18]">
            {language === 'ar'
              ? 'جاهزون لحماية مصالحك القانونية وتمكين نمو أعمالك'
              : 'Protect Your Commercial Interests with Authority & Care'}
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-[#E8DFD3] max-w-2xl mx-auto font-light leading-relaxed">
            {language === 'ar'
              ? 'تواصل مع فريقنا في المنطقة الدبلوماسية بالمنامة لتحديد موعد استشارة متخصصة مع الأستاذة منال ضاحي ومستشارينا.'
              : 'Schedule a tailored consultation with Mrs. Manal Dhahi and our senior counsel at our Diplomatic Area chambers in Manama.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
            <button
              onClick={() => onOpenConsultationModal()}
              className="w-full sm:w-auto py-4 px-9 bg-[#D4AF37] hover:bg-[#E5C158] text-[#14181F] font-bold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 shadow-xl flex items-center justify-center gap-3 cursor-pointer hover:scale-105 active:scale-95 border-0"
            >
              <Calendar className="w-4 h-4 text-[#14181F]" />
              <span>{t('Schedule Consultation Now', 'حجز موعد استشارة فوراً')}</span>
            </button>

            <a
              href={`tel:${FIRM_DETAILS.phone}`}
              className="w-full sm:w-auto py-4 px-9 border border-white/30 hover:bg-white/10 text-white font-medium text-xs sm:text-sm tracking-widest uppercase transition-colors flex items-center justify-center gap-3"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span dir="ltr">{FIRM_DETAILS.phone}</span>
            </a>
          </div>

          <p className="text-xs text-[#D4AF37] pt-4 tracking-wider uppercase">
            {t('Office 42, Building 240, Diplomatic Area, Manama, Kingdom of Bahrain', 'مكتب 42، مبنى 240، المنطقة الدبلوماسية، المنامة، مملكة البحرين')}
          </p>
        </AOS>
      </section>
    </div>
  );
};
