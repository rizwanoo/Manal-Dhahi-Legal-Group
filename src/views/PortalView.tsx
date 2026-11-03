import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { LEGAL_SERVICES, FIRM_DETAILS } from '../data/firmData';
import { ConsultationInquiry } from '../types';
import {
  User,
  Shield,
  Lock,
  LogOut,
  Mail,
  Phone,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  AlertCircle,
  FileText,
  Download,
  Plus,
  Send,
  Eye,
  Edit3,
  Calendar,
  Layers,
  Sparkles
} from 'lucide-react';

export const PortalView: React.FC = () => {
  const { language, t } = useLanguage();
  const {
    user,
    isAuthenticated,
    login,
    logout,
    inquiries,
    submitInquiry,
    updateInquiryStatus
  } = useAuth();

  const [authEmail, setAuthEmail] = useState('');
  const [authName, setAuthName] = useState('');
  const [authRole, setAuthRole] = useState<'client' | 'counsel'>('client');
  const [authError, setAuthError] = useState('');

  // CRM Filters
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [serviceFilter, setServiceFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedInquiry, setSelectedInquiry] = useState<ConsultationInquiry | null>(null);
  const [counselNote, setCounselNote] = useState('');

  // New Client Inquiry in Portal
  const [newInquiryOpen, setNewInquiryOpen] = useState(false);
  const [newInquiryForm, setNewInquiryForm] = useState({
    subject: '',
    serviceId: LEGAL_SERVICES[0].id,
    message: '',
    phone: user?.phone || '+973 '
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    if (!authEmail.trim()) {
      setAuthError(t('Please enter your email', 'يرجى إدخال البريد الإلكتروني'));
      return;
    }
    await login(authEmail, authRole, authName);
  };

  const handleQuickDemo = (role: 'client' | 'counsel') => {
    if (role === 'counsel') {
      login('counsel@manalfirm.com', 'counsel', 'Advocate Counsel (Staff)');
    } else {
      login('khalid@gulfhorizon.com', 'client', 'Eng. Khalid Al-Mansoor');
    }
  };

  const filteredInquiries = inquiries.filter((inq) => {
    // If client, only show their own inquiries or demo
    if (user?.role === 'client' && user.email) {
      if (inq.email.toLowerCase() !== user.email.toLowerCase()) return false;
    }
    const matchesStatus = statusFilter === 'all' || inq.status === statusFilter;
    const matchesService = serviceFilter === 'all' || inq.serviceId === serviceFilter;
    const matchesSearch =
      inq.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.message.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesService && matchesSearch;
  });

  const getStatusBadge = (status: ConsultationInquiry['status']) => {
    switch (status) {
      case 'new':
        return (
          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-800 border border-blue-200">
            {t('New Inquiry', 'طلب جديد')}
          </span>
        );
      case 'contacted':
        return (
          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-yellow-100 text-yellow-800 border border-yellow-200">
            {t('Contacted', 'تم التواصل')}
          </span>
        );
      case 'under_review':
        return (
          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-purple-100 text-purple-800 border border-purple-200">
            {t('Under Review', 'قيد الدراسة القانونية')}
          </span>
        );
      case 'case_opened':
        return (
          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-green-100 text-green-800 border border-green-200">
            {t('Case File Active', 'ملف قضية نشط')}
          </span>
        );
      case 'closed':
        return (
          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-700 border border-gray-200">
            {t('Concluded', 'مكتمل')}
          </span>
        );
    }
  };

  const handleExportCSV = () => {
    const headers = ['ID', 'Full Name', 'Email', 'Phone', 'Service', 'Subject', 'Status', 'Date'];
    const rows = filteredInquiries.map((inq) => [
      inq.id,
      `"${inq.fullName}"`,
      inq.email,
      inq.phone,
      inq.serviceId,
      `"${inq.subject.replace(/"/g, '""')}"`,
      inq.status,
      inq.createdAt
    ]);
    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `leads_manalfirm_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full bg-[#FAF8F5] pb-24 text-start">
      {/* Top Banner */}
      <section className="relative py-16 bg-[#1C2024] text-white border-b border-[#2C3238] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#CBB079_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-[#CBB079] bg-[#B38F4D]/20 px-3.5 py-1 rounded-full border border-[#B38F4D]/30 inline-block">
              {t('Secure Portal & Lead Management System', 'البوابة الرقمية وإدارة علاقات الموكلين')}
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              {user?.role === 'counsel'
                ? t('Law Firm CRM & Counsel Management Dashboard', 'لوحة تحكم المستشارين وإدارة قضايا واستشارات الموكلين')
                : t('Personal Client Legal Portal', 'بوابة الموكل القانونية المخصصة')}
            </h1>
            <p className="text-xs sm:text-sm text-[#A0AAB5] font-light max-w-2xl">
              {language === 'ar'
                ? 'إدارة استشاراتك القانونية ومتابعة مستجدات القضايا والوثائق بسرية مهنية وأمان رقمي متكامل.'
                : 'Direct, encrypted interface for personalized consultation tracking, lead workflows, and case file engagement.'}
            </p>
          </div>

          {isAuthenticated && (
            <div className="flex items-center gap-3 bg-[#242A30] p-3 rounded-2xl border border-[#3A434D]">
              <div className="w-10 h-10 rounded-xl bg-[#581D2D] text-white flex items-center justify-center font-bold">
                {user?.name.charAt(0)}
              </div>
              <div className="text-xs">
                <span className="font-bold text-white block">{user?.name}</span>
                <span className="text-[#CBB079] capitalize">
                  {user?.role === 'counsel' ? t('Senior Counsel', 'مستشار قانوني') : t('Client', 'موكل')}
                </span>
              </div>
              <button
                onClick={logout}
                className="ms-3 p-2 rounded-xl text-[#A0AAB5] hover:text-white hover:bg-[#333940] transition-colors cursor-pointer"
                title={t('Sign Out', 'تسجيل الخروج')}
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
        {!isAuthenticated ? (
          /* Authentication Screen */
          <div className="max-w-md mx-auto bg-white rounded-3xl border border-[#E8DFD3] shadow-lg p-8 sm:p-10 space-y-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-[#581D2D]/10 text-[#581D2D] flex items-center justify-center mx-auto">
                <Lock className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-[#1C2024]">
                {t('Secure Client & Counsel Portal', 'تسجيل الدخول إلى البوابة الآمنة')}
              </h2>
              <p className="text-xs text-[#6B7280]">
                {t('Access consultation status, legal files, and direct counsel communications.', 'الاطلاع على مسار الاستشارات والملفات القانونية.')}
              </p>
            </div>

            {/* Quick Demo Login Presets */}
            <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD3] space-y-2 text-xs">
              <span className="font-bold text-[#8E6F34] block text-[11px] uppercase tracking-wider">
                {t('Quick Access Demo Modes:', 'أوضاع الدخول التجريبية الفورية:')}
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleQuickDemo('client')}
                  className="py-2 px-3 rounded-xl bg-white border border-[#D8CFC3] hover:border-[#B38F4D] text-[#1C2024] font-medium transition-colors text-center cursor-pointer shadow-xs"
                >
                  {t('Client Demo Mode', 'دخول كـ موكل')}
                </button>
                <button
                  onClick={() => handleQuickDemo('counsel')}
                  className="py-2 px-3 rounded-xl bg-[#581D2D] hover:bg-[#77293E] text-white font-medium transition-colors text-center cursor-pointer shadow-xs"
                >
                  {t('Counsel CRM Mode', 'دخول كـ مستشار')}
                </button>
              </div>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              {authError && (
                <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs border border-red-200">
                  {authError}
                </div>
              )}

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#1C2024]">
                  {t('Full Name', 'الاسم الكامل')}
                </label>
                <input
                  type="text"
                  value={authName}
                  onChange={(e) => setAuthName(e.target.value)}
                  placeholder={language === 'ar' ? 'الاسم' : 'e.g. Khalid Al-Mansoor'}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D8CFC3] text-xs focus:outline-none focus:border-[#B38F4D]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#1C2024]">
                  {t('Email Address', 'البريد الإلكتروني')}
                </label>
                <input
                  type="email"
                  required
                  value={authEmail}
                  onChange={(e) => setAuthEmail(e.target.value)}
                  placeholder="name@organization.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D8CFC3] text-xs focus:outline-none focus:border-[#B38F4D]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#1C2024]">
                  {t('Select Portal Role', 'تحديد نوع الحساب')}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setAuthRole('client')}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
                      authRole === 'client'
                        ? 'bg-[#581D2D] text-white border-[#581D2D]'
                        : 'bg-white text-[#4A525D] border-[#D8CFC3]'
                    }`}
                  >
                    {t('Client', 'موكل')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setAuthRole('counsel')}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
                      authRole === 'counsel'
                        ? 'bg-[#581D2D] text-white border-[#581D2D]'
                        : 'bg-white text-[#4A525D] border-[#D8CFC3]'
                    }`}
                  >
                    {t('Law Firm Staff', 'فريق المستشارين')}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#581D2D] hover:bg-[#77293E] text-white font-semibold text-xs sm:text-sm transition-colors cursor-pointer shadow-sm"
              >
                {t('Sign In to Legal Portal', 'تسجيل الدخول إلى البوابة')}
              </button>
            </form>
          </div>
        ) : user?.role === 'counsel' ? (
          /* Counsel & Staff Lead Management CRM */
          <div className="space-y-8">
            {/* Top Stat Counters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-[#E8DFD3] shadow-xs">
                <span className="text-xs text-[#6B7280] block font-medium">
                  {t('Total Inquiries', 'إجمالي الطلبات')}
                </span>
                <span className="text-3xl font-serif font-bold text-[#1C2024] mt-1 block">
                  {inquiries.length}
                </span>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-[#E8DFD3] shadow-xs">
                <span className="text-xs text-[#6B7280] block font-medium">
                  {t('Active Cases', 'قضايا جارية')}
                </span>
                <span className="text-3xl font-serif font-bold text-green-700 mt-1 block">
                  {inquiries.filter((i) => i.status === 'case_opened').length}
                </span>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-[#E8DFD3] shadow-xs">
                <span className="text-xs text-[#6B7280] block font-medium">
                  {t('Under Legal Review', 'قيد الدراسة')}
                </span>
                <span className="text-3xl font-serif font-bold text-purple-700 mt-1 block">
                  {inquiries.filter((i) => i.status === 'under_review').length}
                </span>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-[#E8DFD3] shadow-xs">
                <span className="text-xs text-[#6B7280] block font-medium">
                  {t('New Unhandled Leads', 'طلبات جديدة')}
                </span>
                <span className="text-3xl font-serif font-bold text-blue-700 mt-1 block">
                  {inquiries.filter((i) => i.status === 'new').length}
                </span>
              </div>
            </div>

            {/* Filter and Action Strip */}
            <div className="p-4 rounded-2xl bg-white border border-[#E8DFD3] shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 rounded-xl border border-[#D8CFC3] text-xs bg-white text-[#1C2024]"
                >
                  <option value="all">{t('All Statuses', 'كافة الحالات')}</option>
                  <option value="new">{t('New Leads', 'طلبات جديدة')}</option>
                  <option value="contacted">{t('Contacted', 'تم التواصل')}</option>
                  <option value="under_review">{t('Under Review', 'قيد المراجعة')}</option>
                  <option value="case_opened">{t('Case Opened', 'ملف قضية نشط')}</option>
                  <option value="closed">{t('Closed', 'مكتمل')}</option>
                </select>

                <select
                  value={serviceFilter}
                  onChange={(e) => setServiceFilter(e.target.value)}
                  className="px-3 py-2 rounded-xl border border-[#D8CFC3] text-xs bg-white text-[#1C2024]"
                >
                  <option value="all">{t('All Services', 'كافة التخصصات')}</option>
                  {LEGAL_SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title[language]}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-3">
                <div className="relative flex-1 md:w-64">
                  <Search className="w-4 h-4 text-[#8E6F34] absolute start-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t('Search by name or subject...', 'البحث بالاسم أو الموضوع...')}
                    className="w-full ps-9 pe-3 py-2 rounded-xl border border-[#D8CFC3] text-xs focus:outline-none focus:border-[#B38F4D]"
                  />
                </div>

                <button
                  onClick={handleExportCSV}
                  className="py-2 px-3.5 rounded-xl border border-[#D8CFC3] hover:bg-[#FAF8F5] text-xs font-semibold text-[#1C2024] transition-colors flex items-center gap-1.5 cursor-pointer shrink-0"
                >
                  <Download className="w-3.5 h-3.5 text-[#B38F4D]" />
                  <span>{t('Export CSV', 'تصدير CSV')}</span>
                </button>
              </div>
            </div>

            {/* Inquiries / CRM Leads Table */}
            <div className="bg-white rounded-3xl border border-[#E8DFD3] shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-start text-xs">
                  <thead className="bg-[#FAF8F5] text-[#6B7280] border-b border-[#E8DFD3] uppercase tracking-wider font-semibold">
                    <tr>
                      <th className="py-3.5 px-4">{t('Ref ID', 'رقم المرجع')}</th>
                      <th className="py-3.5 px-4">{t('Client Contact', 'بيانات الموكل')}</th>
                      <th className="py-3.5 px-4">{t('Practice Area', 'المجال')}</th>
                      <th className="py-3.5 px-4">{t('Subject / Inquiry', 'الموضوع')}</th>
                      <th className="py-3.5 px-4">{t('Status', 'الحالة')}</th>
                      <th className="py-3.5 px-4 text-end">{t('Actions', 'الإجراء')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E8DFD3]">
                    {filteredInquiries.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="py-12 text-center text-[#6B7280]">
                          {t('No inquiries match your criteria.', 'لا توجد طلبات مطابقة.')}
                        </td>
                      </tr>
                    ) : (
                      filteredInquiries.map((inq) => (
                        <tr
                          key={inq.id}
                          className="hover:bg-[#FAF8F5]/60 transition-colors cursor-pointer"
                          onClick={() => {
                            setSelectedInquiry(inq);
                            setCounselNote(inq.notes || '');
                          }}
                        >
                          <td className="py-3.5 px-4 font-mono font-bold text-[#581D2D]">
                            {inq.id}
                          </td>
                          <td className="py-3.5 px-4">
                            <div className="font-bold text-[#1C2024]">{inq.fullName}</div>
                            <div className="text-[#6B7280]">{inq.email}</div>
                            <div className="text-[#8E6F34]" dir="ltr">{inq.phone}</div>
                          </td>
                          <td className="py-3.5 px-4 font-medium text-[#1C2024]">
                            {inq.serviceId}
                          </td>
                          <td className="py-3.5 px-4 max-w-xs">
                            <div className="font-semibold text-[#1C2024] truncate">{inq.subject}</div>
                            <div className="text-[#6B7280] truncate font-light">{inq.message}</div>
                          </td>
                          <td className="py-3.5 px-4">
                            {getStatusBadge(inq.status)}
                          </td>
                          <td className="py-3.5 px-4 text-end">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedInquiry(inq);
                                setCounselNote(inq.notes || '');
                              }}
                              className="p-1.5 rounded-lg hover:bg-[#FAF8F5] text-[#581D2D] font-bold cursor-pointer inline-flex items-center gap-1"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                              <span>{t('Manage Lead', 'إدارة الطلب')}</span>
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          /* Client Engagement Dashboard Mode */
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-serif font-bold text-[#1C2024]">
                  {t('Welcome back,', 'أهلاً بك،')} {user?.name}
                </h2>
                <p className="text-xs text-[#6B7280] mt-0.5">
                  {t('Track your scheduled legal consultations and active advisory files.', 'متابعة استشاراتك القانونية وملفاتك المفتوحة لدى المكتب.')}
                </p>
              </div>

              <button
                onClick={() => setNewInquiryOpen(true)}
                className="py-2.5 px-5 rounded-xl bg-[#581D2D] hover:bg-[#77293E] text-white text-xs font-semibold transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <Plus className="w-4 h-4 text-[#CBB079]" />
                <span>{t('Submit New Legal Inquiry', 'تقديم استشارة قانونية جديدة')}</span>
              </button>
            </div>

            {/* Client Inquiries List */}
            <div className="space-y-4">
              {filteredInquiries.length === 0 ? (
                <div className="p-12 rounded-3xl bg-white border border-[#E8DFD3] text-center space-y-4">
                  <FileText className="w-10 h-10 text-[#8E6F34] mx-auto opacity-40" />
                  <h3 className="font-serif font-bold text-lg text-[#1C2024]">
                    {t('No Inquiries on Record', 'لا توجد طلبات مسجلة حالياً')}
                  </h3>
                  <p className="text-xs text-[#6B7280] max-w-sm mx-auto">
                    {t('Submit your first consultation request to receive tailored counsel from our team.', 'قدم طلب استشارتك الأول وسيتولى مستشارونا مراجعته فوراً.')}
                  </p>
                  <button
                    onClick={() => setNewInquiryOpen(true)}
                    className="py-2 px-4 rounded-xl bg-[#581D2D] text-white text-xs font-medium cursor-pointer"
                  >
                    {t('Request Consultation Now', 'طلب استشارة الآن')}
                  </button>
                </div>
              ) : (
                filteredInquiries.map((inq) => (
                  <div
                    key={inq.id}
                    className="p-6 rounded-3xl bg-white border border-[#E8DFD3] shadow-xs space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#FAF8F5] pb-3">
                      <div className="flex items-center gap-3">
                        <span className="font-mono font-bold text-xs text-[#581D2D] bg-[#581D2D]/10 px-2.5 py-0.5 rounded-md">
                          {inq.id}
                        </span>
                        <span className="text-xs text-[#6B7280]">
                          {new Date(inq.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <div>{getStatusBadge(inq.status)}</div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-serif font-bold text-lg text-[#1C2024]">
                        {inq.subject}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#4A525D] font-light leading-relaxed">
                        {inq.message}
                      </p>
                    </div>

                    {inq.notes && (
                      <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8DFD3] text-xs text-[#333940] space-y-1">
                        <span className="font-bold text-[#8E6F34] block">
                          {t('Counsel Assessment / Update:', 'ملاحظة ومستجدات المستشار:')}
                        </span>
                        <p className="font-light">{inq.notes}</p>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </section>

      {/* Counsel Manage Lead Modal */}
      {selectedInquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-[#E8DFD3] shadow-2xl p-6 sm:p-8 relative space-y-6">
            <div className="flex items-center justify-between border-b border-[#E8DFD3] pb-4">
              <div>
                <span className="font-mono font-bold text-xs text-[#581D2D]">
                  {selectedInquiry.id}
                </span>
                <h3 className="font-serif font-bold text-xl text-[#1C2024]">
                  {selectedInquiry.fullName}
                </h3>
              </div>
              <button
                onClick={() => setSelectedInquiry(null)}
                className="p-1.5 rounded-full hover:bg-[#FAF8F5] text-[#1C2024] cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs text-[#4A525D]">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <span className="font-bold text-[#1C2024] block">{t('Email:', 'البريد:')}</span>
                  <a href={`mailto:${selectedInquiry.email}`} className="text-[#581D2D] hover:underline">
                    {selectedInquiry.email}
                  </a>
                </div>
                <div>
                  <span className="font-bold text-[#1C2024] block">{t('Phone:', 'الهاتف:')}</span>
                  <a href={`tel:${selectedInquiry.phone}`} className="text-[#581D2D] hover:underline" dir="ltr">
                    {selectedInquiry.phone}
                  </a>
                </div>
              </div>

              <div>
                <span className="font-bold text-[#1C2024] block">{t('Subject:', 'الموضوع:')}</span>
                <p className="text-[#1C2024] font-medium">{selectedInquiry.subject}</p>
              </div>

              <div>
                <span className="font-bold text-[#1C2024] block">{t('Message Details:', 'نص الطلب:')}</span>
                <p className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E8DFD3] font-light leading-relaxed">
                  {selectedInquiry.message}
                </p>
              </div>
            </div>

            {/* Update Status */}
            <div className="space-y-2 border-t border-[#E8DFD3] pt-4">
              <label className="text-xs font-bold text-[#1C2024] block">
                {t('Update Lead Lifecycle Status', 'تحديث مرحلة الطلب')}
              </label>
              <select
                value={selectedInquiry.status}
                onChange={(e) =>
                  updateInquiryStatus(selectedInquiry.id, e.target.value as ConsultationInquiry['status'], counselNote)
                }
                className="w-full px-3 py-2 rounded-xl border border-[#D8CFC3] text-xs bg-white"
              >
                <option value="new">{t('New Inquiry', 'طلب جديد')}</option>
                <option value="contacted">{t('Contacted Client', 'تم التواصل مع الموكل')}</option>
                <option value="under_review">{t('Under Legal Review', 'قيد الدراسة القانونية')}</option>
                <option value="case_opened">{t('Case File Opened', 'ملف قضية نشط')}</option>
                <option value="closed">{t('Concluded / Closed', 'مكتمل / مغلق')}</option>
              </select>
            </div>

            {/* Internal Counsel Notes */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#1C2024] block">
                {t('Internal Counsel Assessment & Notes', 'ملاحظات المستشار القانوني')}
              </label>
              <textarea
                rows={3}
                value={counselNote}
                onChange={(e) => setCounselNote(e.target.value)}
                placeholder={t('Add internal case updates or next court hearing steps...', 'إضافة ملاحظات وتحديثات القضية...')}
                className="w-full px-3 py-2 rounded-xl border border-[#D8CFC3] text-xs focus:outline-none focus:border-[#B38F4D]"
              />
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => {
                  updateInquiryStatus(selectedInquiry.id, selectedInquiry.status, counselNote);
                  setSelectedInquiry(null);
                }}
                className="flex-1 py-2.5 rounded-xl bg-[#581D2D] hover:bg-[#77293E] text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                {t('Save Lead Changes', 'حفظ التعديلات')}
              </button>
              <button
                onClick={() => setSelectedInquiry(null)}
                className="py-2.5 px-4 rounded-xl border border-[#D8CFC3] text-xs font-medium text-[#1C2024] cursor-pointer"
              >
                {t('Dismiss', 'إلغاء')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* New Client Inquiry Modal */}
      {newInquiryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-[#E8DFD3] shadow-2xl p-6 sm:p-8 relative space-y-5">
            <div className="flex items-center justify-between border-b border-[#E8DFD3] pb-3">
              <h3 className="font-serif font-bold text-xl text-[#1C2024]">
                {t('Submit New Consultation Request', 'تقديم طلب استشارة قانونية جديدة')}
              </h3>
              <button
                onClick={() => setNewInquiryOpen(false)}
                className="p-1.5 rounded-full hover:bg-[#FAF8F5] text-[#1C2024] cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form
              onSubmit={async (e) => {
                e.preventDefault();
                await submitInquiry({
                  fullName: user?.name || 'Portal Client',
                  email: user?.email || 'client@portal.com',
                  phone: newInquiryForm.phone,
                  serviceId: newInquiryForm.serviceId,
                  subject: newInquiryForm.subject,
                  message: newInquiryForm.message
                });
                setNewInquiryOpen(false);
                setNewInquiryForm({
                  subject: '',
                  serviceId: LEGAL_SERVICES[0].id,
                  message: '',
                  phone: '+973 '
                });
              }}
              className="space-y-4"
            >
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#1C2024]">{t('Practice Area', 'المجال')}</label>
                <select
                  value={newInquiryForm.serviceId}
                  onChange={(e) => setNewInquiryForm({ ...newInquiryForm, serviceId: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-[#D8CFC3] text-xs bg-white"
                >
                  {LEGAL_SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title[language]}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#1C2024]">{t('Subject', 'الموضوع')}</label>
                <input
                  type="text"
                  required
                  value={newInquiryForm.subject}
                  onChange={(e) => setNewInquiryForm({ ...newInquiryForm, subject: e.target.value })}
                  placeholder="e.g. Contract review for joint venture"
                  className="w-full px-3 py-2 rounded-xl border border-[#D8CFC3] text-xs"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#1C2024]">{t('Phone Number', 'رقم الهاتف')}</label>
                <input
                  type="tel"
                  required
                  value={newInquiryForm.phone}
                  onChange={(e) => setNewInquiryForm({ ...newInquiryForm, phone: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-[#D8CFC3] text-xs"
                  dir="ltr"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#1C2024]">{t('Details', 'التفاصيل')}</label>
                <textarea
                  rows={4}
                  required
                  value={newInquiryForm.message}
                  onChange={(e) => setNewInquiryForm({ ...newInquiryForm, message: e.target.value })}
                  placeholder="Describe your legal matter..."
                  className="w-full px-3 py-2 rounded-xl border border-[#D8CFC3] text-xs"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#581D2D] text-white text-xs font-semibold hover:bg-[#77293E] cursor-pointer"
              >
                {t('Transmit Inquiry to Counsel', 'إرسال الاستشارة إلى المستشار')}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
