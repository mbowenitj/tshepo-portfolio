import spinLaptop    from '../assets/project/project-3-laptop.jpg';
import spinMobile    from '../assets/project/project-3-mobile.jpg';
import spendLaptop   from '../assets/project/project-4-laptop.jpg';
import spendMobile   from '../assets/project/project-4-mobile.jpg';
import shosholozaApp from '../assets/project/shosholoza-app.png';

export const personal = {
  name: 'Tshepo Mboweni',
  title: 'Frontend Engineer',
  roles: ['React Expert', 'Angular Developer', 'Cross-Platform Mobile Developer', 'UI/UX Implementer'],
  tagline: '8+ years crafting fast, beautiful, production-ready web & mobile experiences.',
  email: 'mbowenitshepo@gmail.com',
  phone: '078 055 0474 / 060 700 6456',
  location: 'Cape Town, South Africa',
  linkedin: 'https://linkedin.com/in/tshepo-mboweni',
  portfolio: 'https://tshepomboweniportfolio.netlify.app/',
  availability: 'Immediately Available',
};

export const about = `Creative and detail-driven Frontend Engineer with 8+ years of experience building responsive, maintainable web and cross-platform mobile applications. I translate Figma designs into pixel-perfect, performant code — working comfortably across the full stack when needed.

Known for delivering high-quality code, mentoring junior developers, and driving Agile teams forward. I thrive in collaborative environments where great design meets clean engineering.`;

export const stats = [
  { value: '8+', label: 'Years Experience' },
  { value: '6', label: 'Companies' },
  { value: '5', label: 'Languages Spoken' },
  { value: '∞', label: 'Passion for Code' },
];

export const skills = [
  {
    category: 'Front-End',
    color: '#a855f7',
    items: ['React.js', 'Angular', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'SCSS/SASS', 'HTML5 / CSS3', 'Bootstrap', 'Vue.js'],
  },
  {
    category: 'Back-End & Cloud',
    color: '#06b6d4',
    items: ['Node.js', 'Express.js', 'Next.js', 'GraphQL', 'Firebase', 'MongoDB', 'SQL Server', 'AWS (EC2 / S3)'],
  },
  {
    category: 'Cross-Platform Mobile',
    color: '#f59e0b',
    items: ['React Native', 'Ionic', 'Capacitor', 'Cordova', 'Expo', 'Flutter (basics)', 'PWA', 'iOS & Android deployment'],
  },
  {
    category: 'Tools & Workflow',
    color: '#10b981',
    items: ['Git / GitHub / Bitbucket', 'CI/CD (GitHub Actions, Jenkins)', 'Jira', 'Figma', 'Umbraco CMS', 'TeamCity', 'Docker basics', 'Agile / Scrum'],
  },
];

export const experience = [
  {
    company: 'Rank Interactive',
    role: 'Front End Developer',
    period: 'April 2022 – February 2026',
    duration: '~4 years',
    type: 'Full-time',
    highlights: [
      'Translated UX designs from Figma into responsive front-end code using Angular, React, React Native, TypeScript & Tailwind CSS',
      'Built and maintained web and mobile apps with a strong focus on performance, clean design, and user experience',
      'Managed CI/CD pipelines via GitHub Actions, Azure, and Jenkins; version control via Bitbucket & GitHub',
      'Contributed to MongoDB and Umbraco CMS integrations; deployed and managed AWS (EC2, S3) infrastructure',
      'Mentored junior developers, conducted code reviews, and facilitated Agile/Scrum ceremonies',
    ],
    tech: ['Angular', 'React', 'React Native', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'AWS', 'Jenkins'],
    reasonForLeaving: 'Company downsizing due to increased UK tax on gambling companies.',
  },
  {
    company: 'Adapt IT Holding LTD',
    role: 'Front End Developer | Full-Stack',
    period: 'June 2020 – March 2022',
    duration: '~2 years',
    type: 'Full-time',
    highlights: [
      'Delivered scalable software solutions using Angular 12, TypeScript, JavaScript & Angular Material',
      'Contributed to the C# backend — making necessary updates and fixes when required',
      'Handled database management with SQL Server; deployments via TeamCity and Octopus Deploy',
      'Conducted code reviews and maintained production stability across multiple applications',
    ],
    tech: ['Angular 12', 'TypeScript', 'C#', 'SQL Server', 'TeamCity', 'Bootstrap'],
    reasonForLeaving: 'Opportunity to work on larger-scale and more innovative projects.',
  },
  {
    company: 'EOH',
    role: 'Front End Developer',
    period: 'March 2019 – May 2020',
    duration: '14 months',
    type: 'Full-time',
    highlights: [
      'Built dynamic, user-friendly web apps with Angular 7, TypeScript, Angular Material & Bootstrap',
      'Developed Progressive Web Apps (PWAs) to enhance performance and engagement across devices',
      'Used Node.js to support build processes, tooling and backend API integration',
    ],
    tech: ['Angular 7', 'TypeScript', 'Node.js', 'SASS', 'Bootstrap', 'PWA'],
    reasonForLeaving: 'Commuting distance.',
  },
  {
    company: 'Nurun',
    role: 'Front End Developer',
    period: 'November 2018 – February 2019',
    duration: '4 months',
    type: 'Contract',
    highlights: [
      'Built high-quality, responsive web apps and PWAs with ReactJS, CSS, Bootstrap & jQuery',
      'Contributed to feature development, bug fixing, code reviews and production deployments',
    ],
    tech: ['React', 'JavaScript', 'Bootstrap', 'jQuery', 'WordPress'],
    reasonForLeaving: 'Technology stack transition no longer aligned with core expertise.',
  },
  {
    company: 'Engagement Factory',
    role: 'Front End Developer',
    period: 'August 2017 – October 2018',
    duration: '15 months',
    type: 'Full-time',
    highlights: [
      'Built dynamic landing pages and responsive web apps with React, Vue.js, SASS, AJAX & jQuery',
      'Developed Hybrid Mobile Applications using Ionic and Cordova for cross-platform experiences',
      'Used Oracle Eloqua for marketing automation and Gulp/Yeoman for build processes',
    ],
    tech: ['React', 'Vue.js', 'Ionic', 'Cordova', 'SASS', 'Gulp', 'Oracle Eloqua'],
    reasonForLeaving: 'Career growth.',
  },
  {
    company: 'Infoware Studios',
    role: 'Fullstack Engineer',
    period: 'March 2015 – July 2017',
    duration: '2+ years',
    type: 'Full-time',
    highlights: [
      'Built cross-platform mobile apps using Ionic and Cordova; developed PWAs for multi-platform reach',
      'Built backend APIs and server-side logic using Node.js and Express',
      'Developed responsive websites with HTML, CSS, Bootstrap, JavaScript, jQuery & WordPress',
    ],
    tech: ['Node.js', 'Express', 'Ionic', 'Cordova', 'JavaScript', 'WordPress'],
    reasonForLeaving: 'Relocated to Cape Town.',
  },
];

