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

export type HomeCta = {
  label: LocalizedText;
  href: string;
  external?: boolean;
};

export type PillarPoint = {
  title: LocalizedText;
  body: LocalizedText;
};

export type HomepagePillar = {
  id: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  description: LocalizedText;
  points: PillarPoint[];
  cta: HomeCta;
};

export type PlatformFact = {
  value: string;
  label: LocalizedText;
  optional?: boolean;
};

export type ColleagueRecruitment = {
  title: LocalizedText;
  body: LocalizedText;
  cta: HomeCta;
};

export type RecruitSection = {
  title: LocalizedText;
  body: LocalizedText;
};

export type CollaborationItem = {
  title: LocalizedText;
  body: LocalizedText;
};

export type EcosystemItem = {
  title: LocalizedText;
  body: LocalizedText;
};

export type ResearchArea = {
  title: LocalizedText;
  summary: LocalizedText;
  topics: LocalizedText[];
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
    en: 'Rigorous algorithmic and mathematical foundations for data, learning, optimization, and decision systems.',
    zh: '以严谨的算法与数学方法，探索数据、学习、优化与决策系统的理论基础。',
  },
  description: {
    en: 'A focused theory group embedded in the interdisciplinary ecosystem of SDS.',
    zh: '扎根学院交叉学科生态的聚焦型理论研究组。',
  },
  sdsUrl: 'https://sds.cuhk.edu.cn/',
  email: 'sds_theory@outlook.com',
  github: 'https://github.com/sds-theory',
  logo: 'images/sds-logo.png',
  footerLogo: 'images/sds-footer-logo.png',
};

export const heroIntro = {
  en: 'We are a focused theory community at the School of Data Science, CUHK-Shenzhen. Our research connects algorithms, optimization, learning, economics, and discrete mathematics with the foundational questions behind modern data-driven systems.',
  zh: '我们是香港中文大学（深圳）数据科学学院内聚焦理论研究的学术共同体。研究组致力于将算法、优化、学习、经济学与离散数学连接到现代数据驱动系统背后的基础问题。',
};

export const sdsPlatformFacts = {
  label: {
    en: 'College Strengths',
    zh: '学院优势',
  },
  facts: [
    {
      value: '90+',
      label: { en: 'High-end Talent', zh: '高端人才' },
      optional: true,
    },
    {
      value: '130+',
      label: { en: 'Research Projects', zh: '研究项目' },
      optional: true,
    },
    {
      value: '3',
      label: { en: 'Provincial Key Laboratories', zh: '省级重点实验室' },
      optional: true,
    },
  ] satisfies PlatformFact[],
};

