import { LegalService, TeamMember, IndustryExpertise, BlogArticle, Testimonial } from '../types';

export const FIRM_DETAILS = {
  nameEn: 'Manal Dhahi Legal Group',
  nameAr: 'مجموعة منال ضاحي القانونية',
  taglineEn: 'Defining the legal road ahead, together.',
  taglineAr: 'نرسم معاً آفاق المستقبل القانوني بثقة وتميز.',
  established: 2011,
  crNumber: '108662-2',
  isoCertified: 'ISO 9001:2015 Quality Management Certified',
  addressEn: 'Office 42, Building 240, Road 1704, Block 317, Diplomatic Area, Manama, Kingdom of Bahrain',
  addressAr: 'مكتب 42، مبنى 240، طريق 1704، مجمع 317، المنطقة الدبلوماسية، المنامة، مملكة البحرين',
  phone: '+973 1716 2211',
  phoneFormatted: '+973 1716 2211',
  email: 'info@manalfirm.com',
  workingHoursEn: 'Sunday - Thursday: 8:00 AM - 5:00 PM (AST)',
  workingHoursAr: 'الأحد - الخميس: 8:00 صباحاً - 5:00 مساءً (توقيت البحرين)',
  socials: {
    facebook: 'https://www.facebook.com/mdfirmbh',
    twitter: 'https://x.com/mdfirmbh',
    linkedin: 'https://www.linkedin.com/company/manaldhahilegalgroup/',
    instagram: 'https://www.instagram.com/mdfirmbh/',
  },
  stats: [
    { value: '15+', labelEn: 'Years of Legal Authority', labelAr: 'عاماً من الخبرة والريادة القانونية' },
    { value: '20+', labelEn: 'Attorneys & Legal Specialists', labelAr: 'مستشاراً ومحامياً وباحثاً متخصصاً' },
    { value: '1,200+', labelEn: 'Litigation & Corporate Matters', labelAr: 'قضية وملف تجاري ناجح' },
    { value: '100%', labelEn: 'Regulatory & ISO Compliance', labelAr: 'التزام بمعايير الجودة الدولية ISO' },
  ]
};

export const FOUNDER_INFO = {
  nameEn: 'Mrs. Manal Ali Abbas Dhahi',
  nameAr: 'الأستاذة منال علي عباس ضاحي',
  titleEn: 'Founder & Lead Legal Counsel',
  titleAr: 'المؤسس ورئيس المجموعة القانونية',
  image: '/assets/manal-founder.webp',
  credentialsEn: [
    'Certified Attorney before the Court of Cassation and Constitutional Court of Bahrain',
    'Licensed Private Notary in the Kingdom of Bahrain',
    'Certified Mediator in Civil, Commercial, and Criminal Matters',
    'Certified Private Enforcement Officer (Private Executor)',
    '15+ Years Specializing in Corporate, Construction, and High-Risk Industry Advisory'
  ],
  credentialsAr: [
    'محامية مقيدة ومجازة أمام محكمة التمييز والمحكمة الدستورية بمملكة البحرين',
    'موثق خاص معتمد لدى وزارة العدل والشؤون الإسلامية والأوقاف',
    'وسيط قانوني معتمد في المنازعات المدنية والتجارية والجنائية',
    'منفذ خاص معتمد بموجب قانون التنفيذ البحريني',
    'أكثر من 15 عاماً من التخصص القانوني في قطاعات الشركات والإنشاءات والمشاريع الكبرى'
  ],
  messageEn: [
    "At Manal Dhahi Legal Group, our mission has always been clear: to deliver professional legal services that go beyond resolving disputes — services that safeguard the future, strengthen businesses, and protect rights with the highest level of precision and trust.",
    "When I established Manal Dhahi Legal Group, my vision was to create a law firm in Bahrain that combines deep, sector-specific legal expertise in areas such as construction, engineering, real estate, contracting, and high-risk industries with innovative, client-focused service. We provide effective, comprehensive legal solutions for companies and individuals, tailored to their needs under Bahraini law.",
    "Over the years, we have built a proven record of success in litigation before Bahraini courts, certified mediation, regulatory compliance, and contract structuring — achieving high-value dispute resolutions and securing critical approvals for major projects. Our commitment to ISO 9001 Quality Management Standards and our investment in advanced legal technology further strengthen our ability to deliver accurate, enforceable, and results-driven legal solutions.",
    "I believe that the true value of any lawyer or law firm lies in the ability to anticipate risks, safeguard interests, and deliver enforceable legal outcomes, while building trust that endures. This is our promise, and it is the standard we uphold every single day for our clients in Bahrain and beyond."
  ],
  messageAr: [
    "في مجموعة منال ضاحي القانونية، كانت رسالتنا دوماً واضحة وثابتة: تقديم خدمات قانونية رفيعة المستوى تتجاوز مجرد تسوية النزاعات، إلى صياغة استراتيجيات تستشرف المخاطر، وتحمي مقدرات الأعمال، وتصون الحقوق بأعلى معايير الدقة والنزاهة والموثوقية.",
    "عندما أسست هذه المجموعة، كان طموحي بناء صرح قانوني في مملكة البحرين يجمع بين التخصص الدقيق في قطاعات بالغة الحيوية والتعقيد — مثل الهندسة، الإنشاءات، التطوير العقاري، المقاولات، والصناعات عالية المخاطر — وبين تقديم خدمات استشارية مبتكرة محورها العميل، مصممة بدقة لتلائم متطلبات القوانين البحرينية والخليجية.",
    "على مدار سنوات من العمل الدؤوب، نجحنا في ترسيخ سجل حافل بالإنجازات أمام كافة درجات المحاكم البحرينية، ولجان التحكيم، وغرف الوساطة المعتمدة، مع حسم نزاعات تجارية كبرى وتأمين الموافقات القانونية للمشاريع الإقليمية. ويأتي التزامنا الصارم بمعايير الجودة العالمية ISO 9001 واستثمارنا في أحدث الأنظمة القانونية ليعزز قدرتنا على تقديم حلول نافذة وعملية.",
    "إنني أؤمن بأن القيمة الجوهرية لأي محامٍ أو مستشار قانوني تكمن في استباق التحديات، وحماية مصالح الموكلين، وتحقيق نتائج قانونية راسخة تبني شراكات دائمة من الثقة المتبادلة. هذا هو عهدنا، وتلك هي الأمانة التي نحملها يومياً لخدمة عملائنا في البحرين ودول مجلس التعاون والعالم."
  ]
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'manal-dhahi',
    name: { en: 'Manal Dhahi', ar: 'منال ضاحي' },
    role: { en: 'Founder and CEO', ar: 'المؤسس والرئيس التنفيذي' },
    department: 'leadership',
    image: '/assets/team/manal_dhahi.webp',
    experience: { en: 'More than 15 years', ar: 'أكثر من 15 عاماً' },
    education: { en: 'LLB in Law', ar: 'بكالوريوس في القانون' },
    field: { en: 'Private and Public Law, Construction & High-Risk Commercial Advisory', ar: 'القانون الخاص والعام، عقود الإنشاءات، الاستشارات التجارية الكبرى' },
    licenses: {
      en: 'Certified before the Court of Cassation & Constitutional Court; Licensed Private Notary; Mediator in civil, commercial, & criminal matters; Private Executor.',
      ar: 'محامية مجازة أمام محكمة التمييز والمحكمة الدستورية؛ موثق خاص معتمد؛ وسيط معتمد في النزاعات المدنية والتجارية والجنائية؛ منفذ خاص معتمد.'
    },
    bio: {
      en: 'Founder and visionary behind Manal Dhahi Legal Group. She leads strategic legal advisory for multinational corporations, regional developers, and prominent entities across Bahrain and the GCC.',
      ar: 'مؤسس ورئيس مجموعة منال ضاحي القانونية، تقود الاستشارات الاستراتيجية للشركات الكبرى والمستثمرين والمطورين العقاريين في البحرين ومنطقة الخليج.'
    },
    featured: true,
  },
  {
    id: 'mahmoud-neama',
    name: { en: 'Mahmoud Neama', ar: 'محمود نعمة' },
    role: { en: 'Office Manager and Partner', ar: 'مدير المكتب والشريك' },
    department: 'operations',
    image: '/assets/team/mahmood.webp',
    experience: { en: 'More than 11 years', ar: 'أكثر من 11 عاماً' },
    education: { en: 'Business Administration & Legal Operations', ar: 'إدارة الأعمال والعمليات القانونية' },
    field: { en: 'Firm Operations, Client Relations & Practice Management', ar: 'إدارة العمليات، علاقات الموكلين، والتنسيق المؤسسي' },
    bio: {
      en: 'Mahmoud manages the firm’s office operations and coordinates day-to-day administrative and business matters. His work covers client relations, scheduling, internal follow-up, and operational support, ensuring that matters are handled efficiently and professionally across the team.',
      ar: 'يتولى إدارة العمليات التشغيلية للمكتب وتنسيق الشؤون الإدارية والتجارية اليومية ومتابعة قضايا الموكلين لضمان سير الأعمال بأعلى معايير الانضباط والاحترافية.'
    },
    featured: true,
  },
  {
    id: 'amina-bukhammas',
    name: { en: 'Amina Bukhammas', ar: 'أمينة بوخماس' },
    role: { en: 'Senior Associate', ar: 'محامٍ أول ومستشار' },
    department: 'legal',
    image: '/assets/team/amina.webp',
    experience: { en: 'More than 10 years', ar: 'أكثر من 10 أعوام' },
    education: { en: 'LLB in Law', ar: 'بكالوريوس في القانون' },
    field: { en: 'Private and Public Law, Civil & Commercial Litigation', ar: 'القانون الخاص والعام، والتقاضي المدني والتجاري' },
    licenses: {
      en: 'Certified before the Court of Cassation and Constitutional Court; Mediator in civil, commercial, and criminal matters.',
      ar: 'مجازة أمام محكمة التمييز والمحكمة الدستورية؛ وسيط قانوني معتمد في النزاعات المدنية والتجارية والجنائية.'
    },
    bio: {
      en: 'With over a decade of courtroom experience, Amina specializes in high-stakes civil litigation, complex contract enforcement, and commercial disputes before all Bahrain judicial tiers.',
      ar: 'تتمتع بخبرة تزيد عن 10 أعوام في الترافع والتقاضي في القضايا المدنية والتجارية الكبرى أمام مختلف محاكم مملكة البحرين والوساطة القضائية.'
    },
    featured: true,
  },
  {
    id: 'ahmed-elsofany',
    name: { en: 'Ahmed Elsofany', ar: 'أحمد السوفاني' },
    role: { en: 'Senior Legal Counsel', ar: 'مستشار قانوني أول' },
    department: 'legal',
    image: '/assets/team/ahmed.webp',
    experience: { en: 'More than 20 years', ar: 'أكثر من 20 عاماً' },
    education: { en: 'LLB in Law; LLM in International Commercial Law', ar: 'ليسانس الحقوق؛ ماجستير في القانون التجاري الدولي' },
    field: { en: 'Corporate and Commercial Law, Cross-Border Transactions', ar: 'قانون الشركات والتجارة الدولية والصفقات العابرة للحدود' },
    licenses: {
      en: 'Private Executor',
      ar: 'منفذ خاص معتمد'
    },
    bio: {
      en: 'With over 20 years of distinguished experience, Ahmed advises leading conglomerates and institutional investors on commercial transactions, corporate restructuring, and regulatory compliance.',
      ar: 'يتمتع بأكثر من عقدين من الخبرة في تقديم الاستشارات القانونية لكبرى الشركات والكيانات التجارية في عقود الاستثمار وهيكلة الشركات.'
    },
    featured: true,
  },
  {
    id: 'manal-yusuf',
    name: { en: 'Manal Yusuf', ar: 'منال يوسف' },
    role: { en: 'Associate', ar: 'محامٍ مشارك' },
    department: 'legal',
    image: '/assets/team/manal.webp',
    experience: { en: 'More than 7 years', ar: 'أكثر من 7 أعوام' },
    education: { en: 'LLB in Law', ar: 'بكالوريوس في القانون' },
    field: { en: 'Private Law, Property Law, and Corporate Law', ar: 'القانون الخاص، القانون العقاري، وقانون الشركات' },
    licenses: {
      en: 'Practice License',
      ar: 'إجازة ممارسة المحاماة'
    },
    bio: {
      en: 'Specializes in real estate advisory, tenancy dispute management, and corporate establishment frameworks under the latest Bahraini commercial legislations.',
      ar: 'متخصصة في الشؤون العقارية ومنازعات الإيجارات والتطوير العقاري وتسجيل الشركات وفقاً لأحدث التشريعات التجارية البحرينية.'
    }
  },
  {
    id: 'zainab-elsetiah',
    name: { en: 'Zainab Elsetiah', ar: 'زينب السطحي' },
    role: { en: 'Associate', ar: 'محامٍ مشارك' },
    department: 'legal',
    image: '/assets/team/zainab.webp',
    experience: { en: 'More than 7 years', ar: 'أكثر من 7 أعوام' },
    education: { en: 'LLB in Law', ar: 'بكالوريوس في القانون' },
    field: { en: 'Private Law, Family Law, Employment Law, and Corporate Law', ar: 'القانون الخاص، الأحوال الشخصية، قانون العمل، وقانون الشركات' },
    licenses: {
      en: 'Practice License',
      ar: 'إجازة ممارسة المحاماة'
    },
    bio: {
      en: 'Focuses on employment compliance, workforce regulations, labour dispute settlement, and family wealth preservation structures in Bahrain.',
      ar: 'متخصصة في قضايا العمل والعمال والامتثال لقوانين هيئة تنظيم سوق العمل وتنظيم التركات وإدارة الثروات العائلية.'
    }
  },
  {
    id: 'mohammed-saber',
    name: { en: 'Mohammed Saber', ar: 'محمد صابر' },
    role: { en: 'Legal Counsel', ar: 'مستشار قانوني' },
    department: 'legal',
    image: '/assets/team/saber.webp',
    experience: { en: 'More than 6 years', ar: 'أكثر من 6 أعوام' },
    education: { en: 'LLB in Law; LLM in International Commercial Law', ar: 'ليسانس حقوق؛ ماجستير في القانون التجاري الدولي' },
    field: { en: 'Corporate and Commercial Law, Execution & Debt Recovery', ar: 'قانون الشركات، التجارة، إجراءات التنفيذ واسترداد الديون' },
    licenses: {
      en: 'Private Executor',
      ar: 'منفذ خاص معتمد'
    },
    bio: {
      en: 'Specialized in enforcing judicial rulings, debt collection, commercial arbitration filings, and corporate contracts drafting.',
      ar: 'خبير في إجراءات التنفيذ القضائي، استرداد الديون التجارية، صياغة ومراجعة العقود التجارية، وإجراءات التحكيم.'
    }
  },
  {
    id: 'heba-qaheri',
    name: { en: 'Heba Qaheri', ar: 'هبة قاهري' },
    role: { en: 'Administrator', ar: 'مسؤولة الإدارة والعمليات' },
    department: 'operations',
    image: '/assets/team/heba.webp',
    experience: { en: 'More than 6 years', ar: 'أكثر من 6 أعوام' },
    education: { en: 'Bachelor in Business Administration & Accounting', ar: 'بكالوريوس في إدارة الأعمال والمحاسبة' },
    field: { en: 'Administration, Financial Operations & Client Intake', ar: 'الإدارة، الشؤون المالية، والتنسيق مع الموكلين' },
    bio: {
      en: 'She manages the firm’s administration, operations, and finance functions, supporting the smooth running of day-to-day office activities, client relations, and sales coordination.',
      ar: 'تدير الشؤون الإدارية والمالية للمكتب، وتنسق استقبال استفسارات العملاء والمتابعة الداخلية لضمان تجربة قانونية سلسة وموثوقة.'
    }
  },
  {
    id: 'mahmood-dhahi',
    name: { en: 'Mahmood Dhahi', ar: 'محمود ضاحي' },
    role: { en: 'Head of the Russian Desk', ar: 'رئيس القسم الروسي والشؤون الدولية' },
    department: 'international',
    image: '/assets/team/mahmood_dhahi.webp',
    experience: { en: 'More than 5 years', ar: 'أكثر من 5 أعوام' },
    education: { en: 'International Business & Cross-Border Legal Affairs', ar: 'الأعمال الدولية والشؤون القانونية العابرة للحدود' },
    field: { en: 'Russian & CIS Inbound Investments, Cross-Border Structuring', ar: 'استثمارات روسيا ورابطة الدول المستقلة، والهيكلة العابرة للحدود' },
    bio: {
      en: 'Mahmood leads the firm’s Russian Desk, supporting Russian-speaking clients and coordinating communication across Arabic, English, and Russian. He helps ensure clear client communication, efficient follow-up, and strong engagement with international investors entering the GCC.',
      ar: 'يقود القسم الروسي بالمكتب، ويقدم الاستشارات للمستثمرين الناطقين بالروسية في تأسيس الشركات وتملك العقارات والتوسع التجاري في أسواق الخليج.'
    },
    featured: true,
  },
  {
    id: 'anand-sarath',
    name: { en: 'Anand Sarath', ar: 'أناند ساراث' },
    role: { en: 'Digital Business Development Lead', ar: 'مسؤول التطوير الرقمي والعلاقات' },
    department: 'operations',
    image: '/assets/team/anand.webp',
    experience: { en: 'More than 3 years', ar: 'أكثر من 3 أعوام' },
    education: { en: 'Information Technology & Digital Strategy', ar: 'تكنولوجيا المعلومات والاستراتيجيات الرقمية' },
    field: { en: 'LegalTech Systems, Digital Growth & Client Outreach', ar: 'الأنظمة الرقمية القانونية والنمو المؤسسي' },
    bio: {
      en: 'Anand leads the firm’s digital business development, overseeing growth, technology adoption, and secure digital client communication infrastructure.',
      ar: 'يقود مبادرات التحول الرقمي وتطوير الأعمال بالمكتب، وتطوير البنية التحتية الآمنة لخدمات الموكلين عبر الإنترنت.'
    }
  }
];

