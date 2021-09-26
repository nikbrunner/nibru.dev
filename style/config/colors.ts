export type TColor = string;

export interface IColors {
  [key: string]: string;
}

const black: TColor = "#0d1117";
const gray: TColor = "#2b303a";
const green: TColor = "#2f8d47";
const yellow: TColor = "#ffc61b";
const orange: TColor = "#f39d12";
const turquoise: TColor = "#0bc294";
const red: TColor = "#ff1900";
const blue: TColor = "#294be6";
const pink: TColor = "#d6c3c9";
const offWhite: TColor = "#eee5e9";
const white: TColor = "#f6f8f9";

export const colors: IColors = {
  black,
  gray,
  green,
  yellow,
  orange,
  turquoise,
  red,
  blue,
  pink,
  offWhite,
  white
};
