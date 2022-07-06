/** @format */

import React from 'react';
import { IoMdSunny, IoMdMoon } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { BiMenuAltRight } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { fadeIn } from 'utils/animation/framerAnimations';
import Link from 'next/link';
import { MdLanguage } from 'react-icons/md';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const navItem = {
  hidden: { opacity: 0, translateX: 100, translateY: -100 },
  show: {
    opacity: 1,
    translateX: 0,
    translateY: 0,
  },
};

const Navbar = ({ theme, isHomePage, toggleTheme, showMediaNavbar, toggleMediaNavbar }) => {
  const navList = [
    {
      title: 'Nav_About',
      href: isHomePage ? '#about' : '/about',
    },
    {
      title: 'Nav_Experience',
      href: isHomePage ? '#experience' : '/experience',
    },
    {
      title: 'Nav_Project',
      href: isHomePage ? '#project' : '/project',
    },
    {
      title: 'Nav_Contact',
      href: isHomePage ? '#contact' : '/contact',
    },
  ];
  const router = useRouter();
  const toggleLocale = () => {
    const lang = localStorage.getItem('lang');
    if (lang === 'en' || router.locale === 'en') {
      localStorage.setItem('lang', 'zhHant');
      router.push(router.route, router.asPath, { locale: 'zhHant' });
    } else {
      localStorage.setItem('lang', 'en');
      router.push(router.route, router.asPath, { locale: 'en' });
    }
  };
  return (
    <nav className='center nav'>
      <motion.ul className={`nav__list ${showMediaNavbar ? 'flex' : ''}`}>
        {navList.map((list, index) => {
          return (
            <NavbarItem key={index} {...list} index={index} toggleMediaNavbar={toggleMediaNavbar} />
          );
        })}
      </motion.ul>

      {/* Theme Btn */}
      <motion.button
        type='button'
        variants={fadeIn}
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'>
        {theme === 'light' ? (
          <IoMdMoon size={24} className='text-primary-blue dark:text-main' />
        ) : (
          <IoMdSunny size={24} className='text-primary-blue dark:text-main' />
        )}
      </motion.button>

      {/* Locale Btn */}
      <motion.button
        type='button'
        variants={fadeIn}
        onClick={toggleLocale}
        className='flex items-center ml-4 uppercase btn btn--icon nav__theme'
        aria-label='toggle locale'>
        {router.locale === 'en' ? 'EN' : '中文'}
        <MdLanguage size={24} className='ml-1 text-primary-blue dark:text-main' />
      </motion.button>

      {/* Media Navbar Btn */}
      <motion.button
        type='button'
        variants={fadeIn}
        onClick={toggleMediaNavbar}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'>
        {showMediaNavbar ? (
          <IoClose size={24} className='text-primary-blue dark:text-main' />
        ) : (
          <BiMenuAltRight size={24} className='text-primary-blue dark:text-main' />
        )}
      </motion.button>
    </nav>
  );
};

const NavbarItem = ({ toggleMediaNavbar, title, href, index }) => {
  const { t } = useTranslation();
  return (
    <motion.li
      className='nav__list-item'
      key={title}
      variants={navItem}
      transition={{ delay: 0.1 * index, ease: 'easeIn' }}>
      <Link href={href} shallow scroll={false}>
        <a onClick={toggleMediaNavbar} className='link link--nav'>
          {t(title)}
        </a>
      </Link>
    </motion.li>
  );
};

export default Navbar;
