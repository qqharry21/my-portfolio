/** @format */

import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const useAnimate = (startOption, endOption) => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start(startOption);
    }
    if (!inView) {
      animation.start(endOption);
    }
  }, [inView]);

  return { ref, animation };
};

export default useAnimate;
