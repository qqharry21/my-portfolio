/** @format */

import { FiGithub, FiInstagram } from 'react-icons/fi';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

export const ABOUT = {
  name: 'Hao Chen',
  role: 'Junior Front-end Developer',
  resume: 'http://localhost:3000',
  skills: [
    'React',
    'Redux',
    'Nodejs',
    'JavaScript(ES6+)',
    'Typescript',
    'HTML/CSS',
    'TailwindCss',
    'Git',
    'NextJS',
    'MySQL',
    'MongoDB',
  ],
  email: 'qqharry21@gmail.com',
  social: {
    github: 'https://github.com/qqharry21',
    linkedin: 'https://www.linkedin.com/in/%E6%B3%89%E8%B1%AA-%E9%99%B3-6aa948161/',
    facebook: 'https://www.facebook.com/profile.php?id=100008467098451',
  },
};

export const EXPERIENCES = [
  {
    company: 'Experience_company1',
    position: 'Experience_position1',
    during: 'Experience_during1',
    link: 'https://www.mitac.com.tw/',
    descriptions: [
      'Experience_description1_1',
      'Experience_description1_2',
      'Experience_description1_3',
    ],
  },
  {
    company: 'Experience_company2',
    position: 'Experience_position2',
    during: 'Experience_during2',
    link: 'https://www.mitac.com.tw/',
    descriptions: [
      'Experience_description2_1',
      'Experience_description2_2',
      'Experience_description2_3',
      'Experience_description2_4',
      'Experience_description2_5',
    ],
  },
];

export const PROJECTS = [
  {
    label: 'Project_done',
    title: 'Project_title1',
    description: 'Project_description1',
    page_link: 'https://haochen.vercel.app/',
    github: 'https://github.com/qqharry21/my-portfolio',
    image:
      'https://res.cloudinary.com/haotocode/image/upload/v1657010525/my_portfolio/My-portfloio_nmszpb.png',
    techniques: ['React', 'Next.js', 'TailwindCSS', 'Vercel'],
  },
  {
    label: 'Project_done',
    title: 'Project_title2',
    description: 'Project_description2',
    page_link: '',
    github: 'https://github.com/qqharry21/beautyhair-secretary-linebot-app',
    image:
      'https://res.cloudinary.com/haotocode/image/upload/v1657009939/my_portfolio/Secretary_LineBot_l1cm79.png',
    techniques: ['Javascript', 'Nodejs', 'LineSDK', 'MySQL', 'Heroku'],
  },
  {
    label: 'Project_done',
    title: 'Project_title3',
    description: 'Project_description3',
    page_link: 'https://firestation-common-system.vercel.app',
    github: 'https://github.com/qqharry21/COVID19-Report-System',
    image:
      'https://res.cloudinary.com/haotocode/image/upload/v1657014169/my_portfolio/Common_System_of_Fire_Station_ftdlkz.png',
    techniques: ['React', 'Next.js', 'TailwindCSS', 'Mongodb', 'MySQL', 'Vercel'],
  },
];

export const SOCIAL_MEDIA = [
  { title: 'Github', icon: <FiGithub size={20} />, href: ABOUT.social.github },
  {
    title: 'Facebook',
    icon: <FaFacebookF size={20} />,
    href: ABOUT.social.facebook,
  },
  {
    title: 'Linkedin',
    icon: <FaLinkedinIn size={20} />,
    href: ABOUT.social.linkedin,
  },
  { title: 'Instagram', icon: <FiInstagram size={20} />, href: '#' },
];

export const SECTIONS = ['about', 'experience', 'project', 'contact'];
