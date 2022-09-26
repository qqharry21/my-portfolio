/** @format */

import Link from 'next/link';
import React from 'react';
import { SocialIcon } from 'components/nav';
import { SOCIAL_MEDIA } from 'data';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='social-media'>
        <ul className='social-media-list '>
          {SOCIAL_MEDIA.map((item, index) => {
            return (
              <li key={index} className='social-media-item'>
                <SocialIcon {...item} />
              </li>
            );
          })}
        </ul>
      </div>
      <Link href='/github'>
        <a className='p-1 tracking-widest' target='_blank' rel='noopener noreferrer'>
          <div>Created by Harry Chen</div>
          <div className='mt-2'> &copy; {new Date().getFullYear()}</div>
        </a>
      </Link>
    </footer>
  );
};

export default Footer;
