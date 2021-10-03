const unit = "rem";

export interface ISpace {
  xxs: string;
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
  "3xl": string;
  "4xl": string;
  "5xl": string;
}

export const space: ISpace = {
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
