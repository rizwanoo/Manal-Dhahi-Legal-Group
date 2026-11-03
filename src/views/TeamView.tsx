import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TEAM_MEMBERS } from '../data/firmData';
import { TeamMember } from '../types';
import { AOS, AOSItem } from '../components/AOS';
import {
  Users,
  Search,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  Award,
  Mail,
  Calendar,
  X,
  ChevronRight,
  Shield
} from 'lucide-react';

interface TeamViewProps {
  onOpenConsultationModal: (serviceId?: string) => void;
}

export const TeamView: React.FC<TeamViewProps> = ({ onOpenConsultationModal }) => {
  const { language, t } = useLanguage();
  const [selectedDept, setSelectedDept] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const departments = [
    { id: 'all', label: { en: 'All Members (10)', ar: 'كافة الأعضاء (10)' } },
    { id: 'leadership', label: { en: 'Executive Leadership', ar: 'القيادة التنفيذية' } },
    { id: 'legal', label: { en: 'Attorneys & Counsel', ar: 'المحامون والمستشارون' } },
    { id: 'international', label: { en: 'International & Russian Desk', ar: 'القسم الدولي والروسي' } },
    { id: 'operations', label: { en: 'Operations & Practice Care', ar: 'العمليات وعلاقات الموكلين' } }
  ];

  const filteredMembers = TEAM_MEMBERS.filter((m) => {
    const matchesDept = selectedDept === 'all' || m.department === selectedDept;
    const matchesSearch =
      m.name[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.role[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.field[language].toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
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
              {t('Legal Advocates & Specialists', 'محامون ومستشارون')}
            </span>
          </AOS>
          <AOS direction="up" delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">
              {language === 'ar' ? 'فريق العمل • مجموعة منال ضاحي القانونية' : 'Our Team • Manal Dhahi Legal Group'}
            </h1>
          </AOS>
          <AOS direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-[#A0AAB5] max-w-3xl font-light">
              {language === 'ar'
                ? 'يضم فريقنا نخبة من المحامين المجازين أمام محكمة التمييز، ومستشاري الشركات، والوسطاء المعتمدين، وفريق علاقات موكلين يقدم خدمات قانونية استثنائية.'
                : 'Our team brings together seasoned Court of Cassation attorneys, international commercial counsel, certified mediators, and practice managers committed to legal excellence.'}
            </p>
          </AOS>
        </div>
      </section>

      {/* Filter and Search Bar with AOS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-10">
        <AOS direction="up" className="p-4 rounded-2xl bg-white border border-[#E8DFD3] shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Department Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDept(dept.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedDept === dept.id
                    ? 'bg-[#581D2D] text-white shadow-xs'
                    : 'text-[#4A525D] hover:bg-[#FAF8F5]'
                }`}
              >
                {dept.label[language]}
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
              placeholder={t('Search attorney or practice...', 'البحث باسم المحامي أو التخصص...')}
              className="w-full ps-10 pe-4 py-2 rounded-xl border border-[#D8CFC3] text-xs focus:outline-none focus:border-[#B38F4D] bg-[#FAF8F5]/60"
            />
          </div>
        </AOS>
      </section>

      {/* Team Grid with AOS Staggered Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
        <AOS
          direction="up"
          staggerChildren={0.08}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredMembers.map((member) => (
            <AOSItem key={member.id}>
              <div
                onClick={() => setSelectedMember(member)}
                className="group rounded-3xl bg-white border border-[#E8DFD3] hover:border-[#B38F4D] overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer flex flex-col justify-between h-full"
              >
                <div>
                  <div className="relative aspect-4/5 bg-[#ECE5DC] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name[language]}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = `https://www.manalfirm.com/web/image/60229-bc8e601f/${member.id}.webp`;
                      }}
                    />
                    <div className="absolute top-3 end-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-[#1C2024]/80 text-[#CBB079] backdrop-blur-sm border border-white/10">
                        {member.experience[language]}
                      </span>
                    </div>
                    {member.featured && (
                      <div className="absolute bottom-3 start-3">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-[#581D2D] text-white shadow-xs">
                          {t('Leadership', 'قيادي')}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="font-serif font-bold text-lg text-[#1C2024] group-hover:text-[#581D2D] transition-colors leading-tight">
                      {member.name[language]}
                    </h3>
                    <p className="text-xs font-semibold text-[#8E6F34]">
                      {member.role[language]}
                    </p>
                    <p className="text-xs text-[#6B7280] line-clamp-2 font-light">
                      {member.bio[language]}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-[#FAF8F5] flex items-center justify-between text-xs font-semibold text-[#581D2D]">
                  <span>{t('View Full Credentials', 'عرض السيرة الذاتية')}</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </div>
              </div>
            </AOSItem>
          ))}
        </AOS>
      </section>

      {/* Member Details Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#E8DFD3] shadow-2xl p-6 sm:p-8 relative space-y-6">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-5 end-5 p-2 rounded-full bg-[#FAF8F5] hover:bg-[#E8DFD3] text-[#1C2024] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              <img
                src={selectedMember.image}
                alt={selectedMember.name[language]}
                className="w-32 h-36 rounded-2xl object-cover object-top border-2 border-[#B38F4D] shrink-0"
                onError={(e) => {
                  e.currentTarget.src = `https://www.manalfirm.com/web/image/60229-bc8e601f/${selectedMember.id}.webp`;
                }}
              />
              <div className="space-y-1.5 text-center sm:text-start">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#8E6F34]">
                  {selectedMember.department === 'legal'
                    ? t('Legal Practice Department', 'إدارة الشؤون القانونية والمحاماة')
                    : selectedMember.department === 'leadership'
                    ? t('Senior Executive Board', 'الإدارة التنفيذية العليا')
                    : selectedMember.department === 'international'
                    ? t('International Desks', 'القسم الدولي ورابطة الدول المستقلة')
                    : t('Operational Management', 'إدارة العمليات وشؤون الموكلين')}
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#1C2024]">
                  {selectedMember.name[language]}
                </h3>
                <p className="text-sm font-semibold text-[#581D2D]">
                  {selectedMember.role[language]}
                </p>
                <div className="flex flex-wrap gap-2 pt-2 justify-center sm:justify-start">
                  <span className="px-2.5 py-0.5 rounded-md text-xs bg-[#FAF8F5] border border-[#E8DFD3] text-[#333940]">
                    {selectedMember.experience[language]}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md text-xs bg-[#FAF8F5] border border-[#E8DFD3] text-[#333940]">
                    {selectedMember.education[language]}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-2 border-t border-[#E8DFD3]">
              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-[#8E6F34] mb-1">
                  {t('Specialized Fields of Practice', 'مجالات التخصص الدقيق')}
                </h4>
                <p className="text-sm text-[#333940] font-light">
                  {selectedMember.field[language]}
                </p>
              </div>

              {selectedMember.licenses && (
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-[#8E6F34] mb-1">
                    {t('Official Licenses & Certifications', 'التراخيص والشهادات القضائية')}
                  </h4>
                  <p className="text-sm text-[#333940] font-light">
                    {selectedMember.licenses[language]}
                  </p>
                </div>
              )}

              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-[#8E6F34] mb-1">
                  {t('Professional Biography & Practice Overview', 'السيرة المهنية ومسار العمل')}
                </h4>
                <p className="text-sm text-[#4A525D] font-light leading-relaxed">
                  {selectedMember.bio[language]}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E8DFD3] flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  setSelectedMember(null);
                  onOpenConsultationModal(selectedMember.field[language]);
                }}
                className="flex-1 py-3 px-6 rounded-xl bg-[#581D2D] hover:bg-[#77293E] text-white font-medium text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <Calendar className="w-4 h-4 text-[#CBB079]" />
                <span>{t('Schedule Consultation with Counsel', 'طلب استشارة مع المستشار')}</span>
              </button>
              <button
                onClick={() => setSelectedMember(null)}
                className="py-3 px-6 rounded-xl border border-[#D8CFC3] text-[#1C2024] hover:bg-[#FAF8F5] text-xs sm:text-sm font-medium transition-colors cursor-pointer"
              >
                {t('Close Profile', 'إغلاق')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
