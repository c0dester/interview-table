import { useState, useEffect, RefObject } from 'react';

const useTableWidth = (tableRef: RefObject<HTMLElement>, shouldListen: boolean) => {
  const [width, setWidth] = useState(0);
  const element = tableRef.current;

  useEffect(() => {
    if (shouldListen) {
      const resizeListener = () => {
        if (element) {
          const currentWidth = element.offsetWidth;
          if (currentWidth !== width) {
            setWidth(currentWidth);
          }
        }
      };
      resizeListener();

      window.addEventListener('resize', resizeListener);
      return () => {
        window.removeEventListener('resize', resizeListener);
      };
    }
  }, [element, width, shouldListen]);

  return [width];
};

export default useTableWidth;
