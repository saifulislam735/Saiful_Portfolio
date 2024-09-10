import {
  frontend,
  backend,
  ux,
  // prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  coverhunt,
  // dcc,
  // kelhel,
  microverse,
  school,
  college,
  university,
  onlinerestaurant,
  carservicing,
  newspaper,
  weatherupdate,
  jobsearch
} from '../assets';


export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'education',
    title: 'education',
  },
  {
    id: 'resume',
    title: 'Resume',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  // {
  //   title: 'Software Prototyping',
  //   icon: prototyping,
  // },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },

  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },

];


const experiences = [
  {
    title: 'FUll Stack Developer',
    company_name: 'Ruet Career Forum',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2023 - Present',
  },
  {
    title: 'FUll Stack Developer',
    company_name: 'Brumley Law Firm',
    icon: microverse,
    iconBg: '#333333',
    id: 'resume',
    date: 'September 2024 - Present',
  },

];

const educations = [
  {
    title: 'JSC',
    company_name: 'Ramganj High School',
    icon: school,
    iconBg: '#333333',
    date: '2016',
  },
  {
    title: 'SSC',
    company_name: 'Ramganj High School',
    icon: school,
    iconBg: '#333333',
    date: '2018',
  },
  {
    title: 'HSC',
    company_name: 'B N College Dhaka',
    icon: college,
    iconBg: '#333333',
    date: '2020',
  },
  {
    title: 'B.Sc. in ETE',
    company_name: 'RUET',
    icon: university,
    iconBg: '#333333',
    date: 'March 2022 - Present',
  }
];

const projects = [
  {
    id: 'project-1',
    name: 'car servicing',
    description: 'An online service for booking and managing car repairs with local mechanics.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carservicing,
    repo: 'https://github.com/saifulislam735/Car-Servicings',
    demo: 'https://car-servicings.vercel.app/',
  },
  {
    id: 'project-2',
    name: 'Online Restaurant',
    description:
      'An online platform for ordering food from your favorite local restaurants with easy navigation and secure payment options',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: onlinerestaurant,
    repo: 'https://github.com/saifulislam735/White-Castle-Restaurant-',
    demo: 'https://white-castle-restaurant-client.vercel.app/',
  },
  {
    id: 'project-3',
    name: 'News Paper',
    description: 'This is a Newspaper website  built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: newspaper,
    repo: 'https://github.com/saifulislam735/newspaper',
    demo: 'https://github.com/saifulislam735/newspaper',
  },
  {
    id: 'project-4',
    name: 'Weather Update',
    description: `A single-page application that allows users to search for current weather update`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: weatherupdate,
    repo: 'https://github.com/saifulislam735/Weather-Update-API-',
    demo: 'https://saifulislam735.github.io/Weather-Update-API-/',
  },
  {
    id: 'project-5',
    name: 'Career Lift',
    description:
      'This is a demo concept website for a Job Searching Website.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: jobsearch,
    repo: 'https://github.com/saifulislam735/Career_Lift',
    demo: 'https://saifulislam735.github.io/Career_Lift/',
  },
];

export { services, technologies, experiences, projects, educations };
