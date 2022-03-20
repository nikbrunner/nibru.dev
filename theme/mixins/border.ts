import { appendUnit } from "@lib/helpers";
import { CSSDirection } from "@typings/styling";

interface BorderMixinSteps<Type> {
  none: Type;
  s: Type;
  base: Type;
  l: Type;
  xl: Type;
  "2xl": Type;
}

interface BorderSteps<ReturnType> extends BorderMixinSteps<ReturnType> {}
interface BorderWidth<ReturnType> extends BorderMixinSteps<ReturnType> {}
interface BorderRadius<ReturnType> extends BorderMixinSteps<ReturnType> {
  round: ReturnType;
}

export const borderWidth: BorderWidth<string> = {
  none: "0px",
  s: "1px",
  base: "2px",
  l: "4px",
  xl: "6px",
  "2xl": "8px"
};

export const borderRadius: BorderRadius<string> = {
  none: "0px",
  s: "2px",
  base: "4px",
  l: "8px",
  xl: "16px",
  "2xl": "32px",
  round: "9999px"
};

// TODO multiple directions
interface Border extends BorderSteps<(color: string) => string> {
  top: BorderSteps<(color: string) => string>;
  right: BorderSteps<(color: string) => string>;
  bottom: BorderSteps<(color: string) => string>;
  left: BorderSteps<(color: string) => string>;
  radius: BorderRadius<string>;
}

const genBorderString = (
  color: string,
  borderWidth: string,
  direction: CSSDirection = CSSDirection.None
): string => {
  return direction === CSSDirection.None
    ? `border: ${borderWidth} solid ${color};`
    : `border-${direction}: ${borderWidth} solid ${color};`;
};

export const border: Border = {
  none: (color: string) => genBorderString(color, borderWidth.none),
  s: (color: string) => genBorderString(color, borderWidth.s),
  base: (color: string) => genBorderString(color, borderWidth.base),
  l: (color: string) => genBorderString(color, borderWidth.l),
  xl: (color: string) => genBorderString(color, borderWidth.xl),
  "2xl": (color: string) => genBorderString(color, borderWidth["2xl"]),

  top: {
    none: (color: string) =>
      genBorderString(color, borderWidth.none, CSSDirection.Top),
    s: (color: string) => genBorderString(color, borderWidth.s, CSSDirection.Top),
    base: (color: string) =>
      genBorderString(color, borderWidth.base, CSSDirection.Top),
    l: (color: string) => genBorderString(color, borderWidth.l, CSSDirection.Top),
    xl: (color: string) => genBorderString(color, borderWidth.xl, CSSDirection.Top),
    "2xl": (color: string) =>
      genBorderString(color, borderWidth["2xl"], CSSDirection.Top)
  },

  right: {
    none: (color: string) =>
      genBorderString(color, borderWidth.none, CSSDirection.Right),
    s: (color: string) => genBorderString(color, borderWidth.s, CSSDirection.Right),
    base: (color: string) =>
      genBorderString(color, borderWidth.base, CSSDirection.Right),
    l: (color: string) => genBorderString(color, borderWidth.l, CSSDirection.Right),
    xl: (color: string) =>
      genBorderString(color, borderWidth.xl, CSSDirection.Right),
    "2xl": (color: string) =>
      genBorderString(color, borderWidth["2xl"], CSSDirection.Right)
  },

  bottom: {
    none: (color: string) =>
      genBorderString(color, borderWidth.none, CSSDirection.Bottom),
    s: (color: string) => genBorderString(color, borderWidth.s, CSSDirection.Bottom),
    base: (color: string) =>
      genBorderString(color, borderWidth.base, CSSDirection.Bottom),
    l: (color: string) => genBorderString(color, borderWidth.l, CSSDirection.Bottom),
    xl: (color: string) =>
      genBorderString(color, borderWidth.xl, CSSDirection.Bottom),
    "2xl": (color: string) =>
      genBorderString(color, borderWidth["2xl"], CSSDirection.Bottom)
  },

  left: {
    none: (color: string) =>
      genBorderString(color, borderWidth.none, CSSDirection.Left),
    s: (color: string) => genBorderString(color, borderWidth.s, CSSDirection.Left),
    base: (color: string) =>
      genBorderString(color, borderWidth.base, CSSDirection.Left),
    l: (color: string) => genBorderString(color, borderWidth.l, CSSDirection.Left),
    xl: (color: string) => genBorderString(color, borderWidth.xl, CSSDirection.Left),
    "2xl": (color: string) =>
      genBorderString(color, borderWidth["2xl"], CSSDirection.Left)
  },

  radius: {
    none: `border-radius: ${borderRadius.none};`,
    s: `border-radius: ${borderRadius.s};`,
    base: `border-radius: ${borderRadius.base};`,
    l: `border-radius: ${borderRadius.l};`,
    xl: `border-radius: ${borderRadius.xl};`,
    "2xl": `border-radius: ${borderRadius["2xl"]};`,
    round: `border-radius: ${borderRadius.round};`
  }
};
