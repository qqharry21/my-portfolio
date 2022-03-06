/** @format */

import { motion } from 'framer-motion';
import { fadeInUp } from './framerAnimations';
const staggerVariants = {
  initial: {
    opacity: 0,
    translateY: -20,
  },
  enter: {
    transition: { staggerChildren: 0.15, delayChildren: 0.4 },
  },
  exit: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const variants = {
  initial: {
    opacity: 0,
    translateY: -20,
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const container = {
  hidden: { opacity: 1, y: -180 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
      delayChildren: 0.3,
      staggerChildren: 0.2,
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    y: -180,
    transition: {
      ease: 'easeInOut',
      duration: 0.8,
    },
  },
};

export const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const PageSlideFade = ({ children }) => {
  return (
    <motion.div variant={container} initial='hidden' animate='show'>
      {children}
    </motion.div>
  );
};
