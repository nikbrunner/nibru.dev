export type Color = string;

export interface Colors {
  [key: string]: string;
}

const black: Color = '#0d1117';
const gray: Color = '#2b303a';
const green: Color = '#2f8d47';
const yellow: Color = '#ffc61b';
const orange: Color = '#f39d12';
const turquoise: Color = '#0bc294';
const red: Color = '#ff1900';
const blue: Color = '#294be6';
const pink: Color = '#d6c3c9';
const offWhite: Color = '#eee5e9';
const white: Color = '#f6f8f9';

export const colors: Colors = {
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
