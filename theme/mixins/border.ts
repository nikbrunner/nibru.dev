export enum BorderWith {
  Thin = "1px",
  Default = "2px",
  Thick = "4px",
  ExtraThick = "6px"
}

export enum BorderRadius {
  None = "0px",
  Xs = "4px",
  Sm = "6px",
  Md = "8px",
  Lg = "16px",
  Round = "9999px"
}

export interface IBorder {
  thin: (color: string) => string;
  default: (color: string) => string;
  thick: (color: string) => string;
  extraThick: (color: string) => string;

  radius: {
    xs: () => string;
    sm: () => string;
    md: () => string;
    lg: () => string;
    round: () => string;
  };
}

// TODO Setup directions
export const border: IBorder = {
  thin: (color: string) => `border: ${BorderWith.Thin} solid ${color};`,
  default: (color: string) => `border: ${BorderWith.Default} solid ${color};`,
  thick: (color: string) => `border: ${BorderWith.Thick} solid ${color};`,
  extraThick: (color: string) => `border: ${BorderWith.ExtraThick} solid ${color};`,

  radius: {
    xs: () => `border-radius: ${BorderRadius.Xs};`,
    sm: () => `border-radius: ${BorderRadius.Sm};`,
    md: () => `border-radius: ${BorderRadius.Md};`,
    lg: () => `border-radius: ${BorderRadius.Lg};`,
    round: () => `border-radius: ${BorderRadius.Round};`
  }
};
