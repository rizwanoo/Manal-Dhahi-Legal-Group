import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BLOG_ARTICLES } from '../data/firmData';
import { BlogArticle } from '../types';
import { AOS, AOSItem } from '../components/AOS';
import {
  Search,
  Clock,
  User,
  Calendar,
  Share2,
  X,
  ArrowRight,
  ChevronRight,
  Bookmark,
  Check,
  Tag
} from 'lucide-react';

interface BlogViewProps {
  initialSlug?: string;
  onOpenConsultationModal: (serviceId?: string) => void;
}

export const BlogView: React.FC<BlogViewProps> = ({
  initialSlug,
  onOpenConsultationModal
}) => {
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeArticle, setActiveArticle] = useState<BlogArticle | null>(() => {
    if (initialSlug) {
      return BLOG_ARTICLES.find((a) => a.slug === initialSlug) || null;
    }
    return null;
  });
  const [copiedLink, setCopiedLink] = useState(false);

  const categories = [
    { id: 'all', label: { en: 'All Articles', ar: 'كافة المقالات' } },
    { id: 'Real Estate Law', label: { en: 'Real Estate', ar: 'القانون العقاري' } },
    { id: 'Construction Law', label: { en: 'Construction & FIDIC', ar: 'قانون الإنشاءات والفيديك' } },
    { id: 'Company Formation', label: { en: 'Corporate & Licensing', ar: 'تأسيس الشركات' } },
    { id: 'Arbitration', label: { en: 'Arbitration & ADR', ar: 'التحكيم والوساطة' } },
    { id: 'Criminal Law', label: { en: 'Criminal & Compliance', ar: 'القانون الجنائي' } },
    { id: 'Labour Law', label: { en: 'Labour & LMRA', ar: 'العمل وسوق العمل' } }
  ];

  const filteredArticles = BLOG_ARTICLES.filter((art) => {
    const matchesCategory =
      selectedCategory === 'all' ||
      art.category.en.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      art.category.ar.includes(selectedCategory);
    const matchesSearch =
      art.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleShare = (article: BlogArticle) => {
    const url = window.location.origin + '#' + article.slug;
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
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
              {t('Legal Insights & Commentary', 'أبحاث ودراسات قانونية')}
            </span>
          </AOS>
          <AOS direction="up" delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">
              {language === 'ar' ? 'المقالات والأبحاث القانونية' : 'Blogs & Legal Insights'}
            </h1>
          </AOS>
          <AOS direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-[#A0AAB5] max-w-3xl font-light">
              {language === 'ar'
                ? 'مكتبة متكاملة من الدراسات والتحليلات القانونية المعمقة الصادرة عن خبرائنا حول الأنظمة والقوانين في مملكة البحرين ودول مجلس التعاون.'
                : 'Practical analysis, statutory updates, and judicial guidelines from our senior attorneys covering Bahrain and GCC commercial law.'}
            </p>
          </AOS>
        </div>
      </section>

      {/* Search and Category Filter with AOS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-10">
        <AOS direction="up" className="p-4 rounded-2xl bg-white border border-[#E8DFD3] shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Categories */}
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
              placeholder={t('Search articles by topic...', 'البحث في المقالات والمواضيع...')}
              className="w-full ps-10 pe-4 py-2 rounded-xl border border-[#D8CFC3] text-xs focus:outline-none focus:border-[#B38F4D] bg-[#FAF8F5]/60"
            />
          </div>
        </AOS>
      </section>

      {/* Articles Grid with AOS Staggered Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
        <AOS
          direction="up"
          staggerChildren={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredArticles.map((article) => (
            <AOSItem key={article.id}>
              <article
                onClick={() => setActiveArticle(article)}
                className="group rounded-3xl bg-white border border-[#E8DFD3] hover:border-[#B38F4D] overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer flex flex-col justify-between h-full"
              >
                <div>
                  <div className="relative aspect-16/10 bg-[#ECE5DC] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title[language]}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = `https://www.manalfirm.com/web/image/62228/${article.id}.png`;
                      }}
                    />
                    <div className="absolute top-3 start-3">
                      <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#1C2024]/85 text-white backdrop-blur-sm">
                        {article.category[language]}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-[#6B7280]">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#B38F4D]" />
                        {article.readTime[language]}
                      </span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>

                    <h3 className="font-serif font-bold text-xl text-[#1C2024] group-hover:text-[#581D2D] transition-colors leading-snug">
                      {article.title[language]}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#4A525D] font-light line-clamp-3 leading-relaxed">
                      {article.excerpt[language]}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#FAF8F5] flex items-center justify-between text-xs font-semibold text-[#8E6F34]">
                  <span>{t('Read Full Analysis', 'قراءة التحليل كاملاً')}</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </div>
              </article>
            </AOSItem>
          ))}
        </AOS>
      </section>

      {/* Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#E8DFD3] shadow-2xl p-6 sm:p-10 relative space-y-6">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 end-5 p-2 rounded-full bg-[#FAF8F5] hover:bg-[#E8DFD3] text-[#1C2024] transition-colors cursor-pointer"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Article Top Meta */}
            <div className="space-y-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#B38F4D]/15 text-[#8E6F34] inline-block">
                {activeArticle.category[language]}
              </span>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C2024] leading-tight">
                {activeArticle.title[language]}
              </h2>

              <div className="flex flex-wrap items-center gap-4 text-xs text-[#6B7280] pt-1">
                <span className="flex items-center gap-1.5 font-medium text-[#1C2024]">
                  <User className="w-3.5 h-3.5 text-[#B38F4D]" />
                  {activeArticle.author[language]}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#B38F4D]" />
                  {activeArticle.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#B38F4D]" />
                  {activeArticle.readTime[language]}
                </span>
              </div>
            </div>

            {/* Article Cover Image */}
            <div className="rounded-2xl overflow-hidden aspect-16/9 bg-[#ECE5DC] border border-[#E8DFD3]">
              <img
                src={activeArticle.image}
                alt={activeArticle.title[language]}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = `https://www.manalfirm.com/web/image/62228/${activeArticle.id}.png`;
                }}
              />
            </div>

            {/* Article Content */}
            <div className="space-y-4 text-sm sm:text-base text-[#333940] leading-relaxed font-light whitespace-pre-line border-t border-[#FAF8F5] pt-4">
              {activeArticle.content[language]}
            </div>

            {/* Tags */}
            <div className="pt-4 border-t border-[#E8DFD3] flex flex-wrap items-center gap-2">
              <span className="text-xs text-[#8E6F34] font-semibold flex items-center gap-1">
                <Tag className="w-3.5 h-3.5" />
                {t('Tags:', 'الوسوم:')}
              </span>
              {activeArticle.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded-md text-xs bg-[#FAF8F5] border border-[#E8DFD3] text-[#4A525D]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-[#E8DFD3] flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => handleShare(activeArticle)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[#D8CFC3] hover:bg-[#FAF8F5] text-xs font-medium text-[#1C2024] transition-colors cursor-pointer"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Share2 className="w-3.5 h-3.5 text-[#B38F4D]" />}
                <span>{copiedLink ? t('Link Copied to Clipboard!', 'تم نسخ الرابط!') : t('Share Article', 'مشاركة المقال')}</span>
              </button>

              <button
                onClick={() => {
                  setActiveArticle(null);
                  onOpenConsultationModal(activeArticle.category[language]);
                }}
                className="py-2.5 px-6 rounded-xl bg-[#581D2D] hover:bg-[#77293E] text-white text-xs font-semibold transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5 text-[#CBB079]" />
                <span>{t('Consult Attorney on this Subject', 'طلب استشارة بهذا الشأن')}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
