/** @format */

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { CommonUtils } from 'src/utils/CommonUtils';

const navItem = {
  hidden: { opacity: 0, translateX: 100, translateY: -100 },
  show: {
    opacity: 1,
    translateX: 0,
    translateY: 0,
  },
};

const NavbarItem = props => {
  const { toggleMediaNavbar, title, href, index } = props;
  const { t } = useTranslation();
  return (
    <motion.li
      className='nav__list-item'
      key={title}
      variants={navItem}
      transition={{ delay: 0.1 * index, ease: 'easeIn' }}>
      <Link href={href} shallow scroll={false}>
        <a onClick={toggleMediaNavbar} className='link link--nav'>
          <span aria-hidden='true'>{CommonUtils.leftPad(index, 2, '0')}</span>
          {t(title)}
        </a>
      </Link>
    </motion.li>
  );
};

export default NavbarItem;
