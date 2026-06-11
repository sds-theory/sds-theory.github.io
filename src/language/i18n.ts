import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const storedLanguage = localStorage.getItem('language');
const systemLanguage = navigator.language?.startsWith('zh') ? 'zh' : 'en';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        nav: {
          home: 'Home',
          faculty: 'Faculty',
          students: 'Students',
          events: 'Events',
          contact: 'Contact',
        },
        actions: {
          email: 'Email',
          github: 'GitHub',
          learnMore: 'Learn more',
          viewEvents: 'View events',
          viewCalendar: 'View calendar',
          contactUs: 'Contact us',
          admissions: 'Admissions Info',
          addGoogle: 'Google Calendar',
          addIcs: 'Download .ics',
          website: 'Mainpage',
          office: 'Office',
        },
        home: {
          introEyebrow: 'About Us',
          introTitle: 'About Us',
          introBody:
            'Our goal is to bring together researchers working on algorithms, combinatorial and discrete structures, optimization, and the theoretical foundations of data science.',
          prospectiveEyebrow: 'Prospective Graduate Students',
          eventsEyebrow: 'Calendar',
          eventsTitle: 'Upcoming Events',
          newsEyebrow: 'Updates',
          newsTitle: 'News',
          areasEyebrow: 'Research',
          areasTitle: 'Research Areas',
        },
        people: {
          facultyTitle: 'Faculty',
          facultyIntro:
            'Faculty members and coordinators of the SDS CS Theory Group.',
          studentsTitle: 'Students',
          studentsIntro:
            'Graduate students and visitors connected with the group.',
          research: 'Research',
        },
        events: {
          title: 'Events',
          intro:
            'Seminars, reading groups, internal research discussions, visitors, and theory days can all be maintained from one event data file.',
          calendar: 'Calendar',
          details: 'Event Details',
          empty: 'No events have been announced yet. Please check back later.',
          speaker: 'Speaker',
          location: 'Location',
          host: 'Host',
          time: 'Time',
          status: 'Status',
        },
        footer: {
          line: '2026 - Now, all rights reserved to SDS CS Theory Group.',
        },
        contact: {
          title: 'Contact Us',
          intro:
            'For visits, collaboration, seminar invitations, student activities, or general questions, please contact the group by email.',
          emailLabel: 'Group email',
        },
      },
    },
    zh: {
      translation: {
        nav: {
          home: '首页',
          faculty: '教师',
          students: '学生',
          events: '活动',
          contact: '联系',
        },
        actions: {
          email: '邮件',
          github: 'GitHub',
          learnMore: '了解更多',
          viewEvents: '查看活动',
          viewCalendar: '查看日历',
          contactUs: '联系我们',
          admissions: '招生信息',
          addGoogle: '加入 Google 日历',
          addIcs: '下载 .ics',
          website: '个人主页',
          office: '办公室',
        },
        home: {
          introEyebrow: '关于我们',
          introTitle: '关于我们',
          introBody:
            '我们的目标是汇聚从事算法、组合与离散结构、优化以及数据科学理论基础研究的学者。',
          prospectiveEyebrow: 'Prospective Graduate Students',
          eventsEyebrow: '日历',
          eventsTitle: '近期活动',
          newsEyebrow: '动态',
          newsTitle: '新闻',
          areasEyebrow: '研究方向',
          areasTitle: '研究方向',
        },
        people: {
          facultyTitle: '教师',
          facultyIntro: 'SDS CS 理论研究组的教师成员与协调人。',
          studentsTitle: '学生',
          studentsIntro: '与研究组相关的研究生与访问学生。',
          research: '研究方向',
        },
        events: {
          title: '活动',
          intro: '讨论班、读书会、内部讨论、访问交流和 Theory Days 都可以从同一个活动数据文件维护。',
          calendar: '日历',
          details: '活动详情',
          empty: '目前还没有公布活动，请稍后查看。',
          speaker: '报告人',
          location: '地点',
          host: 'Host',
          time: '时间',
          status: '状态',
        },
        footer: {
          line: '2026 至今，版权归 SDS CS 理论研究组所有。',
        },
        contact: {
          title: '联系我们',
          intro: '如有访问交流、学术合作、报告邀请、学生活动或其他问题，欢迎通过邮件联系理论组。',
          emailLabel: '理论组邮箱',
        },
      },
    },
  },
  lng: storedLanguage ?? systemLanguage,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