export const sdsPlatformDetails: EcosystemItem[] = [
  {
    title: { en: 'Interdisciplinary Foundation', zh: '交叉学科基础' },
    body: {
      en: 'SDS is built around data science education and research, connecting computer science, statistics, operations research, operations management, decision science, machine learning, and related areas.',
      zh: '学院围绕数据科学方向开展人才培养与科研，将计算机科学、统计学、运筹学、运营管理、决策科学、机器学习等基础与前沿领域连接起来。',
    },
  },
  {
    title: { en: 'Computer Science Direction', zh: '计算机方向支撑' },
    body: {
      en: 'The computer science and technology direction spans foundations, networks, software, security, artificial intelligence, machine learning, and big data, giving theory a natural home inside SDS.',
      zh: '计算机科学与技术方向覆盖计算机基础、网络、软件、安全、人工智能、机器学习和大数据等方向，使理论计算机科学在学院内部拥有自然支点。',
    },
  },
  {
    title: { en: 'Research Ecosystem', zh: '科研生态' },
    body: {
      en: 'Across the broader SDS ecosystem, the School reports 130+ research projects, 90+ high-end talent, and 3 provincial key laboratories.',
      zh: '在学院整体科研生态中，SDS 拥有 130+ 科研项目、90+ 高端人才和 3 个省级重点实验室，为基础研究与交叉合作提供更广的平台支撑。',
    },
  },
  {
    title: { en: 'Research Centers and Labs', zh: '研究中心与实验室' },
    body: {
      en: 'SDS hosts research platforms in areas such as big data and complex intelligent systems, urban big data, AI operations, interactive AI, medical AI, AI safety and governance, and AI foundations and algorithms.',
      zh: '学院设有面向大数据与复杂智能系统、城市大数据、人工智能运营、交互式人工智能、智慧医疗、人工智能安全伦理与治理、人工智能基础与算法等方向的研究平台。',
    },
  },
  {
    title: { en: 'Education and Training Pipeline', zh: '教育与培养体系' },
    body: {
      en: 'SDS offers a broad training environment across undergraduate, master, and doctoral programmes, giving mathematically oriented students access to courses, research projects, and interdisciplinary supervision.',
      zh: '学院覆盖本科、硕士与博士阶段的人才培养，为具有数学和算法兴趣的学生提供课程、科研项目与跨方向指导环境。',
    },
  },
  {
    title: { en: 'Open Academic Interface', zh: '开放的学术接口' },
    body: {
      en: 'The theory group benefits from this larger platform while contributing an algorithmic and mathematical perspective to data, learning, optimization, and decision systems.',
      zh: '理论研究组受益于学院平台，也希望以算法与数学视角参与数据、学习、优化和决策系统中的基础问题研究。',
    },
  },
];

export const colleagueRecruitment: ColleagueRecruitment = {
  title: {
    en: 'Become Our Colleague',
    zh: '欢迎成为我们的同事',
  },
  body: {
    en: 'We welcome researchers who are interested in theory-driven questions within the SDS ecosystem. Faculty recruitment information is maintained by the School of Data Science.',
    zh: '我们欢迎对 SDS 交叉学科生态中的理论研究问题感兴趣的研究者加入。教职招聘信息以数据科学学院官方页面为准。',
  },
  cta: {
    label: {
      en: 'SDS Faculty Recruitment',
      zh: '查看 SDS 教职招聘',
    },
    href: 'https://sds.cuhk.edu.cn/taxonomy/term/37',
    external: true,
  },
};

