interface ColorPalette {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
}
interface Colors {
  black: string;
  white: string;
  gray: ColorPalette;
  blue: ColorPalette;
  green: ColorPalette;
  yellow: ColorPalette;
  orange: ColorPalette;
  red: ColorPalette;
  purple: ColorPalette;
  pink: ColorPalette;
}

export const colors: Colors = {
  black: "#010409",
  white: "#f7f9fc",
  gray: {
    0: "#e1e7ee",
    1: "#c9d1d9",
    2: "#b1bac4",
    3: "#8b949e",
    4: "#6e7681",
    5: "#484f58",
    6: "#30363d",
    7: "#21262d",
    8: "#161b22",
    9: "#0d1117"
  },
  blue: {
    0: "#cae8ff",
    1: "#a5d6ff",
    2: "#79c0ff",
    3: "#58a6ff",
    4: "#388bfd",
    5: "#1f6feb",
    6: "#1158c7",
    7: "#0d419d",
    8: "#0c2d6b",
    9: "#051d4d"
  },
  green: {
    0: "#aff5b4",
    1: "#7ee787",
    2: "#56d364",
    3: "#3fb950",
    4: "#2ea043",
    5: "#238636",
    6: "#196c2e",
    7: "#0f5323",
    8: "#033a16",
    9: "#04260f"
  },
  yellow: {
    0: "#fff8d0",
    1: "#ffec8b",
    2: "#ffd966",
    3: "#ffc53d",
    4: "#ffb01b",
    5: "#ff9a00",
    6: "#ff7a00",
    7: "#ff5a00",
    8: "#ff3a00",
    9: "#ff1a00"
  },
  orange: {
    0: "#ffd8b2",
    1: "#ffc085",
    2: "#ffa959",
    3: "#ff913c",
    4: "#ff7a1f",
    5: "#ff6200",
    6: "#ff4a00",
    7: "#ff3200",
    8: "#ff1a00",
    9: "#ff0000"
  },
  red: {
    0: "#ffc0c0",
    1: "#ffa0a0",
    2: "#ff8080",
    3: "#ff6060",
    4: "#ff4040",
    5: "#ff2020",
    6: "#ff0000",
    7: "#e60000",
    8: "#cc0000",
    9: "#b20000"
  },
  purple: {
    0: "#eddeff",
    1: "#e2c5ff",
    2: "#d2a8ff",
    3: "#bc8cff",
    4: "#a371f7",
    5: "#8957e5",
    6: "#6e40c9",
    7: "#553098",
    8: "#3c1e70",
    9: "#271052"
  },
  pink: {
    0: "#ffdaec",
    1: "#ffbedd",
    2: "#ff9bce",
    3: "#f778ba",
    4: "#db61a2",
    5: "#bf4b8a",
    6: "#9e3670",
    7: "#7d2457",
    8: "#5e103e",
    9: "#42062a"
  }
};
