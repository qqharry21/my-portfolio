/** @format */

import { motion } from 'framer-motion';
import Link from 'next/link';
import { about } from 'data';
import { easing } from 'utils/animation/framerAnimations';

const container = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: easing,
      delay: 0.2,
      duration: 1.5,
    },
  },
};

const EmailBar = () => {
  return (
    <motion.div
      key='email-bar'
      className='right-media'
      variants={container}
      initial='hidden'
      animate='show'>
      <div className='right-list '>
        <Link href={`mailto:${about.email}?subject=Hi, Harry`}>
          <a className='right-link vertical-rl'>{about.email}</a>
        </Link>
      </div>
    </motion.div>
  );
};

export default EmailBar;
