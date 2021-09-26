import { css } from "@emotion/react";
import { CSSProperties } from "@emotion/serialize";

import { space } from "@style/config/space";

export const flex = ({
  flexflow = "row nowrap",
  justifyContent = "normal",
  alignContent = "normal",
  alignItems = "normal",
  gap = 0
}: {
  flexflow?: CSSProperties["flexFlow"];
  justifyContent?: CSSProperties["justifyContent"];
  alignContent?: CSSProperties["alignContent"];
  alignItems?: CSSProperties["alignItems"];
  gap?: CSSProperties["gap"];
}) => css`
  display: flex;
  flex-flow: ${flexflow};
  justify-content: ${justifyContent};
  align-content: ${alignContent};
  align-items: ${alignItems};
  gap: ${gap};
`;
