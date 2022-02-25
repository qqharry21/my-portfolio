/** @format */

import Link from 'next/link';

const EmailBar = () => {
  return (
    <div className='right-media'>
      <div className='right-list '>
        <Link href='#'>
          <a className='right-link' style={{ writingMode: 'vertical-rl' }}>
            qqharry21@gmail.com
          </a>
        </Link>
      </div>
    </div>
  );
};

export default EmailBar;
