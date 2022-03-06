/** @format */

import { motion } from 'framer-motion';
import { SocialIcon } from '.';
import { socialMedia } from '../data';
import { easing } from '../utils/animation/framerAnimations';

const container = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: easing,
      delay: 0.1,
      duration: 1.5,
    },
  },
};

const SocialBar = () => {
  return (
    <motion.div
      key='social-bar'
      className='left-media'
      variants={container}
      initial='hidden'
      animate='show'>
      <ul className='left-list '>
        {socialMedia.map((item, index) => {
          return (
            <li className='left-list-item' key={index}>
              <SocialIcon {...item} />
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default SocialBar;
