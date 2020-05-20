import { useSpring } from 'react-spring';

export const useFadeAnimation = () => {
  return useSpring({ opacity: 1, from: { opacity: 0 } });
};
