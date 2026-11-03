import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FIRM_DETAILS, FOUNDER_INFO } from '../data/firmData';
import { AOS, AOSItem } from '../components/AOS';
import {
  Shield,
  Award,
  Scale,
  Target,
  Eye,
  CheckCircle2,
  Users,
  Compass,
  Building2,
  Calendar,
  ArrowRight
} from 'lucide-react';

interface AboutViewProps {
  onNavigate: (view: string, param?: string) => void;
  onOpenConsultationModal: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onNavigate,
  onOpenConsultationModal
}) => {
  const { language, t } = useLanguage();

  const values = [
    {
      title: { en: 'Uncompromising Integrity', ar: 'النزاهة المطلقة' },
      desc: {
        en: 'Every legal opinion, pleading, and contract attestation is anchored in ethical transparency and the highest standards of professional jurisprudence.',
        ar: 'كل استشارة قانونية ومرافعة وتوثيق رسمي ينطلق من معايير أخلاقية صارمة وشفافية مطلقة تصون حقوق الموكلين.'
      },
      icon: Shield
    },
    {
      title: { en: 'Preventative Legal Foresight', ar: 'الاستباقية وإدارة المخاطر' },
      desc: {
        en: 'We do not wait for disputes to erupt. We architect corporate mechanisms that anticipate and eliminate legal exposure before it threatens your business.',
        ar: 'لا ننتظر نشوء النزاع لمعالجته، بل نصمم الهياكل التعاقدية التي تستشرف المخاطر وتدرأ النزاعات المحتملة مسبقاً.'
      },
      icon: Eye
    },
    {
      title: { en: 'Judicial Rigour & Enforceability', ar: 'الحزم القضائي وقوة النفاذ' },
      desc: {
        en: 'From the Court of First Instance to the Court of Cassation, our advocacy is meticulous, evidence-grounded, and focused strictly on enforceable results.',
        ar: 'من المحاكم الابتدائية حتى محكمة التمييز، نتميز بمرافعات دقيقة وأسانيد قانونية محكمة تهدف لتحقيق أحكام نافذة.'
      },
      icon: Scale
    },
    {
      title: { en: 'Client-Centric Dedication', ar: 'الشراكة الوثيقة مع الموكل' },
      desc: {
        en: 'Dedicated client managers and senior partners ensure continuous case visibility, rapid turnarounds, and bespoke legal strategies.',
        ar: 'فريق عمل متفانٍ يضمن للعميل التواصل المباشر وإحاطته بكافة مستجدات قضيته بشفافية وسرعة استجابة متناهية.'
      },
      icon: Target
    }
  ];

  const milestones = [
    {
      year: '2011',
      title: { en: 'Firm Founded in Manama', ar: 'تأسيس المكتب بالمنامة' },
      desc: {
        en: 'Mrs. Manal Dhahi establishes the practice in the Kingdom of Bahrain, focusing on civil and commercial litigation.',
        ar: 'تأسيس المكتب في مملكة البحرين بواسطة الأستاذة منال ضاحي، مع التركيز على التقاضي المدني والتجاري.'
      }
    },
    {
      year: '2015',
      title: { en: 'Private Notary & ADR Expansion', ar: 'إطلاق التوثيق الخاص والوساطة' },
      desc: {
        en: 'Accreditation as one of Bahrain’s primary licensed private notaries and certified mediation practitioners.',
        ar: 'الحصول على ترخيص التوثيق الخاص المعتمد من وزارة العدل وإطلاق خدمات الوساطة القانونية وفض المنازعات.'
      }
    },
    {
      year: '2019',
      title: { en: 'ISO 9001:2015 Certification', ar: 'شهادة الجودة العالمية ISO 9001' },
      desc: {
        en: 'Achieving international quality management certification for rigorous client service and legal practice operations.',
        ar: 'الحصول على شهادة الآيزو العالمية في إدارة الجودة وتطوير الأنظمة التشغيلية للمكتب وفق المعايير الدولية.'
      }
    },
    {
      year: '2022',
      title: { en: 'Launch of KSA Regional Desk', ar: 'تدشين القسم السعودي' },
      desc: {
        en: 'Establishing dedicated cross-border operations supporting corporate expansion between Bahrain and Saudi Arabia.',
        ar: 'تأسيس القسم السعودي المتخصص لدعم توسع الشركات البحرينية والخليجية في السوق السعودي تحت مظلة رؤية 2030.'
      }
    },
    {
      year: '2024',
      title: { en: 'Russian & International Desk', ar: 'تأسيس القسم الروسي والدولي' },
      desc: {
        en: 'Expanding international outreach with native multilingual counsel for foreign investors and Golden Residency applicants.',
        ar: 'إطلاق القسم الروسي والدولي بقيادة محمود ضاحي لتقديم الاستشارات للمستثمرين الأجانب وتسهيل الإقامة الذهبية.'
      }
    }
  ];

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
          <AOS direction="down" duration={0.5}>
            <span className="text-xs uppercase tracking-widest font-bold text-[#CBB079] bg-[#B38F4D]/20 px-3.5 py-1 rounded-full border border-[#B38F4D]/30 inline-block">
              {t('About Our Law Firm in Bahrain', 'عن مكتبنا في مملكة البحرين')}
            </span>
          </AOS>
          <AOS direction="up" delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">
              {language === 'ar' ? 'من نحن • مجموعة منال ضاحي القانونية' : 'Who We Are • Manal Dhahi Legal Group'}
            </h1>
          </AOS>
          <AOS direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-[#A0AAB5] max-w-3xl font-light">
              {language === 'ar'
                ? 'تأسست المجموعة في عام 2011 لتكون مرجعاً قانونياً موثوقاً للشركات والمستثمرين في البحرين والخليج، مقدمةً حلولاً استراتيجية تجمع بين التقاضي والتوثيق والوساطة.'
                : 'Founded in 2011, we are an established law firm in Bahrain pioneering the next era of regional law with sector-specific expertise and ISO 9001 quality management.'}
            </p>
          </AOS>
        </div>
      </section>

      {/* Main Narrative with AOS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <AOS direction="right" className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-wider font-bold text-[#8E6F34]">
              {t('Our Origins & Philosophy', 'نشأتنا وفلسفتنا القانونية')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C2024] leading-tight">
              {language === 'ar'
                ? 'استجابة قانونية رصينة للنمو الاقتصادي المتسارع في البحرين والخليج'
                : 'Pioneering Regional Legal Counsel in a Rapidly Evolving Economy'}
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#4A525D] font-light leading-relaxed">
              <p>
                {language === 'ar'
                  ? 'شهدت مملكة البحرين، جنباً إلى جنب مع دول مجلس التعاون الخليجي، نمواً اقتصادياً واستثمارياً غير مسبوق. ومع هذا التطور الكبير، برزت الحاجة الماسة إلى إطار قانوني وتنظيمي متين يحمي استثمارات الشركات ويوفر بيئة آمنة لرؤوس الأموال المحلية والدولية.'
                  : 'The Kingdom of Bahrain, along with the rest of the GCC, has been one of the fastest-growing economic landscapes in the world. With this rapid expansion comes the imperative need for robust legal clarity to sustain business growth and protect enterprise assets.'}
              </p>
              <p>
                {language === 'ar'
                  ? 'في مجموعة منال ضاحي القانونية، لا نكتفي بتمثيل الموكلين أمام المحاكم فحسب، بل نعمل كشركاء استراتيجيين يشاركون في صياغة العقود وتفادي الثغرات القانونية وإدارة الأزمات التجارية بحرفية عالية.'
                  : 'At Manal Dhahi Legal Group, we partner with clients as proactive strategic advisors — crafting ironclad contracts, navigating governmental clearances, and safeguarding shareholder rights before complications arise.'}
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1C2024] bg-white px-4 py-2 rounded-xl border border-[#E8DFD3]">
                <Shield className="w-4 h-4 text-[#B38F4D]" />
                <span>CR No. {FIRM_DETAILS.crNumber}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1C2024] bg-white px-4 py-2 rounded-xl border border-[#E8DFD3]">
                <Award className="w-4 h-4 text-[#581D2D]" />
                <span>{FIRM_DETAILS.isoCertified}</span>
              </div>
            </div>
          </AOS>

          <AOS direction="left" className="lg:col-span-5">
            <div className="rounded-3xl bg-white border-2 border-[#E8DFD3] p-8 shadow-xl space-y-6">
              <div className="flex items-center gap-4">
                <img
                  src={FOUNDER_INFO.image}
                  alt={FOUNDER_INFO.nameEn}
                  className="w-20 h-20 rounded-2xl object-cover border-2 border-[#B38F4D]"
                  onError={(e) => {
                    e.currentTarget.src = 'https://www.manalfirm.com/web/image/39583-89127b0b/manal-image.webp';
                  }}
                />
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#1C2024]">
                    {language === 'ar' ? FOUNDER_INFO.nameAr : FOUNDER_INFO.nameEn}
                  </h3>
                  <p className="text-xs text-[#8E6F34] font-semibold">{FOUNDER_INFO.titleEn}</p>
                  <p className="text-[11px] text-[#6B7280]">{t('Licensed Court of Cassation Attorney', 'محامٍ مجاز أمام محكمة التمييز')}</p>
                </div>
              </div>

              <blockquote className="text-xs sm:text-sm text-[#4A525D] italic border-s-2 border-[#B38F4D] ps-4 leading-relaxed font-serif">
                "{FOUNDER_INFO.messageEn[3]}"
              </blockquote>

              <button
                onClick={() => onNavigate('founder')}
                className="w-full py-3 rounded-xl bg-[#581D2D] hover:bg-[#77293E] text-white text-xs font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>{t("Read Founder's Statement", 'قراءة كلمة المؤسس كاملة')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </AOS>
        </div>

        {/* Mission & Vision with AOS */}
        <AOS direction="up" staggerChildren={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          <AOSItem>
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E8DFD3] space-y-4 shadow-sm h-full">
              <div className="w-12 h-12 rounded-2xl bg-[#581D2D]/10 text-[#581D2D] flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-2xl text-[#1C2024]">
                {language === 'ar' ? 'رسالتنا' : 'Our Mission'}
              </h3>
              <p className="text-sm text-[#4A525D] font-light leading-relaxed">
                {language === 'ar'
                  ? 'تقديم خدمات قانونية مهنية رفيعة المستوى تتجاوز مجرد فض النزاعات، إلى صياغة استراتيجيات تستشرف المخاطر، وتحمي مقدرات الأعمال، وتصون الحقوق بأعلى معايير الدقة والنزاهة والموثوقية وفقاً للقوانين البحرينية والأنظمة الإقليمية.'
                  : 'To deliver professional legal counsel that goes beyond resolving disputes — safeguarding our clients’ futures, strengthening corporate sustainability, and protecting rights with uncompromising precision, trust, and ethical adherence.'}
              </p>
            </div>
          </AOSItem>

          <AOSItem>
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E8DFD3] space-y-4 shadow-sm h-full">
              <div className="w-12 h-12 rounded-2xl bg-[#1F382E]/10 text-[#1F382E] flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-2xl text-[#1C2024]">
                {language === 'ar' ? 'رؤيتنا' : 'Our Vision'}
              </h3>
              <p className="text-sm text-[#4A525D] font-light leading-relaxed">
                {language === 'ar'
                  ? 'أن نكون الصرح القانوني المرجعي في مملكة البحرين والخليج، المعترف به دولياً للتميز في التقاضي، والاستشارات الهندسية والإنشائية، وتيسير الاستثمارات العابرة للحدود بأعلى معايير الجودة العالمية ISO 9001.'
                  : 'To be the benchmark law firm in the Kingdom of Bahrain and the GCC, internationally recognized for courtroom distinction, engineering and construction mastery, and seamless facilitation of cross-border capital and investments.'}
              </p>
            </div>
          </AOSItem>
        </AOS>

        {/* Core Values with AOS Stagger */}
        <div className="pt-8 space-y-8">
          <AOS direction="up" className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-[#8E6F34]">
              {t('Foundational Pillars', 'المبادئ الحاكمة')}
            </span>
            <h3 className="text-3xl font-serif font-bold text-[#1C2024]">
              {language === 'ar' ? 'قيمنا الجوهرية' : 'Our Core Values'}
            </h3>
          </AOS>

          <AOS direction="up" staggerChildren={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <AOSItem key={idx}>
                  <div className="p-6 rounded-2xl bg-white border border-[#E8DFD3] space-y-3 h-full">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] text-[#581D2D] flex items-center justify-center border border-[#E8DFD3]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif font-bold text-lg text-[#1C2024]">
                      {val.title[language]}
                    </h4>
                    <p className="text-xs text-[#6B7280] leading-relaxed font-light">
                      {val.desc[language]}
                    </p>
                  </div>
                </AOSItem>
              );
            })}
          </AOS>
        </div>

        {/* Firm Milestones with AOS Stagger */}
        <div className="pt-12 space-y-8">
          <AOS direction="up" className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-[#8E6F34]">
              {t('Our Growth Journey', 'مسيرة التطور والنمو')}
            </span>
            <h3 className="text-3xl font-serif font-bold text-[#1C2024]">
              {language === 'ar' ? 'محطات مضيئة في تاريخ المجموعة' : 'Key Firm Milestones & Growth'}
            </h3>
          </AOS>

          <AOS direction="up" staggerChildren={0.12} className="relative border-s-2 border-[#D8CFC3] ms-4 sm:ms-8 ps-6 space-y-8">
            {milestones.map((m, idx) => (
              <AOSItem key={idx}>
                <div className="relative group">
                  <span className="absolute -start-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#581D2D] border-4 border-[#FAF8F5]" />
                  <span className="text-xs font-bold text-[#B38F4D] tracking-wider uppercase block">
                    {m.year}
                  </span>
                  <h4 className="text-lg font-serif font-bold text-[#1C2024] mt-0.5">
                    {m.title[language]}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4A525D] font-light max-w-2xl mt-1 leading-relaxed">
                    {m.desc[language]}
                  </p>
                </div>
              </AOSItem>
            ))}
          </AOS>
        </div>

        {/* Bottom CTA with AOS */}
        <AOS direction="up">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#1C2024] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-start">
              <h3 className="text-2xl font-serif font-bold">
                {language === 'ar' ? 'هل ترغب في مناقشة قضيتك مع خبرائنا؟' : 'Ready to discuss your legal requirements?'}
              </h3>
              <p className="text-xs sm:text-sm text-[#A0AAB5]">
                {language === 'ar'
                  ? 'فريقنا متاح للاستشارات في مكتبنا بالمنطقة الدبلوماسية أو عبر الاتصال المرئي.'
                  : 'Our legal counsel is available in Manama or via confidential video consultation.'}
              </p>
            </div>
            <button
              onClick={() => onOpenConsultationModal()}
              className="py-3.5 px-8 rounded-full bg-[#B38F4D] hover:bg-[#CBB079] text-[#1C2024] font-bold text-xs sm:text-sm transition-colors shrink-0 cursor-pointer"
            >
              {t('Schedule Consultation', 'حجز استشارة')}
            </button>
          </div>
        </AOS>
      </section>
    </div>
  );
};