export const homepagePillars: HomepagePillar[] = [
  {
    id: 'platform',
    title: {
      en: 'A Fertile Ground\nfor Theory',
      zh: '理论研究的沃土',
    },
    subtitle: {
      en: "Rooted in the School's interdisciplinary ecosystem",
      zh: '扎根学院交叉学科生态',
    },
    description: {
      en: 'SDS connects computer science, statistics, operations research, AI, machine learning, big data, and decision systems, giving theory a broad data-science setting.',
      zh: '数据科学学院围绕计算机科学、统计学和运筹学建设交叉融合的数据科学环境，并与人工智能、机器学习、大数据和决策系统等方向紧密相连。',
    },
    points: [
      {
        title: { en: 'Computer science as a key support', zh: '以计算机方向为重要支撑' },
        body: {
          en: 'The School lists computer science and technology as a core direction, spanning foundations, networks, software, security, AI, and machine learning.',
          zh: '学院将计算机科学与技术列为核心学科方向，覆盖计算机基础、网络、软件、安全、人工智能和机器学习等领域。',
        },
      },
      {
        title: { en: 'A theory platform facing real settings', zh: '面向真实场景的理论平台' },
        body: {
          en: 'Its work in data management, networks, software, and security creates broad space for theory grounded in real data-science problems.',
          zh: '学院在数据管理、网络、软件、安全等方向的布局，为理论工作与真实数据科学问题的结合提供了广阔空间。',
        },
      },
    ],
    cta: {
      label: { en: 'College Website', zh: '学院官网' },
      href: 'https://sds.cuhk.edu.cn/',
      external: true,
    },
  },
  {
    id: 'faculty',
    title: {
      en: 'A Well-Grounded\nResearch Team',
      zh: '扎实的研究团队',
    },
    subtitle: {
      en: 'Solid backgrounds and international perspective',
      zh: '坚实背景与国际视野',
    },
    description: {
      en: 'Members bring rigorous theory training and international perspective, with diverse but complementary research focuses that connect mathematical and algorithmic thinking to foundational questions in data science.',
      zh: '研究团队成员具备严谨的理论训练与国际化视野，研究背景多元、侧重不同，并共同将数学与算法思维连接到数据科学中的基础问题。',
    },
    points: [
      {
        title: { en: 'Overseas training and international perspective', zh: '海外训练与国际视野' },
        body: {
          en: 'Members hold Ph.D. degrees from well-known universities and have overseas teaching or research experience. They follow advanced international research practices and connect to the research frontier.',
          zh: '成员均拥有名校博士学位及海外高校执教或研究经历，熟悉国际先进研究范式，并与国际研究前沿保持紧密联系。',
        },
      },
      {
        title: { en: 'Solid and complementary theoretical backgrounds', zh: '坚实而互补的理论背景' },
        body: {
          en: 'Research directions span traditional algorithms, optimization, machine learning, economics, and data management, linking foundational theory with data-science problems.',
          zh: '研究方向覆盖传统算法、优化、机器学习、经济学、数据管理等领域，形成从基础理论到数据科学问题的互补支撑。',
        },
      },
    ],
    cta: {
      label: { en: 'Member Profiles', zh: '成员介绍' },
      href: '/faculty',
    },
  },
  {
    id: 'training',
    title: {
      en: 'Human-Centered\nResearch Training',
      zh: '以人为本的科研训练',
    },
    subtitle: {
      en: 'From strong problem solving to research maturity',
      zh: '从问题求解走向研究成熟',
    },
    description: {
      en: 'Close advising, sustained discussion, and real research problems help students develop rigorous habits and independent taste, growing into young scholars who identify problems, distill questions, and advance research.',
      zh: '通过紧密指导、持续讨论和真实科研问题训练，学生将逐步形成严谨科研习惯和独立研究品味，成长为能够识别问题、凝练问题并推进研究的年轻学者。',
    },
    points: [
      {
        title: { en: 'From problem solving to research taste', zh: '从解题能力到研究品味' },
        body: {
          en: 'We help students turn mathematical intuition, algorithmic thinking, and problem-solving ability into research reasoning, then into the ability to advance and lead research.',
          zh: '我们帮助学生将数学直觉、算法思维和问题求解能力转化为科研推理能力，进一步形成独立推进研究、主导研究的能力。',
        },
      },
      {
        title: { en: 'Connecting theory with real problems', zh: '理论与现实问题相连接' },
        body: {
          en: 'Training distills deep theoretical questions from data, learning, optimization, and decision systems, connecting rigorous theory with practice.',
          zh: '培养过程强调从数据、学习、优化与决策系统中提炼有深度的理论问题，让学生在严谨理论训练中能与实践相结合。',
        },
      },
    ],
    cta: {
      label: { en: 'Recruitment Info', zh: '招生资讯' },
      href: '/recruit',
    },
  },
  {
    id: 'atmosphere',
    title: {
      en: 'A Lively Theory Community',
      zh: '活跃的理论研究氛围',
    },
    subtitle: {
      en: 'Open exchange and sustained encounters',
      zh: '开放交流与持续碰撞',
    },
    description: {
      en: 'Theory grows through discussion. Seminars, reading groups, student meetings, visitor talks, informal problem sessions, and cross-area collaborations build a steady academic rhythm.',
      zh: '理论研究生长于持续讨论。我们正在通过讨论班、读书会、学生研究讨论、访问报告、非正式问题讨论和跨方向合作，建立稳定的学术节奏。',
    },
    points: [
      {
        title: { en: 'Regular academic exchange', zh: '常态化学术交流' },
        body: {
          en: 'Seminars, reading groups, student discussions, visitor talks, and informal problem sessions create a sustained rhythm of exchange and mutual inspiration.',
          zh: '通过讨论班、读书会、学生研究讨论、访问报告和非正式问题讨论，形成持续交流、相互启发的学术节奏。',
        },
      },
      {
        title: { en: 'Open collaboration ecosystem', zh: '开放的合作生态' },
        body: {
          en: 'Visits, informal discussions, and cross-area projects keep the group open, bringing new problems, methods, and collaborations into the community.',
          zh: '访问交流、非正式讨论和跨方向项目让研究组保持开放的学术连接，并不断引入新的问题、方法与合作机会。',
        },
      },
    ],
    cta: {
      label: { en: 'Activities Overview', zh: '活动一览' },
      href: '/events',
    },
  },
];

