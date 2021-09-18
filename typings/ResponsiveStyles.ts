import { IBreakpoints } from "./Breakpoints";

// TODO Connect this type to CSSProperties and Breakpoints somehow
export type TDynamicCSSProperty<T> = T[];

export type TResponsiveStyle<CSSProperty> = {
  [Breakpoint in keyof IBreakpoints]?: CSSProperty;
};
