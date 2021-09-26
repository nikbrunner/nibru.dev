import { css, SerializedStyles } from "@emotion/react";

export const flex = (
  flow:
    | "row wrap"
    | "row nowrap"
    | "column wrap"
    | "column nowrap" = "row wrap",
  placeItems: string = "normal legacy"
) => css`
  display: flex;
  flex-flow: ${flow};
  place-items: ${placeItems};
`;