export const proposalIntro = {
  title: {
    en: 'About Us',
    zh: '关于我们',
  },
  body: {
    en: 'The SDS CS Theory Group is a focused academic community within the School of Data Science, bringing rigorous algorithmic, mathematical, and economic perspectives to problems arising from data, learning, optimization, and decision-making.\n\nWe aim to provide a lightweight academic platform for intellectual exchange and collaboration across related areas. The group respects the independence of each member in shaping research directions, managing projects, supervising students, and developing external collaborations.',
    zh: 'SDS CS 理论研究组是数据科学学院内聚焦理论计算机科学与算法基础的学术共同体，致力于将严谨的算法、数学与经济学视角引入数据、学习、优化与决策系统中的核心问题。\n\n我们希望提供一个轻量的学术平台，促进相关方向之间的思想交流与合作。同时，研究组也尊重每位成员在塑造研究方向、管理项目、指导学生以及发展外部合作方面的独立性。',
  },
};

export const theoryWithinSds = {
  title: {
    en: 'Theory within Data Science',
    zh: '数据科学中的理论研究',
  },
  body: {
    en: 'Our group is part of the broader SDS ecosystem, where theoretical computer science interacts naturally with data science, operations research, statistics, machine learning, optimization, economics, and decision analytics. We aim to serve as a theory hub connecting rigorous mathematical foundations with emerging problems in data-driven systems.',
    zh: '本组依托 SDS 的交叉学科生态，使理论计算机科学与数据科学、运筹学、统计学、机器学习、优化、经济学和决策分析自然连接。我们希望成为学院内连接严谨数学基础与数据驱动系统前沿问题的理论研究节点。',
  },
};

export const ecosystemGlance: EcosystemItem[] = [
  {
    title: { en: 'Focused Theory Core', zh: '聚焦理论核心' },
    body: {
      en: 'Algorithms, optimization, economics and computation, and foundations of data science.',
      zh: '算法、优化、经济学与计算，以及数据科学理论基础。',
    },
  },
  {
    title: { en: 'SDS Ecosystem', zh: 'SDS 生态' },
    body: {
      en: 'Computer science, operations research, statistics, machine learning, and decision analytics.',
      zh: '计算机科学、运筹学、统计学、机器学习与决策分析。',
    },
  },
  {
    title: { en: 'Research Platform', zh: '研究平台' },
    body: {
      en: 'SDS hosts 90+ high-end talent and 130+ research projects across its broader research ecosystem.',
      zh: 'SDS 更广泛的研究生态拥有 90+ 高端人才与 130+ 个研究项目。',
    },
  },
  {
    title: { en: 'Training Pipeline', zh: '培养通道' },
    body: {
      en: 'Ph.D., M.Phil., M.Sc., undergraduate research, and reading groups.',
      zh: '博士、硕士、本科科研与读书会等多层次培养形式。',
    },
  },
  {
    title: { en: 'Collaboration Interface', zh: '合作接口' },
    body: {
      en: 'Seminars, visitors, joint projects, and interdisciplinary problems.',
      zh: '讨论班、访问交流、联合项目与交叉学科问题。',
    },
  },
];

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

