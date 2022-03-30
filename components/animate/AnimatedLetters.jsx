/** @format */
import { motion } from 'framer-motion';
import { banner, letterAnimate } from '../../utils/animation/framerAnimations';

const AnimatedLetters = ({ title, disabled }) => {
  return (
    <motion.span
      className='animate-title'
      variants={disabled ? null : banner}
      initial='initial'
      animate='animate'>
      {[...title].map((letter, i) => (
        <motion.span className='animate-letter' key={i} variants={disabled ? null : letterAnimate}>
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedLetters;
