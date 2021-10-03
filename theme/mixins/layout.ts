import { css } from "@emotion/react";
import { CSSProperties } from "@emotion/serialize";

export const flex = ({
  flexflow = "row nowrap",
  justifyContent = "normal",
  alignContent = "normal",
  alignItems = "normal",
  gap = 0,
  inline = false
}: {
  flexflow?: CSSProperties["flexFlow"];
  justifyContent?: CSSProperties["justifyContent"];
  alignContent?: CSSProperties["alignContent"];
  alignItems?: CSSProperties["alignItems"];
  gap?: CSSProperties["gap"];
  inline?: boolean;
}) => css`
  display: ${inline ? "inline-flex" : "flex"};
  flex-flow: ${flexflow};
  justify-content: ${justifyContent};
  align-content: ${alignContent};
  align-items: ${alignItems};
  gap: ${gap};
`;
