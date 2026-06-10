export type Locale = 'en' | 'zh';
export type LocalizedText = Record<Locale, string>;

export type Person = {
  name: LocalizedText;
  title: LocalizedText;
  role: LocalizedText;
  initials: string;
  email?: string;
  website?: string;
  profile?: string;
  office?: LocalizedText;
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
    en: 'SDS Theory Group',
    zh: '数据科学学院理论组',
  },
  longName: {
    en: 'Theory Group, School of Data Science',
    zh: '数据科学学院理论计算机科学与理论基础研究组',
  },
  tagline: {
    en: 'Algorithms, structures, optimization, and the foundations of data science.',
    zh: '面向算法、结构、优化与数据科学理论基础的学术共同体。',
  },
  description: {
    en: 'We are building a lightweight academic community for faculty members, students, postdoctoral researchers, and visitors whose work connects theoretical computer science with modern data science.',
    zh: '我们希望建设一个轻量、开放、可持续的学术平台，连接从事理论计算机科学及数据科学理论基础研究的教师、学生、博士后与访问学者。',
  },
  email: 'sds-theory@example.edu',
  github: 'https://github.com/sds-theory',
};

export const researchAreas: LocalizedText[] = [
  { en: 'Algorithms and complexity', zh: '算法与复杂性' },
  { en: 'Combinatorial structures', zh: '组合结构' },
  { en: 'Optimization and computation', zh: '优化与计算' },
  { en: 'Theory for data science', zh: '数据科学理论基础' },
  { en: 'Machine learning foundations', zh: '机器学习理论基础' },
  { en: 'Databases and data mining', zh: '数据库与数据挖掘理论' },
  { en: 'Economics and computation', zh: '经济学与计算' },
  { en: 'Statistics and discrete methods', zh: '统计与离散方法' },
];

export const faculty: Person[] = [
  {
    name: { en: 'Jingbang Chen', zh: '陈靖邦' },
    title: { en: 'Research Assistant Professor', zh: '研究助理教授' },
    role: { en: 'Founding Member / Coordinator', zh: '创始成员 / 协调人' },
    initials: 'JC',
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
      en: 'His research spans economics, machine learning, and theoretical computer science, with a focus on mechanism design and information design for learning decision-makers.',
      zh: '研究横跨经济学、机器学习与理论计算机科学，聚焦于面向学习型决策者的机制设计和信息设计。',
    },
  },
  {
    name: { en: 'Aditi Dudeja', zh: 'Aditi Dudeja' },
    title: { en: 'Assistant Professor', zh: '助理教授' },
    role: { en: 'Founding Member', zh: '创始成员' },
    initials: 'AD',
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
    name: { en: 'Student Coordinators', zh: '学生协调人' },
    title: { en: 'Reading Group / Seminar Support', zh: '读书会 / 讨论班支持' },
    role: { en: 'Student members', zh: '学生成员' },
    initials: 'SC',
    research: [
      { en: 'Paper reading', zh: '论文阅读' },
      { en: 'Whiteboard talks', zh: '白板报告' },
      { en: 'Seminar organization', zh: '讨论班组织' },
    ],
    bio: {
      en: 'Student volunteers can help maintain the event calendar, reading group schedule, and talk announcements.',
      zh: '学生志愿者可以协助维护活动日历、读书会安排与报告通知。',
    },
  },
  {
    name: { en: 'PhD and MPhil Students', zh: '博士生与硕士生' },
    title: { en: 'Members to be added', zh: '成员待添加' },
    role: { en: 'Graduate students', zh: '研究生' },
    initials: 'GS',
    research: [
      { en: 'Algorithms', zh: '算法' },
      { en: 'Optimization', zh: '优化' },
      { en: 'Theory-connected data science', zh: '理论相关数据科学' },
    ],
    bio: {
      en: 'Individual student cards can show advisor, research interests, homepage, email, and current projects.',
      zh: '学生个人卡片可展示导师、研究方向、主页、邮箱和当前项目。',
    },
  },
  {
    name: { en: 'Visitors and Alumni', zh: '访问学生与校友' },
    title: { en: 'Optional section', zh: '可选栏目' },
    role: { en: 'Community', zh: '共同体成员' },
    initials: 'VA',
    research: [
      { en: 'Short-term exchange', zh: '短期交流' },
      { en: 'External collaboration', zh: '外部合作' },
      { en: 'Theory days', zh: 'Theory Days' },
    ],
    bio: {
      en: 'The students page can later include visiting students, alumni, and short-term exchange members.',
      zh: '学生页面后续也可以加入访问学生、校友与短期交流成员。',
    },
  },
];

