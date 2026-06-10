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
        },
        actions: {
          email: 'Email',
          github: 'GitHub',
          learnMore: 'Learn more',
          viewEvents: 'View events',
          viewCalendar: 'View calendar',
          addGoogle: 'Google Calendar',
          addIcs: 'Download .ics',
          website: 'Website',
          profile: 'SDS profile',
          office: 'Office',
        },
        theme: {
          light: 'Light mode',
          dark: 'Dark mode',
          switchLight: 'Switch to light mode',
          switchDark: 'Switch to dark mode',
        },
        home: {
          introEyebrow: 'About',
          introTitle: 'A lightweight platform for theory at SDS',
          introBody:
            'The group is intended to make theory-related research more visible, support regular intellectual exchange, and create opportunities for collaboration while preserving each PI’s academic independence.',
          prospectiveEyebrow: 'Admissions',
          eventsEyebrow: 'Calendar',
          eventsTitle: 'Upcoming Events',
          newsEyebrow: 'Updates',
          newsTitle: 'News',
          areasEyebrow: 'Research',
          areasTitle: 'Connected by method',
        },
        people: {
          facultyTitle: 'Faculty',
          facultyIntro:
            'Faculty cards can include research areas, homepage links, office information, and contact details.',
          studentsTitle: 'Students',
          studentsIntro:
            'Student cards are designed for graduate students, coordinators, visitors, and alumni.',
          research: 'Research',
        },
        events: {
          title: 'Events',
          intro:
            'Seminars, reading groups, internal research discussions, visitors, and theory days can all be maintained from one event data file.',
          calendar: 'Calendar',
          details: 'Event Details',
          speaker: 'Speaker',
          location: 'Location',
          host: 'Host',
          time: 'Time',
          status: 'Status',
        },
        footer: {
          line: 'Theory Group, School of Data Science',
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
        },
        actions: {
          email: '邮件',
          github: 'GitHub',
          learnMore: '了解更多',
          viewEvents: '查看活动',
          viewCalendar: '查看日历',
          addGoogle: '加入 Google 日历',
          addIcs: '下载 .ics',
          website: '主页',
          profile: 'SDS 主页',
          office: '办公室',
        },
        theme: {
          light: '浅色模式',
          dark: '深色模式',
          switchLight: '切换到浅色模式',
          switchDark: '切换到深色模式',
        },
        home: {
          introEyebrow: '关于我们',
          introTitle: '面向 SDS 理论研究的轻量学术平台',
          introBody:
            '理论组旨在提升学院理论相关研究的可见度，支持稳定的学术交流，并创造跨方向合作机会，同时保留每位 PI 在研究方向、学生指导和项目管理上的独立性。',
          prospectiveEyebrow: '招生与交流',
          eventsEyebrow: '日历',
          eventsTitle: '近期活动',
          newsEyebrow: '动态',
          newsTitle: '新闻',
          areasEyebrow: '研究方向',
          areasTitle: '由方法论连接起来的研究',
        },
        people: {
          facultyTitle: '教师',
          facultyIntro: '教师卡片可展示研究方向、个人主页、办公室和联系方式。',
          studentsTitle: '学生',
          studentsIntro: '学生页面可展示研究生、学生协调人、访问学生与校友。',
          research: '研究方向',
        },
        events: {
          title: '活动',
          intro: '讨论班、读书会、内部讨论、访问交流和 Theory Days 都可以从同一个活动数据文件维护。',
          calendar: '日历',
          details: '活动详情',
          speaker: '报告人',
          location: '地点',
          host: 'Host',
          time: '时间',
          status: '状态',
        },
        footer: {
          line: '数据科学学院理论组',
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
