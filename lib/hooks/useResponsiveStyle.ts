import { useEffect, CSSProperties, useState } from 'react';

import { Breakpoints } from '@typings/Breakpoints';
import { breakpoints as defaultBreakpoints } from '@data/breakpoints';

import { useViewport } from './useViewport';

export type ResponsiveStyle<CSSProperty> = {
  [Breakpoint in keyof Breakpoints]?: CSSProperty;
};

// TODO Test and Improve
export const useResponsiveStyle = <StyleProperty>(
  responsiveStyle: StyleProperty | ResponsiveStyle<StyleProperty>,
  breakpoints: Breakpoints = defaultBreakpoints
): StyleProperty => {
  const { width: viewportWidth } = useViewport();
  const [style, setStyle] = useState<StyleProperty>();

  useEffect(() => {
    Object.keys(responsiveStyle).map(breakpoint => {
      if (viewportWidth > breakpoints[breakpoint]) {
        setStyle(responsiveStyle[breakpoint]);
      }
    });
  }, [viewportWidth]);

  return style;
};
