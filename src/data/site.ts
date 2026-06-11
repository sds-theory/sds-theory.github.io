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
  education?: LocalizedText;
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
    en: 'Committed to advancing theoretical foundations and their applications.',
    zh: '致力推动理论基础研究的发展与应用。',
  },
  description: {
    en: 'Our goal is to bring together researchers working on algorithms, combinatorial and discrete structures, optimization, and the theoretical foundations of data science.',
    zh: '我们的目标是汇聚从事算法、组合与离散结构、优化以及数据科学理论基础研究的学者。',
  },
  sdsUrl: 'https://sds.cuhk.edu.cn/',
  email: 'sds_theory@outlook.com',
  github: 'https://github.com/sds-theory',
  logo: 'images/sds-logo.png',
  footerLogo: 'images/sds-footer-logo.png',
};

export const proposalIntro = {
  title: {
    en: 'About Us',
    zh: '关于我们',
  },
  body: {
    en: 'Our goal is to bring together researchers working on algorithms, combinatorial and discrete structures, optimization, and the theoretical foundations of data science. Through shared activities and visible academic presence, the group also aims to strengthen the theoretical research atmosphere and reputation of the School and the University more broadly.\n\nWe aim to provide a lightweight academic platform for intellectual exchange and collaboration across related areas, grounded in rigorous algorithmic thinking and mathematical approaches to computation. At the same time, it should fully respect the independence of each member in shaping research directions, managing projects, supervising students, and developing external collaborations.',
    zh: '我们的目标是汇聚从事算法、组合与离散结构、优化以及数据科学理论基础研究的学者。通过共同的学术活动和更清晰的学术呈现，研究组也会进一步加强学院乃至大学整体的理论研究氛围与学术声誉。\n\n我们希望提供一个轻量的学术平台，促进相关方向之间的思想交流与合作，并以严谨的算法思维和面向计算的数学方法为基础。同时，研究组也会充分尊重每位成员在塑造研究方向、管理项目、指导学生以及发展外部合作方面的独立性。',
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
    education: { en: 'Ph.D., University of Waterloo', zh: '博士，滑铁卢大学' },
    research: [
      { en: 'Graph algorithms', zh: '图论算法' },
      { en: 'Data structures', zh: '数据结构' },
      { en: 'Large-scale data management', zh: '大规模数据管理' },
      { en: 'Data mining', zh: '数据挖掘' },
      { en: 'Artificial intelligence', zh: '人工智能' },
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
    education: { en: 'Ph.D., Harvard University', zh: '博士，哈佛大学' },
    research: [
      { en: 'Economics and computation', zh: '经济与计算' },
      { en: 'Mechanism design', zh: '机制设计' },
      { en: 'Information design', zh: '信息设计' },
      { en: 'Algorithmic game theory', zh: '算法博弈论' },
      { en: 'Machine learning', zh: '机器学习' },
    ],
    bio: {
      en: 'His research focuses on economics, machine learning, and theoretical computer science, especially mechanism design and information design for learning decision-makers.',
      zh: '研究方向横跨经济学、机器学习与理论计算机科学，尤其关注面向学习型决策者的机制设计和信息设计。',
    },
  },
  {
    name: { en: 'Aditi Dudeja', zh: 'Aditi Dudeja' },
    title: { en: 'Assistant Professor', zh: '助理教授' },
    role: { en: 'Member', zh: '成员' },
    initials: 'AD',
    avatar: 'images/faculty-aditi-dudeja.jpg',
    avatarPosition: '50% 12%',
    website: 'https://aditidudeja.github.io',
    profile: 'https://sds.cuhk.edu.cn/teacher/2338',
    education: { en: 'Ph.D., Rutgers University', zh: '博士，罗格斯大学' },
    research: [
      { en: 'Streaming algorithms', zh: '流式算法' },
      { en: 'Dynamic graph algorithms', zh: '动态图算法' },
      { en: 'Online algorithms', zh: '在线算法' },
    ],
    bio: {
      en: 'Her research focuses on graph problems in streaming, dynamic, and online settings. She was previously a postdoctoral researcher in the Big Data Algorithms Group at the University of Salzburg.',
      zh: '研究方向是流式、动态和在线场景下的图问题。此前曾在萨尔茨堡大学大数据算法研究组从事博士后研究。',
    },
  },
  {
    name: { en: 'Konstantinos Courcoubetis', zh: 'Konstantinos Courcoubetis' },
    title: { en: 'Presidential Chair Professor', zh: '校长讲座教授' },
    role: { en: 'Member', zh: '成员' },
    initials: 'KC',
    avatar: 'images/faculty-konstantinos-courcoubetis.jpg',
    avatarPosition: '50% 18%',
    website: 'https://sds.cuhk.edu.cn/teacher/473',
    profile: 'https://sds.cuhk.edu.cn/teacher/473',
    education: {
      en: 'Ph.D., University of California, Berkeley',
      zh: '博士，加利福尼亚大学伯克利分校',
    },
    research: [
      { en: 'Network economics', zh: '网络经济学' },
      { en: 'Sharing economy and mobility', zh: '共享经济与移动性' },
      { en: 'Resource sharing and auctions', zh: '资源共享与拍卖' },
      { en: 'Smart grids and energy systems', zh: '智能电网与能源系统' },
    ],
    bio: {
      en: 'His research interests include economics and performance analysis of networks and internet technologies, sharing economy and mobility, regulation policy, smart grids and energy systems, resource sharing and auctions.',
      zh: '研究方向包括网络和互联网技术的经济与性能分析、共享经济与移动性、监管政策、智能电网和能源系统、资源共享与拍卖。',
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
    period: { en: '2026 - present', zh: '2026 至今' },
    advisor: { en: 'Advisor: Jingbang Chen', zh: '导师：陈靖邦' },
    research: [
      { en: 'Graph theory', zh: '图论' },
      { en: 'Data structures', zh: '数据结构' },
      { en: 'Online algorithms', zh: '在线算法' },
      { en: 'Convex optimization', zh: '凸优化' },
    ],
    bio: {
      en: 'Ph.D. student advised by Jingbang Chen.',
      zh: '陈靖邦指导的博士生。',
    },
  },
  {
    name: { en: 'Mingjie Wang', zh: '汪明杰' },
    title: { en: 'Ph.D. Student', zh: '博士生' },
    role: { en: 'Student Member', zh: '学生成员' },
    initials: 'MW',
    avatar: 'images/student-mingjie-wang.jpg',
    avatarPosition: '50% 16%',
    website: 'https://sds.cuhk.edu.cn/en/node/1206',
    profile: 'https://sds.cuhk.edu.cn/en/node/1206',
    period: { en: '2023 - present', zh: '2023 至今' },
    advisor: { en: 'Advisor: Konstantinos Courcoubetis', zh: '导师：Konstantinos Courcoubetis' },
    research: [
      { en: 'Operations research', zh: '运筹' },
    ],
    bio: {
      en: 'Ph.D. student advised by Konstantinos Courcoubetis.',
      zh: 'Konstantinos Courcoubetis 指导的博士生。',
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
  {
    date: '2026-05-19',
    title: {
      en: 'Three papers by Professor Tao Lin accepted to EC 2026',
      zh: '林涛教授三篇论文被 EC 2026 录用',
    },
    summary: {
      en: 'Professor Tao Lin has three works accepted to the 27th ACM Conference on Economics and Computation (EC 2026): "Information Design with Large Language Models", "The Price and Complexity of Explainable Information Design", and "Gradient Dynamics in First-Price Auctions: Iterative Strategy Elimination via Cubic Potentials".',
      zh: '林涛教授三篇论文《Information Design with Large Language Models》《The Price and Complexity of Explainable Information Design》《Gradient Dynamics in First-Price Auctions: Iterative Strategy Elimination via Cubic Potentials》被 the 27th ACM Conference on Economics and Computation (EC 2026) 录用。',
    },
  },
  {
    date: '2026-05-01',
    title: {
      en: 'One paper by Aditi Dudeja accepted to CCC 2026',
      zh: 'Aditi Dudeja 一篇论文被 CCC 2026 录用',
    },
    summary: {
      en: 'Aditi Dudeja’s paper "Frontier Space-time Algorithms Using Only Full Memory" has been accepted to the Computational Complexity Conference 2026 (CCC 2026).',
      zh: 'Aditi Dudeja 一篇论文《Frontier Space-time Algorithms Using Only Full Memory》被 the Computational Complexity Conference 2026 (CCC 2026) 录用。',
    },
  },
  {
    date: '2026-04-29',
    title: {
      en: 'One paper by Aditi Dudeja accepted to PODC 2026',
      zh: 'Aditi Dudeja 一篇论文被 PODC 2026 录用',
    },
    summary: {
      en: 'Aditi Dudeja’s paper "Distributed Stochastic Graph Algorithms" has been accepted to the 2026 ACM Symposium on Principles of Distributed Computing (PODC 2026).',
      zh: 'Aditi Dudeja 一篇论文《Distributed Stochastic Graph Algorithms》被 the 2026 ACM Symposium on Principles of Distributed Computing (PODC 2026) 录用。',
    },
  },
];

export const prospective = {
  title: {
    en: 'Prospective Graduate Students',
    zh: '研究生申请',
  },
  body: {
    en: 'If you are interested in applying to our graduate program, please see the graduate studies section on the admissions page.',
    zh: '如果你有兴趣申请我们的研究生项目，请查看招生页面中的研究生项目介绍。',
  },
  url: 'https://sds.cuhk.edu.cn/phd-programmes-CSE',
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
