export type Locale = 'en' | 'zh';
export type LocalizedText = Record<Locale, string>;

export type Person = {
  name: LocalizedText;
  title: LocalizedText;
  role: LocalizedText;
  initials: string;
  avatar?: string;
  avatarPosition?: string;
  email?: string;
  website?: string;
  profile?: string;
  office?: LocalizedText;
  affiliation?: LocalizedText;
  period?: LocalizedText;
  advisor?: LocalizedText;
  research: LocalizedText[];
  bio: LocalizedText;
};

export type TheoryEvent = {
  id: string;
  title: LocalizedText;
  type: LocalizedText;
  status: LocalizedText;
  speaker: LocalizedText;
  affiliation?: LocalizedText;
  location: LocalizedText;
  start: string;
  end: string;
  abstract: LocalizedText;
  host?: LocalizedText;
};

export type NewsItem = {
  date: string;
  title: LocalizedText;
  summary: LocalizedText;
};

export const localeOf = (language: string): Locale => (language.startsWith('zh') ? 'zh' : 'en');

export const textOf = (value: LocalizedText, language: string) => value[localeOf(language)];

export const site = {
  name: {
    en: 'SDS CS Theory Group',
    zh: 'SDS CS 理论研究组',
  },
  longName: {
    en: 'CS Theory Group, School of Data Science',
    zh: '数据科学学院 CS 理论研究组',
  },
  tagline: {
    en: 'A community that advances the theoretical foundation of computation.',
    zh: '推动计算理论基础发展的学术共同体。',
  },
  description: {
    en: 'Our goal is to bring together researchers working on algorithms, combinatorial and discrete structures, optimization, and the theoretical foundations of data science.',
    zh: '我们的目标是汇聚从事算法、组合与离散结构、优化以及数据科学理论基础研究的学者。',
  },
  email: 'sds_theory@outlook.com',
  github: 'https://github.com/sds-theory',
  logo: 'images/sds-logo.png',
  footerLogo: 'images/sds-footer-logo.png',
};

export const proposalIntro = {
  title: {
    en: 'A lightweight academic platform for theory',
    zh: '面向理论研究的轻量学术平台',
  },
  body: {
    en: 'Our goal is to bring together researchers working on algorithms, combinatorial and discrete structures, optimization, and the theoretical foundations of data science. Through shared activities and visible academic presence, the group also aims to strengthen the theoretical research atmosphere and reputation of the School and the University more broadly.\n\nWe aim to provide a lightweight academic platform for intellectual exchange and collaboration across related areas, grounded in rigorous algorithmic thinking and mathematical approaches to computation. At the same time, it should fully respect the independence of each member in shaping research directions, managing projects, supervising students, and developing external collaborations.',
    zh: '我们的目标是汇聚从事算法、组合与离散结构、优化以及数据科学理论基础研究的学者。通过共同的学术活动和更清晰的学术呈现，研究组也希望进一步加强学院乃至大学整体的理论研究氛围与学术声誉。\n\n我们希望提供一个轻量的学术平台，促进相关方向之间的思想交流与合作，并以严谨的算法思维和面向计算的数学方法为基础。同时，研究组也应充分尊重每位成员在塑造研究方向、管理项目、指导学生以及发展外部合作方面的独立性。',
  },
};

export const missionPoints: LocalizedText[] = [
  {
    en: 'Algorithms, complexity, and rigorous computation.',
    zh: '算法、复杂性与严谨计算。',
  },
  {
    en: 'Combinatorial and discrete structures.',
    zh: '组合与离散结构。',
  },
  {
    en: 'Optimization and mathematical approaches to computation.',
    zh: '优化与面向计算的数学方法。',
  },
  {
    en: 'Theoretical foundations of data science.',
    zh: '数据科学理论基础。',
  },
];

export const researchAreas: LocalizedText[] = [
  { en: 'Algorithms and complexity', zh: '算法与复杂性' },
  { en: 'Combinatorial structures', zh: '组合结构' },
  { en: 'Optimization and computation', zh: '优化与计算' },
  { en: 'Theoretical foundations of data science', zh: '数据科学理论基础' },
  { en: 'Machine learning theory', zh: '机器学习理论' },
  { en: 'Databases and data mining', zh: '数据库与数据挖掘理论' },
  { en: 'Economics and computation', zh: '经济学与计算' },
  { en: 'Statistics and mathematical foundations', zh: '统计与数学基础' },
];

