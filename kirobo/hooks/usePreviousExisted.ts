import { useRef, useEffect } from 'react';

export const usePreviousExisted = <T>(value: T): T | undefined => {
  const ref = useRef<T>();
  useEffect(() => {
    if(!value) return;
    ref.current = value;
  });
  return ref.current;
};
