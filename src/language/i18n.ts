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
          faculty: 'Members',
          students: 'Students',
          events: 'Activities',
          recruit: 'Recruit',
          collaborate: 'Collaborate',
          contact: 'Contact',
        },
        actions: {
          email: 'Email',
          github: 'GitHub',
          learnMore: 'Learn more',
          viewEvents: 'View events',
          viewActivities: 'View activities',
          exploreResearch: 'Explore research',
          meetFaculty: 'Meet our faculty',
          phdMphil: 'Prospective PhD/MPhil Students',
          undergraduateResearch: 'Undergraduate Research',
          raOpportunities: 'Research Assistant Opportunities',
          viewCalendar: 'View calendar',
          contactUs: 'Contact us',
          recruit: 'Recruit',
          collaborate: 'Collaborate',
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
          eventsTitle: 'Seminars and Visitors',
          newsEyebrow: 'Updates',
          newsTitle: 'News',
          areasEyebrow: 'Research',
          areasTitle: 'Research Areas',
          ecosystemTitle: 'Ecosystem at a Glance',
          whyTitle: 'Why SDS CS Theory Group?',
          trainingTitle: 'Interested in Joining Us?',
          trainingSubtitle:
            'For students who enjoy proofs, algorithms, abstraction, and deep problem solving.',
          activitiesTitle: 'Academic Activities',
        },
        people: {
          facultyTitle: 'Members',
          facultyIntro:
            'Faculty members and coordinators of the SDS CS Theory Group.',
          communityTitle: 'Member Categories',
          facultyMembers: 'Core Faculty',
          emptyCategory: 'To be updated.',
          studentsTitle: 'Students',
          studentsIntro:
            'Ph.D., M.Phil., research assistant, undergraduate research, and visiting students connected with the group.',
          research: 'Research',
        },
        events: {
          title: 'Activities',
          intro:
            'The SDS Theory Seminar will be launched in Fall 2026. We welcome seminar suggestions and visitor proposals.',
          calendar: 'Calendar',
          details: 'Event Details',
          launchTitle: 'Seminars and Visitors',
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
          faculty: '成员',
          students: '学生',
          events: '活动',
          recruit: '招生',
          collaborate: '合作',
          contact: '联系',
        },
        actions: {
          email: '邮件',
          github: 'GitHub',
          learnMore: '了解更多',
          viewEvents: '查看活动',
          viewActivities: '查看活动',
          exploreResearch: '探索研究方向',
          meetFaculty: '了解教师',
          phdMphil: '博士/硕士申请',
          undergraduateResearch: '本科生科研',
          raOpportunities: '研究助理机会',
          viewCalendar: '查看日历',
          contactUs: '联系我们',
          recruit: '招生',
          collaborate: '合作交流',
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
          eventsTitle: '讨论班与访问交流',
          newsEyebrow: '动态',
          newsTitle: '新闻',
          areasEyebrow: '研究方向',
          areasTitle: '研究方向',
          ecosystemTitle: '生态概览',
          whyTitle: '为什么选择 SDS CS 理论研究组？',
          trainingTitle: '如果你对我们感兴趣',
          trainingSubtitle: '我们欢迎热爱证明、算法、抽象与深度问题求解的学生。',
          activitiesTitle: '学术活动',
        },
        people: {
          facultyTitle: '成员',
          facultyIntro: 'SDS CS 理论研究组的教师成员与协调人。',
          communityTitle: '成员类别',
          facultyMembers: '核心教师',
          emptyCategory: '待更新',
          studentsTitle: '学生',
          studentsIntro: '与研究组相关的博士生、硕士生、研究助理、本科科研学生与访问学生。',
          research: '研究方向',
        },
        events: {
          title: '活动',
          intro: 'SDS Theory Seminar 计划于 2026 年秋季启动，欢迎报告推荐、访问交流与合作建议。',
          calendar: '日历',
          details: '活动详情',
          launchTitle: '讨论班与访问交流',
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
