import { useEffect, useState } from "react";

export interface Viewport {
  width: number | undefined;
  height: number | undefined;
}

const initialState: Viewport = {
  width: undefined,
  height: undefined
};

export const useViewport = (): Viewport => {
  const [windowSize, setWindowSize] = useState(initialState);

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  useEffect(() => {
    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
};
