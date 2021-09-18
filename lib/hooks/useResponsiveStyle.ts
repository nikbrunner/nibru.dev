import { useEffect, useState } from "react";

import { IBreakpoints } from "@typings/Breakpoints";
import { TResponsiveStyle } from "@typings/ResponsiveStyles";

import { breakpoints as defaultBreakpoints } from "@config/breakpoints";

import { useViewport } from "./useViewport";

// TODO Test and Improve
export const useResponsiveStyle = <StyleProperty>(
  responsiveStyle: StyleProperty | TResponsiveStyle<StyleProperty>,
  breakpoints: IBreakpoints = defaultBreakpoints
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