// Screenshot thumbnail helper – uses thum.io (free, no key needed) as fallback
export const thumb = (url) =>
  `https://image.thum.io/get/width/800/crop/450/noanimate/${url}`;

export const enterpriseProjects = [
  {
    title: 'Grosvenor Casinos',
    image: '/projects/grosvenor.webp',
    company: 'Rank Interactive',
    period: '2022 – 2026',
    description: "UK's most iconic land-based casino brand's full digital platform. Delivered feature-rich front-end experiences across web and mobile for millions of players.",
    url: 'https://www.grosvenorcasinos.com/',
    tech: ['Angular', 'React', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'AWS'],
    category: 'Gaming Platform',
  },
  {
    title: 'Bella Casino',
    image: '/projects/bella.webp',
    company: 'Rank Interactive',
    period: '2022 – 2026',
    description: 'Premium online casino platform built for Rank Interactive. Focused on high-performance UI, responsive design and seamless player experience.',
    url: 'https://www.bellacasino.com/',
    tech: ['Angular', 'TypeScript', 'SCSS', 'REST APIs'],
    category: 'Gaming Platform',
  },
  {
    title: 'Spin & Win',
    image: spinLaptop,
    imageMobile: spinMobile,
    company: 'Rank Interactive',
    period: '2022 – 2026',
    description: 'Online slots and casino games portal. Contributed to game lobby UI, promotions pages and mobile-optimised layouts.',
    url: 'https://www.spinandwin.com/',
    tech: ['Angular', 'TypeScript', 'Tailwind CSS', 'Jenkins CI'],
    category: 'Gaming Platform',
  },
  {
    title: 'Spend Manager',
    image: spendLaptop,
    imageMobile: spendMobile,
    company: 'Adapt IT Holding LTD',
    period: '2020 – 2022',
    description: 'South African corporate spend management and procurement platform. Built responsive dashboards, forms and data-table interfaces.',
    url: 'https://www.spendmanager.co.za/',
    tech: ['Angular 12', 'TypeScript', 'Angular Material', 'SQL Server'],
    category: 'Enterprise SaaS',
  },
  {
    title: 'USB-ED Online Applications',
    image: '/projects/usb-ed.webp',
    company: 'Adapt IT Holding LTD',
    period: '2020 – 2022',
    description: 'University of Stellenbosch Business School online application portal. Engineered multi-step application forms and workflow management screens.',
    url: 'https://applications.usb-ed.com/?iID=c9a37630-0836-e511-80c8-005056b8008e',
    tech: ['Angular 12', 'TypeScript', 'Bootstrap', 'C#', 'SQL Server'],
    category: 'Education Portal',
  },
  {
    title: 'Presles Online',
    image: '/projects/presles.webp',
    company: 'Adapt IT Holding LTD',
    period: '2020 – 2022',
    description: 'Online learning and distance education platform. Developed course listing, student dashboards and registration flows.',
    url: 'https://online.presles.co.za/landing',
    tech: ['Angular 12', 'TypeScript', 'SCSS', 'REST APIs'],
    category: 'EdTech',
  },
  {
    title: 'CEM Events Platform',
    image: '/projects/cem.webp',
    company: 'Engagement Factory',
    period: '2017 – 2018',
    description: "Customer experience management events microsite built for Engagement Factory's marketing campaigns. Responsive, animated landing pages.",
    url: 'http://events.engagementfactory.com/cem',
    tech: ['React', 'JavaScript', 'SASS', 'Oracle Eloqua', 'Gulp'],
    category: 'Marketing / Events',
  },
  {
    title: 'Ricoh UK',
    image: '/projects/ricoh.webp',
    company: 'EOH',
    period: '2019 – 2020',
    description: 'Corporate website for Ricoh UK — a global imaging and IT services leader. Implemented new features, improved performance and maintained responsive layouts.',
    url: 'https://www.ricoh.co.uk/',
    tech: ['Angular 7', 'TypeScript', 'Bootstrap', 'Node.js'],
    category: 'Corporate',
  },
  {
    title: 'Thales Group',
    image: '/projects/thales.webp',
    company: 'EOH',
    period: '2019 – 2020',
    description: 'Global technology company website serving defence, aerospace and digital security sectors. Contributed to front-end feature development and performance optimisation.',
    url: 'https://www.thalesgroup.com/en',
    tech: ['Angular 7', 'TypeScript', 'SCSS', 'PWA'],
    category: 'Corporate',
  },
  {
    title: 'McLaren',
    image: '/projects/mclaren.webp',
    company: 'Engagement Factory / EOH',
    period: '2018 – 2020',
    description: "Premium automotive brand digital presence. Worked on interactive, high-fidelity UI components reflecting McLaren's luxury and performance identity.",
    url: 'https://www.mclaren.com/',
    tech: ['React', 'JavaScript', 'SASS', 'jQuery'],
    category: 'Automotive',
  },
];

