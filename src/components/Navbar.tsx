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
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    return () => { if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current); };
  }, []);

  const handleDropdownMouseEnter = () => {
    if (hoverTimeoutRef.current) { clearTimeout(hoverTimeoutRef.current); hoverTimeoutRef.current = null; }
    setServicesDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => setServicesDropdownOpen(false), 200);
  };

  const handleDropdownToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hoverTimeoutRef.current) { clearTimeout(hoverTimeoutRef.current); hoverTimeoutRef.current = null; }
    setServicesDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (dropdownRef.current && !dropdownRef.current.contains(target)) setServicesDropdownOpen(false);
      if (mobileMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(target)) {
        if (!(event.target as HTMLElement).closest('.hamburger-btn')) setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

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

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const handleNavClick = (id: string, param?: string) => {
    onNavigate(id, param);
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 overflow-visible border-0">
      <nav
        className={`w-full transition-all duration-300 overflow-visible border-b ${
          isScrolled
            ? 'backdrop-blur-xl bg-[#0C1017]/95 border-white/10 shadow-2xl py-2'
            : 'bg-gradient-to-b from-[#0C1017]/95 via-[#0C1017]/70 to-transparent border-transparent py-3 lg:py-4'
        }`}
        aria-label="Main Navigation"
      >
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 flex justify-between items-center gap-x-4 min-w-0 overflow-visible">
          
          {/* Logo Section */}
          <div className="flex items-center shrink-0">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2 lg:gap-3 cursor-pointer group bg-transparent border-0 p-0 shrink-0 focus:outline-none"
            >
              <div className="relative h-8 lg:h-10 xl:h-11 w-auto flex items-center justify-center shrink-0">
                <img src="/logo.png" alt="Logo" className="h-full w-auto object-contain transition-transform group-hover:scale-105" />
              </div>
              <div className="flex flex-col justify-center text-start shrink-0">
                <span className="font-cinzel text-xs lg:text-base xl:text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-tight whitespace-nowrap">
                  {language === 'ar' ? 'مجموعة منال ضاحي' : 'MANAL DHAHI'}
                </span>
                <span className="hidden md:inline-block text-[8px] lg:text-[10px] xl:text-[11px] text-[#D4AF37] font-semibold mt-0.5 leading-tight uppercase tracking-wider whitespace-nowrap">
                  {language === 'ar' ? 'محامون ومستشارون قانونيون' : 'LEGAL GROUP • BAHRAIN'}
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation Section - Cutoff at 1280px (xl) for safety */}
          <div className="hidden xl:flex items-center gap-x-4 2xl:gap-x-8 shrink-0">
            <div className="flex items-center gap-x-1 2xl:gap-x-4">
              {NAV_ITEMS.map((item) => {
                const isActive = currentView === item.id || (item.id === 'services' && (currentView === 'expertise' || currentView === 'blog'));
                if (item.hasDropdown) {
                  return (
                    <div key={item.id} ref={dropdownRef} className="relative shrink-0" onMouseEnter={handleDropdownMouseEnter} onMouseLeave={handleDropdownMouseLeave}>
                      <button
                        onClick={handleDropdownToggle}
                        className={`whitespace-nowrap px-2 py-1.5 text-xs 2xl:text-sm font-medium uppercase transition-colors flex items-center gap-1 bg-transparent border-0 cursor-pointer ${isActive ? 'text-[#D4AF37]' : 'text-white/90 hover:text-[#D4AF37]'}`}
                      >
                        <span>{item.label[language]}</span>
                        <ChevronDown className={`w-3 h-3 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {servicesDropdownOpen && (
                        <div className="absolute top-full start-0 pt-2 w-[420px] text-start z-[100] animate-in fade-in slide-in-from-top-1 duration-150">
                          <div className="bg-[#0E121A]/98 backdrop-blur-2xl border border-[#D4AF37]/35 shadow-2xl p-2.5 rounded-2xl">
                            <div className="text-[10px] uppercase font-bold text-[#D4AF37] px-3 py-2 border-b border-white/10 flex justify-between">
                              <span>{t('Practices & Services', 'التخصصات والخدمات')}</span>
                              <span className="text-[9px] opacity-60">BAHRAIN • GCC</span>
                            </div>
                            <div className="mt-2 space-y-1">
                              {item.subItems?.map((sub) => (
                                <button key={sub.label.en} onClick={() => handleNavClick(sub.id, sub.param)} className="w-full text-start p-2.5 rounded-xl hover:bg-white/10 transition-all flex items-center justify-between text-xs text-white/80 hover:text-white group bg-transparent border-0 cursor-pointer">
                                  <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10"><sub.icon className="w-4 h-4 text-[#D4AF37]" /></div>
                                    <div>
                                      <div className="font-semibold group-hover:text-[#D4AF37]">{sub.label[language]}</div>
                                      <div className="text-[10px] opacity-60 mt-0.5">{sub.desc[language]}</div>
                                    </div>
                                  </div>
                                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#D4AF37]" />
                                </button>
                              ))}
                            </div>
                            <button onClick={() => handleNavClick('services')} className="w-full mt-2 pt-2 border-t border-white/10 text-center text-xs font-bold text-[#D4AF37] uppercase bg-transparent border-0 cursor-pointer hover:underline">{t('View All Practices →', 'استعراض كافة التخصصات →')}</button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <button key={item.id} onClick={() => handleNavClick(item.id)} className={`whitespace-nowrap px-2 py-1.5 text-xs 2xl:text-sm font-medium uppercase transition-colors bg-transparent border-0 cursor-pointer ${isActive ? 'text-[#D4AF37]' : 'text-white/90 hover:text-[#D4AF37]'}`}>
                    {item.label[language]}
                  </button>
                );
              })}
            </div>

            {/* Desktop Actions */}
            <div className="flex items-center gap-x-2 2xl:gap-x-4 shrink-0 border-s border-white/10 pl-4 rtl:pl-0 rtl:pr-4">
              <button onClick={toggleLanguage} className="text-[11px] font-semibold text-white/90 hover:text-[#D4AF37] bg-transparent border-0 cursor-pointer uppercase px-1">
                {language === 'en' ? 'العربية' : 'English'}
              </button>
              <button onClick={() => handleNavClick('portal')} className={`flex items-center gap-1.5 text-[11px] font-semibold uppercase px-3 py-1.5 rounded-md border transition-all cursor-pointer ${currentView === 'portal' ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-[#D4AF37]' : 'bg-white/5 border-white/15 text-white hover:bg-white/10'}`}>
                <User className="w-3.5 h-3.5" />
                <span>{isAuthenticated ? t('Dashboard', 'اللوحة') : t('Portal', 'البوابة')}</span>
              </button>
              <button onClick={() => handleNavClick('contact')} className="bg-[#581D2D] hover:bg-[#722339] text-white text-[11px] font-bold uppercase px-4 py-2 rounded-md border border-[#D4AF37]/30 shadow-lg active:scale-95 transition-all cursor-pointer">
                {t('Book Now', 'حجز استشارة')}
              </button>
            </div>
          </div>

          {/* Mobile/Tablet Controls - Shown below 1280px */}
          <div className="flex xl:hidden items-center gap-x-2 shrink-0">
            <button onClick={() => handleNavClick('contact')} className="bg-[#581D2D] text-white text-[10px] font-bold uppercase px-3 py-1.5 rounded border border-[#D4AF37]/30 shadow-sm whitespace-nowrap">
              {t('Book', 'حجز')}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="hamburger-btn p-2 text-white hover:text-[#D4AF37] bg-white/5 border border-white/10 rounded-md shrink-0 flex items-center justify-center cursor-pointer">
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Full-Width Dropdown Menu */}
        {mobileMenuOpen && (
          <div ref={mobileMenuRef} className="xl:hidden absolute top-full left-0 right-0 bg-[#0A0D14]/98 backdrop-blur-3xl z-[100] border-t border-white/10 shadow-2xl overflow-y-auto max-h-[85vh] animate-in slide-in-from-top-2 duration-200">
            <div className="p-5 space-y-6">
              <div className="grid grid-cols-2 gap-3 pb-6 border-b border-white/10">
                <button onClick={() => handleNavClick('portal')} className="py-3 px-3 bg-white/10 text-white text-xs font-semibold flex items-center justify-center gap-2 uppercase rounded-lg border border-white/15 cursor-pointer">
                  <User className="w-4 h-4 text-[#D4AF37]" />
                  <span>{t('Portal', 'بوابة الموكلين')}</span>
                </button>
                <button onClick={toggleLanguage} className="py-3 px-3 bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-semibold flex items-center justify-center gap-2 uppercase rounded-lg border border-[#D4AF37]/30 cursor-pointer">
                  <Globe className="w-4 h-4" />
                  <span>{language === 'en' ? 'العربية' : 'English'}</span>
                </button>
              </div>
              <div className="flex flex-col space-y-2">
                {NAV_ITEMS.map((item) => (
                  <div key={item.id} className="flex flex-col">
                    {item.hasDropdown ? (
                      <div className="flex flex-col rounded-xl overflow-hidden border border-white/10 bg-white/5">
                        <button onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)} className="w-full text-start py-4 px-5 text-sm font-semibold uppercase flex justify-between items-center text-white bg-transparent border-0 cursor-pointer">
                          <span className="flex items-center gap-3"><Briefcase className="w-4 h-4 text-[#D4AF37]" />{item.label[language]}</span>
                          <ChevronDown className={`w-4 h-4 text-[#D4AF37] transition-transform ${mobileSubmenuOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {mobileSubmenuOpen && (
                          <div className="px-3 pb-3 pt-1 space-y-1.5 bg-black/40 border-t border-white/10">
                            {item.subItems?.map((sub) => (
                              <button key={sub.label.en} onClick={() => handleNavClick(sub.id, sub.param)} className="w-full text-start py-3 px-4 rounded-lg text-xs font-medium text-white/80 hover:bg-white/10 flex items-center gap-3 bg-transparent border-0 cursor-pointer">
                                <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center shrink-0"><sub.icon className="w-4 h-4 text-[#D4AF37]" /></div>
                                <div><div className="font-semibold text-white">{sub.label[language]}</div><div className="text-[10px] opacity-60 mt-0.5 line-clamp-1">{sub.desc[language]}</div></div>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <button onClick={() => handleNavClick(item.id)} className={`text-start py-4 px-5 rounded-xl text-sm font-semibold uppercase border-0 transition-all cursor-pointer ${currentView === item.id ? 'bg-[#581D2D] text-white border-s-4 border-[#D4AF37]' : 'bg-white/5 text-white/80 hover:bg-white/10'}`}>
                        {item.label[language]}
                      </button>
                    )}
                  </div>
                ))}
              </div>
              <div className="pt-6 border-t border-white/10 space-y-4">
                <a href={`tel:${FIRM_DETAILS.phone}`} className="w-full py-4 bg-[#581D2D] rounded-xl text-xs font-bold text-white flex items-center justify-center gap-2 border border-[#D4AF37]/30 shadow-lg no-underline">
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <span dir="ltr">{FIRM_DETAILS.phoneFormatted}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