export const LEGAL_SERVICES: LegalService[] = [
  {
    id: 'legal-consultation',
    slug: 'legal-consulting-services',
    title: { en: 'Legal Consultation & Corporate Advisory', ar: 'الاستشارات القانونية وهيكلة الشركات' },
    shortDesc: {
      en: 'Strategic, proactive legal counsel tailored to mitigate commercial risks, ensure regulatory compliance, and support sustainable business growth in Bahrain and the GCC.',
      ar: 'استشارات قانونية استباقية مصممة للحد من المخاطر التجارية وضمان الامتثال التنظيمي ودعم نمو الأعمال في البحرين والخليج.'
    },
    fullDesc: {
      en: 'Our legal consultation practice provides deep, research-based counsel covering corporate governance, regulatory compliance, commercial agreements, shareholder arrangements, and risk management. We partner with multinational corporations, financial institutions, and fast-growing enterprises to anticipate legal liabilities before they materialize.',
      ar: 'نقدم استشارات قانونية متعمقة مبنية على البحث والتحليل للشركات والمؤسسات المالية، تشمل الحوكمة، صياغة الاتفاقيات التجارية، اتفاقيات المساهمين، واستباق المخاطر قبل تفاقمها.'
    },
    iconName: 'Scale',
    badge: { en: 'Core Practice', ar: 'ممارسة رئيسية' },
    category: 'core',
    highlights: {
      en: [
        'Preventative risk assessments & commercial audits',
        'Corporate structuring & shareholder pacts',
        'Regulatory compliance with MOIC, CBB, and LMRA',
        'Bespoke contract drafting and rigorous review'
      ],
      ar: [
        'تقييم المخاطر الاستباقية والتدقيق القانوني للشركات',
        'هيكلة الشركات وصياغة اتفاقيات الشركاء والمساهمين',
        'الامتثال لمتطلبات وزارة التجارة، مصرف البحرين المركزي، وهيئة تنظيم سوق العمل',
        'صياغة العقود التجارية المعقدة ومراجعتها بدقة متناهية'
      ]
    },
    process: [
      { step: 1, title: { en: 'Preliminary Assessment', ar: 'التقييم الأولي' }, desc: { en: 'Comprehensive review of your operational model and legal requirements.', ar: 'مراجعة نموذج العمل والمتطلبات القانونية ذات الصلة.' } },
      { step: 2, title: { en: 'Legal Opinion & Strategy', ar: 'الرأي القانوني والاستراتيجية' }, desc: { en: 'Delivering clear, actionable guidance mapped against Bahraini statutes.', ar: 'تقديم مذكرة استشارية واضحة ومقترحات تنفيذية عملية.' } },
      { step: 3, title: { en: 'Implementation & Oversight', ar: 'التنفيذ والمتابعة' }, desc: { en: 'Drafting agreements, filing notices, and securing continuous compliance.', ar: 'صياغة العقود وإيداع المستندات وضمان الامتثال المستمر.' } }
    ]
  },
  {
    id: 'litigation-services',
    slug: 'litigation-services',
    title: { en: 'Litigation & Court Representation', ar: 'المحاماة والتقاضي أمام المحاكم' },
    shortDesc: {
      en: 'Relentless, licensed representation across all judicial courts in Bahrain, from the Court of First Instance up to the High Court of Appeal and Court of Cassation.',
      ar: 'تمثيل قضائي مرخص وحازم أمام كافة المحاكم البحرينية؛ الابتدائية، الاستئناف العليا، ومحكمة التمييز والمحكمة الدستورية.'
    },
    fullDesc: {
      en: 'With our lead attorneys certified before the Court of Cassation and Constitutional Court, Manal Dhahi Legal Group provides formidable courtroom advocacy. We handle commercial disputes, engineering and construction litigation, shareholder conflicts, employment claims, financial asset recovery, and criminal defense with unmatched precision.',
      ar: 'يقود فريقنا محامون مجازون أمام محكمة التمييز والمحكمة الدستورية، ونترافع باحترافية في النزاعات التجارية، القضايا الهندسية والإنشائية، خلافات الشركاء، النزاعات العمالية، واسترداد الأموال، والقضايا الجنائية.'
    },
    iconName: 'Gavel',
    badge: { en: 'Court of Cassation Certified', ar: 'مجازون أمام محكمة التمييز' },
    category: 'dispute',
    highlights: {
      en: [
        'Certified representation before the Constitutional Court & Court of Cassation',
        'Urgent injunctive relief, travel bans & precautionary asset attachments',
        'Complex commercial and construction defect disputes',
        'Enforcement of local and foreign court judgments'
      ],
      ar: [
        'ترافع معتمد أمام محكمة التمييز والمحكمة الدستورية',
        'إجراءات الحجز التحفظي المستعجل ومنع السفر والأوامر على العرائض',
        'نزاعات المقاولات وعيوب البناء المعقدة والمطالبات المالية',
        'تنفيذ الأحكام القضائية الوطنية والأجنبية'
      ]
    },
    process: [
      { step: 1, title: { en: 'Case Evidentiary Analysis', ar: 'تحليل الأدلة والملف' }, desc: { en: 'Thorough review of facts, documentation, and judicial precedents.', ar: 'دراسة الوقائع والأوراق القضائية والسوابق القضائية المماثلة.' } },
      { step: 2, title: { en: 'Pleading Strategy', ar: 'صياغة صحائف الدعوى والمذكرات' }, desc: { en: 'Drafting robust statements of claim, petitions, and legal defenses.', ar: 'إعداد اللائحة والمذكرات الجوابية وتأطير المرافعات بحنكة.' } },
      { step: 3, title: { en: 'Court Advocacy & Enforcement', ar: 'المرافعة والتنفيذ القضائي' }, desc: { en: 'Representing your position in hearings and pursuing rigorous execution.', ar: 'المرافعة أمام القضاء ومتابعة إجراءات التنفيذ لدى قاضي التنفيذ.' } }
    ]
  },
  {
    id: 'private-notary',
    slug: 'private-notary-services',
    title: { en: 'Authorized Private Notary Services', ar: 'خدمات التوثيق الخاص المعتمد' },
    shortDesc: {
      en: 'Official, ministry-licensed private notarization delivering rapid, legally enforceable attestation for commercial and civil documents at your convenience.',
      ar: 'توثيق رسمي خاص معتمد ومرخص من وزارة العدل، لتصديق المعاملات والعقود التجارية والمدنية بسرعة ومرونة فائقة.'
    },
    fullDesc: {
      en: 'As a licensed Private Notary registered with the Ministry of Justice, Islamic Affairs and Waqf in Bahrain, Mrs. Manal Dhahi and our team provide on-demand notarization of powers of attorney, articles of association, real estate contracts, board resolutions, declarations, and mortgage deeds with full legal validity.',
      ar: 'بصفتنا موثقاً خاصاً معتمداً من وزارة العدل والشؤون الإسلامية والأوقاف في مملكة البحرين، نقدم خدمات توثيق وتصديق الوكالات الرسمية، عقود تأسيس الشركات، عقود بيع العقارات، الإقرارات، وقرارات مجالس الإدارة بمرونة تامة.'
    },
    iconName: 'FileCheck',
    badge: { en: 'Ministry Licensed', ar: 'مرخص من وزارة العدل' },
    category: 'core',
    highlights: {
      en: [
        'General and special Powers of Attorney (PoA)',
        'Articles of Association & Memorandums of Association amendments',
        'Real estate declarations, sale contracts & lease agreements',
        'Bilingual notarization (Arabic & English) with mobile / on-site options'
      ],
      ar: [
        'توثيق الوكالات العامة والخاصة للأفراد والشركات',
        'توثيق عقود التأسيس وملاحق تعديل الشركات التجارية',
        'توثيق عقود بيع العقارات والإقرارات والرهونات',
        'توثيق ثنائي اللغة (عربي وإنجليزي) مع إمكانية التوثيق الميداني'
      ]
    },
    process: [
      { step: 1, title: { en: 'Document Vetting', ar: 'مراجعة وتدقيق المستندات' }, desc: { en: 'Verifying identities, authority proofs, and compliance with notary regulations.', ar: 'التحقق من الهويات الرسمية وصفات الأطراف وسلامة النصوص قانونياً.' } },
      { step: 2, title: { en: 'Attestation & Signing', ar: 'التوقيع والمصادقة' }, desc: { en: 'In-office or on-site formal execution before the licensed notary.', ar: 'التوقيع الرسمي بحضور الموثق الخاص في المكتب أو في مقر العميل.' } },
      { step: 3, title: { en: 'Official Registration', ar: 'التسجيل والأرشفة الرسمية' }, desc: { en: 'Stamping and syncing with the Bahrain Ministry of Justice electronic portal.', ar: 'الختم الرسمي والربط الإلكتروني مع بوابة وزارة العدل البحرينية.' } }
    ]
  },
  {
    id: 'legal-mediation',
    slug: 'legal-mediation-services',
    title: { en: 'Mediation & Alternative Dispute Resolution', ar: 'الوساطة القانونية وحل النزاعات بدياً' },
    shortDesc: {
      en: 'Confidential, cost-effective mediation designed to resolve commercial, civil, and construction deadlocks while preserving vital business partnerships.',
      ar: 'وساطة قانونية سرية وفعالة لحل النزاعات التجارية والمدنية ومشاريع الإنشاءات دون اللجوء للتقاضي، مع حماية العلاقات التجارية.'
    },
    fullDesc: {
      en: 'Certified in civil, commercial, and criminal mediation, our group offers neutral, skilled mediation facilitation that saves months of judicial proceedings and substantial capital. We help disputing parties reach legally binding settlement agreements enforceable under Bahraini courts.',
      ar: 'بصفتنا وسطاء قانونيين معتمدين في النزاعات المدنية والتجارية، ندير جلسات الوساطة بحيادية وحنكة تفاوضية للوصول إلى تسويات ملزمة قانوناً قابلة للتنفيذ كأحكام قضائية.'
    },
    iconName: 'Handshake',
    category: 'dispute',
    highlights: {
      en: [
        'Certified commercial, civil, and criminal dispute mediation',
        'Binding Settlement Agreements enforceable through the courts',
        'Preservation of commercial relationships and brand reputation',
        'Significant savings in time, public exposure, and legal fees'
      ],
      ar: [
        'وساطة معتمدة في النزاعات التجارية والمدنية والجزائية',
        'صياغة اتفاقيات تسوية ملزمة ونافذة بقوة السند التنفيذي',
        'صون العلاقات التجارية والسمعة المؤسسية بعيداً عن علانية المحاكم',
        'توفير هائل في الوقت وتكاليف التقاضي الطويلة'
      ]
    },
    process: [
      { step: 1, title: { en: 'Dispute Assessment', ar: 'دراسة نقاط النزاع' }, desc: { en: 'Defining key issues and assessing mediation suitability.', ar: 'تحديد نقاط الخلاف وتقييم رغبة الأطراف في الوصول لحل ودي.' } },
      { step: 2, title: { en: 'Facilitated Negotiation', ar: 'جلسات التفاوض الميسرة' }, desc: { en: 'Structured caucus and joint sessions led by a certified mediator.', ar: 'إدارة جلسات مشتركة وفردية مغلقة لتقريب وجهات النظر.' } },
      { step: 3, title: { en: 'Binding Settlement Execution', ar: 'إبرام وتوثيق محضر الصلح' }, desc: { en: 'Formulating the settlement deed and attesting it before the competent court.', ar: 'صياغة اتفاقية الصلح واعتمادها لدى المحكمة كسند تنفيذي واجب النفاذ.' } }
    ]
  },
  {
    id: 'company-formation',
    slug: 'company-formation-in-bahrain',
    title: { en: 'Company Formation & Commercial Licensing', ar: 'تأسيس الشركات والتراخيص التجارية' },
    shortDesc: {
      en: 'End-to-end guidance for foreign investors, GCC companies, and local entrepreneurs establishing W.L.L., branches, or holding structures in Bahrain.',
      ar: 'خدمات شاملة للمستثمرين الأجانب والشركات الخليجية ورواد الأعمال لتأسيس الشركات (ذ.م.م)، الفروع الأجنبية، والشركات القابضة.'
    },
    fullDesc: {
      en: 'We simplify the Bahrain business entry process through Sijilat, the Ministry of Industry and Commerce (MOIC), and regulatory authorities. From choosing the optimal entity structure (W.L.L., BSC, Foreign Branch, SPC conversion) to capital deposit, drafting constitutional documents, and securing commercial registration (CR).',
      ar: 'نرافق المستثمرين في تأسيس الكيانات التجارية عبر نظام سجلات ووزارة الصناعة والتجارة، واختيار الكيان الأمثل، وتوثيق عقود التأسيس، واستخراج السجل التجاري (CR).'
    },
    iconName: 'Building2',
    category: 'corporate',
    highlights: {
      en: [
        'Full foreign ownership (100%) eligibility structuring',
        'W.L.L., BSC (Closed), and Foreign Branch setups',
        'Golden Residency legal facilitation for investors & property owners',
        'Bank account opening assistance & LMRA establishment'
      ],
      ar: [
        'هيكلة الملكية الأجنبية الكاملة بنسبة 100% في الأنشطة المتاحة',
        'تأسيس شركات ذات مسؤولية محدودة (W.L.L) وفروع الشركات الأجنبية',
        'المساندة القانونية للإقامة الذهبية للمستثمرين وأصحاب الأعمال',
        'تسهيل فتح الحسابات المصرفية والتسجيل لدى هيئة تنظيم سوق العمل'
      ]
    },
    process: [
      { step: 1, title: { en: 'Structure Advisory', ar: 'تحديد الشكل القانوني' }, desc: { en: 'Selecting corporate type and commercial activity codes.', ar: 'تحديد الكيان التجاري المناسب والأنشطة الاقتصادية المطابقة.' } },
      { step: 2, title: { en: 'Drafting & Notarization', ar: 'الصياغة والتوثيق' }, desc: { en: 'Preparing MOA/AOA and notarizing before the Private Notary.', ar: 'إعداد عقد التأسيس وتوثيقه لدى الموثق الخاص بالمكتب.' } },
      { step: 3, title: { en: 'CR Issuance & Approvals', ar: 'صدور السجل والتراخيص' }, desc: { en: 'Finalizing MOIC approvals and activating commercial registration.', ar: 'استكمال موافقات الجهات الحكومية وإصدار السجل التجاري النهائي.' } }
    ]
  },
  {
    id: 'arbitration-bahrain',
    slug: 'arbitration-in-bahrain',
    title: { en: 'Commercial & Construction Arbitration', ar: 'التحكيم التجاري وعقود الفيديك' },
    shortDesc: {
      en: 'Expert counsel and representation in domestic and international arbitration proceedings under BCDR-AAA, GCC Arbitration Centre, and ICC frameworks.',
      ar: 'تمثيل قانوني رفيع في قضايا التحكيم التجاري المحلي والدولي أمام غرفة البحرين (BCDR) ومركز التحكيم الخليجي وغرفة التجارة الدولية (ICC).'
    },
    fullDesc: {
      en: 'Arbitration is increasingly the dispute forum of choice for major construction, energy, and cross-border commercial ventures. Our team brings deep mastery of UNCITRAL model laws, BCDR arbitration rules, and FIDIC dispute mechanisms, representing claimants and respondents, and enforcing arbitral awards locally and regionally.',
      ar: 'يعد التحكيم المسار المفضل لنزاعات الإنشاءات والاستثمار الكبرى. نمتلك دراية عميقة بقواعد الأونسيترال وغرفة البحرين وعقود الفيديك (FIDIC)، ونتولى إدارة الخصومة وتنفيذ أحكام التحكيم.'
    },
    iconName: 'ShieldAlert',
    category: 'dispute',
    highlights: {
      en: [
        'BCDR-AAA & GCC Commercial Arbitration Centre advocacy',
        'Drafting robust, enforceable arbitration clauses in contracts',
        'FIDIC DAB (Dispute Adjudication Board) proceedings',
        'Enforcement and annulment actions under the New York Convention'
      ],
      ar: [
        'الترافع أمام غرفة البحرين لتسوية المنازعات ومركز التحكيم الخليجي',
        'صياغة مشاريط وبنود التحكيم المحكمة في العقود الدولية',
        'إجراءات لجان فض النزاعات (DAB) في عقود الفيديك',
        'دعاوى بطلان وتنفيذ أحكام التحكيم بموجب اتفاقية نيويورك'
      ]
    },
    process: [
      { step: 1, title: { en: 'Tribunal Constitution', ar: 'تشكيل هيئة التحكيم' }, desc: { en: 'Appointing qualified arbitrators and drafting the terms of reference.', ar: 'اختيار وتعيين المحكمين المؤهلين وصياغة وثيقة التحكيم.' } },
      { step: 2, title: { en: 'Memorials & Evidentiary Hearings', ar: 'لوائح الدعوى وجلسات المرافعة' }, desc: { en: 'Exchanging expert reports, witness statements, and oral pleadings.', ar: 'تبادل التقارير الفنية وشهادات الخبراء والمرافعات الشفهية.' } },
      { step: 3, title: { en: 'Award Enforcement', ar: 'تنفيذ حكم التحكيم' }, desc: { en: 'Depositing the arbitral award and obtaining the writ of execution.', ar: 'إيداع الحكم واستصدار الصيغة التنفيذية عبر محكمة الاستئناف.' } }
    ]
  },
  {
    id: 'trademark-registration',
    slug: 'trademark-registration-services-in-bahrain',
    title: { en: 'Trademark Registration & Intellectual Property', ar: 'تسجيل العلامات التجارية وحماية الملكية الفكرية' },
    shortDesc: {
      en: 'Safeguard your valuable brand identity, patents, copyrights, and industrial designs across the Kingdom of Bahrain and GCC member states.',
      ar: 'حماية هويتك التجارية وبراءات الاختراع وحقوق المؤلف والنماذج الصناعية في مملكة البحرين ومجلس التعاون الخليجي.'
    },
    fullDesc: {
      en: 'We conduct comprehensive clearance searches, manage filings with the Bahrain Patent & Trademark Directorate, overcome opposition proceedings, and pursue counterfeit enforcement to ensure your intellectual capital remains strictly guarded.',
      ar: 'نتولى الفحص المسبق للعلامات، وتقديم طلبات التسجيل، ومتابعة النشر بالجريدة الرسمية، ومواجهة الاعتراضات، وملاحقة قضايا التعدي والتقليد.'
    },
    iconName: 'Award',
    category: 'corporate',
    highlights: {
      en: [
        'Comprehensive trademark clearance searches & collision checks',
        'Registration with Bahrain Directorate of Foreign Trade & IP',
        'Representation in opposition and cancellation proceedings',
        'IP licensing, franchising agreements, and enforcement lawsuits'
      ],
      ar: [
        'البحث والتقصي الشامل عن العلامات المماثلة قبل التقديم',
        'إتمام إجراءات التسجيل لدى إدارة التجارة الخارجية والملكية الصناعية',
        'الترافع في دعاوى شطب العلامات والاعتراض على التسجيل',
        'صياغة عقود الامتياز التجاري (الفرنشايز) وحماية الأسرار التجارية'
      ]
    },
    process: [
      { step: 1, title: { en: 'Search & Evaluation', ar: 'الفحص والتقييم' }, desc: { en: 'Ensuring your mark is distinctive and free of conflicting prior registrations.', ar: 'التأكد من تميز العلامة وعدم وجود تعارض مع علامات سابقة.' } },
      { step: 2, title: { en: 'Filing & Publication', ar: 'الإيداع والنشر الرسمي' }, desc: { en: 'Submitting documentation and tracking gazette publication.', ar: 'تقديم الملف ومتابعة النشر في الجريدة الرسمية لفترة الاعتراض.' } },
      { step: 3, title: { en: 'Certificate Grant', ar: 'إصدار شهادة الحماية' }, desc: { en: 'Securing the official 10-year renewable protection certificate.', ar: 'استلام الشهادة الرسمية وتوفير حماية قانونية لمدة 10 سنوات قابلة للتجديد.' } }
    ]
  },
  {
    id: 'legal-translation',
    slug: 'legal-translation-services-in-bahrain',
    title: { en: 'Certified Legal Translation Services', ar: 'الترجمة القانونية المعتمدة' },
    shortDesc: {
      en: 'Sworn, court-admissible translation for commercial agreements, litigation submissions, evidentiary documents, and corporate records.',
      ar: 'ترجمة قانونية محلفة ومعتمدة أمام المحاكم والوزارات للعقود التجارية والمستندات القضائية والوثائق الرسمية.'
    },
    fullDesc: {
      en: 'Precision is paramount in cross-border law. Our certified translation group converts complex legal texts between Arabic, English, and Russian with rigorous linguistic and jurisdictional accuracy, certified for submission to Bahrain courts and government ministries.',
      ar: 'الدقة في النصوص القانونية مسألة حاسمة. نقدم ترجمة معتمدة ودقيقة بين اللغات العربية والإنجليزية والروسية، مقبولة رسمياً لدى كافة الجهات القضائية والحكومية.'
    },
    iconName: 'Languages',
    category: 'core',
    highlights: {
      en: [
        'Certified by Bahrain Ministry of Justice for court submissions',
        'Tri-lingual proficiency: Arabic, English, and Russian',
        'Rigorous confidentiality and non-disclosure protections',
        'Express turnaround for urgent court deadlines'
      ],
      ar: [
        'معتمدة من وزارة العدل لتقديمها في ملفات القضايا',
        'كفاءة ثلاثية اللغات: العربية، الإنجليزية، والروسية',
        'حماية قصوى لسرية البيانات واتفاقيات عدم إفشاء المعلومات',
        'خدمة سريعة للمذكرات والمستندات القضائية العاجلة'
      ]
    },
    process: [
      { step: 1, title: { en: 'Document Ingestion', ar: 'استلام وتدقيق النص' }, desc: { en: 'Analyzing legal context and terminology precision.', ar: 'دراسة النص القانوني والمصطلحات التخصصية المستخدمة.' } },
      { step: 2, title: { en: 'Sworn Translation', ar: 'الترجمة القانونية المحلفة' }, desc: { en: 'Translating with fidelity to statutory intent and judicial standards.', ar: 'الترجمة بواسطة مترجمين قانونيين معتمدين مع الالتزام بالدلالة القانونية.' } },
      { step: 3, title: { en: 'Attestation & Certification', ar: 'التصديق والختم الرسمي' }, desc: { en: 'Stamping with official certified translator seal.', ar: 'وضع الختم الرسمي للمترجم المعتمد لتكون الوثيقة جاهزة للتقديم القضائي.' } }
    ]
  },
  {
    id: 'saudi-arabia-desk',
    slug: 'legal-representation-in-saudi-arabia',
    title: { en: 'Legal Representation & Advisory in Saudi Arabia (KSA)', ar: 'التمثيل القانوني والتوسع في المملكة العربية السعودية' },
    shortDesc: {
      en: 'Dedicated cross-border bridge supporting Bahraini, regional, and global enterprises expanding into the thriving Saudi market under Vision 2030.',
      ar: 'جسر قانوني متخصص لدعم الشركات البحرينية والإقليمية والعالمية في التوسع بالسوق السعودي الواعد في إطار رؤية 2030.'
    },
    fullDesc: {
      en: 'With growing economic integration between Bahrain and Saudi Arabia, our specialized KSA desk facilitates Ministry of Investment (MISA) licensing, commercial registration, RHQ (Regional Headquarters) compliance, joint venture structuring, and local counsel coordination across Riyadh, Jeddah, and the Eastern Province.',
      ar: 'نظراً للتكامل الاقتصادي الوثيق بين البحرين والمملكة العربية السعودية، يتولى فريقنا استخراج تراخيص وزارة الاستثمار (MISA)، تأسيس الشركات، الامتثال لمتطلبات المقرات الإقليمية، والتحالفات الاستراتيجية.'
    },
    iconName: 'Compass',
    badge: { en: 'GCC Cross-Border', ar: 'توسع إقليمي خليجي' },
    category: 'regional',
    highlights: {
      en: [
        'MISA (Ministry of Investment) foreign investment licensing',
        'Branch setups & joint ventures in Riyadh, Khobar, and Dammam',
        'Saudi Commercial Companies Law compliance audits',
        'Cross-border contract harmonization (Bahrain-KSA)'
      ],
      ar: [
        'استخراج تراخيص الاستثمار الأجنبي من وزارة الاستثمار السعودية (MISA)',
        'تأسيس فروع الشركات والتحالفات التجارية في الرياض والدمام والخبر',
        'التوافق مع نظام الشركات السعودي الجديد واللوائح التنفيذية',
        'مواءمة العقود العابرة للحدود بين النظامين البحريني والسعودي'
      ]
    },
    process: [
      { step: 1, title: { en: 'Feasibility & Structure', ar: 'دراسة الهيكلة والتراخيص' }, desc: { en: 'Assessing activity eligibility and MISA capital requirements.', ar: 'تحديد الأنشطة المؤهلة ومتطلبات رأس المال ورخص الاستثمار.' } },
      { step: 2, title: { en: 'Licensing & Registration', ar: 'إصدار الترخيص والسجل' }, desc: { en: 'Securing MISA license, commercial registration, and GOSI registration.', ar: 'إصدار رخصة MISA والسجل التجاري والتسجيل في التأمينات والزكاة.' } },
      { step: 3, title: { en: 'Ongoing Regional Counsel', ar: 'الدعم القانوني المستمر' }, desc: { en: 'Providing active advisory for cross-border operations and tax frameworks.', ar: 'توفير المشورة المستمرة للعقود والعمالة والضرائب العابرة للحدود.' } }
    ]
  },
  {
    id: 'russian-desk',
    slug: 'russian-desk',
    title: { en: 'Russian & International Desk', ar: 'القسم الروسي والمستثمرون الدوليون' },
    shortDesc: {
      en: 'Bespoke legal assistance for Russian-speaking investors, family offices, and multinational businesses navigating corporate entry into Bahrain and the GCC.',
      ar: 'خدمات قانونية متكاملة للمستثمرين الناطقين بالروسية والشركات الدولية لتأسيس الأعمال وإدارة الثروات في البحرين والخليج.'
    },
    fullDesc: {
      en: 'Headed by Mahmood Dhahi, our Russian Desk serves as a trusted bridge between CIS markets and the Arabian Gulf. We provide native-language counsel on foreign entity formation, capital relocation, residency programs, banking navigation, and asset protection under Bahraini jurisdiction.',
      ar: 'يقود القسم الأستاذ محمود ضاحي، حيث يوفر استشارات قانونية باللغة الروسية والإنجليزية والعربية، لمساعدة المستثمرين في نقل رؤوس الأموال، تأسيس الشركات، والحصول على الإقامة الذهبية، وفتح الحسابات البنكية.'
    },
    iconName: 'Globe',
    badge: { en: 'Multilingual Desk', ar: 'قسم دولي متخصص' },
    category: 'regional',
    highlights: {
      en: [
        'Native Russian, English, and Arabic legal communication',
        'Golden Residency legal representation for international investors',
        'Cross-border corporate holding structures in Bahrain',
        'Comprehensive real estate acquisition advisory and escrow compliance'
      ],
      ar: [
        'تواصل قانوني متكامل باللغات الروسية والإنجليزية والعربية',
        'التمثيل القانوني للحصول على الإقامة الذهبية للمستثمرين الدوليين',
        'تأسيس الشركات القابضة والملاذات الآمنة للأعمال في البحرين',
        'الاستشارات القانونية لشراء العقارات والضمانات البنكية وحسابات الضمان'
      ]
    },
    process: [
      { step: 1, title: { en: 'Multilingual Discovery', ar: 'الاستشارة والتقييم' }, desc: { en: 'Initial briefing in Russian/English to define investment strategy.', ar: 'جلسة استشارية بالروسية أو الإنجليزية لتحديد الأهداف الاستثمارية.' } },
      { step: 2, title: { en: 'Regulatory Structuring', ar: 'التنظيم القانوني والمصرفي' }, desc: { en: 'Handling notarization, legal translation, and regulatory filings.', ar: 'إعداد المستندات وترجمتها وتوثيقها واستيفاء المتطلبات المصرفية.' } },
      { step: 3, title: { en: 'Execution & Ongoing Care', ar: 'الإنجاز والمتابعة المؤسسية' }, desc: { en: 'Securing corporate registration, investor visas, and full asset safeguards.', ar: 'إتمام السجل التجاري وإصدار تأشيرات الإقامة وحماية الأصول.' } }
    ]
  },
  {
    id: 'business-legal-advisory',
    slug: 'business-legal-consultancy-in-bahrain',
    title: { en: 'Business Advisory & Corporate Governance', ar: 'استشارات الأعمال وحوكمة الشركات' },
    shortDesc: {
      en: 'C-suite strategic advisory aligning commercial objectives with strict Bahrain corporate governance codes, board mandates, and compliance frameworks.',
      ar: 'مشورة استراتيجية للإدارات التنفيذية لمواءمة الأهداف التجارية مع ميثاق حوكمة الشركات البحريني ولوائح مجالس الإدارة.'
    },
    fullDesc: {
      en: 'From restructuring troubled assets to establishing joint ventures and implementing robust corporate governance manuals, we empower executive leadership with sound legal foundations that withstand regulatory scrutiny.',
      ar: 'ندعم مجالس الإدارة في إعادة هيكلة الشركات، تحالفات المشاريع المشتركة (JVs)، وإعداد لوائح الحوكمة الداخلية وتجنب المسؤوليات الجزائية والمدنية للمدراء.'
    },
    iconName: 'Briefcase',
    category: 'corporate',
    highlights: {
      en: [
        'Corporate Governance Code compliance (MOIC & CBB)',
        'Joint venture drafting and operational protocols',
        'Executive liability shielding and directors indemnities',
        'Internal policy development, whistleblower, and ethics charters'
      ],
      ar: [
        'تطبيق ميثاق حوكمة الشركات المعتمد من وزارة التجارة ومصرف البحرين',
        'صياغة اتفاقيات المشاريع المشتركة (JVs) وحوكمة قراراتها',
        'حماية أعضاء مجلس الإدارة والإدارات التنفيذية من المسؤوليات الشخصية',
        'صياغة اللوائح الداخلية ومدونات السلوك المؤسسي والامتثال'
      ]
    },
    process: [
      { step: 1, title: { en: 'Governance Audit', ar: 'التدقيق المؤسسي' }, desc: { en: 'Reviewing current board practices and corporate charters.', ar: 'مراجعة الممارسات الحالية لمجلس الإدارة والقرارات المؤسسية.' } },
      { step: 2, title: { en: 'Manual & Policy Formulation', ar: 'إعداد اللوائح والسياسات' }, desc: { en: 'Drafting tailored governance frameworks matching company scale.', ar: 'صياغة دليل الحوكمة وسياسات تضارب المصالح والإفصاح.' } },
      { step: 3, title: { en: 'Annual Review & Compliance', ar: 'المتابعة السنوية وإعداد التقارير' }, desc: { en: 'Ensuring ongoing filings with regulatory registries.', ar: 'إعداد تقارير الحوكمة السنوية وتحديث المستندات دورياً.' } }
    ]
  },
  {
    id: 'provision-services',
    slug: 'provision-services',
    title: { en: 'Regulatory Approvals & Legal Provision Support', ar: 'الدعم القانوني واستخراج الموافقات التنظيمية' },
    shortDesc: {
      en: 'Navigating complex government permits, ministerial exceptions, statutory compliance filings, and specialized regulatory authorizations in Bahrain.',
      ar: 'استخراج التصاريح الحكومية والموافقات الوزارية والتراخيص المهنية للقطاعات الخاضعة للتنظيم الدقيق في البحرين.'
    },
    fullDesc: {
      en: 'Certain sectors — including engineering, construction, education, healthcare, and financial services — require specialized ministerial licenses. Our regulatory team bridges client operations with governmental bodies to ensure frictionless permitting.',
      ar: 'تتطلب القطاعات المتخصصة كالهندسة، العقارات، المقاولات، والخدمات المالية تراخيص نوعية خاصة؛ نضمن للعملاء استيفاء الاشتراطات والحصول على الموافقات بسرعة.'
    },
    iconName: 'CheckCircle2',
    category: 'core',
    highlights: {
      en: [
        'CRPEP (Council for Regulating Practice of Engineering Professions) filings',
        'RERA (Real Estate Regulatory Authority) developer & broker licensing',
        'Environmental protection and municipality clearances',
        'Statutory appeals against administrative rejections'
      ],
      ar: [
        'معاملات مجلس تنظيم مزاولة المهن الهندسية (CRPEP)',
        'تراخيص مؤسسة التنظيم العقاري (RERA) للمطورين والوسطاء',
        'موافقات شؤون البلديات وحماية البيئة',
        'التظلمات والطعون الإدارية ضد القرارات السلبية'
      ]
    },
    process: [
      { step: 1, title: { en: 'Statutory Screening', ar: 'حصر الاشتراطات' }, desc: { en: 'Identifying required ministerial approvals and prerequisites.', ar: 'تحديد الموافقات المطلوبة من الوزارات المعنية والمستندات اللازمة.' } },
      { step: 2, title: { en: 'Application Management', ar: 'إدارة الطلبات' }, desc: { en: 'Liaising with government inspectors and regulatory officers.', ar: 'متابعة الطلبات ميدانياً وإلكترونياً والتنسيق مع الجهات المختصة.' } },
      { step: 3, title: { en: 'Permit Issuance', ar: 'صدور الترخيص الرسمي' }, desc: { en: 'Delivering full ministerial operational authorization.', ar: 'استلام التراخيص والموافقات النهائية لبدء النشاط التجاري.' } }
    ]
  }
];