export const faculty: Person[] = [
  {
    name: { en: 'Jingbang Chen', zh: '陈靖邦' },
    title: { en: 'Research Assistant Professor', zh: '研究助理教授' },
    role: { en: 'Founding Member / Coordinator', zh: '创始成员 / 协调人' },
    initials: 'JC',
    avatar: 'images/faculty-jingbang-chen.png',
    avatarPosition: '50% 18%',
    email: 'chenjb@cuhk.edu.cn',
    website: 'https://chenjb1997.github.io/',
    profile: 'https://sds.cuhk.edu.cn/teacher/2145',
    office: { en: 'Daoyuan Building 517b', zh: '道远楼 517b' },
    research: [
      { en: 'Graph algorithms and data structures', zh: '图论算法与数据结构' },
      { en: 'Large-scale data management', zh: '大规模数据管理' },
      { en: 'Data mining', zh: '数据挖掘' },
      { en: 'Machine learning and AI', zh: '机器学习与人工智能' },
    ],
    bio: {
      en: 'His research focuses on designing, analyzing, and implementing efficient graph algorithms and data structures with theoretical guarantees, with extensions to large-scale data management, data mining, machine learning, and artificial intelligence.',
      zh: '主要研究设计、分析与实现具有理论保证的高效图论算法和数据结构，并延伸到大规模数据管理、数据挖掘、机器学习与人工智能。',
    },
  },
  {
    name: { en: 'Tao Lin', zh: '林涛' },
    title: { en: 'Assistant Professor', zh: '助理教授' },
    role: { en: 'Founding Member / Coordinator', zh: '创始成员 / 协调人' },
    initials: 'TL',
    avatar: 'images/faculty-tao-lin.png',
    avatarPosition: '50% 20%',
    email: 'lintao@cuhk.edu.cn',
    website: 'https://tao-l.github.io/',
    profile: 'https://sds.cuhk.edu.cn/teacher/2240',
    research: [
      { en: 'Economics and computation', zh: '经济与计算' },
      { en: 'Mechanism design', zh: '机制设计' },
      { en: 'Information design', zh: '信息设计' },
      { en: 'Algorithmic game theory', zh: '算法博弈论' },
      { en: 'Machine learning', zh: '机器学习' },
      { en: 'Theoretical computer science', zh: '理论计算机科学' },
    ],
    bio: {
      en: 'His research focuses on economics, machine learning, and theoretical computer science, especially mechanism design and information design for learning decision-makers.',
      zh: '研究方向横跨经济学、机器学习与理论计算机科学，尤其关注面向学习型决策者的机制设计和信息设计。',
    },
  },
  {
    name: { en: 'Aditi Dudeja', zh: 'Aditi Dudeja' },
    title: { en: 'Assistant Professor', zh: '助理教授' },
    role: { en: 'Founding Member', zh: '创始成员' },
    initials: 'AD',
    avatar: 'images/faculty-aditi-dudeja.jpg',
    avatarPosition: '50% 12%',
    website: 'https://aditidudeja.github.io',
    profile: 'https://sds.cuhk.edu.cn/teacher/2338',
    research: [
      { en: 'Theoretical computer science', zh: '理论计算机科学' },
      { en: 'Streaming graph algorithms', zh: '流式图算法' },
      { en: 'Dynamic graph algorithms', zh: '动态图算法' },
      { en: 'Online graph problems', zh: '在线图问题' },
    ],
    bio: {
      en: 'Her research focuses on graph problems in streaming, dynamic, and online settings. She was previously a postdoctoral researcher in the Big Data Algorithms Group at the University of Salzburg.',
      zh: '研究方向是流式、动态和在线场景下的图问题。此前曾在萨尔茨堡大学大数据算法研究组从事博士后研究。',
    },
  },
];

export const students: Person[] = [
  {
    name: { en: 'Tianran Zhu', zh: '祝天然' },
    title: { en: 'Ph.D. Student', zh: '博士生' },
    role: { en: 'Student Member', zh: '学生成员' },
    initials: 'TZ',
    website: 'https://chenjb1997.github.io/',
    affiliation: { en: 'CUHK-Shenzhen', zh: '香港中文大学（深圳）' },
    period: { en: 'Fall 2026 - present', zh: '2026 年秋季至今' },
    advisor: { en: 'Advisor: Jingbang Chen', zh: '导师：陈靖邦' },
    research: [
      { en: 'Algorithms', zh: '算法' },
      { en: 'Graph data', zh: '图数据' },
      { en: 'Theoretical computer science', zh: '理论计算机科学' },
    ],
    bio: {
      en: 'B.S. at Peking University. ICPC Gold and NOI Silver.',
      zh: '本科毕业于北京大学。曾获 ICPC 金牌、NOI 银牌。',
    },
  },
];

export const events: TheoryEvent[] = [];

export const news: NewsItem[] = [
  {
    date: '2026-06-11',
    title: { en: 'Website officially launched', zh: '网站正式上线' },
    summary: {
      en: 'The SDS CS Theory Group website is now live as a public home for members, students, events, news, and contact information.',
      zh: 'SDS CS 理论研究组网站正式上线，将作为展示成员、学生、活动、新闻和联系方式的公开主页。',
    },
  },
];

export const prospective = {
  title: {
    en: 'Prospective Graduate Students',
    zh: 'Prospective Graduate Students',
  },
  body: {
    en: 'Students interested in algorithms, combinatorial structures, optimization, and the theoretical foundations of data science are welcome to follow our seminars and reading groups. For graduate study, please contact individual faculty members according to their research directions.',
    zh: '欢迎对算法、组合结构、优化以及数据科学理论基础感兴趣的同学关注我们的讨论班和读书会。关于研究生申请，请根据研究方向联系相应教师。',
  },
};

export const contact = {
  title: {
    en: 'Contact Us',
    zh: '联系我们',
  },
  body: {
    en: 'For visits, seminar invitations, academic collaboration, student activities, or general questions about the SDS CS Theory Group, please contact us by email.',
    zh: '如有访问交流、报告邀请、学术合作、学生活动或其他关于 SDS CS 理论研究组的问题，欢迎通过邮件联系我们。',
  },
};
