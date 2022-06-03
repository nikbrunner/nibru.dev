import { ComponentProps } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { Highlight } from "./Highlight";
import { borderWidth } from "@theme/mixins/border";
import { space } from "@theme/mixins/space";

const underline = (color: string) => css`
  text-decoration: underline;
  text-decoration-thickness: ${borderWidth.l};
  text-decoration-color: ${color};
  text-underline-offset: ${space.xxs};
`;

const Styled = styled.span<Partial<ComponentProps<typeof Highlight>>>`
  label: Highlight;

  ${({ withUnderline, theme }) => withUnderline && underline(theme.bg.secondary)};
`;

export default Styled;
