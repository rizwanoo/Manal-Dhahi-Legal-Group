import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { INDUSTRY_EXPERTISE } from '../data/firmData';
import { AOS, AOSItem } from '../components/AOS';
import {
  HardHat,
  Building,
  Compass,
  Wrench,
  Factory,
  Briefcase,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  Calendar,
  ArrowRight
} from 'lucide-react';

interface ExpertiseViewProps {
  initialExpertiseId?: string;
  onOpenConsultationModal: (serviceId?: string) => void;
}

export const ExpertiseView: React.FC<ExpertiseViewProps> = ({
  initialExpertiseId,
  onOpenConsultationModal
}) => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>(
    initialExpertiseId || INDUSTRY_EXPERTISE[0].id
  );

  const activeSector =
    INDUSTRY_EXPERTISE.find((item) => item.id === activeTab) ||
    INDUSTRY_EXPERTISE[0];

  const getIcon = (id: string) => {
    switch (id) {
      case 'construction-engineering':
        return <HardHat className="w-5 h-5" />;
      case 'real-estate':
        return <Building className="w-5 h-5" />;
      case 'architectural-design':
        return <Compass className="w-5 h-5" />;
      case 'contracting-subcontracting':
        return <Wrench className="w-5 h-5" />;
      case 'suppliers-manufacturers':
        return <Factory className="w-5 h-5" />;
      default:
        return <Briefcase className="w-5 h-5" />;
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
              {t('Sector-Specific Legal Mastery', 'تخصص قطاعي دقيق')}
            </span>
          </AOS>
          <AOS direction="up" delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">
              {language === 'ar' ? 'الخبرة القطاعية والهندسية' : 'Industry Expertise & Practice Sectors'}
            </h1>
          </AOS>
          <AOS direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-[#A0AAB5] max-w-3xl font-light">
              {language === 'ar'
                ? 'حماية مشاريع البنية التحتية، عقود الإنشاءات الكبرى، المطورين العقاريين، مكاتب التصميم الهندسي، وسلاسل توريد مواد البناء في البحرين والخليج.'
                : 'Safeguarding infrastructure developments, EPC and main contracting agreements, real estate developers, architectural studios, and material supply chains.'}
            </p>
          </AOS>
        </div>
      </section>

      {/* Main Interactive Sector Explorer with AOS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-12 space-y-10">
        {/* Sector Navigation Tabs */}
        <AOS direction="up" className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none">
          {INDUSTRY_EXPERTISE.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeTab === item.id
                  ? 'bg-[#581D2D] text-white shadow-md'
                  : 'bg-white text-[#4A525D] hover:bg-[#FAF8F5] border border-[#E8DFD3]'
              }`}
            >
              <span>{getIcon(item.id)}</span>
              <span>{item.title[language]}</span>
            </button>
          ))}
        </AOS>

        {/* Selected Sector Deep Dive Panel with AOS */}
        <AOS direction="up" delay={0.1}>
          <div className="bg-white rounded-3xl border border-[#E8DFD3] shadow-md p-6 sm:p-10 space-y-8 animate-in fade-in duration-300">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#FAF8F5]">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-wider font-bold text-[#8E6F34]">
                  {t('Sector Profile', 'الملف القطاعي')}
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1C2024]">
                  {activeSector.title[language]}
                </h2>
              </div>

              <button
                onClick={() => onOpenConsultationModal(activeSector.id)}
                className="py-3 px-6 rounded-xl bg-[#581D2D] hover:bg-[#77293E] text-white text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 self-start lg:self-auto cursor-pointer shadow-sm"
              >
                <Calendar className="w-4 h-4 text-[#CBB079]" />
                <span>{t('Consult on This Industry', 'استشارة قانونية لهذا القطاع')}</span>
              </button>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <h3 className="text-xs uppercase font-bold tracking-wider text-[#8E6F34]">
                {t('Strategic Counsel & Legal Framework', 'المظلة القانونية والاستشارات الاستراتيجية')}
              </h3>
              <p className="text-sm sm:text-base text-[#4A525D] font-light leading-relaxed">
                {activeSector.fullDesc[language]}
              </p>
            </div>

            {/* Dual Columns: Entities Covered vs Key Risks Managed */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              {/* Entities & Clients */}
              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD3] space-y-4">
                <div className="flex items-center gap-2 text-[#581D2D]">
                  <ShieldCheck className="w-5 h-5" />
                  <h4 className="font-serif font-bold text-base text-[#1C2024]">
                    {t('Clients & Stakeholders Represented', 'الجهات والأطراف الممثلة')}
                  </h4>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-[#333940]">
                  {activeSector.sectors[language].map((s, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#B38F4D] shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Risks Mitigated */}
              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD3] space-y-4">
                <div className="flex items-center gap-2 text-[#581D2D]">
                  <AlertTriangle className="w-5 h-5 text-[#8E6F34]" />
                  <h4 className="font-serif font-bold text-base text-[#1C2024]">
                    {t('Primary Legal Risks Mitigated', 'أبرز المخاطر التي نتولى حمايتها')}
                  </h4>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-[#333940]">
                  {activeSector.keyRisksManaged[language].map((r, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8E6F34] shrink-0" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AOS>

        {/* All Sectors Cards Grid with AOS Stagger */}
        <div className="pt-8 space-y-6">
          <AOS direction="up">
            <h3 className="font-serif font-bold text-2xl text-[#1C2024]">
              {t('Browse All Practice Sectors', 'استعراض كافة القطاعات')}
            </h3>
          </AOS>

          <AOS
            direction="up"
            staggerChildren={0.1}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {INDUSTRY_EXPERTISE.map((item) => (
              <AOSItem key={item.id}>
                <div
                  onClick={() => setActiveTab(item.id)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer space-y-3 h-full ${
                    activeTab === item.id
                      ? 'bg-white border-[#581D2D] shadow-md ring-1 ring-[#581D2D]'
                      : 'bg-white border-[#E8DFD3] hover:border-[#B38F4D]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-xl bg-[#581D2D]/10 text-[#581D2D] flex items-center justify-center">
                      {getIcon(item.id)}
                    </div>
                    {activeTab === item.id && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#581D2D] text-white">
                        Active
                      </span>
                    )}
                  </div>
                  <h4 className="font-serif font-bold text-lg text-[#1C2024]">
                    {item.title[language]}
                  </h4>
                  <p className="text-xs text-[#6B7280] line-clamp-2 leading-relaxed">
                    {item.shortDesc[language]}
                  </p>
                </div>
              </AOSItem>
            ))}
          </AOS>
        </div>
      </section>
    </div>
  );
};
