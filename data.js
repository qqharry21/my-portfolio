/** @format */

import { FiGithub, FiInstagram } from 'react-icons/fi';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

export const about = {
  name: 'Hao Chen',
  role: 'Junior Front-end Developer',
  description1:
    'I am a web front-end and back-end engineer. Currently, I mainly focus on products and projects where React is the front-end framework.',
  description2:
    'I am a junior front-end developer with a passion for building beautiful, responsive, and interactive user interfaces. I am currently looking for a junior front-end developer position. I am a self-motivated, hard-working, and detail-oriented individual with a strong desire to learn and grow as a developer. I am a self-starter and a team player who is eager to learn and grow as a developer. I am a quick learner and a team player who is eager to learn and grow as a developer.',
  resume: 'http://localhost:3000',
  skills: ['React', 'Node.js', 'JavaScript(ES6+)', 'CSS', 'HTML', 'Git', 'Next js'],
  email: 'qqharry21@gmail.com',
  social: {
    github: 'https://github.com/qqharry21',
    linkedin: 'https://www.linkedin.com/in/%E6%B3%89%E8%B1%AA-%E9%99%B3-6aa948161/',
    facebook: 'https://www.facebook.com/profile.php?id=100008467098451',
  },
};

export const experience = [
  {
    company: 'Matic',
    title: 'Java Engineer',
    location: 'Neihu, Taipei',
    dates: 'Jul 2020 - Present',
    description: [],
  },
  {
    company: 'Matic',
    title: 'Java Engineer',
    location: 'Neihu, Taipei',
    dates: 'Jul 2020 - Present',
    description: [],
  },
];

export const socialMedia = [
  { title: 'Github', icon: <FiGithub size={20} />, href: about.social.github },
  { title: 'Facebook', icon: <FaFacebookF size={20} />, href: about.social.facebook },
  { title: 'Linkedin', icon: <FaLinkedinIn size={20} />, href: about.social.linkedin },
  { title: 'Instagram', icon: <FiInstagram size={20} />, href: '#' },
];

export const sections = ['about', 'experience', 'project', 'contact'];