export const INDUSTRY_EXPERTISE: IndustryExpertise[] = [
  {
    id: 'construction-engineering',
    slug: 'construction-engineering',
    title: { en: 'Construction & Engineering Law', ar: 'قانون الإنشاءات والنزاعات الهندسية' },
    shortDesc: {
      en: 'The trusted legal partner for leading contractors, engineering consultancies, and developers across mega infrastructure and commercial builds in Bahrain.',
      ar: 'الشريك القانوني الموثوق لكبرى شركات المقاولات والمكاتب الهندسية والمطورين في المشاريع الإنشائية الكبرى بالبحرين.'
    },
    fullDesc: {
      en: 'Construction is one of the most litigious industries. We protect project balance sheets with proactive contract structuring (FIDIC Red, Yellow, and Silver books), delay and disruption claims, extension of time (EOT), latent defect liabilities, and engineer certificate disputes.',
      ar: 'تعد الإنشاءات من أكثر القطاعات تعرضاً للنزاعات. نحمي مشاريع عملائنا بصياغة وتدقيق عقود الفيديك (FIDIC)، مطالبات التمديد الزمني (EOT)، غرامات التأخير، المسؤولية العشرية عن عيوب البناء، ومنازعات شهادات الاستلام.'
    },
    sectors: {
      en: ['Main Contractors & EPC Firms', 'Engineering & Architectural Consultancies', 'Commercial & Residential Towers', 'Infrastructure Projects'],
      ar: ['المقاولون الرئيسيون وشركات EPC', 'المكاتب الهندسية والاستشارية', 'الأبراج السكنية والتجارية', 'مشاريع البنية التحتية الكبرى']
    },
    keyRisksManaged: {
      en: ['Liquidated damages & delay penalties', 'Calling of on-demand bank guarantees', 'Subcontractor non-performance', 'Variations & scope creep disputes'],
      ar: ['التعويضات الاتفاقية وغرامات التأخير', 'تسييل خطابات الضمان المصرفية', 'تعثر مقاولي الباطن وتوقف الأعمال', 'مطالبات الأوامر التغييرية وتجاوز التكاليف']
    },
    iconName: 'HardHat'
  },
  {
    id: 'real-estate',
    slug: 'real-estate',
    title: { en: 'Real Estate Development & Joint Property', ar: 'التطوير العقاري واتحادات الملاك' },
    shortDesc: {
      en: 'Guiding developers, property funds, and homeowners associations (HOA) through RERA compliance, off-plan sales, and property governance.',
      ar: 'إرشاد المطورين وصناديق الاستثمار العقاري واتحادات الملاك للامتثال لقوانين مؤسسة التنظيم العقاري (RERA) والبيع على الخارطة.'
    },
    fullDesc: {
      en: 'We structure off-plan sales escrow accounts, draft Master Community Declarations, handle landlord-tenant disputes before the Tenancy Dispute Committee, and ensure seamless transfer of freehold titles to GCC and international investors.',
      ar: 'نتولى هيكلة حسابات الضمان لمشاريع البيع على الخارطة، صياغة وثائق الملكية المشتركة، فض نزاعات الإيجارات أمام لجان المنازعات الإيجارية، وتوثيق عقود التملك الحر للمستثمرين الدوليين.'
    },
    sectors: {
      en: ['Licensed Real Estate Developers', 'Joint Property Associations (HOA)', 'Property Management Agencies', 'Freehold Title Investors'],
      ar: ['المطورون العقاريون المرخصون', 'اتحادات الملاك للأبراج والمجمعات', 'شركات إدارة وتأجير العقارات', 'مستثمرو مناطق التملك الحر']
    },
    keyRisksManaged: {
      en: ['Escrow account regulatory compliance', 'Off-plan purchaser defaults & refunds', 'HOA service charge collection disputes', 'Lease registration & eviction proceedings'],
      ar: ['الامتثال لاشتراطات حساب الضمان الإنشائي', 'تعثر مشتري الوحدات على الخارطة', 'تحصيل اشتراكات ورسوم اتحاد الملاك', 'تسجيل عقود الإيجار وإجراءات الإخلاء القانوني']
    },
    iconName: 'Building'
  },
  {
    id: 'architectural-design',
    slug: 'architectural-and-interior-design',
    title: { en: 'Architectural & Interior Design Protection', ar: 'حماية تصاميم العمارة والديكور' },
    shortDesc: {
      en: 'Defending copyright, BIM blueprints, digital renderings, and creative rights against unauthorized reproduction and client fee withholding.',
      ar: 'حماية حقوق المؤلف للمخططات الهندسية ونماذج BIM والتصاميم الداخلية ضد السرقة الأدبية وتخلف العملاء عن سداد الأتعاب.'
    },
    fullDesc: {
      en: 'Architectural works possess distinct legal protection under Bahrain Copyright Law. We draft robust design appointment contracts, license artistic concepts safely, and initiate litigation when creative designs are stolen by clients or third-party contractors.',
      ar: 'تتمتع الأعمال المعمارية بحماية خاصة وفق قانون حماية حق المؤلف البحريني. نصيغ عقود التكليف بالتصميم، ونضمن عدم استغلال الرسومات الهندسية دون ترخيص، ونترافع في قضايا التعدي على الملكية الفكرية.'
    },
    sectors: {
      en: ['Architectural Design Studios', 'Interior Architecture Firms', 'Landscape Architects', 'BIM Modelling Specialists'],
      ar: ['مكاتب التصميم المعماري', 'شركات التصميم الداخلي والديكور', 'استشاريو تنسيق المواقع', 'خبراء نمذجة معلومات البناء (BIM)']
    },
    keyRisksManaged: {
      en: ['Unauthorized blueprint usage & plagiarism', 'Unilateral termination without fee settlement', 'Professional indemnity liability claims', 'Joint design venture ownership'],
      ar: ['استخدام المخططات دون إذن أو نسبتها لغير صاحبها', 'إنهاء العقود تعسفياً دون صرف الأتعاب المستحقة', 'مطالبات المسؤولية المهنية عن أخطاء التصميم', 'ملكية الأفكار في التحالفات الهندسية المشتركة']
    },
    iconName: 'DraftingCompass'
  },
  {
    id: 'contracting-subcontracting',
    slug: 'contracting-subcontracting',
    title: { en: 'Contracting & Subcontracting Legal Frameworks', ar: 'عقود المقاولات ومقاولي الباطن' },
    shortDesc: {
      en: 'Safeguarding back-to-back cash flows, pay-when-paid clauses, site safety liability, and retention recovery across construction tiers.',
      ar: 'حماية التدفقات المالية، وتدقيق شروط السداد، وتوزيع المسؤوليات عن سلامة الموقع، واسترداد مبالغ الاستقطاع (Retention).'
    },
    fullDesc: {
      en: 'Subcontractors carry massive capital risk on modern construction sites. We negotiate balanced subcontract agreements, challenge harsh pay-when-paid provisions, enforce Taking Over Certificates, and recover withheld retention moneys.',
      ar: 'يتحمل مقاولو الباطن أعباءً تمويلية ومخاطر عالية في مواقع العمل. نعمل على صياغة عقود مقاولة باطن متوازنة، والحد من شروط الدفع المشروط، وتفعيل شهادات الاستلام لاسترداد المبالغ المحتجزة.'
    },
    sectors: {
      en: ['MEP (Mechanical, Electrical, Plumbing) Contractors', 'Civil & Fit-out Contractors', 'Specialist Steel & Structural Fabricators', 'Earthwork & Foundation Contractors'],
      ar: ['مقاولو الأعمال الكهروميكانيكية (MEP)', 'مقاولو التشطيبات والإنشاءات المدنية', 'مصنعو وموردو الهياكل الفولاذية', 'مقاولو الحفر والأساسات العميقة']
    },
    keyRisksManaged: {
      en: ['Pay-when-paid enforceability challenges', 'Failure to issue Taking-Over Certificate (TOC)', 'Unjustified backcharges by main contractor', 'Workplace injury and criminal investigations'],
      ar: ['بطلان أو تعديل شروط السداد المرتبط بسداد المالك', 'المماطلة في تسليم شهادة إنجاز الأعمال (TOC)', 'الخصومات العشوائية وفروقات الأسعار من المقاول العام', 'المسؤولية الجنائية والمدنية عن إصابات العمل']
    },
    iconName: 'Wrench'
  },
  {
    id: 'suppliers-manufacturers',
    slug: 'construction-suppliers-and-manufacturers',
    title: { en: 'Construction Suppliers & Materials Manufacturers', ar: 'موردو ومصنعو مواد البناء' },
    shortDesc: {
      en: 'Securing trade credit, delivery milestone terms, cross-border logistics, and protecting supplier lien rights under Bahrain commercial law.',
      ar: 'حماية التسهيلات الائتمانية التجارية، وعقود التوريد المتدرج، وسلاسل الإمداد، وحفظ حقوق الامتياز القانونية للبائعين والمصنعين.'
    },
    fullDesc: {
      en: 'From ready-mix concrete and structural steel to architectural glazing and HVAC equipment, we prepare enforceable supply contracts with personal guarantees, security cheques, reservation of title clauses, and rapid debt enforcement mechanisms.',
      ar: 'من الخرسانة الجاهزة والحديد الإنشائي إلى الألمنيوم وأنظمة التكييف، نصيغ عقود توريد محكمة تتضمن الضمانات الشخصية، وسندات لأمر، وشرط الاحتفاظ بالملكية حتى السداد الكامل، مع استرداد مستحقات التوريد بحزم.'
    },
    sectors: {
      en: ['Ready-mix & Cement Providers', 'Rebar & Structural Steel Importers', 'Sanitary, Tile & Cladding Manufacturers', 'Heavy Plant & Machinery Leasing'],
      ar: ['موردو الخرسانة والإسمنت', 'مستوردو ومصنعو حديد التسليح', 'مصانع السيراميك والكلادينج والواجهات الزجاجية', 'شركات تأجير المعدات والآليات الثقيلة']
    },
    keyRisksManaged: {
      en: ['Bad debt accumulation & contractor insolvency', 'Unsubstantiated material rejection claims', 'Retention of title disputes upon site installation', 'Shipping & port clearance delays'],
      ar: ['تراكم الديون المعدومة وإفلاس المقاولين', 'الادعاء غير المبرر بوجود عيوب في المواد الموردة', 'نزاعات استرداد البضائع المحتفظ بملكيتها', 'غرامات وتأخيرات الشحن والتخليص الجمركي']
    },
    iconName: 'Factory'
  },
  {
    id: 'corporate-matters',
    slug: 'commercial-corporate-matters',
    title: { en: 'Commercial Transactions & Corporate Governance', ar: 'المعاملات التجارية وحوكمة الشركات' },
    shortDesc: {
      en: 'Advising family-owned businesses, institutional investors, and regional trading companies on commercial compliance and restructuring.',
      ar: 'تقديم المشورة الاستراتيجية للشركات العائلية وصناديق الاستثمار والشركات التجارية في كافة جوانب الامتثال والحوكمة.'
    },
    fullDesc: {
      en: 'We guide companies through acquisitions, shareholder exits, commercial agency agreements, distributions, and corporate winding-up, ensuring that enterprise operations remain legally insulated in a dynamic GCC economy.',
      ar: 'نوجه الشركات في عمليات الاستحواذ، تخارج الشركاء، عقود الوكالات التجارية، التوزيع الحصري، وتصفية الشركات، مع توفير مظلة قانونية حصينة تحمي استمرارية الأعمال.'
    },
    sectors: {
      en: ['Family Business Conglomerates', 'Wholesale & Retail Distributors', 'Financial Advisory & Wealth Offices', 'Tech Startups & Venture Entities'],
      ar: ['مجموعات الشركات العائلية الكبرى', 'شركات الاستيراد والتوزيع والتجزئة', 'المكاتب المالية وإدارة الأصول', 'الشركات التقنية الناشئة والمشاريع الريادية']
    },
    keyRisksManaged: {
      en: ['Deadlock in family shareholder voting', 'Commercial agency non-compete breaches', 'Regulatory sanctions from Ministry of Industry', 'Executive employment terminations'],
      ar: ['نزاعات وحالات انسداد التصويت بين الشركاء', 'مخالفات شروط حظر المنافسة في الوكالات التجارية', 'الجزاءات الإدارية والغرامات الصادرة من وزارة التجارة', 'إنهاء عقود كبار التنفيذيين والتعويضات العمالية']
    },
    iconName: 'Briefcase'
  }
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 'buying-property-india',
    slug: 'buying-property-in-bahrain-from-india-checks-before-a-deposit-294',
    title: {
      en: 'Buying Property in Bahrain from India: Checks Before a Deposit',
      ar: 'شراء عقار في البحرين من الهند: فحوصات قانونية حاسمة قبل دفع العربون'
    },
    category: { en: 'Real Estate Law', ar: 'القانون العقاري' },
    date: 'February 2025',
    readTime: { en: '6 min read', ar: '6 دقائق قراءة' },
    author: { en: 'Manal Dhahi Legal Team', ar: 'فريق منال ضاحي القانوني' },
    image: '/assets/blogs/buying-property-india.png',
    excerpt: {
      en: 'Crucial due diligence steps non-resident Indian (NRI) investors and foreign nationals must perform before putting down any deposit on property in Bahrain freehold areas.',
      ar: 'خطوات التدقيق القانوني الإلزامية للمستثمرين الأجانب وغير المقيمين للتحقق من سلامة العقار وسجل الملكية والضمانات البنكية قبل تحويل العربون.'
    },
    content: {
      en: `Investing in Bahrain real estate offers compelling advantages for international buyers, including 100% freehold ownership in designated investment zones, zero property tax, and eligibility for the coveted 10-year Bahrain Golden Residency. However, transferring deposits without rigorous legal verification creates substantial capital risk.\n\nKey checks before depositing funds include:\n1. Title Deed & Encumbrance Verification: Confirming the title deed with the Survey & Land Registration Bureau (SLRB) to ensure no mortgages, seizures, or travel-related freezing orders exist on the asset.\n2. RERA Developer Licensing & Off-Plan Escrow: For off-plan purchases, verify that the project is officially registered with the Real Estate Regulatory Authority (RERA) and that all payment milestones are directed strictly to the approved project escrow account, never to a developer's private account.\n3. Master Community Declaration & HOA Fees: Reviewing service charges, communal area entitlements, and developer repair obligations.\n4. Golden Residency Thresholds: Ensuring the property value meets the statutory BD 200,000 threshold for the Golden Residency visa program if residency is a primary motivation.\n\nOur property law specialists assist foreign purchasers with complete title search, bilingual contract review, and safe escrow coordination.`,
      ar: `يمثل الاستثمار العقاري في مملكة البحرين فرصة استثنائية للمستثمرين الدوليين نظراً لامتيازات التملك الحر بنسبة 100% في مناطق التطوير المعتمدة، وانعدام الضرائب العقارية، وإمكانية الحصول على الإقامة الذهبية. ومع ذلك، فإن تحويل مبالغ العربون دون تدقيق قانوني صارم قد يعرض المستثمر لمخاطر جمة.\n\nالفحوصات القانونية الأساسية قبل دفع العربون:\n1. التحقق من السجل العقاري: مطابقة بيانات وثيقة الملكية لدى جهاز المساحة والتسجيل العقاري والتأكد من خلو العقار من أي رهونات بنكية أو حجوزات قضائية.\n2. تراخيص مؤسسة التنظيم العقاري (RERA) وحساب الضمان: في مشاريع البيع على الخارطة، يجب التحقق من قيد المطور والمشروع وسداد الدفعات حصراً في حساب الضمان المصرفي المعتمد للمشروع.\n3. لائحة إدارة العقار المشترك والتكاليف الخدمية: الاطلاع على التزامات المطور ورسوم الصيانة السنوية المفروضة على الوحدة.\n4. شروط الإقامة الذهبية: التأكد من استيفاء العقار للحد المالي المطلوب (200 ألف دينار بحريني) في حال الرغبة في التقديم على الإقامة الذهبية.`
    },
    tags: ['Real Estate', 'Foreign Ownership', 'Bahrain Law', 'Golden Residency']
  },
  {
    id: 'lease-registration-guide',
    slug: 'lease-agreement-registration-in-bahrain-a-practical-guide-293',
    title: {
      en: 'Lease Agreement Registration in Bahrain: A Practical Guide',
      ar: 'تسجيل عقود الإيجار في البحرين: الدليل العملي والإجرائي'
    },
    category: { en: 'Real Estate Law', ar: 'القانون العقاري' },
    date: 'January 2025',
    readTime: { en: '5 min read', ar: '5 دقائق قراءة' },
    author: { en: 'Manal Dhahi', ar: 'منال ضاحي' },
    image: '/assets/blogs/lease-registration.png',
    excerpt: {
      en: 'Why registering your residential or commercial lease with the Municipality is a mandatory legal prerequisite before Bahraini courts and tenancy committees.',
      ar: 'لماذا يُعد تسجيل عقد الإيجار لدى شؤون البلديات شرطاً قانونياً جوهرياً لقبول أي دعوى أو مطالبة أمام لجنة منازعات إيجار العقارات.'
    },
    content: {
      en: `Under Bahrain Law No. 27 of 2014 (the Real Estate Lease Law), registering lease agreements with the relevant municipality is not a mere bureaucratic formality — it is a mandatory statutory obligation. Unregistered leases cannot be relied upon before the Rent Disputes Committee, depriving both landlords and tenants of judicial enforcement.\n\nCritical legal implications of registration:\n- Eviction Rights: Landlords cannot petition for eviction due to non-payment or breach unless the lease is formally registered.\n- Electricity & Commercial Licensing: Commercial tenants cannot secure or renew their Commercial Registration (CR) or activate utility accounts without an authenticated municipality lease.\n- Rent Increase Protections: The law strictly caps rent increases (5% for residential, 7% for commercial) after the statutory protected lease term, enforceable only when the initial lease commencement date is registered.\n\nOur team ensures your lease agreements are drafted with clear jurisdictional protections and registered accurately across all Bahrain governorates.`,
      ar: `وفقاً لأحكام قانون إيجار العقارات رقم 27 لسنة 2014 في مملكة البحرين، فإن تسجيل عقد الإيجار لدى البلدية المختصة ليس مجرد إجراء روتيني، بل هو التزام قانوني حتمي يترتب على إغفاله عدم قبول أي دعوى أمام لجنة منازعات إيجار العقارات.\n\nأهم الآثار القانونية للتسجيل:\n- الحق في طلب الإخلاء: لا تقبل دعوى المؤجر للمطالبة بالإخلاء أو الأجرة المتأخرة ما لم يكن عقد الإيجار مسجلاً رسمياً.\n- السجلات التجارية وتوصيل الخدمات: لا يمكن للمستأجر التجاري قيد السجل التجاري أو نقل العنوان لدى وزارة التجارة دون إثبات عقد إيجار مسجل.\n- ضوابط زيادة الأجرة: يحدد القانون نسباً قصوى لزيادة الأجرة (5% للسكني و7% للتجاري) بعد انقضاء المدة القانونية، ولا يعتد بتلك المدد إلا بتسجيل العقد.`
    },
    tags: ['Lease Agreements', 'Rent Disputes', 'Tenancy Law', 'Municipalities']
  },
  {
    id: 'lmra-work-permit',
    slug: 'why-hiring-in-bahrain-still-requires-an-lmra-work-permit-288',
    title: {
      en: 'Why Hiring in Bahrain Still Requires an LMRA Work Permit',
      ar: 'لماذا يظل توظيف العمالة في البحرين خاضعاً لتصريح عمل هيئة تنظيم سوق العمل؟'
    },
    category: { en: 'Labour Law', ar: 'قانون العمل' },
    date: 'December 2024',
    readTime: { en: '5 min read', ar: '5 دقائق قراءة' },
    author: { en: 'Zainab Elsetiah', ar: 'زينب السطحي' },
    image: '/assets/blogs/lmra-work-permit.webp',
    excerpt: {
      en: 'A comprehensive legal review of Bahrain Labour Market Regulatory Authority (LMRA) compliance, Bahrainisation quotas, and employer liabilities.',
      ar: 'مراجعة قانونية شاملة لضوابط هيئة تنظيم سوق العمل (LMRA)، ونسب البحرنة الإلزامية، ومسؤوليات أصحاب العمل والشركات لتفادي الغرامات والعقوبات.'
    },
    content: {
      en: `Operating a commercial enterprise in Bahrain requires strict alignment with the Labour Market Regulatory Authority (LMRA) and Law No. 19 of 2006. Even with recent flexible workforce initiatives, hiring any foreign national without an active, employer-linked work permit incurs severe criminal fines and operational blacklisting.\n\nKey compliance imperatives:\n- Bahrainisation Quotas: Commercial entities must maintain specified percentages of Bahraini nationals to unlock foreign visa allocations.\n- Wage Protection System (WPS): Employers are legally mandated to disburse salaries through licensed banks, creating an auditable electronic trail for the Ministry of Labour.\n- Criminal Sanctions for Illegal Employment: Penalties include fines ranging from BD 1,000 to BD 4,000 per unauthorized worker, immediate deportation, and suspension of all corporate commercial activities.\n\nOur legal advisory ensures your employment contracts and workforce protocols comply fully with the Bahrain Labour Law.`,
      ar: `يخضع تشغيل العمالة في مملكة البحرين لأحكام القانون رقم 19 لسنة 2006 بشأن تنظيم سوق العمل وقانون العمل في القطاع الأهلي. ويعد تشغيل أي عامل أجنبي دون تصريح عمل سارٍ مخالفة جسيمة ترتب غرامات مالية مشددة ووقف المعاملات التجارية للشركة.\n\nالاشتراطات القانونية الحاكمة:\n- نسب البحرنة: إلزام المنشآت بتحقيق نسبة معينة من العمالة الوطنية كشرط لإصدار وتجديد تصاريح العمل الأجنبية.\n- نظام حماية الأجور (WPS): وجوب تحويل رواتب العمال عبر البنوك المعتمدة لإثبات الوفاء بالحقوق العمالية.\n- العقوبات الجنائية: غرامات تصل إلى 4,000 دينار عن كل عامل مخالف، مع إمكانية الإبعاد وحظر المنشأة من استقدام عمالة جديدة.`
    },
    tags: ['LMRA', 'Labour Law', 'Bahrainisation', 'Employment Compliance']
  },
  {
    id: 'alternative-penalties',
    slug: 'alternative-penalties-bahrain-criminal-law-287',
    title: {
      en: 'Alternative Penalties in Bahrain Criminal Law',
      ar: 'العقوبات البديلة في القانون الجنائي البحريني وآليات تطبيقها'
    },
    category: { en: 'Criminal Law', ar: 'القانون الجنائي' },
    date: 'November 2024',
    readTime: { en: '7 min read', ar: '7 دقائق قراءة' },
    author: { en: 'Manal Dhahi', ar: 'منال ضاحي' },
    image: '/assets/blogs/alternative-penalties.webp',
    excerpt: {
      en: 'How the Alternative Penalties and Measures Law in Bahrain provides progressive rehabilitative pathways instead of custodial prison sentences.',
      ar: 'كيف أحدث قانون العقوبات والتدابير البديلة في البحرين نقلة نوعية عبر إتاحة بدائل إصلاحية وتأهيلية تسهم في حماية النسيج الاجتماعي والأعمال.'
    },
    content: {
      en: `Bahrain's Law No. 18 of 2017 regarding Alternative Penalties and Measures marks a pioneering legislative milestone in modern Middle Eastern criminal jurisprudence. The law affords convicted individuals and first-time offenders the opportunity to serve sentences through community service, electronic surveillance, restitution, or attending rehabilitation programs rather than confinement in prison facilities.\n\nEligible alternative measures include:\n- Community Service: Engaging in unpaid public benefit work for a prescribed number of hours.\n- Home Confinement & Electronic Tagging: Monitoring via satellite ankle bracelet.\n- Prohibitions: Barring attendance at designated venues, contacting victims, or practicing specific trades.\n- Reparation & Restitution: Repairing the damage or compensating the aggrieved party in financial and property matters.\n\nOur certified litigators possess extensive experience petitioning the Execution of Sentences Directorate and courts for the substitution of custodial penalties with approved alternative programs.`,
      ar: `يُعد القانون رقم 18 لسنة 2017 بشأن العقوبات والتدابير البديلة في مملكة البحرين طفرة تشريعية حديثة تهدف إلى استبدال العقوبات السالبة للحرية بتدابير إصلاحية تعزز إعادة دمج المحكوم عليهم في المجتمع وتصون استقرارهم الأسري والمهني.\n\nأبرز صور العقوبات البديلة المقررة:\n- العمل في خدمة المجتمع: أداء أعمال تطوعية في جهات حكومية ونفع عام محددة.\n- الإقامة الجبرية والمراقبة الإلكترونية: تقييد الحركة في نطاق جغرافي بواسطة السوار الإلكتروني.\n- حظر ارتياد أماكن محددة أو ممارسة مهنة معينة.\n- إصلاح الضرر وجبر الأذى: سداد التعويضات وإعادة الحال إلى ما كان عليه في النزاعات المالية.\n\nيتولى محامونا تقديم الطلبات القانونية أمام قاضي تنفيذ العقاب ومتابعة التقارير الدورية لاستبدال العقوبات المقضي بها.`
    },
    tags: ['Criminal Law', 'Alternative Penalties', 'Bahrain Courts', 'Rehabilitation']
  },
  {
    id: 'branch-vs-subsidiary',
    slug: 'branch-vs-subsidiary-in-bahrain-285',
    title: {
      en: 'Branch vs Subsidiary in Bahrain: Which Structure Is Right for Your Business?',
      ar: 'فرع شركة أجنبية أم شركة تابعة في البحرين: أي الهيكلتين أنسب لتوسعك؟'
    },
    category: { en: 'Company Formation', ar: 'تأسيس الشركات' },
    date: 'October 2024',
    readTime: { en: '6 min read', ar: '6 دقائق قراءة' },
    author: { en: 'Ahmed Elsofany', ar: 'أحمد السوفاني' },
    image: '/assets/blogs/branch-subsidiary.webp',
    excerpt: {
      en: 'Detailed comparative analysis of legal liability, tax considerations, and operational autonomy when establishing a branch office vs a W.L.L. subsidiary.',
      ar: 'مقارنة قانونية وضريبية شاملة بين تأسيس فرع شركة أجنبية وتأسيس شركة ذات مسؤولية محدودة (W.L.L) من حيث حدود المسؤولية والسرعة التشغيلية.'
    },
    content: {
      en: `When expanding into Bahrain, international corporations face a pivotal structuring question: Should we register a Foreign Branch Office or incorporate a local Subsidiary (typically a With Limited Liability - W.L.L. entity)?\n\n1. Legal Liability:\n- Branch Office: An extension of the foreign parent. The parent company remains fully liable for all debts, contract breaches, and judgments rendered against the Bahrain branch.\n- W.L.L. Subsidiary: An independent corporate legal personality. The parent company's liability is strictly ring-fenced to its subscribed capital share.\n\n2. Commercial Activity Scope:\n- Branch offices are generally restricted to the operational activities already authorized on the parent company's license.\n- A W.L.L. can explore multiple designated commercial activities in Bahrain, subject to regulatory approvals.\n\n3. Bank Guarantees & Tendering:\n- In large infrastructure bids, branches often leverage the parent's audited balance sheet and global credit ratings more smoothly than a newly formed subsidiary.\n\nOur corporate attorneys evaluate your commercial objectives to architect the most protective and tax-efficient vehicle.`,
      ar: `عند اتخاذ قرار التوسع التجاري في مملكة البحرين، يبرز التساؤل الجوهري حول المفاضلة بين فتح فرع لشركة أجنبية (Branch) أو تأسيس شركة محلية تابعة ذات مسؤولية محدودة (W.L.L).\n\nأوجه المقارنة القانونية:\n1. حدود المسؤولية: في فرع الشركة، تظل الشركة الأم مسؤولة مسؤولية غير محدودة عن كافة التزامات وديون الفرع في البحرين، بينما في الشركة التابعة (W.L.L)، تنفصل الذمة المالية وتقتصر مسؤولية الشركة الأم على مقدار حصتها في رأس المال.\n2. نطاق الأنشطة التجارية: يقتصر الفرع على ممارسة ذات الأنشطة المرخصة للشركة الأم، في حين يمكن للشركة التابعة إضافة أنشطة تجارية وخدمية متعددة.\n3. المناقصات الحكومية والملاءة المالية: يتيح الفرع الاستفادة المباشرة من الملاءة المالية والخبرات السابقة للشركة الأم في المناقصات الكبرى.`
    },
    tags: ['Company Formation', 'W.L.L.', 'Foreign Investment', 'Corporate Law']
  },
  {
    id: 'ksa-expand-bahrain',
    slug: 'how-can-companies-in-the-kingdom-of-saudi-arabia-expand-their-business-to-bahrain-284',
    title: {
      en: 'How Companies in Saudi Arabia Can Expand Their Business to Bahrain',
      ar: 'كيف يمكن للشركات السعودية التوسع وتأسيس أعمالها في مملكة البحرين؟'
    },
    category: { en: 'Cross-Border Advisory', ar: 'الاستشارات الإقليمية' },
    date: 'September 2024',
    readTime: { en: '6 min read', ar: '6 دقائق قراءة' },
    author: { en: 'Mahmoud Neama', ar: 'محمود نعمة' },
    image: '/assets/blogs/ksa-expand-bahrain.webp',
    excerpt: {
      en: 'The fast-track legal pathway for Saudi enterprises establishing corporate entities, acquiring commercial property, and leveraging the GCC Unified Agreement.',
      ar: 'المسار القانوني السريع للشركات السعودية لتأسيس الفروع، وتملك الأصول، والاستفادة من الاتفاقية الاقتصادية الخليجية الموحدة وتسهيلات جسر الملك فهد.'
    },
    content: {
      en: `With the King Fahd Causeway facilitating billions in trade and seamless travel between Khobar and Manama, Saudi enterprises frequently establish strategic presences in Bahrain to optimize supply chains, manage regional cash flows, and access competitive overhead environments.\n\nUnder the GCC Unified Economic Agreement, Saudi nationals and Saudi-owned entities enjoy national treatment in Bahrain, granting 100% ownership rights across virtually all commercial activities with zero foreign investment restrictions.\n\nKey steps in the expansion workflow:\n1. Corporate Resolution: Board resolution notarized in KSA authorizing the Bahrain establishment and appointing legal representatives.\n2. Sijilat Fast-Track Filing: Registering the entity with the Ministry of Industry and Commerce.\n3. Municipality & Bank Onboarding: Securing compliant office space and opening corporate accounts with Bahraini retail or wholesale banks.\n4. Dual-Jurisdiction Tax & VAT Alignment: Coordinating cross-border transactions to align with Bahrain's 10% VAT and Saudi Arabia's 15% VAT mechanisms.\n\nOur KSA Desk provides end-to-end guidance from document apostille to commercial launch.`,
      ar: `يمثل جسر الملك فهد شرياناً حيوياً يربط الاقتصادين السعودي والبحريني، مما يجعل البحرين الوجهة الاستراتيجية الأولى للشركات السعودية الراغبة في توسيع عملياتها اللوجستية والتجارية.\n\nبموجب الاتفاقية الاقتصادية الموحدة لدول مجلس التعاون، يعامل المستثمر السعودي والشركات السعودية معاملة المواطن البحريني، مما يتيح التملك الكامل بنسبة 100% في كافة الأنشطة التجارية تقريباً دون قيود استثمارية أجنبية.\n\nخطوات التوسع المؤسسي:\n1. القرار المؤسسي: استصدار وتوثيق قرار مجلس الإدارة في السعودية بالموافقة على فتح الفرع وتفويض الممثل القانوني.\n2. التقديم عبر نظام سجلات: إيداع المستندات واستصدار السجل التجاري المبدئي والنهائي بسرعة قياسية.\n3. فتح الحسابات البنكية ومقر العمل: توثيق عقد الإيجار وفتح الحساب التجاري لدى البنوك البحرينية.\n4. التنسيق الضريبي (ضريبة القيمة المضافة): تنظيم الفواتير البينية ومراعاة فروقات ضريبة القيمة المضافة (10% في البحرين مقابل 15% في السعودية).`
    },
    tags: ['Saudi Arabia', 'GCC Business', 'Company Formation', 'Cross-Border']
  },
  {
    id: 'trademark-mistakes',
    slug: 'seven-trademark-registration-mistakes-to-avoid-in-bahrain-281',
    title: {
      en: 'Seven Trademark Registration Mistakes to Avoid in Bahrain',
      ar: 'سبعة أخطاء شائعة في تسجيل العلامات التجارية بالبحرين يجب تجنبها'
    },
    category: { en: 'Intellectual Property', ar: 'الملكية الفكرية' },
    date: 'August 2024',
    readTime: { en: '5 min read', ar: '5 دقائق قراءة' },
    author: { en: 'Mohammed Saber', ar: 'محمد صابر' },
    image: '/assets/blogs/trademark.webp',
    excerpt: {
      en: 'Critical errors in brand filings, generic wording, classification blunders, and gazette notice oversights that invalidate valuable trademarks.',
      ar: 'أخطاء فادحة في تصنيف السلع، والمصطلحات الوصفية العامة، وإغفال فترات الاعتراض بالجريدة الرسمية قد تحرمك من حماية علامتك التجارية.'
    },
    content: {
      en: `Securing trademark protection under Bahrain Law No. 6 of 2014 (GCC Trademark Law) is vital to preventing brand infringement. Yet many corporations commit costly errors during the filing process.\n\nThe 7 most damaging mistakes include:\n1. Failing to conduct a prior clearance search across Bahrain and GCC databases.\n2. Using purely descriptive or generic terms that lack legal distinctiveness.\n3. Incorrect Nice Classification selection, leaving vital business services unprotected.\n4. Overlooking the 60-day gazette publication window, missing the chance to oppose infringing marks.\n5. Neglecting Arabic phonetic transliteration filings alongside the English brand.\n6. Delaying registration until after marketing campaigns launch.\n7. Forgetting that trademark rights expire after 10 years without timely renewal.\n\nOur IP attorneys safeguard brand value with comprehensive filing and litigation enforcement.`,
      ar: `يضمن قانون العلامات التجارية لدول مجلس التعاون (القانون رقم 6 لسنة 2014 في البحرين) حماية محكمة للهوية التجارية، إلا أن ارتكاب أخطاء إجرائية قد يؤدي إلى رفض التسجيل أو ضياع حقوق الحماية.\n\nأبرز 7 أخطاء شائعة:\n1. عدم إجراء الفحص المسبق للعلامات المشابهة والمسجلة مسبقاً في البحرين والخليج.\n2. اختيار أسماء وصفية عامة تفتقر إلى عنصر الابتكار والتمييز.\n3. الاختيار الخاطئ لفئات تصنيف نيس (Nice Classification) مما يترك أنشطة حيوية بلا حماية.\n4. إغفال مهلة الـ 60 يوماً للنشر في الجريدة الرسمية لمواجهة أي اعتراضات.\n5. تسجيل العلامة بالإنجليزية فقط وإهمال تسجيل رسمها الصوتي واللفظي باللغة العربية.\n6. تأخير بدء إجراءات التسجيل لما بعد إطلاق الحملات التسويقية والمنتجات.\n7. إهمال التجديد الدوري للعلامة بعد انقضاء مدة الحماية المقررة (10 سنوات).`
    },
    tags: ['Trademarks', 'Intellectual Property', 'Brand Protection', 'Commercial Law']
  },
  {
    id: 'commercial-arbitration-guide',
    slug: 'commercial-arbitration-in-bahrain-a-beginners-guide-280',
    title: {
      en: "Commercial Arbitration in Bahrain: A Beginner's Guide",
      ar: 'التحكيم التجاري في مملكة البحرين: دليل شامل للمبتدئين والشركات'
    },
    category: { en: 'Arbitration', ar: 'التحكيم وفض النزاعات' },
    date: 'July 2024',
    readTime: { en: '6 min read', ar: '6 دقائق قراءة' },
    author: { en: 'Amina Bukhammas', ar: 'أمينة بوخماس' },
    image: '/assets/blogs/arbitration.webp',
    excerpt: {
      en: 'How the UNCITRAL model law and BCDR-AAA framework empower parties to resolve high-value cross-border disputes with confidentiality and finality.',
      ar: 'كيف يسهم قانون التحكيم المستند إلى الأونسيترال وغرفة البحرين لتسوية المنازعات في حسم الخلافات التجارية بسرية تامة وأحكام نافذة دولياً.'
    },
    content: {
      en: `Bahrain Law No. 9 of 2015 adopting the UNCITRAL Model Law on International Commercial Arbitration positions the Kingdom as one of the most arbitration-friendly jurisdictions in the Middle East. Unlike traditional court litigation, arbitration affords parties the autonomy to select expert arbitrators, determine the language and seat of arbitration, and maintain absolute commercial privacy.\n\nEnforcing Arbitral Awards:\nUnder the 1958 New York Convention (to which Bahrain is a contracting state), arbitral awards rendered in Bahrain are recognized and enforceable in more than 165 countries worldwide with minimal grounds for court refusal.\n\nWe draft custom dispute resolution clauses and represent clients before the BCDR-AAA, GCC Arbitration Centre, and ad-hoc tribunals.`,
      ar: `يضع القانون رقم 9 لسنة 2015 بإصدار قانون التحكيم (المتبني لقانون الأونسيترال النموذجي) مملكة البحرين في مصاف المراكز التحكيمية العالمية الرائدة. ويتيح التحكيم للشركات حرية اختيار المحكمين المتخصصين، وتحديد لغة ومكان التحكيم، وضمان سرية الإجراءات وتجنب علانية الجلسات.\n\nتنفيذ أحكام التحكيم:\nبفضل انضمام البحرين لاتفاقية نيويورك لعام 1958، تتمتع الأحكام التحكيمية الصادرة في البحرين بالقوة التنفيذية في أكثر من 165 دولة حول العالم، مع اقتصار أسباب رفض التنفيذ على حالات حصرية ضيقة.`
    },
    tags: ['Arbitration', 'BCDR-AAA', 'New York Convention', 'Dispute Resolution']
  },
  {
    id: 'construction-guarantees',
    slug: 'a-guide-to-construction-guarantees-in-bahrain-279',
    title: {
      en: 'A Guide to Construction Guarantees in Bahrain',
      ar: 'دليل الضمانات البنكية والمصرفية في عقود المقاولات بالبحرين'
    },
    category: { en: 'Construction Law', ar: 'قانون الإنشاءات' },
    date: 'June 2024',
    readTime: { en: '7 min read', ar: '7 دقائق قراءة' },
    author: { en: 'Manal Dhahi', ar: 'منال ضاحي' },
    image: '/assets/blogs/construction-guarantees.webp',
    excerpt: {
      en: 'Understanding performance bonds, advance payment guarantees, retention money, and preventing abusive guarantee encashment under Bahrain law.',
      ar: 'التمييز القانوني بين ضمان حسن التنفيذ، وخطاب ضمان الدفعة المقدمة، ومبالغ الاستقطاع، وكيفية استصدار أوامر قضائية لوقف التسييل التعسفي.'
    },
    content: {
      en: `Bank guarantees are the bedrock of security in construction and engineering contracts throughout Bahrain. Under Bahrain Commercial Code Law No. 7 of 1987, letters of guarantee are autonomous, independent commitments by the issuing bank to pay on first written demand without requiring proof of default.\n\nThis creates acute vulnerability for contractors when an employer threatens unfair liquidation. However, Bahraini courts retain the statutory authority to issue urgent precautionary injunctions stopping bank guarantee encashment upon prima facie proof of employer fraud or serious dispute.\n\nKey guarantee types covered:\n- Tender Bonds (Bid Bonds)\n- Advance Payment Guarantees (APG)\n- Performance Bonds (typically 10% of contract value)\n- Maintenance & Defects Liability Guarantees\n\nOur construction litigation team acts swiftly to preserve cash flow and challenge wrongful guarantee calls.`,
      ar: `تعتبر خطابات الضمان المصرفية الركيزة الأساسية لضمان الوفاء بالالتزامات في عقود الإنشاءات والمقاولات. ووفقاً لقانون التجارة البحريني رقم 7 لسنة 1987، يعتبر خطاب الضمان التزاماً بنكياً مجرداً ومستقلاً عن العقد الأصلي، يلتزم البنك بسداده عند أول طلب دون حاجة لحكم قضائي.\n\nيمثل هذا الاستقلال خطراً داهماً على المقاول في حالات التسييل التعسفي من قبل رب العمل. وهنا يتدخل القضاء المستعجل البحريني لإصدار أوامر بوقف تسييل الضمان في حال ثبوت إساءة استعمال الحق أو قيام نزاع جدي في الإنجاز.\n\nأنواع الضمانات الإنشائية الحيوية:\n- ضمان العطاء (Bid Bond)\n- ضمان الدفعة المقدمة (APG)\n- ضمان حسن التنفيذ (Performance Bond بنسبة 10% عادة)\n- ضمان الصيانة وفترة إشعار العيوب (DLP).`
    },
    tags: ['Bank Guarantees', 'Performance Bonds', 'Construction Law', 'FIDIC']
  },
  {
    id: 'taking-over-certificate',
    slug: 'taking-over-certificate-bahrain-construction-law-278',
    title: {
      en: 'Taking Over Certificate in Bahrain Construction Law',
      ar: 'شهادة استلام الأعمال (TOC) في قانون الإنشاءات البحريني'
    },
    category: { en: 'Construction Law', ar: 'قانون الإنشاءات' },
    date: 'May 2024',
    readTime: { en: '6 min read', ar: '6 دقائق قراءة' },
    author: { en: 'Manal Dhahi Legal Team', ar: 'فريق منال ضاحي القانوني' },
    image: '/assets/blogs/taking-over-certificate.webp',
    excerpt: {
      en: 'How the issuance of the TOC triggers release of retention money, shifts risk of loss, and commences the Defects Liability Period (DLP).',
      ar: 'كيف يؤدي صدور شهادة استلام الأعمال إلى تحرير نصف مبلغ الاستقطاع، ونقل تبعة الهلاك إلى رب العمل، وبدء سريان فترة الضمان والمسؤولية عن العيوب.'
    },
    content: {
      en: `The Taking Over Certificate (TOC) under FIDIC and standard Bahrain construction contracts is the formal legal turning point of any development. Its issuance signifies that the works are substantially completed and capable of their intended commercial use, notwithstanding minor outstanding snagging items.\n\nLegal Consequences of TOC Issuance:\n1. Transfer of Risk: Risk of accidental loss or damage transfers from the main contractor to the employer/owner.\n2. Release of Retention: Standard agreements mandate the release of 50% of the accumulated retention money upon TOC issuance.\n3. Commencement of Defects Notification Period (DNP/DLP): Starts the 365-day contractual warranty countdown for latent defects.\n4. Halting Delay Damages: Ceases the calculation of delay penalties and liquidated damages.\n\nIf an employer wrongfully refuses to certify substantial completion, our legal counsel assists contractors with formal notices of deemed takeover and court-appointed expert verifications.`,
      ar: `تُعد شهادة استلام الأعمال (Taking Over Certificate) المحطة الفاصلة قانونياً في عمر المشروع الإنشائي بموجب عقود الفيديك والقانون المدني البحريني. إذ تعني اكتمال الأعمال جوهرياً وصلاحيتها للاستخدام المقصود، حتى مع وجود قائمة ملاحظات طفيفة (Snagging List).\n\nالآثار القانونية لشهادة الاستلام:\n1. انتقال تبعة الهلاك والمخاطر من المقاول إلى رب العمل والمالك.\n2. الإفراج عن الدفعة الأولى من مبالغ الاستقطاع (50% من الـ Retention).\n3. بدء سريان فترة إشعار العيوب (DLP) لمدة 365 يوماً في المعتاد.\n4. وقف سريان غرامات التأخير والتعويضات الاتفاقية.\n\nفي حال تعنت الاستشاري أو رب العمل في إصدار الشهادة، نتدخل لتوثيق الاستلام الفعلي وندب خبير قضائي مستعجل لإثبات حالة الإنجاز وحماية مستحقات المقاول.`
    },
    tags: ['TOC', 'Defects Liability', 'Project Handover', 'Construction Contracts']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    clientName: { en: 'Eng. Khalid Al-Mansoor', ar: 'م. خالد المنصور' },
    role: { en: 'Managing Director', ar: 'الرئيس التنفيذي' },
    company: { en: 'Gulf Horizon Contracting W.L.L.', ar: 'شركة أفق الخليج للمقاولات ذ.م.م' },
    feedback: {
      en: 'Manal Dhahi Legal Group successfully recovered over BD 450,000 in withheld retention money on a major infrastructure project. Mrs. Manal and her team possess unparalleled command over construction law and FIDIC dispute adjudication.',
      ar: 'نجحت مجموعة منال ضاحي القانونية في استرداد أكثر من 450 ألف دينار بحريني من مستحقات الاستقطاع المحتجزة في مشروع بنية تحتية كبير. تمتلك الأستاذة منال وفريقها خبرة استثنائية في قضايا الإنشاءات وعقود الفيديك.'
    },
    serviceArea: { en: 'Construction Law & Dispute Resolution', ar: 'قانون الإنشاءات وفض المنازعات' },
    rating: 5
  },
  {
    id: 'test-2',
    clientName: { en: 'Dmitry Voronov', ar: 'ديمتري فورونوف' },
    role: { en: 'Chief Investment Officer', ar: 'مدير الاستثمار' },
    company: { en: 'Nordic Eurasia Capital', ar: 'نورديك أوراسيا كابيتال' },
    feedback: {
      en: 'The Russian Desk led by Mahmood Dhahi made our corporate relocation to Bahrain seamless. From commercial licensing to the investor Golden Residency and banking approvals, their bilingual support was prompt, meticulous, and world-class.',
      ar: 'قدم لنا القسم الروسي بقيادة محمود ضاحي دعماً استثنائياً في نقل أنشطتنا الاستثمارية إلى البحرين. من تأسيس الكيان إلى الإقامة الذهبية للمستثمرين والتسهيلات البنكية، كانت خدمتهم دقيقة واحترافية بأعلى المستويات الدولية.'
    },
    serviceArea: { en: 'Russian Desk & Golden Residency', ar: 'القسم الروسي والإقامة الذهبية' },
    rating: 5
  },
  {
    id: 'test-3',
    clientName: { en: 'Fatima Al-Jowder', ar: 'فاطمة الجودر' },
    role: { en: 'Board Member & Real Estate Developer', ar: 'عضو مجلس إدارة ومطور عقاري' },
    company: { en: 'Marina Bay Developments', ar: 'مارينا باي للتطوير العقاري' },
    feedback: {
      en: 'Their Private Notary and RERA advisory services saved our development team months of delays. Documents were authenticated on-site with total legal accuracy. An invaluable partner for any high-value real estate developer in Bahrain.',
      ar: 'خدمات التوثيق الخاص والاستشارات العقارية وفرت على فريقنا أشهراً من الانتظار. تم توثيق العقود ميدانياً بدقة قانونية تامة. إنهم الشريك القانوني الأمثل لأي مطور عقاري في البحرين.'
    },
    serviceArea: { en: 'Private Notary & RERA Compliance', ar: 'التوثيق الخاص والتنظيم العقاري' },
    rating: 5
  },
  {
    id: 'test-4',
    clientName: { en: 'Dr. Tariq Al-Ghamdi', ar: 'د. طارق الغامدي' },
    role: { en: 'Managing Partner', ar: 'الشريك التنفيذي' },
    company: { en: 'Eastern Province Trading Group (Riyadh / Khobar)', ar: 'مجموعة الشرقية التجارية (الرياض / الخبر)' },
    feedback: {
      en: 'Expanding our Saudi retail enterprise into the Bahrain market was execution-perfect thanks to their cross-border KSA desk. They harmonized our corporate articles and trademark registrations flawlessly.',
      ar: 'كان توسع شركتنا السعودية في السوق البحريني نموذجاً في السرعة والانضباط بفضل القسم السعودي المتخصص. قاموا بمواءمة عقود التأسيس وتسجيل العلامات التجارية بكل سلاسة واقتدار.'
    },
    serviceArea: { en: 'Saudi Arabia Desk & Trademark Registration', ar: 'القسم السعودي وتسجيل العلامات التجارية' },
    rating: 5
  }
];