export const communityGroups: EcosystemItem[] = [
  {
    title: { en: 'Core Faculty', zh: '核心教师' },
    body: {
      en: 'Faculty members who anchor the group research directions and student supervision.',
      zh: '负责支撑研究组主要研究方向与学生指导的教师成员。',
    },
  },
  {
    title: { en: 'Student Members', zh: '学生成员' },
    body: {
      en: 'Ph.D., M.Phil., research assistants, undergraduate researchers, and visiting students connected with the group.',
      zh: '与研究组相关的博士生、硕士生、研究助理、本科科研学生与访问学生。',
    },
  },
  {
    title: { en: 'Affiliated and Collaborating Faculty', zh: '关联与合作教师' },
    body: {
      en: 'SDS and external faculty who collaborate on theory-driven questions, student projects, or seminars.',
      zh: '围绕理论驱动问题、学生项目或讨论班开展合作的 SDS 及外部教师。',
    },
  },
  {
    title: { en: 'Visitors and Seminar Speakers', zh: '访问学者与报告人' },
    body: {
      en: 'Short-term visitors and seminar speakers who contribute to the group’s academic network.',
      zh: '通过短期访问与学术报告参与研究组学术网络的学者。',
    },
  },
  {
    title: { en: 'Alumni and Former Visitors', zh: '校友与往期访问者' },
    body: {
      en: 'Former students and visitors will be recorded as the group grows.',
      zh: '随着研究组发展，将逐步记录往期学生与访问者。',
    },
  },
];

