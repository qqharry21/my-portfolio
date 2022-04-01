/** @format */

export const easing = [0.6, -0.05, 0.01, 0.99];

export const stagger = {
  animate: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};

export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 0.8,
      ease: 'easeIn',
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

export const banner = {
  animate: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const spinTransition = {
  loop: Infinity,
  ease: 'linear',
  duration: 1,
  repeatDelay: 0.05,
};

export const fadeInUp = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: {
      ease: easing,
      duration: 1,
    },
  },
};

export const btnIconVariants = {
  animate: {
    rotate: [15, -15],
    transition: {
      repeat: Infinity,
      duration: 1,
      ease: 'linear',
      repeatType: 'reverse',
    },
  },
};

export const page = {
  hidden: {
    opacity: 0,
    x: -200,
    y: 0,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      // ease: 'easeInOut',
      bounce: 0.25,
      type: 'spring',
    },
  },
  exit: {
    opacity: 0,
    x: 0,
    y: -100,
    transition: {
      ease: 'easeInOut',
    },
  },
};
