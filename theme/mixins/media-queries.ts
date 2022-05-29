import { config } from "@config/config";
import { IBreakpoints } from "@typings/Breakpoints";

export const mq: IBreakpoints = {
  xs: `@media (min-width: ${config.breakpoints.xs}px)`,
  s: `@media (min-width: ${config.breakpoints.s}px)`,
  m: `@media (min-width: ${config.breakpoints.m}px)`,
  l: `@media (min-width: ${config.breakpoints.l}px)`,
  xl: `@media (min-width: ${config.breakpoints.xl}px)`,
  xxl: `@media (min-width: ${config.breakpoints.xxl}px)`,
  xxxl: `@media (min-width: ${config.breakpoints.xxxl}px)`,
  "4xl": `@media (min-width: ${config.breakpoints["4xl"]}px)`
};
