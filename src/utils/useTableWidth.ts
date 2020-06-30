import { useState, useEffect, RefObject } from 'react';

const useTableWidth = (tableRef: RefObject<HTMLElement>, shouldListen: boolean) => {
  const [width, setWidth] = useState<number | undefined>();

  useEffect(() => {
    const element = tableRef.current;

    if (shouldListen && element) {
      if (width === undefined) {
        setWidth(element.offsetWidth);
      }
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
  }, [tableRef, width, shouldListen]);

  return [width];
};

export default useTableWidth;
