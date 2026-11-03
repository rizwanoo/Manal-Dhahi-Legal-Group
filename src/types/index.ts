export type Language = 'en' | 'ar';

export interface TeamMember {
  id: string;
  name: { en: string; ar: string };
  role: { en: string; ar: string };
  department: 'legal' | 'leadership' | 'operations' | 'international';
  image: string;
  experience: { en: string; ar: string };
  education: { en: string; ar: string };
  field: { en: string; ar: string };
  licenses?: { en: string; ar: string };
  bio: { en: string; ar: string };
  email?: string;
  featured?: boolean;
}

export interface LegalService {
  id: string;
  slug: string;
  title: { en: string; ar: string };
  shortDesc: { en: string; ar: string };
  fullDesc: { en: string; ar: string };
  iconName: string;
  badge?: { en: string; ar: string };
  highlights: { en: string[]; ar: string[] };
  process: { step: number; title: { en: string; ar: string }; desc: { en: string; ar: string } }[];
  category: 'core' | 'regional' | 'dispute' | 'corporate';
}

export interface IndustryExpertise {
  id: string;
  slug: string;
  title: { en: string; ar: string };
  shortDesc: { en: string; ar: string };
  fullDesc: { en: string; ar: string };
  sectors: { en: string[]; ar: string[] };
  keyRisksManaged: { en: string[]; ar: string[] };
  iconName: string;
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: { en: string; ar: string };
  category: { en: string; ar: string };
  date: string;
  readTime: { en: string; ar: string };
  author: { en: string; ar: string };
  image: string;
  excerpt: { en: string; ar: string };
  content: { en: string; ar: string };
  tags: string[];
}

export interface Testimonial {
  id: string;
  clientName: { en: string; ar: string };
  role: { en: string; ar: string };
  company?: { en: string; ar: string };
  feedback: { en: string; ar: string };
  serviceArea: { en: string; ar: string };
  rating: number;
}

export interface ConsultationInquiry {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  serviceId: string;
  subject: string;
  message: string;
  preferredDate?: string;
  status: 'new' | 'contacted' | 'under_review' | 'case_opened' | 'closed';
  createdAt: string;
  notes?: string;
}

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  role: 'client' | 'counsel' | 'admin';
  phone?: string;
  organization?: string;
}
