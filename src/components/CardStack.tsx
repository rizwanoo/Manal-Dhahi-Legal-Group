import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, ArrowLeft, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { LegalService } from '../types';

interface CardStackProps {
  services: LegalService[];
  onSelectService: (service: LegalService) => void;
  onBookConsultation: (service: LegalService) => void;
}

export const CardStack: React.FC<CardStackProps> = ({
  services,
  onSelectService,
  onBookConsultation
}) => {
  const { language, t, isRTL } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const activeService = services[activeIndex];

  return (
    <div className="relative w-full max-w-6xl mx-auto py-8">
      {/* Controls and Header indicator */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#B38F4D]/10 text-[#8E6F34] border border-[#B38F4D]/30 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            {t('Interactive Service Showcase', 'استعراض الخدمات التفاعلي')}
          </span>
          <p className="text-sm text-[#6B7280]">
            {t('Showing practice area', 'عرض المجال القضائي')}{' '}
            <span className="font-semibold text-[#1C2024]">{activeIndex + 1}</span>{' '}
            {t('of', 'من أصل')}{' '}
            <span className="font-semibold text-[#1C2024]">{services.length}</span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={isRTL ? handleNext : handlePrev}
            aria-label="Previous card"
            className="w-11 h-11 rounded-full border border-[#D8CFC3] bg-white text-[#1C2024] hover:bg-[#FAF8F5] hover:border-[#B38F4D] transition-all flex items-center justify-center shadow-sm cursor-pointer hover:scale-105 active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-1.5 px-3">
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? 'w-8 bg-[#581D2D]'
                    : 'w-2 bg-[#D8CFC3] hover:bg-[#B38F4D]'
                }`}
              />
            ))}
          </div>
          <button
            onClick={isRTL ? handlePrev : handleNext}
            aria-label="Next card"
            className="w-11 h-11 rounded-full border border-[#D8CFC3] bg-white text-[#1C2024] hover:bg-[#FAF8F5] hover:border-[#B38F4D] transition-all flex items-center justify-center shadow-sm cursor-pointer hover:scale-105 active:scale-95"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Stacked Cards Container */}
      <div className="relative min-h-[460px] sm:min-h-[420px] flex items-center justify-center">
        <AnimatePresence mode="popLayout">
          {services.map((service, index) => {
            // Calculate relative offset from activeIndex
            const position = (index - activeIndex + services.length) % services.length;
            
            // Only render top 3 cards for clean stacking performance
            if (position > 2) return null;

            const scale = 1 - position * 0.04;
            const translateY = position * 18;
            const zIndex = 30 - position;
            const opacity = position === 0 ? 1 : 0.82 - position * 0.25;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{
                  opacity,
                  y: translateY,
                  scale,
                  zIndex,
                }}
                exit={{ opacity: 0, y: -40, scale: 0.9, transition: { duration: 0.3 } }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 24,
                }}
                onClick={() => position !== 0 && setActiveIndex(index)}
                className={`absolute inset-x-0 w-full rounded-2xl md:rounded-3xl border border-[#E8DFD3] p-6 sm:p-8 md:p-10 transition-shadow ${
                  position === 0
                    ? 'bg-white shadow-[0_24px_50px_-15px_rgba(40,25,20,0.12)] cursor-default'
                    : 'bg-[#FAF8F5]/90 shadow-sm cursor-pointer hover:bg-white'
                }`}
                style={{
                  top: 0,
                  transformOrigin: 'top center',
                }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                  {/* Left content */}
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      {service.badge && (
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#581D2D]/10 text-[#581D2D] border border-[#581D2D]/20">
                          {service.badge[language]}
                        </span>
                      )}
                      <span className="text-xs uppercase tracking-wider text-[#B38F4D] font-bold">
                        {service.category === 'regional'
                          ? t('Regional & International', 'إقليمي ودولي')
                          : service.category === 'dispute'
                          ? t('Litigation & ADR', 'التقاضي والنزاعات')
                          : service.category === 'corporate'
                          ? t('Corporate & Enterprise', 'الشركات والاستثمار')
                          : t('Core Legal Practice', 'الممارسات الأساسية')}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#1C2024] leading-tight">
                      {service.title[language]}
                    </h3>

                    <p className="text-sm sm:text-base text-[#4A525D] leading-relaxed max-w-2xl font-light">
                      {service.shortDesc[language]}
                    </p>

                    {/* Highlights bullet points */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                      {service.highlights[language].slice(0, 4).map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#333940]">
                          <CheckCircle2 className="w-4 h-4 text-[#B38F4D] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Action panel */}
                  <div className="lg:w-72 shrink-0 flex flex-col justify-center gap-3 pt-4 lg:pt-0 lg:border-s lg:border-[#E8DFD3] lg:ps-8">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onBookConsultation(service);
                      }}
                      className="w-full py-3.5 px-6 rounded-xl bg-[#581D2D] hover:bg-[#77293E] text-white font-medium text-sm transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <span>{t('Schedule Consultation', 'حجز استشارة قانونية')}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectService(service);
                      }}
                      className="w-full py-3 px-6 rounded-xl border border-[#D8CFC3] hover:border-[#B38F4D] text-[#1C2024] font-medium text-sm transition-all duration-200 bg-white hover:bg-[#FAF8F5] flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>{t('Explore Full Practice', 'تفاصيل الخدمة')}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};
