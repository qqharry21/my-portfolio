/** @format */

import { useEffect, useRef } from 'react';

export const useDimensions = ref => {
  const dimensions = useRef({ width: 0, height: 0 });
  console.log('useDimensions', ref);

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);

  return dimensions.current;
};
