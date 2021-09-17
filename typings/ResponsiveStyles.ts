import { Breakpoints } from './Breakpoints';

// TODO Connect this type to CSSProperties and Breakpoints somehow
export type DynamicCSSProperty<T> = T[];

export type ResponsiveStyle<CSSProperty> = {
  [Breakpoint in keyof Breakpoints]?: CSSProperty;
};
