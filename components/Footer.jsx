/** @format */

import Link from 'next/link';
import React from 'react';
import { SocialIcon } from '.';
import { socialMedia } from '../data';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='social-media'>
        <ul className='social-media-list '>
          {socialMedia.map((item, index) => {
            return (
              <li key={index} className='social-media-item'>
                <SocialIcon {...item} />
              </li>
            );
          })}
        </ul>
      </div>
      <Link href='#' target='_blank' rel='noopener noreferrer'>
        <a href='#' className='p-1 tracking-widest'>
          <div>Created by Harry Chen</div>
          <div className='mt-2'> &copy; 2022</div>
        </a>
      </Link>
    </footer>
  );
};

export default Footer;
