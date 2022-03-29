/** @format */

import React from 'react';
import { IoMdSunny, IoMdMoon } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { BiMenuAltRight } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animation/framerAnimations';
import Link from 'next/link';

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
      title: 'About',
      href: isHomePage ? '#about' : '/about',
    },
    {
      title: 'Experience',
      href: isHomePage ? '#experience' : '/experience',
    },
    {
      title: 'Project',
      href: isHomePage ? '#project' : '/project',
    },
    {
      title: 'Contact',
      href: isHomePage ? '#contact' : '/contact',
    },
  ];
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
  return (
    <motion.li
      className='nav__list-item'
      key={title}
      variants={navItem}
      transition={{ delay: 0.1 * index, ease: 'easeIn' }}>
      <Link href={href} shallow scroll={false}>
        <a onClick={toggleMediaNavbar} className='link link--nav'>
          {title}
        </a>
      </Link>
    </motion.li>
  );
};

export default Navbar;