export const researchAreas: ResearchArea[] = [
  {
    title: {
      en: 'Algorithms for Large-Scale Data and Complex Networks',
      zh: '面向大规模数据及复杂网络的算法设计',
    },
    summary: {
      en: 'Theoretical foundations for graph algorithms, dynamic and streaming models, online algorithms, data structures, and database and data mining theory.',
      zh: '围绕图算法、动态与流式模型、在线算法、数据结构，以及数据库与数据挖掘理论展开研究。',
    },
    topics: [
      { en: 'Graph algorithms', zh: '图算法' },
      { en: 'Dynamic algorithms', zh: '动态图算法' },
      { en: 'Streaming algorithms', zh: '流式算法' },
      { en: 'Online algorithms', zh: '在线算法' },
      { en: 'Data structures', zh: '数据结构' },
      { en: 'Database theory', zh: '数据库理论' },
      { en: 'Data mining theory', zh: '数据挖掘理论' },
    ],
  },
  {
    title: {
      en: 'Optimization, Learning, and Statistical Foundations',
      zh: '优化、学习与统计基础',
    },
    summary: {
      en: 'Mathematical foundations for optimization, machine learning theory, statistical foundations, and theoretical data science.',
      zh: '研究优化、机器学习理论、统计基础与数据科学理论中的数学基础问题。',
    },
    topics: [
      { en: 'Optimization', zh: '优化' },
      { en: 'Machine learning theory', zh: '机器学习理论' },
      { en: 'Statistics', zh: '统计' },
      { en: 'Mathematical foundations', zh: '数学基础' },
      { en: 'Theoretical data science', zh: '理论数据科学' },
    ],
  },
  {
    title: {
      en: 'Economics, Computation, and Decision Making',
      zh: '经济学、计算与决策理论',
    },
    summary: {
      en: 'Theoretical foundations for mechanism design, information design, algorithmic game theory, learning decision-makers, and decision systems.',
      zh: '研究机制设计、信息设计、算法博弈论、学习型决策者与决策系统中的理论基础。',
    },
    topics: [
      { en: 'Mechanism design', zh: '机制设计' },
      { en: 'Information design', zh: '信息设计' },
      { en: 'Algorithmic game theory', zh: '算法博弈论' },
      { en: 'Learning decision-makers', zh: '学习型决策者' },
      { en: 'Decision systems', zh: '决策系统' },
    ],
  },
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

export const eventTracks: CollaborationItem[] = [
  {
    title: { en: 'SDS Theory Seminar', zh: 'SDS Theory Seminar' },
    body: {
      en: 'The SDS Theory Seminar will be launched in Fall 2026. We welcome seminar suggestions and visitor proposals.',
      zh: 'SDS Theory Seminar 计划于 2026 年秋季启动，欢迎报告推荐、访问交流与合作建议。',
    },
  },
  {
    title: { en: 'Theory Reading Group', zh: '理论读书会' },
    body: {
      en: 'Reading groups will support shared learning across algorithms, optimization, economics, and data science foundations.',
      zh: '读书会将支持算法、优化、经济学与数据科学理论基础等方向的共同学习。',
    },
  },
  {
    title: { en: 'Student Research Meeting', zh: '学生研究讨论' },
    body: {
      en: 'Student meetings will provide a regular space for research updates, feedback, and early-stage ideas.',
      zh: '学生研究讨论将为研究进展汇报、反馈和早期想法交流提供固定空间。',
    },
  },
  {
    title: { en: 'Visitor Talks', zh: '访问报告' },
    body: {
      en: 'The group welcomes short visits and informal research discussions with external scholars.',
      zh: '研究组欢迎外部学者短期访问和非正式研究讨论。',
    },
  },
  {
    title: { en: 'Informal Problem Sessions', zh: '非正式问题讨论' },
    body: {
      en: 'Informal sessions will help students and faculty explore early-stage questions before they become polished projects.',
      zh: '非正式问题讨论将帮助学生和教师交流尚处早期阶段的想法。',
    },
  },
  {
    title: { en: 'Cross-Area Collaborations', zh: '跨方向合作' },
    body: {
      en: 'Cross-area collaborations connect theory with data science, operations research, statistics, learning, and decision systems.',
      zh: '跨方向合作将理论研究与数据科学、运筹学、统计、学习和决策系统连接起来。',
    },
  },
];

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
      en: 'Three papers by Prof. Tao Lin accepted to EC 2026',
      zh: '林涛教授三篇论文被 EC 2026 录用',
    },
    summary: {
      en: 'Prof. Tao Lin has three works accepted to the 27th ACM Conference on Economics and Computation (EC 2026): "Information Design with Large Language Models", "The Price and Complexity of Explainable Information Design", and "Gradient Dynamics in First-Price Auctions: Iterative Strategy Elimination via Cubic Potentials".',
      zh: '林涛教授三篇论文《Information Design with Large Language Models》《The Price and Complexity of Explainable Information Design》《Gradient Dynamics in First-Price Auctions: Iterative Strategy Elimination via Cubic Potentials》被 the 27th ACM Conference on Economics and Computation (EC 2026) 录用。',
    },
  },
  {
    date: '2026-05-01',
    title: {
      en: 'One paper by Prof. Aditi Dudeja accepted to CCC 2026',
      zh: 'Aditi Dudeja 教授一篇论文被 CCC 2026 录用',
    },
    summary: {
      en: 'Prof. Aditi Dudeja’s paper "Frontier Space-time Algorithms Using Only Full Memory" has been accepted to the Computational Complexity Conference 2026 (CCC 2026).',
      zh: 'Aditi Dudeja 教授一篇论文《Frontier Space-time Algorithms Using Only Full Memory》被 the Computational Complexity Conference 2026 (CCC 2026) 录用。',
    },
  },
  {
    date: '2026-04-29',
    title: {
      en: 'One paper by Prof. Aditi Dudeja accepted to PODC 2026',
      zh: 'Aditi Dudeja 教授一篇论文被 PODC 2026 录用',
    },
    summary: {
      en: 'Prof. Aditi Dudeja’s paper "Distributed Stochastic Graph Algorithms" has been accepted to the 2026 ACM Symposium on Principles of Distributed Computing (PODC 2026).',
      zh: 'Aditi Dudeja 教授一篇论文《Distributed Stochastic Graph Algorithms》被 the 2026 ACM Symposium on Principles of Distributed Computing (PODC 2026) 录用。',
    },
  },
];

