import type { LocalizedText } from './site';

export const siteUrl = new URL(import.meta.env.BASE_URL, 'https://sds-theory.github.io').href;

export const seoPages: { path: string; title: LocalizedText; description: LocalizedText }[] = [
  {
    path: '/',
    title: { en: 'SDS Theory Group | CUHK-Shenzhen', zh: 'SDS 理论研究组 | 香港中文大学（深圳）' },
    description: {
      en: 'The SDS Theory Group at the School of Data Science, CUHK-Shenzhen studies algorithms, optimization, learning, economics, and the theoretical foundations of data science.',
      zh: '香港中文大学（深圳）数据科学学院 SDS 理论研究组，研究算法、优化、学习、经济学与数据科学的理论基础。了解研究团队、学生、学术活动与招生资讯。',
    },
  },
  {
    path: '/faculty',
    title: { en: 'Members | SDS Theory Group, CUHK-Shenzhen', zh: '成员 | SDS 理论研究组' },
    description: {
      en: 'Meet the core faculty and research community of the SDS Theory Group at CUHK-Shenzhen, with research interests and links to individual academic profiles.',
      zh: '了解香港中文大学（深圳）SDS 理论研究组的核心教师、合作成员、访问学者与校友，浏览成员的研究方向与个人主页。',
    },
  },
  {
    path: '/students',
    title: { en: 'Students | SDS Theory Group, CUHK-Shenzhen', zh: '学生 | SDS 理论研究组' },
    description: {
      en: 'Meet PhD students and student researchers in the SDS Theory Group at CUHK-Shenzhen, including their advisors and research interests.',
      zh: '了解香港中文大学（深圳）SDS 理论研究组的博士生与学生研究成员，以及他们的导师、入学年份和研究方向。',
    },
  },
  {
    path: '/events',
    title: { en: 'Academic Activities | SDS Theory Group', zh: '学术活动 | SDS 理论研究组' },
    description: {
      en: 'Explore SDS Theory Group seminars, visiting speakers, reading groups, and research discussions, with event details, calendars, posters, and photos.',
      zh: '浏览 SDS 理论研究组的学术报告、访问交流、读书会与研究讨论，查看活动日历、讲者信息、报告海报及现场照片。',
    },
  },
  {
    path: '/recruit',
    title: { en: 'Admissions and Research Opportunities | SDS Theory Group', zh: '招生资讯与科研机会 | SDS 理论研究组' },
    description: {
      en: 'Explore PhD, MPhil, research assistant, and undergraduate research opportunities in algorithms and theoretical data science at SDS, CUHK-Shenzhen.',
      zh: '了解香港中文大学（深圳）SDS 理论研究组的博士、硕士、研究助理与本科生科研机会，以及算法和数据科学理论方向的培养与申请信息。',
    },
  },
  {
    path: '/collaborate',
    title: { en: 'Academic Collaboration | SDS Theory Group', zh: '学术合作 | SDS 理论研究组' },
    description: {
      en: 'Collaborate with the SDS Theory Group through seminars, visits, joint research, student projects, and interdisciplinary work in theoretical data science.',
      zh: '通过学术报告、访问交流、联合研究、学生项目和跨学科合作，与 SDS 理论研究组建立学术联系。',
    },
  },
  {
    path: '/contact',
    title: { en: 'Contact | SDS Theory Group, CUHK-Shenzhen', zh: '联系我们 | SDS 理论研究组' },
    description: {
      en: 'Contact the SDS Theory Group at the School of Data Science, CUHK-Shenzhen about research collaboration, visits, seminars, and student opportunities.',
      zh: '联系香港中文大学（深圳）数据科学学院 SDS 理论研究组，咨询学术合作、访问交流、报告邀请与学生科研机会。',
    },
  },
];

export type PageMetaTag =
  | { name: string; content: string }
  | { property: string; content: string }
  | { rel: 'canonical'; href: string };

export function pageUrl(path: string) {
  return new URL(path === '/' ? '' : `${path.replace(/^\/+|\/+$/g, '')}/`, siteUrl).href;
}

export function pageMetadata(pathname: string, language: string) {
  const path = pathname.replace(/\/+$/, '') || '/';
  const page = seoPages.find((entry) => entry.path === (path === '/join-us' ? '/recruit' : path));
  const locale = language.startsWith('zh') ? 'zh' : 'en';
  const title = page?.title[locale] ?? (locale === 'zh' ? '页面未找到 | SDS 理论研究组' : 'Page Not Found | SDS Theory Group');
  const description = page?.description[locale] ?? (locale === 'zh' ? '此页面不存在。' : 'This page could not be found.');
  const tags: PageMetaTag[] = [
    { name: 'description', content: description },
    { name: 'robots', content: page ? 'index, follow' : 'noindex, follow' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:site_name', content: 'SDS Theory Group' },
    { property: 'og:type', content: 'website' },
  ];
  if (page) {
    const url = pageUrl(page.path);
    tags.push({ rel: 'canonical', href: url }, { property: 'og:url', content: url });
  }
  return { title, tags };
}