export const personalProjects = [
  {
    title: 'BakkieOffload',
    image: '/projects/bakkieoffload.webp',
    status: 'Live',
    description: 'Uber-like cross-platform mobile app for bakkie (pickup truck) transportation in South Africa. Connects users needing to haul bulky items with nearby drivers for on-demand or scheduled trips.',
    highlights: [
      'Real-time booking and driver tracking via Firebase Realtime Database',
      'Secure in-app payments with Paystack',
      'Transactional email notifications via EmailJS',
      'Native-like performance across iOS and Android',
    ],
    url: 'https://bakkieoffload.com/',
    tech: ['Ionic', 'Capacitor', 'Firebase', 'Paystack', 'EmailJS', 'TypeScript'],
    category: 'Mobile App',
  },
  {
    title: 'MboWeezy Hub',
    image: '/projects/mboweezyhub.webp',
    status: 'Live',
    description: 'Personal brand and creative hub showcasing music, content and lifestyle. A dynamic multi-page web experience built with modern front-end tooling.',
    highlights: [
      'Responsive design optimised for all devices',
      'Dynamic content sections for music and media',
      'Smooth animations and modern UI/UX',
    ],
    url: 'https://www.mboweezyhub.co.za/',
    tech: ['React', 'JavaScript', 'CSS3', 'Firebase'],
    category: 'Web App',
  },
  {
    title: 'Magona Media',
    image: '/projects/magonamedia.webp',
    status: 'Live',
    description: 'Digital media and creative agency website. Clean, professional showcase site for brand storytelling and media services.',
    highlights: [
      'Portfolio showcase with animated transitions',
      'Service pages and contact lead capture',
      'SEO-optimised structure',
    ],
    url: 'https://magonamedia.co.za/',
    tech: ['WordPress', 'PHP', 'CSS3', 'JavaScript'],
    category: 'Web App',
  },
  {
    title: 'Shosholoza FC',
    image: shosholozaApp,
    status: 'Live',
    description: 'Football club management platform with member login, team roster, fixtures and results tracking for a South African football club.',
    highlights: [
      'Authentication with Firebase Auth',
      'Member dashboard with fixtures and standings',
      'Mobile-responsive team portal',
    ],
    url: 'https://shosholozafc.org.za/login',
    tech: ['React', 'Firebase', 'Tailwind CSS', 'TypeScript'],
    category: 'Web App',
  },
];

export const education = [
  {
    degree: 'B-Tech Degree',
    field: 'Software Development',
    institution: 'University of South Africa',
    period: '2013 – 2016',
  },
  {
    degree: 'National Diploma',
    field: 'Information Technology',
    institution: 'University of South Africa',
    period: '2003 – 2009',
  },
];

export const languages = ['English', 'Tswana', 'Tsonga', 'Zulu', 'Xhosa'];
