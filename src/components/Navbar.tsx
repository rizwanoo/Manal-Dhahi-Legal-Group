import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { FIRM_DETAILS } from '../data/firmData';
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Globe,
  User,
  Shield,
  ChevronDown,
  Calendar,
  Layers,
  Scale
} from 'lucide-react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, param?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const { language, toggleLanguage, t } = useLanguage();
  const { user, isAuthenticated } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: { en: 'Home', ar: 'الرئيسية' } },
    { id: 'about', label: { en: 'About Us', ar: 'من نحن' } },
    { id: 'founder', label: { en: "Founder's Message", ar: 'كلمة المؤسس' } },
    { id: 'team', label: { en: 'Our Team', ar: 'فريق العمل' } },
    {
      id: 'services',
      label: { en: 'Legal Services', ar: 'الخدمات القانونية' },
      hasDropdown: true
    },
    { id: 'expertise', label: { en: 'Expertise', ar: 'مجالات التخصص' } },
    { id: 'blog', label: { en: 'Insights', ar: 'المقالات والأبحاث' } },
    { id: 'contact', label: { en: 'Contact', ar: 'اتصل بنا' } }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 border-0 border-transparent">
      {/* 100% Borderless Luxury Navbar: Transparent over Hero Header, Smooth Frosted Blur on Scroll */}
      <nav
        className={`w-full transition-all duration-300 border-0 border-transparent ${
          isScrolled
            ? 'backdrop-blur-md bg-[#0C1017]/85 py-3 shadow-md'
            : 'bg-transparent py-4 sm:py-5 shadow-none'
        }`}
      >
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between gap-4 xl:gap-6 2xl:gap-8 relative z-10">
          {/* Left: Official Brand Logo & Name (Strictly Aligned Together, No Box Constraints, Seamless Float) */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3.5 sm:gap-4 text-left rtl:text-right cursor-pointer group bg-transparent border-0 p-0 shrink-0"
            aria-label="Manal Dhahi Legal Group Home"
          >
            {/* Crisp High-Resolution Vector Emblem Floating Seamlessly */}
            <div className="relative h-13 sm:h-14 xl:h-15 w-auto flex items-center justify-center bg-transparent shrink-0">
              <img
                src="/logo-emblem.svg"
                alt="Manal Dhahi Legal Group Emblem"
                className="h-11 sm:h-13 xl:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_8px_rgba(212,175,55,0.45)] drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)] bg-transparent shrink-0"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.endsWith('/logo.png')) {
                    target.src = '/logo.png';
                  }
                }}
              />
            </div>
            {/* Stately Brand Typography */}
            <div className="flex flex-col justify-center text-start shrink-0">
              <span className="font-cinzel tracking-[0.14em] text-base sm:text-lg xl:text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)] whitespace-nowrap">
                {language === 'ar' ? 'مجموعة منال ضاحي' : 'MANAL DHAHI'}
              </span>
              <span className="text-[9px] sm:text-[10px] xl:text-[11px] tracking-[0.22em] uppercase text-[#D4AF37] font-semibold mt-1 leading-none drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)] whitespace-nowrap">
                {language === 'ar' ? 'محامون ومستشارون قانونيون • المنامة' : 'LEGAL GROUP • BAHRAIN'}
              </span>
            </div>
          </button>

          {/* Center: Navigation Links Distributed on Single Horizontal Line (No Overlapping, Balanced Gaps) */}
          <div className="hidden xl:flex items-center justify-center gap-1 2xl:gap-2.5 flex-1 mx-2 2xl:mx-4">
            {navItems.map((item) => {
              const isActive = currentView === item.id;
              if (item.hasDropdown) {
                return (
                  <div
                    key={item.id}
                    className="relative shrink-0"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      onClick={() => onNavigate('services')}
                      className={`whitespace-nowrap px-2.5 2xl:px-3 py-2 text-xs 2xl:text-[13px] font-medium tracking-[0.05em] 2xl:tracking-[0.07em] uppercase transition-colors flex items-center gap-1.5 cursor-pointer relative border-0 bg-transparent shrink-0 ${
                        isActive
                          ? 'text-[#D4AF37] font-semibold'
                          : 'text-[#E2E8F0] hover:text-[#D4AF37]'
                      }`}
                    >
                      <span>{item.label[language]}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          servicesDropdownOpen ? 'rotate-180 text-[#D4AF37]' : 'text-[#A0AAB5]'
                        }`}
                      />
                      {isActive && (
                        <span className="absolute bottom-0 inset-x-2 h-[2px] bg-[#D4AF37]" />
                      )}
                    </button>

                    {/* Modern Sharp Dropdown Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full start-0 mt-1 w-84 bg-[#12161E]/98 backdrop-blur-2xl border border-white/20 shadow-2xl p-3 animate-in fade-in duration-150 text-start z-50">
                        <div className="text-[10px] uppercase font-bold tracking-[0.16em] text-[#D4AF37] px-3 py-1.5 border-b border-white/10">
                          {t('Key Legal Practices', 'الممارسات القانونية الرئيسية')}
                        </div>
                        <div className="space-y-1 mt-1.5">
                          <button
                            onClick={() => {
                              onNavigate('services', 'litigation-services');
                              setServicesDropdownOpen(false);
                            }}
                            className="w-full text-start p-2.5 hover:bg-white/10 transition-colors flex items-center gap-3 text-xs text-[#E8DFD3] hover:text-white cursor-pointer group border-0 bg-transparent"
                          >
                            <Scale className="w-4 h-4 text-[#D4AF37] shrink-0" />
                            <div>
                              <div className="font-semibold text-white group-hover:text-[#D4AF37] transition-colors">{t('Litigation & Court Advocacy', 'المحاماة والتقاضي')}</div>
                              <div className="text-[11px] text-[#A0AAB5]">{t('Court of Cassation Certified', 'محكمة التمييز والدستورية')}</div>
                            </div>
                          </button>
                          <button
                            onClick={() => {
                              onNavigate('services', 'private-notary');
                              setServicesDropdownOpen(false);
                            }}
                            className="w-full text-start p-2.5 hover:bg-white/10 transition-colors flex items-center gap-3 text-xs text-[#E8DFD3] hover:text-white cursor-pointer group border-0 bg-transparent"
                          >
                            <Shield className="w-4 h-4 text-[#D4AF37] shrink-0" />
                            <div>
                              <div className="font-semibold text-white group-hover:text-[#D4AF37] transition-colors">{t('Authorized Private Notary', 'التوثيق الخاص المعتمد')}</div>
                              <div className="text-[11px] text-[#A0AAB5]">{t('Ministry of Justice Licensed', 'مرخص من وزارة العدل')}</div>
                            </div>
                          </button>
                          <button
                            onClick={() => {
                              onNavigate('services', 'saudi-arabia-desk');
                              setServicesDropdownOpen(false);
                            }}
                            className="w-full text-start p-2.5 hover:bg-white/10 transition-colors flex items-center gap-3 text-xs text-[#E8DFD3] hover:text-white cursor-pointer group border-0 bg-transparent"
                          >
                            <Globe className="w-4 h-4 text-[#D4AF37] shrink-0" />
                            <div>
                              <div className="font-semibold text-white group-hover:text-[#D4AF37] transition-colors">{t('Saudi Arabia (KSA) Desk', 'القسم السعودي والتوسع')}</div>
                              <div className="text-[11px] text-[#A0AAB5]">{t('Vision 2030 & Cross-Border', 'رؤية 2030 وتراخيص MISA')}</div>
                            </div>
                          </button>
                          <button
                            onClick={() => {
                              onNavigate('services', 'russian-desk');
                              setServicesDropdownOpen(false);
                            }}
                            className="w-full text-start p-2.5 hover:bg-white/10 transition-colors flex items-center gap-3 text-xs text-[#E8DFD3] hover:text-white cursor-pointer group border-0 bg-transparent"
                          >
                            <Layers className="w-4 h-4 text-[#D4AF37] shrink-0" />
                            <div>
                              <div className="font-semibold text-white group-hover:text-[#D4AF37] transition-colors">{t('Russian & International Desk', 'القسم الروسي والدولي')}</div>
                              <div className="text-[11px] text-[#A0AAB5]">{t('Investor Advisory & GCC Inbound', 'إقامة ذهبية واستثمارات')}</div>
                            </div>
                          </button>
                        </div>
                        <div className="mt-2 pt-2 border-t border-white/10">
                          <button
                            onClick={() => {
                              onNavigate('services');
                              setServicesDropdownOpen(false);
                            }}
                            className="w-full py-1.5 text-center text-xs font-semibold text-[#D4AF37] hover:underline cursor-pointer uppercase tracking-wider border-0 bg-transparent"
                          >
                            {t('View All 12 Legal Services →', 'استعراض كافة الخدمات الـ 12 →')}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`whitespace-nowrap px-2.5 2xl:px-3 py-2 text-xs 2xl:text-[13px] font-medium tracking-[0.05em] 2xl:tracking-[0.07em] uppercase transition-colors cursor-pointer relative border-0 bg-transparent shrink-0 ${
                    isActive
                      ? 'text-[#D4AF37] font-semibold'
                      : 'text-[#E2E8F0] hover:text-[#D4AF37]'
                  }`}
                >
                  <span>{item.label[language]}</span>
                  {isActive && (
                    <span className="absolute bottom-0 inset-x-2 h-[2px] bg-[#D4AF37]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Action Tools: Pure Borderless Editorial Styling (Strictly Aligned Right, Never Overlapping) */}
          <div className="hidden xl:flex items-center gap-4 2xl:gap-6 shrink-0">
            {/* Language Switcher - Pure Text & Icon, No Box, No Border */}
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 text-xs text-white/90 hover:text-[#D4AF37] transition-colors cursor-pointer font-medium uppercase tracking-widest border-0 bg-transparent p-0 shrink-0 whitespace-nowrap"
              title={t('Switch Language', 'تغيير اللغة')}
            >
              <Globe className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span>{language === 'en' ? 'العربية' : 'English'}</span>
            </button>

            {/* Client Portal Button - Pure Text & Icon, No Box, No Border */}
            <button
              onClick={() => onNavigate('portal')}
              className={`inline-flex items-center gap-1.5 text-xs cursor-pointer transition-colors uppercase tracking-widest border-0 bg-transparent p-0 shrink-0 whitespace-nowrap ${
                currentView === 'portal'
                  ? 'text-[#D4AF37] font-bold'
                  : 'text-white/90 hover:text-[#D4AF37]'
              }`}
            >
              <User className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span>
                {isAuthenticated
                  ? user?.role === 'counsel'
                    ? t('Counsel', 'المستشار')
                    : t('Dashboard', 'لوحة التحكم')
                  : t('Client Portal', 'بوابة الموكلين')}
              </span>
            </button>

            {/* Book Consultation Button - Original Luxury Burgundy Styling with Ample Space */}
            <button
              onClick={() => onNavigate('contact')}
              className="py-2.5 px-5 bg-[#581D2D] hover:bg-[#722339] text-white font-medium text-xs sm:text-[13px] tracking-widest uppercase transition-all shadow-md flex items-center gap-2 cursor-pointer border-0 active:translate-y-0.5 shrink-0 whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span>{t('Book Consultation', 'حجز استشارة')}</span>
            </button>
          </div>

          {/* Tablet and Mobile Menu Trigger (< 1280px) to prevent cramped links */}
          <div className="flex xl:hidden items-center gap-3 shrink-0">
            <button
              onClick={toggleLanguage}
              className="text-xs font-semibold text-white/90 hover:text-[#D4AF37] flex items-center gap-1 bg-transparent border-0 p-1 shrink-0"
            >
              <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{language === 'en' ? 'عربي' : 'EN'}</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 text-white hover:text-[#D4AF37] transition-colors cursor-pointer bg-transparent border-0 shrink-0"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-0 bg-[#0E121A]/98 backdrop-blur-2xl px-6 py-8 space-y-5 animate-in slide-in-from-top-4 duration-200 shadow-2xl relative z-50 text-start">
            {/* Quick Actions in Mobile */}
            <div className="flex items-center gap-3 pb-4 border-b border-white/10">
              <button
                onClick={() => {
                  onNavigate('portal');
                  setMobileMenuOpen(false);
                }}
                className="flex-1 py-2.5 px-3 bg-white/10 text-white text-xs font-medium flex items-center justify-center gap-2 uppercase tracking-wider border-0"
              >
                <User className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{t('Client Portal', 'بوابة الموكلين')}</span>
              </button>
              <button
                onClick={() => {
                  onNavigate('contact');
                  setMobileMenuOpen(false);
                }}
                className="flex-1 py-2.5 px-3 bg-[#581D2D] text-white text-xs font-semibold flex items-center justify-center gap-2 uppercase tracking-wider border-0"
              >
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{t('Book Consultation', 'حجز استشارة')}</span>
              </button>
            </div>

            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-start py-3 px-3 text-sm font-medium tracking-wide uppercase transition-colors border-0 ${
                    currentView === item.id
                      ? 'bg-[#581D2D] text-white font-bold border-s-2 border-[#D4AF37]'
                      : 'text-[#E8DFD3] hover:bg-white/10 hover:text-white bg-transparent'
                  }`}
                >
                  {item.label[language]}
                </button>
              ))}
              <button
                onClick={() => {
                  onNavigate('portal');
                  setMobileMenuOpen(false);
                }}
                className={`text-start py-3 px-3 text-sm font-medium tracking-wide uppercase transition-colors border-0 ${
                  currentView === 'portal'
                    ? 'bg-[#D4AF37] text-[#14181F] font-bold'
                    : 'text-[#E8DFD3] hover:bg-white/10 bg-transparent'
                }`}
              >
                {t('Client & Counsel Portal', 'بوابة الموكلين والمستشارين')}
              </button>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  onNavigate('contact');
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 bg-[#581D2D] text-white font-semibold text-sm text-center flex items-center justify-center gap-2 uppercase tracking-wider border-0"
              >
                <Calendar className="w-4 h-4 text-[#D4AF37]" />
                <span>{t('Book Consultation', 'حجز استشارة')}</span>
              </button>

              <div className="flex items-center justify-between text-xs text-[#A0AAB5] pt-2">
                <a href={`tel:${FIRM_DETAILS.phone}`} className="flex items-center gap-1.5 hover:text-[#D4AF37]">
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span dir="ltr">{FIRM_DETAILS.phone}</span>
                </a>
                <button
                  onClick={toggleLanguage}
                  className="font-bold text-[#D4AF37] underline underline-offset-2 uppercase tracking-wider border-0 bg-transparent"
                >
                  {language === 'en' ? 'التحويل إلى العربية' : 'Switch to English'}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
