import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

// Views
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { FoundersMessageView } from './views/FoundersMessageView';
import { TeamView } from './views/TeamView';
import { ServicesView } from './views/ServicesView';
import { ExpertiseView } from './views/ExpertiseView';
import { BlogView } from './views/BlogView';
import { ContactView } from './views/ContactView';
import { PortalView } from './views/PortalView';

import { Calendar, Phone } from 'lucide-react';
import { FIRM_DETAILS } from './data/firmData';

function AppContent() {
  const { language, t } = useLanguage();
  const [currentView, setCurrentView] = useState<string>('home');
  const [viewParam, setViewParam] = useState<string | undefined>(undefined);
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string | undefined>(undefined);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim();
      if (!hash) {
        setCurrentView('home');
        setViewParam(undefined);
      } else {
        const parts = hash.split('/');
        const view = parts[0];
        const param = parts[1];
        if (['home', 'about', 'founder', 'team', 'services', 'expertise', 'blog', 'contact', 'portal'].includes(view)) {
          setCurrentView(view);
          setViewParam(param);
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (view: string, param?: string) => {
    setCurrentView(view);
    setViewParam(param);
    if (param) {
      window.location.hash = `${view}/${param}`;
    } else {
      window.location.hash = view === 'home' ? '' : view;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultation = (serviceId?: string) => {
    setSelectedServiceForModal(serviceId);
    setConsultationModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1C2024] antialiased selection:bg-[#B38F4D]/20 selection:text-[#581D2D]">
      {/* Top Navigation */}
      <Navbar currentView={currentView} onNavigate={navigateTo} />

      {/* Main View Router */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomeView
            onNavigate={navigateTo}
            onOpenConsultationModal={handleOpenConsultation}
          />
        )}
        {currentView === 'about' && (
          <AboutView
            onNavigate={navigateTo}
            onOpenConsultationModal={() => handleOpenConsultation()}
          />
        )}
        {currentView === 'founder' && (
          <FoundersMessageView
            onNavigate={navigateTo}
            onOpenConsultationModal={() => handleOpenConsultation()}
          />
        )}
        {currentView === 'team' && (
          <TeamView
            onOpenConsultationModal={handleOpenConsultation}
          />
        )}
        {currentView === 'services' && (
          <ServicesView
            initialServiceId={viewParam}
            onOpenConsultationModal={handleOpenConsultation}
          />
        )}
        {currentView === 'expertise' && (
          <ExpertiseView
            initialExpertiseId={viewParam}
            onOpenConsultationModal={handleOpenConsultation}
          />
        )}
        {currentView === 'blog' && (
          <BlogView
            initialSlug={viewParam}
            onOpenConsultationModal={handleOpenConsultation}
          />
        )}
        {currentView === 'contact' && (
          <ContactView
            preselectedServiceId={viewParam}
            onNavigateToPortal={() => navigateTo('portal')}
          />
        )}
        {currentView === 'portal' && (
          <PortalView />
        )}
      </main>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 end-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        <a
          href={`tel:${FIRM_DETAILS.phone}`}
          className="w-12 h-12 rounded-full bg-white text-[#1C2024] border border-[#D8CFC3] shadow-lg flex items-center justify-center hover:bg-[#FAF8F5] hover:scale-105 active:scale-95 transition-all"
          title={t('Call Law Firm', 'الاتصال بالمكتب')}
          aria-label="Call Law Firm"
        >
          <Phone className="w-5 h-5 text-[#B38F4D]" />
        </a>

        <button
          onClick={() => handleOpenConsultation()}
          className="h-12 px-5 rounded-full bg-[#581D2D] text-white shadow-xl flex items-center gap-2 hover:bg-[#77293E] hover:scale-105 active:scale-95 transition-all cursor-pointer font-medium text-xs sm:text-sm border border-[#B38F4D]/30"
          title={t('Book Consultation', 'حجز استشارة')}
        >
          <Calendar className="w-4 h-4 text-[#CBB079]" />
          <span>{t('Book Consultation', 'حجز استشارة')}</span>
        </button>
      </div>

      {/* Quick Consultation Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        preselectedServiceId={selectedServiceForModal}
      />

      {/* Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </LanguageProvider>
  );
}
