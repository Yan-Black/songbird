import { useRef, useEffect } from 'react';

export default () => {
  const { current } = useRef(true);
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    !current;
  }, []);
  return current;
};
