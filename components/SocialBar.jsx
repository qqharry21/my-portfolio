/** @format */

import Link from 'next/link';
import { SocialIcon } from '.';
import { socialMedia } from '../data';
const SocialBar = () => {
  return (
    <div className='left-media'>
      <ul className='left-list '>
        {socialMedia.map((item, index) => {
          return (
            <li className='left-list-item' key={index}>
              <SocialIcon {...item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialBar;
