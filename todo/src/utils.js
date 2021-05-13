import { useEffect, useRef } from 'react';

export const useFlasher = () => {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    ref.current.classList.add('flash');
    const timer = setTimeout(() => {
      if (!ref.current) return;
      ref.current.classList.remove('flash');
    }, 300);
    return () => clearTimeout(timer);
  });
  return ref;
};

// export const useFlasher = () => {
//   const ref = useRef < HTMLElement > null;
//   useEffect(() => {
//     if (!ref.current) return;
//     ref.current.setAttribute(
//       'style',
//       'box-shadow: 0 0 4px 1px orange; transition: box-shadow 400ms ease-out;'
//     );
//     const timer = setTimeout(() => {
//       if (!ref.current) return;
//       ref.current.setAttribute('style', '');
//     }, 300);
//     return () => clearTimeout(timer);
//   });
//   return ref;
// };
