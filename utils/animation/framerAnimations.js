/** @format */

export const easing = [0.6, -0.05, 0.01, 0.99];

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2,
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
      ease: easing,
    },
  },
};

export const fadeInUp = {
  hidden: {
    y: -60,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
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

export const banner = {
  animate: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};

export const letterAnimate = {
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

// Page transitions
// export const page = {
//   hidden: { y: -180, opacity: 0 },
//   show: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       ease: 'easeInOut',
//       staggerChildren: 0.3,
//     },
//   },
//   exit: {
//     y: 180,
//     opacity: 0,
//     transition: {
//       ease: 'easeInOut',
//       duration: 0.8,
//     },
//   },
// };