export const events: TheoryEvent[] = [
  {
    id: 'inaugural-meeting',
    title: { en: 'Inaugural SDS Theory Group Meeting', zh: 'SDS Theory Group 启动讨论会' },
    type: { en: 'Planning meeting', zh: '筹备会议' },
    status: { en: 'Tentative', zh: '暂定' },
    speaker: { en: 'SDS Theory Group', zh: 'SDS Theory Group' },
    location: { en: 'Seminar room TBA', zh: '讨论室待定' },
    start: '2026-09-12T10:30:00+08:00',
    end: '2026-09-12T12:00:00+08:00',
    abstract: {
      en: 'A first coordination meeting to confirm members, website content, seminar cadence, reading-group format, and student volunteers.',
      zh: '首次协调会议，用于确认成员名单、网站内容、讨论班频率、读书会形式与学生志愿者安排。',
    },
  },
  {
    id: 'reading-group-kickoff',
    title: { en: 'Student Reading Group Kickoff', zh: '学生读书会启动' },
    type: { en: 'Reading group', zh: '读书会' },
    status: { en: 'Tentative', zh: '暂定' },
    speaker: { en: 'Student coordinators', zh: '学生协调人' },
    location: { en: 'TBA', zh: '待定' },
    start: '2026-09-26T15:00:00+08:00',
    end: '2026-09-26T16:30:00+08:00',
    abstract: {
      en: 'A student-led session to select papers, set a presentation rhythm, and try whiteboard-style technical discussion.',
      zh: '学生主导的读书会启动场，用于选择论文、确定报告节奏，并尝试白板式技术讨论。',
    },
  },
  {
    id: 'seminar-placeholder',
    title: { en: 'Theory Seminar: Speaker TBA', zh: '理论讨论班：报告人待定' },
    type: { en: 'Seminar', zh: '讨论班' },
    status: { en: 'Draft', zh: '草稿' },
    speaker: { en: 'Invited speaker', zh: '邀请报告人' },
    affiliation: { en: 'TBA', zh: '待定' },
    location: { en: 'School of Data Science', zh: '数据科学学院' },
    start: '2026-10-10T10:30:00+08:00',
    end: '2026-10-10T12:00:00+08:00',
    abstract: {
      en: 'A placeholder seminar entry showing how future talks will appear on the website and calendar.',
      zh: '一个占位讨论班条目，用于展示未来报告在网站与日历中的呈现方式。',
    },
  },
];

export const news: NewsItem[] = [
  {
    date: '2026-06-11',
    title: { en: 'Website scaffold started', zh: '理论组网站框架开始搭建' },
    summary: {
      en: 'The first Vite and React version of the SDS Theory Group website is being prepared for GitHub Pages.',
      zh: 'SDS Theory Group 网站的第一版 Vite + React 框架开始准备，并计划部署到 GitHub Pages。',
    },
  },
  {
    date: '2026-06-04',
    title: { en: 'Group proposal drafted', zh: '理论组 proposal 完成初稿' },
    summary: {
      en: 'The proposal outlines a lightweight academic platform for seminars, reading groups, visitors, and external collaboration.',
      zh: 'Proposal 提出了一个轻量学术平台，用于支持讨论班、读书会、访问交流与外部合作。',
    },
  },
];

export const prospective = {
  title: {
    en: 'Prospective Graduate Students',
    zh: '欢迎未来研究生',
  },
  body: {
    en: 'Students interested in algorithms, combinatorial structures, optimization, complexity, or theory-connected data science are welcome to follow our seminars and reading groups. Individual admission and supervision are handled by each faculty member.',
    zh: '欢迎对算法、组合结构、优化、复杂性或数据科学理论基础感兴趣的同学关注我们的讨论班和读书会。具体招生与指导安排由各位教师独立负责。',
  },
};
