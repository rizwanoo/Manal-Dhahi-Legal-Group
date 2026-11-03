import React, { createContext, useContext, useEffect, useState } from 'react';
import { UserProfile, ConsultationInquiry } from '../types';

interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  login: (email: string, role?: 'client' | 'counsel' | 'admin', name?: string) => Promise<boolean>;
  logout: () => void;
  inquiries: ConsultationInquiry[];
  submitInquiry: (data: Omit<ConsultationInquiry, 'id' | 'createdAt' | 'status'>) => Promise<string>;
  updateInquiryStatus: (id: string, status: ConsultationInquiry['status'], notes?: string) => void;
  deleteInquiry: (id: string) => void;
}

const INITIAL_INQUIRIES: ConsultationInquiry[] = [
  {
    id: 'INQ-1042',
    fullName: 'Eng. Khalid Al-Mansoor',
    email: 'khalid@gulfhorizon.com',
    phone: '+973 3912 4589',
    serviceId: 'construction-engineering',
    subject: 'Delay and Disruption Claim for Highway Interchange Project',
    message: 'Seeking legal intervention regarding an unresolved 120-day extension of time (EOT) claim and threatened liquidated damages under FIDIC Red Book conditions.',
    preferredDate: '2026-11-10',
    status: 'case_opened',
    createdAt: '2026-11-01T08:30:00Z',
    notes: 'Primary consultation held with Mrs. Manal Dhahi. Notice of dispute prepared.'
  },
  {
    id: 'INQ-1043',
    fullName: 'Dmitry Voronov',
    email: 'dmitry@nordic-eurasia.com',
    phone: '+971 50 876 5432',
    serviceId: 'russian-desk',
    subject: 'Bahrain Holding W.L.L. Incorporation & Investor Residency',
    message: 'We require full assistance in incorporating a regional holding entity in Manama and qualifying two executive board members for the 10-Year Golden Residency.',
    preferredDate: '2026-11-12',
    status: 'under_review',
    createdAt: '2026-11-02T11:15:00Z',
    notes: 'Reviewed by Mahmood Dhahi (Russian Desk). Documents submitted to MOIC.'
  },
  {
    id: 'INQ-1044',
    fullName: 'Fatima Al-Jowder',
    email: 'fatima@marinabay-bh.com',
    phone: '+973 3345 6789',
    serviceId: 'private-notary',
    subject: 'Urgent On-Site Notarization of Real Estate Sale Contracts',
    message: 'Requesting on-site private notary services for 8 residential purchase agreements at our sales center in Seef District.',
    preferredDate: '2026-11-05',
    status: 'contacted',
    createdAt: '2026-11-02T14:45:00Z',
    notes: 'Appointment scheduled for Thursday morning.'
  }
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('md_user_profile');
    if (saved) {
      try { return JSON.parse(saved); } catch { return null; }
    }
    return null;
  });

  const [inquiries, setInquiries] = useState<ConsultationInquiry[]>(() => {
    const saved = localStorage.getItem('md_inquiries');
    if (saved) {
      try { return JSON.parse(saved); } catch { return INITIAL_INQUIRIES; }
    }
    return INITIAL_INQUIRIES;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('md_user_profile', JSON.stringify(user));
    } else {
      localStorage.removeItem('md_user_profile');
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem('md_inquiries', JSON.stringify(inquiries));
  }, [inquiries]);

  const login = async (email: string, role: 'client' | 'counsel' | 'admin' = 'client', name?: string) => {
    const cleanEmail = email.trim().toLowerCase();
    const assignedRole = cleanEmail.includes('manalfirm') || role === 'counsel' || role === 'admin' ? 'counsel' : 'client';
    const profile: UserProfile = {
      id: 'USR-' + Math.floor(1000 + Math.random() * 9000),
      email: cleanEmail,
      name: name || (cleanEmail.includes('manalfirm') ? 'Legal Counsel' : cleanEmail.split('@')[0]),
      role: assignedRole,
      organization: cleanEmail.includes('manalfirm') ? 'Manal Dhahi Legal Group' : 'Client Entity'
    };
    setUser(profile);
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  const submitInquiry = async (data: Omit<ConsultationInquiry, 'id' | 'createdAt' | 'status'>) => {
    const newId = 'INQ-' + Math.floor(1000 + Math.random() * 9000);
    const newInquiry: ConsultationInquiry = {
      ...data,
      id: newId,
      status: 'new',
      createdAt: new Date().toISOString()
    };
    setInquiries(prev => [newInquiry, ...prev]);
    return newId;
  };

  const updateInquiryStatus = (id: string, status: ConsultationInquiry['status'], notes?: string) => {
    setInquiries(prev => prev.map(inq => inq.id === id ? { ...inq, status, ...(notes !== undefined ? { notes } : {}) } : inq));
  };

  const deleteInquiry = (id: string) => {
    setInquiries(prev => prev.filter(inq => inq.id !== id));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        inquiries,
        submitInquiry,
        updateInquiryStatus,
        deleteInquiry
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
