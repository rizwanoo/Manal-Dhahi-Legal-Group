import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { LEGAL_SERVICES } from '../data/firmData';
import { LegalService } from '../types';
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
  Calendar,
  Layers,
  Sparkles,
  Search
} from 'lucide-react';

interface ServicesViewProps {
  initialServiceId?: string;
  onOpenConsultationModal: (serviceId?: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  initialServiceId,
  onOpenConsultationModal
}) => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(
    initialServiceId || null
  );

  const categories = [
    { id: 'all', label: { en: 'All 12 Services', ar: 'كافة الخدمات (12)' } },
    { id: 'core', label: { en: 'Core Practice', ar: 'الممارسات الأساسية' } },
    { id: 'dispute', label: { en: 'Litigation & ADR', ar: 'التقاضي والنزاعات' } },
    { id: 'corporate', label: { en: 'Corporate & IP', ar: 'الشركات والملكية الفكرية' } },
    { id: 'regional', label: { en: 'Regional & International', ar: 'القسم السعودي والدولي' } }
  ];

  const filteredServices = LEGAL_SERVICES.filter((svc) => {
    const matchesCategory =
      selectedCategory === 'all' || svc.category === selectedCategory;
    const matchesSearch =
      svc.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      svc.shortDesc[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      svc.highlights[language].some((h) => h.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

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
              {t('Comprehensive Legal Solutions', 'حلول قانونية متكاملة')}
            </span>
          </AOS>
          <AOS direction="up" delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">
              {language === 'ar' ? 'الخدمات القانونية والممارسات المعتمدة' : 'Legal Services & Specialized Practices'}
            </h1>
          </AOS>
          <AOS direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-[#A0AAB5] max-w-3xl font-light">
              {language === 'ar'
                ? 'نقدم منظومة قانونية متكاملة تشمل التقاضي أمام محكمة التمييز، التوثيق الخاص المرخص من وزارة العدل، الوساطة، التحكيم، وتأسيس الأعمال في البحرين والتوسع الإقليمي.'
                : 'End-to-end legal capabilities encompassing high-court courtroom litigation, licensed private notarization, mediation, international arbitration, and corporate structuring in Bahrain and the GCC.'}
            </p>
          </AOS>
        </div>
      </section>

      {/* Filter and Search Bar with AOS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-10">
        <AOS direction="up" className="p-4 rounded-2xl bg-white border border-[#E8DFD3] shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#581D2D] text-white shadow-xs'
                    : 'text-[#4A525D] hover:bg-[#FAF8F5]'
                }`}
              >
                {cat.label[language]}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative md:w-72">
            <Search className="w-4 h-4 text-[#8E6F34] absolute start-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('Search practice or keywords...', 'البحث في الخدمات أو الكلمات...')}
              className="w-full ps-10 pe-4 py-2 rounded-xl border border-[#D8CFC3] text-xs focus:outline-none focus:border-[#B38F4D] bg-[#FAF8F5]/60"
            />
          </div>
        </AOS>
      </section>

      {/* Services List / Cards with AOS Stagger */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-6">
        <AOS direction="up" staggerChildren={0.08} className="space-y-6">
          {filteredServices.map((service) => {
            const isExpanded = expandedServiceId === service.id;

            return (
              <AOSItem key={service.id}>
                <div
                  id={service.id}
                  className={`rounded-3xl border transition-all duration-300 bg-white overflow-hidden ${
                    isExpanded
                      ? 'border-[#B38F4D] shadow-xl ring-1 ring-[#B38F4D]/20'
                      : 'border-[#E8DFD3] hover:border-[#D8CFC3] shadow-xs'
                  }`}
                >
                  {/* Header clickable summary */}
                  <div
                    onClick={() => setExpandedServiceId(isExpanded ? null : service.id)}
                    className="p-6 sm:p-8 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-[#FAF8F5]/50 transition-colors"
                  >
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-[#581D2D]/10 text-[#581D2D] flex items-center justify-center shrink-0 mt-1">
                        {service.id === 'litigation-services' ? (
                          <Gavel className="w-6 h-6" />
                        ) : service.id === 'private-notary' ? (
                          <FileCheck className="w-6 h-6" />
                        ) : service.id === 'company-formation' ? (
                          <Building2 className="w-6 h-6" />
                        ) : service.id === 'saudi-arabia-desk' || service.id === 'russian-desk' ? (
                          <Globe className="w-6 h-6" />
                        ) : (
                          <Scale className="w-6 h-6" />
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <div className="flex flex-wrap items-center gap-2.5">
                          {service.badge && (
                            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#B38F4D]/15 text-[#8E6F34] border border-[#B38F4D]/30">
                              {service.badge[language]}
                            </span>
                          )}
                          <span className="text-[11px] uppercase tracking-wider text-[#6B7280]">
                            {service.category === 'regional'
                              ? t('Regional & International', 'إقليمي ودولي')
                              : service.category === 'dispute'
                              ? t('Litigation & ADR', 'التقاضي وفض النزاعات')
                              : service.category === 'corporate'
                              ? t('Corporate Law', 'قانون الشركات')
                              : t('Core Practice', 'ممارسة أساسية')}
                          </span>
                        </div>

                        <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C2024]">
                          {service.title[language]}
                        </h2>

                        <p className="text-xs sm:text-sm text-[#4A525D] font-light max-w-3xl leading-relaxed">
                          {service.shortDesc[language]}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenConsultationModal(service.id);
                        }}
                        className="py-2.5 px-5 rounded-xl bg-[#581D2D] hover:bg-[#77293E] text-white font-medium text-xs transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer"
                      >
                        <Calendar className="w-3.5 h-3.5 text-[#CBB079]" />
                        <span>{t('Consult on This Practice', 'طلب استشارة')}</span>
                      </button>

                      <div className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-[#E8DFD3] flex items-center justify-center text-[#1C2024]">
                        <ChevronRight
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isExpanded ? 'rotate-90 rtl:-rotate-90' : ''
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Expanded Deep Details */}
                  {isExpanded && (
                    <div className="p-6 sm:p-8 pt-0 border-t border-[#FAF8F5] bg-[#FAF8F5]/30 space-y-8 animate-in fade-in duration-300">
                      <div className="space-y-2">
                        <h3 className="text-xs uppercase font-bold tracking-wider text-[#8E6F34]">
                          {t('Practice Scope & Comprehensive Counsel', 'نطاق الممارسة والتغطية القانونية')}
                        </h3>
                        <p className="text-sm text-[#333940] leading-relaxed font-light">
                          {service.fullDesc[language]}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-xs uppercase font-bold tracking-wider text-[#8E6F34]">
                          {t('Key Capabilities & Deliverables', 'أبرز الإنجازات والحلول')}
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.highlights[language].map((h, hIdx) => (
                            <div
                              key={hIdx}
                              className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#E8DFD3] text-xs text-[#1C2024]"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#B38F4D] shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-xs uppercase font-bold tracking-wider text-[#8E6F34]">
                          {t('Structured Execution Methodology', 'منهجية العمل خطوة بخطوة')}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {service.process.map((step) => (
                            <div
                              key={step.step}
                              className="p-4 rounded-2xl bg-white border border-[#E8DFD3] space-y-2"
                            >
                              <div className="w-7 h-7 rounded-full bg-[#581D2D] text-white text-xs font-bold flex items-center justify-center font-mono">
                                0{step.step}
                              </div>
                              <h4 className="font-serif font-bold text-sm text-[#1C2024]">
                                {step.title[language]}
                              </h4>
                              <p className="text-xs text-[#6B7280] font-light leading-relaxed">
                                {step.desc[language]}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E8DFD3]">
                        <span className="text-xs text-[#6B7280]">
                          {t(
                            'Licensed under Kingdom of Bahrain legislation and professional codes.',
                            'مرخص ومعتمد بموجب قوانين وتشريعات مملكة البحرين.'
                          )}
                        </span>
                        <button
                          onClick={() => onOpenConsultationModal(service.id)}
                          className="py-2.5 px-6 rounded-xl bg-[#581D2D] hover:bg-[#77293E] text-white text-xs font-semibold transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
                        >
                          <Calendar className="w-3.5 h-3.5 text-[#CBB079]" />
                          <span>{t('Schedule Consultation for this Practice', 'حجز استشارة لهذا التخصص')}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </AOSItem>
            );
          })}
        </AOS>
      </section>
    </div>
  );
};
