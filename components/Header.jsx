/** @format */

import React from 'react';
import { Navbar } from '.';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';

const Header = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <header className='header center'>
      {isTablet ? (
        <h1>
          <Link href='/' className='link' shallow>
            Hao Chen
          </Link>
        </h1>
      ) : (
        <Link className='mt-4 tablet:mt-12' href='/' shallow passHref>
          <a>
            <Image src='/hao.svg' alt='Logo' width={100} height={100} />
          </a>
        </Link>
      )}
      <Navbar />
    </header>
  );
};

export default Header;
