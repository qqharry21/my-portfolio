/** @format */

import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import { IoMdSunny, IoMdMoon } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { BiMenuAltRight } from 'react-icons/bi';
const navList = [
  {
    title: 'About',
    href: '#about',
  },
  {
    title: 'Experience',
    href: '#experience',
  },
  {
    title: 'Project',
    href: '#project',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
];

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [showMediaNavbar, setShowMediaNavbar] = useState(false);

  const toggleTheme = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme;
    console.log('currentTheme', currentTheme);

    if (currentTheme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const toggleMediaNavbar = () => {
    setShowMediaNavbar(prev => !prev);
  };

  return (
    <nav className='center nav'>
      <ul className={`nav__list ${showMediaNavbar ? 'flex' : ''}`}>
        {navList.map((list, index) => {
          return <NavbarItem key={index} {...list} toggleMediaNavbar={toggleMediaNavbar} />;
        })}
      </ul>

      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'>
        {theme === 'light' ? (
          <IoMdMoon size={24} className='text-primary-blue dark:text-main' />
        ) : (
          <IoMdSunny size={24} className='text-primary-blue dark:text-main' />
        )}
      </button>

      <button
        type='button'
        onClick={toggleMediaNavbar}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'>
        {showMediaNavbar ? (
          <IoClose size={24} className='text-primary-blue dark:text-main' />
        ) : (
          <BiMenuAltRight size={24} className='text-primary-blue dark:text-main' />
        )}
      </button>
    </nav>
  );
};

const NavbarItem = ({ toggleMediaNavbar, title, href }) => {
  return (
    <li className='nav__list-item'>
      <a href={href} onClick={toggleMediaNavbar} className='link link--nav'>
        {title}
      </a>
    </li>
  );
};

export default Navbar;