export const prospective = {
  title: {
    en: 'Recruit',
    zh: '招生',
  },
  body: {
    en: 'We welcome students interested in algorithms, optimization, learning theory, economics and computation, and theoretical foundations of data science.',
    zh: '我们欢迎对算法、优化、学习理论、经济学与计算、数据科学理论基础感兴趣的学生。',
  },
  url: 'https://sds.cuhk.edu.cn/phd-programmes-CSE',
};

export const recruit = {
  title: {
    en: 'Recruit',
    zh: '招生',
  },
  subtitle: {
    en: 'Close theoretical training from core faculty, connected to the broader SDS research and teaching environment.',
    zh: '核心导师提供紧密的理论训练，并连接 SDS 更广泛的课程与科研环境。',
  },
  body: {
    en: 'If you are interested in joining us, we welcome students who enjoy proofs, algorithms, abstraction, and deep problem solving. Students joining the group will receive close theoretical training from core faculty while benefiting from the broader SDS environment, including courses and research opportunities in algorithms, optimization, statistics, machine learning, data management, graph computing, game theory, and related areas.',
    zh: '如果你对加入我们感兴趣，我们欢迎热爱证明、算法、抽象与深度问题求解的学生。加入本组的学生将获得核心导师较为紧密的理论训练，同时也可以受益于 SDS 更广泛的课程与科研环境，包括算法分析、优化、图计算、数据管理、机器学习、博弈论与算法博弈论等相关方向。',
  },
  sections: [
    {
      title: { en: 'Who should apply', zh: '适合申请的学生' },
      body: {
        en: 'Students with strong mathematical foundations and interests in algorithms, theory, optimization, machine learning theory, economics theory, or related areas.',
        zh: '数学基础扎实，并对算法、理论、优化、机器学习理论、经济学理论或相关方向感兴趣的学生。',
      },
    },
    {
      title: { en: 'Research opportunities', zh: '研究机会' },
      body: {
        en: 'Students may explore the group research thrusts in algorithms for data and networks, optimization and learning foundations, and economics, computation, and decision making.',
        zh: '学生可以参与面向数据与网络的算法、优化与学习基础，以及经济学、计算与决策理论等研究方向。',
      },
    },
    {
      title: { en: 'How to contact us', zh: '如何联系' },
      body: {
        en: 'Prospective students are encouraged to contact faculty members whose research interests match their own. A short CV, transcript, and research interests are helpful.',
        zh: '欢迎意向学生联系研究兴趣契合的老师。邮件中建议附上简历、成绩单和简短的研究兴趣说明。',
      },
    },
    {
      title: { en: 'Student life and training', zh: '学生培养与学术生活' },
      body: {
        en: 'The group aims to support reading groups, seminars, visitor talks, conference participation, joint advising, and student research projects connected to the broader SDS platform.',
        zh: '研究组将支持读书会、讨论班、访问报告、会议交流、联合指导，以及依托 SDS 平台开展的学生科研项目。',
      },
    },
    {
      title: { en: 'Application links', zh: '申请链接' },
      body: {
        en: 'Official application information is maintained by the School. Please consult the graduate programme page for requirements and procedures.',
        zh: '正式申请信息以学院招生页面为准。请通过研究生项目页面查看申请要求与流程。',
      },
    },
  ] satisfies RecruitSection[],
  admissionsUrl: 'https://sds.cuhk.edu.cn/phd-programmes-CSE',
};

