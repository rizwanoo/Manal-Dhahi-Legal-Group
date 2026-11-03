import React, { useState, useEffect, useRef } from 'react';
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
  Scale,
  Building2,
  FileCheck,
  Briefcase,
  ArrowRight
} from 'lucide-react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, param?: string) => void;
}

// Single Source of Truth Navigation Configuration
interface NavSubItem {
  id: string;
  param?: string;
  label: { en: string; ar: string };
  desc: { en: string; ar: string };
  icon: React.ElementType;
  badge?: string;
}

interface NavItemConfig {
  id: string;
  label: { en: string; ar: string };
  hasDropdown?: boolean;
  subItems?: NavSubItem[];
}

const NAV_ITEMS: NavItemConfig[] = [
  { id: 'home', label: { en: 'Home', ar: 'الرئيسية' } },
  { id: 'about', label: { en: 'About Us', ar: 'من نحن' } },
  { id: 'founder', label: { en: "Founder's Message", ar: 'كلمة المؤسس' } },
  { id: 'team', label: { en: 'Our Team', ar: 'فريق العمل' } },
  {
    id: 'services',
    label: { en: 'Legal Practices', ar: 'الخدمات والتخصصات' },
    hasDropdown: true,
    subItems: [
      {
        id: 'services',
        param: 'litigation-services',
        label: { en: 'Litigation & Advocacy', ar: 'المحاماة والتقاضي' },
        desc: { en: 'Court of Cassation & Constitutional Court', ar: 'محكمة التمييز والدستورية' },
        icon: Scale,
        badge: '⌘+1'
      },
      {
        id: 'services',
        param: 'private-notary',
        label: { en: 'Authorized Private Notary', ar: 'التوثيق الخاص المعتمد' },
        desc: { en: 'Ministry Licensed Legal Notarization', ar: 'مرخص من وزارة العدل' },
        icon: Shield,
        badge: '⌘+2'
      },
      {
        id: 'services',
        param: 'corporate-commercial',
        label: { en: 'Corporate & Commercial', ar: 'الشركات والتجارية' },
        desc: { en: 'M&A, Contracts & Registration', ar: 'عقود والاندماج والاستحواذ' },
        icon: Briefcase,
        badge: '⌘+3'
      },
      {
        id: 'services',
        param: 'saudi-arabia-desk',
        label: { en: 'Saudi Arabia (KSA) Desk', ar: 'القسم السعودي والتوسع' },
        desc: { en: 'MISA & Vision 2030 Cross-Border', ar: 'تراخيص استثمار وسجل تجاري' },
        icon: Globe,
        badge: '⌘+4'
      },
      {
        id: 'expertise',
        label: { en: 'Industry Expertise', ar: 'مجالات التخصص القطاعي' },
        desc: { en: 'Banking, Real Estate, Energy & Tech', ar: 'البنوك، العقارات، الطاقة' },
        icon: Building2,
        badge: '⌘+5'
      },
      {
        id: 'blog',
        label: { en: 'Legal Insights & Research', ar: 'المقالات والأبحاث القانونية' },
        desc: { en: 'Legislative Analysis & Publications', ar: 'تحليلات تشريعية معتمدة' },
        icon: FileCheck,
        badge: '⌘+6'
      },
      {
        id: 'services',
        param: 'russian-desk',
        label: { en: 'Russian & Global Desk', ar: 'القسم الروسي والدولي' },
        desc: { en: 'FDI, Golden Visas & Private Wealth', ar: 'إقامة ذهبية واستثمارات' },
        icon: Layers,
        badge: '⌘+7'
      }
    ]
  },
  { id: 'contact', label: { en: 'Contact', ar: 'اتصل بنا' } }
];

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const { language, toggleLanguage, t } = useLanguage();
  const { user, isAuthenticated } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Scroll listener for sticky navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click outside listener for desktop dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard Escape listener to close menus
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setServicesDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Body scroll lock when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (id: string, param?: string) => {
    onNavigate(id, param);
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 overflow-visible border-0">
      {/* Navbar Container */}
      <nav
        className={`w-full transition-all duration-300 overflow-visible border-b ${
          isScrolled
            ? 'backdrop-blur-xl bg-[#0C1017]/95 border-white/10 shadow-2xl py-2.5 lg:py-3'
            : 'bg-gradient-to-b from-[#0C1017]/90 via-[#0C1017]/60 to-transparent border-transparent py-3.5 lg:py-4'
        }`}
        aria-label="Main Navigation"
      >
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-x-3 xl:gap-x-6 min-w-0 overflow-visible box-border">
          
          {/* ZONE 1: BRAND / LOGO */}
          <div className="flex items-center shrink-0">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 sm:gap-3 lg:gap-3.5 text-left rtl:text-right cursor-pointer group bg-transparent border-0 p-0 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-lg"
              aria-label="Manal Dhahi Legal Group Home"
            >
              {/* High-Resolution Emblem */}
              <div className="relative h-8 sm:h-9 lg:h-10 xl:h-11 w-auto flex items-center justify-center shrink-0">
                <img
                  src="/logo.png"
                  alt="Manal Dhahi Legal Group Logo"
                  className="h-8 sm:h-9 lg:h-10 xl:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)]"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.endsWith('/logo-emblem.svg')) {
                      target.src = '/logo-emblem.svg';
                    }
                  }}
                />
              </div>

              {/* Brand Typography */}
              <div className="flex flex-col justify-center text-start shrink-0">
                <span className="font-cinzel tracking-[0.08em] xl:tracking-[0.12em] text-sm sm:text-base lg:text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] whitespace-nowrap">
                  {language === 'ar' ? 'مجموعة منال ضاحي' : 'MANAL DHAHI'}
                </span>
                <span className="hidden sm:inline-block text-[8px] sm:text-[9px] lg:text-[10px] tracking-[0.16em] uppercase text-[#D4AF37] font-semibold mt-1 leading-none drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] whitespace-nowrap">
                  {language === 'ar' ? 'محامون ومستشارون قانونيون • المنامة' : 'LEGAL GROUP • BAHRAIN'}
                </span>
              </div>
            </button>
          </div>

          {/* ZONE 2: DESKTOP NAVIGATION LINKS (Visible on xl / 1280px+ to ensure zero overflow) */}
          <div className="hidden xl:flex items-center justify-center gap-x-2 2xl:gap-x-5 min-w-0 flex-1 mx-2">
            {NAV_ITEMS.map((item) => {
              const isActive =
                currentView === item.id ||
                (item.id === 'services' && (currentView === 'expertise' || currentView === 'blog'));

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.id}
                    ref={dropdownRef}
                    className="relative shrink-0 overflow-visible"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setServicesDropdownOpen((prev) => !prev);
                      }}
                      aria-expanded={servicesDropdownOpen}
                      aria-haspopup="true"
                      className={`whitespace-nowrap px-2.5 py-1.5 text-xs xl:text-[13px] 2xl:text-sm font-medium tracking-wide uppercase transition-all flex items-center gap-1.5 cursor-pointer relative border-0 bg-transparent shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded ${
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
                        <span className="absolute bottom-0 inset-x-2 h-[2px] bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]" />
                      )}
                    </button>

                    {/* Desktop Dropdown Card */}
                    {servicesDropdownOpen && (
                      <div
                        role="menu"
                        className="absolute top-full start-0 mt-2 w-88 sm:w-[420px] bg-[#0E121A]/98 backdrop-blur-2xl border border-[#D4AF37]/35 shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-2.5 rounded-2xl text-start z-[100] animate-in fade-in slide-in-from-top-2 duration-200"
                      >
                        <div className="text-[10px] uppercase font-bold tracking-[0.18em] text-[#D4AF37] px-3 py-2 border-b border-white/10 flex items-center justify-between">
                          <span>{t('Practices & Sub-Services', 'التخصصات والخدمات المعتمدة')}</span>
                          <span className="text-[9px] font-mono text-[#A0AAB5] bg-white/5 px-2 py-0.5 rounded">
                            BAHRAIN • GCC
                          </span>
                        </div>

                        <div className="space-y-1 mt-2">
                          {item.subItems?.map((sub) => {
                            const IconComponent = sub.icon;
                            return (
                              <button
                                key={sub.label.en}
                                onClick={() => handleNavClick(sub.id, sub.param)}
                                className="w-full text-start p-2.5 rounded-xl hover:bg-white/10 transition-all flex items-center justify-between text-xs text-[#E8DFD3] hover:text-white cursor-pointer group border-0 bg-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-[#581D2D] flex items-center justify-center transition-colors shrink-0 border border-white/10">
                                    <IconComponent className="w-4 h-4 text-[#D4AF37]" />
                                  </div>
                                  <div>
                                    <div className="font-semibold text-white group-hover:text-[#D4AF37] transition-colors text-xs xl:text-[13px]">
                                      {sub.label[language]}
                                    </div>
                                    <div className="text-[10px] text-[#A0AAB5] mt-0.5">
                                      {sub.desc[language]}
                                    </div>
                                  </div>
                                </div>
                                {sub.badge && (
                                  <span className="text-[10px] font-mono text-[#A0AAB5] group-hover:text-[#D4AF37] opacity-60 bg-white/5 px-1.5 py-0.5 rounded">
                                    {sub.badge}
                                  </span>
                                )}
                              </button>
                            );
                          })}
                        </div>

                        <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between px-2">
                          <button
                            onClick={() => handleNavClick('services')}
                            className="w-full py-2 text-center text-xs font-semibold text-[#D4AF37] hover:underline cursor-pointer uppercase tracking-wider border-0 bg-transparent flex items-center justify-center gap-1"
                          >
                            <span>{t('View All Legal Practices', 'استعراض كافة التخصصات')}</span>
                            <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 text-[#D4AF37]" />
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
                  onClick={() => handleNavClick(item.id)}
                  className={`whitespace-nowrap px-2.5 py-1.5 text-xs xl:text-[13px] 2xl:text-sm font-medium tracking-wide uppercase transition-all cursor-pointer relative border-0 bg-transparent shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded ${
                    isActive
                      ? 'text-[#D4AF37] font-semibold'
                      : 'text-[#E2E8F0] hover:text-[#D4AF37]'
                  }`}
                >
                  <span>{item.label[language]}</span>
                  {isActive && (
                    <span className="absolute bottom-0 inset-x-2 h-[2px] bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* ZONE 3: RIGHT ACTION BUTTONS & LANGUAGE (Visible on Desktop >= 1280px) */}
          <div className="hidden xl:flex items-center gap-x-3 shrink-0">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 text-xs text-white/90 hover:text-[#D4AF37] transition-colors cursor-pointer font-medium uppercase tracking-wider border-0 bg-transparent px-2 py-1.5 rounded shrink-0 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              title={t('Switch Language', 'تغيير اللغة')}
            >
              <Globe className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span>{language === 'en' ? 'العربية' : 'English'}</span>
            </button>

            {/* Client / Counsel Portal */}
            <button
              onClick={() => handleNavClick('portal')}
              className={`inline-flex items-center gap-1.5 text-xs cursor-pointer transition-colors uppercase tracking-wider border border-white/15 px-3 py-1.5 rounded-md shrink-0 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                currentView === 'portal'
                  ? 'bg-[#D4AF37]/15 text-[#D4AF37] font-bold border-[#D4AF37]/50'
                  : 'bg-white/5 hover:bg-white/10 text-white/90 hover:text-[#D4AF37]'
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

            {/* Primary Action CTA: Book Consultation */}
            <button
              onClick={() => handleNavClick('contact')}
              className="py-2 px-4 bg-[#581D2D] hover:bg-[#722339] text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-md flex items-center gap-2 cursor-pointer border border-[#D4AF37]/30 active:scale-95 shrink-0 whitespace-nowrap rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              <Calendar className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span>{t('Book Consultation', 'حجز استشارة')}</span>
            </button>
          </div>

          {/* ZONE 4: COMPACT & TABLET HEADER RIGHT CONTROLS (< 1280px) */}
          <div className="flex xl:hidden items-center gap-x-2 shrink-0">
            <button
              onClick={toggleLanguage}
              className="text-xs font-semibold text-white/90 hover:text-[#D4AF37] flex items-center gap-1 bg-white/5 border border-white/10 px-2 py-1.5 rounded shrink-0 whitespace-nowrap"
              aria-label="Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{language === 'en' ? 'عربي' : 'EN'}</span>
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className="py-1.5 px-3 bg-[#581D2D] hover:bg-[#722339] text-white text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5 cursor-pointer border border-[#D4AF37]/30 shadow-sm shrink-0 whitespace-nowrap rounded"
            >
              <Calendar className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span>{t('Book', 'حجز')}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#D4AF37] transition-colors cursor-pointer bg-white/5 hover:bg-white/10 border border-white/15 rounded-md shrink-0 flex items-center justify-center"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>

        </div>

        {/* MOBILE & TABLET SLIDE-OUT DRAWER PANEL (< 1280px) */}
        {mobileMenuOpen && (
          <div
            className="xl:hidden fixed inset-0 top-[60px] sm:top-[68px] bg-[#0A0D14]/98 backdrop-blur-2xl z-[100] flex flex-col justify-between overflow-y-auto animate-in slide-in-from-top-4 duration-200 border-t border-white/10"
          >
            <div className="p-5 sm:p-6 space-y-5 text-start max-w-lg mx-auto w-full">
              
              {/* Top Drawer Quick Actions */}
              <div className="grid grid-cols-2 gap-3 pb-4 border-b border-white/10">
                <button
                  onClick={() => handleNavClick('portal')}
                  className="py-2.5 px-3 bg-white/10 hover:bg-white/15 text-white text-xs font-semibold flex items-center justify-center gap-2 uppercase tracking-wider rounded-lg border border-white/15"
                >
                  <User className="w-4 h-4 text-[#D4AF37]" />
                  <span>{t('Client Portal', 'بوابة الموكلين')}</span>
                </button>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="py-2.5 px-3 bg-[#581D2D] hover:bg-[#722339] text-white text-xs font-semibold flex items-center justify-center gap-2 uppercase tracking-wider rounded-lg border border-[#D4AF37]/30"
                >
                  <Calendar className="w-4 h-4 text-[#D4AF37]" />
                  <span>{t('Book Consult', 'حجز استشارة')}</span>
                </button>
              </div>

              {/* Navigation Items List */}
              <div className="flex flex-col space-y-1.5">
                {NAV_ITEMS.map((item) => {
                  if (item.hasDropdown) {
                    return (
                      <div key={item.id} className="flex flex-col rounded-lg overflow-hidden border border-white/10 bg-white/5">
                        <button
                          onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                          className="w-full text-start py-3 px-4 text-sm font-semibold tracking-wide uppercase transition-colors flex items-center justify-between text-white bg-transparent border-0"
                        >
                          <span className="flex items-center gap-2">
                            <Scale className="w-4 h-4 text-[#D4AF37]" />
                            <span>{item.label[language]}</span>
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 text-[#D4AF37] transition-transform duration-200 ${
                              mobileSubmenuOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        {/* Collapsible Sub-Services inside Drawer */}
                        {mobileSubmenuOpen && (
                          <div className="px-3 pb-3 pt-1 space-y-1 bg-[#05070B]/80 border-t border-white/10">
                            {item.subItems?.map((sub) => {
                              const SubIcon = sub.icon;
                              return (
                                <button
                                  key={sub.label.en}
                                  onClick={() => handleNavClick(sub.id, sub.param)}
                                  className="w-full text-start py-2.5 px-3 rounded-md text-xs font-medium text-[#E8DFD3] hover:text-white hover:bg-white/10 flex items-center gap-3 border-0 bg-transparent"
                                >
                                  <SubIcon className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                                  <div>
                                    <div className="font-semibold text-white">{sub.label[language]}</div>
                                    <div className="text-[10px] text-[#A0AAB5]">{sub.desc[language]}</div>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  }

                  const isActive = currentView === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`text-start py-3 px-4 rounded-lg text-sm font-medium tracking-wide uppercase transition-colors border-0 ${
                        isActive
                          ? 'bg-[#581D2D] text-white font-bold border-s-4 border-[#D4AF37]'
                          : 'text-[#E8DFD3] hover:bg-white/10 hover:text-white bg-transparent'
                      }`}
                    >
                      {item.label[language]}
                    </button>
                  );
                })}
              </div>

              {/* Drawer Footer Information */}
              <div className="pt-5 border-t border-white/10 space-y-3">
                <a
                  href={`tel:${FIRM_DETAILS.phone}`}
                  className="w-full py-3 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-semibold text-white flex items-center justify-center gap-2 border border-white/10"
                >
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <span dir="ltr">{FIRM_DETAILS.phone}</span>
                </a>

                <div className="flex items-center justify-between text-xs text-[#A0AAB5] px-2 pt-1">
                  <span className="truncate max-w-[200px]">
                    {language === 'en' ? FIRM_DETAILS.addressEn : FIRM_DETAILS.addressAr}
                  </span>
                  <button
                    onClick={toggleLanguage}
                    className="font-bold text-[#D4AF37] underline underline-offset-4 uppercase tracking-wider border-0 bg-transparent shrink-0"
                  >
                    {language === 'en' ? 'العربية' : 'English'}
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
