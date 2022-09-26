/** @format */
import { motion } from 'framer-motion';
import { stagger, fadeInUp } from '../../utils/animation/framerAnimations';

const AnimatedLetters = ({ title, disabled }) => {
  return (
    <motion.span
      className='animate-title'
      variants={disabled ? null : stagger}
      initial='initial'
      animate='animate'>
      {[...title].map((letter, i) => (
        <motion.span
          className='animate-letter text-shadow '
          key={i}
          variants={disabled ? null : fadeInUp}>
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedLetters;
