/** @format */

import Link from 'next/link';
import { about } from '../data';

const EmailBar = () => {
  return (
    <div className='right-media'>
      <div className='right-list '>
        <a
          className='right-link'
          href={`mailto: ${about.email}`}
          style={{ writingMode: 'vertical-rl' }}>
          {about.email}
        </a>
      </div>
    </div>
  );
};

export default EmailBar;