export const trainingCards: RecruitSection[] = [
  {
    title: { en: 'Mathematical Maturity', zh: '数学成熟度' },
    body: {
      en: 'Proofs, abstraction, probability, discrete structures, and optimization.',
      zh: '证明、抽象、概率、离散结构与优化。',
    },
  },
  {
    title: { en: 'Algorithmic Thinking', zh: '算法思维' },
    body: {
      en: 'Algorithms, data structures, graph problems, complexity, online and dynamic models.',
      zh: '算法、数据结构、图问题、复杂性、在线与动态模型。',
    },
  },
  {
    title: { en: 'Research Apprenticeship', zh: '科研训练' },
    body: {
      en: 'Reading papers, presenting ideas, writing proofs, developing prototypes, and building independent research taste.',
      zh: '阅读论文、表达想法、撰写证明、构建原型，并逐步形成独立的研究品味。',
    },
  },
  {
    title: { en: 'Competition-to-Research Path', zh: '从竞赛到科研' },
    body: {
      en: 'Helping contest-trained students move from solving well-defined problems to formulating new research questions.',
      zh: '帮助具备竞赛训练的学生从求解定义清晰的问题，走向提出新的研究问题。',
    },
  },
];

export const collaborations = {
  title: {
    en: 'Collaborate with Us',
    zh: '合作交流',
  },
  subtitle: {
    en: 'A collaboration interface for theory-driven questions across the SDS ecosystem.',
    zh: '面向 SDS 生态中理论驱动问题的开放合作接口。',
  },
  body: {
    en: 'We welcome collaborations with researchers in computer science, operations research, statistics, machine learning, economics, and data-driven application areas. Possible formats include seminars, short visits, student projects, joint supervision, reading groups, and research collaborations.',
    zh: '我们欢迎与计算机科学、运筹学、统计学、机器学习、经济学以及数据驱动应用方向的研究者开展合作。合作形式包括学术报告、短期访问、学生项目、联合指导、reading group 与联合研究等。',
  },
  principles: [
    {
      title: { en: 'Open to collaboration', zh: '我们愿意合作' },
      body: {
        en: 'Although the core group is focused, it is designed as an open node for visitors, seminars, research discussions, and shared academic activities.',
        zh: '虽然核心成员规模聚焦，但研究组希望成为开放节点，欢迎访问、报告、研究讨论与共同学术活动。',
      },
    },
    {
      title: { en: 'Focused on meaningful themes', zh: '我们有合作主题' },
      body: {
        en: 'We are especially interested in problems where theoretical depth meets data science, learning, decision-making, and computation.',
        zh: '我们尤其关注理论深度与数据科学、学习、决策和计算相交的问题。',
      },
    },
    {
      title: { en: 'Built through concrete mechanisms', zh: '我们有合作机制' },
      body: {
        en: 'Collaborations can take the form of seminars, reading groups, workshops, joint projects, student exchange, and co-advising.',
        zh: '合作可以通过讨论班、读书会、工作坊、联合项目、学生交流与共同指导等方式展开。',
      },
    },
  ] satisfies CollaborationItem[],
  channels: [
    {
      title: { en: 'Seminars and visitors', zh: '讨论班与访问交流' },
      body: {
        en: 'We welcome external scholars for visits, talks, and short-term academic exchanges.',
        zh: '欢迎外部学者来访、报告和短期交流。',
      },
    },
    {
      title: { en: 'Internal collaborations', zh: '校内合作' },
      body: {
        en: 'We seek collaborations across SDS, CSE, mathematics, economics, AI, statistics, and related areas, especially on data science problems with theoretical depth.',
        zh: '我们欢迎与 SDS、CSE、数学、经管、AI、统计等方向合作，尤其是数据科学中具有理论深度的问题。',
      },
    },
    {
      title: { en: 'External academic collaborations', zh: '校外学术合作' },
      body: {
        en: 'Possible formats include joint papers, workshops, reading groups, and student exchange.',
        zh: '合作形式包括联合论文、工作坊、读书会和学生交流等。',
      },
    },
    {
      title: { en: 'Student-centered collaborations', zh: '以学生培养为中心的合作' },
      body: {
        en: 'We support joint supervision, summer research, undergraduate research projects, and Ph.D. co-advising when appropriate.',
        zh: '在合适条件下，我们支持联合指导、暑期研究、本科生科研项目和博士生共同指导。',
      },
    },
  ] satisfies CollaborationItem[],
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
