/** @format */

import React from 'react';
import { Navbar } from '.';
import Image from 'next/image';
// import { useTheme } from 'next-themes';
const Header = () => {
  // const { theme } = useTheme();
  return (
    <header className='header center'>
      <a
        className='mt-4 tablet:mt-12'
        href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
        target='_blank'
        rel='noopener noreferrer'>
        <Image src='/hao.svg' alt='Logo' width={100} height={100} />
      </a>
      <Navbar />
    </header>
  );
};

export default Header;
