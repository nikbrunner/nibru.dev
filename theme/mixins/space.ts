const unit = "rem";

export type TSpace =
  | "xxs"
  | "xs"
  | "s"
  | "m"
  | "l"
  | "xl"
  | "xxl"
  | "3xl"
  | "4xl"
  | "5xl";

export const space: Record<TSpace, string> = {
  xxs: `0.15${unit}`,
  xs: `0.25${unit}`,
  s: `0.5${unit}`,
  m: `0.75${unit}`,
  l: `1${unit}`,
  xl: `1.5${unit}`,
  xxl: `2${unit}`,
  "3xl": `3${unit}`,
  "4xl": `4${unit}`,
  "5xl": `5${unit}`
};
