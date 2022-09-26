/** @format */

import { useState, useCallback } from 'react';

export default function useCallbackRef() {
  const [ref, setErf] = useState(null);
  const fn = useCallback(node => {
    setErf(node);
  }, []);

  return [ref, fn];
}
