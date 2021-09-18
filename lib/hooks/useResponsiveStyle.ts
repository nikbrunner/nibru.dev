import { useEffect, useState } from "react";

import { Breakpoints } from "@typings/Breakpoints";
import { ResponsiveStyle } from "@typings/ResponsiveStyles";

import { breakpoints as defaultBreakpoints } from "@config/breakpoints";

import { useViewport } from "./useViewport";

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
