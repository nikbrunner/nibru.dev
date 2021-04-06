import { useEffect, useState } from 'react';

export interface Viewport {
  width: number | undefined;
  height: number | undefined;
}

/**
 * # useViewport()
 *
 * @function Calculates and returns on mount the current window-size as an object
 * @source https://usehooks.com/useWindowSize/
 */
export const useViewport = (): Viewport => {
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/

  // Initialize state with undefined width/height so server and client renders match
  const initialState: Viewport = {
    width: undefined,
    height: undefined
  };

  const [windowSize, setWindowSize] = useState(initialState);

  useEffect(() => {
    // Handler to call on window resize

    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
};
