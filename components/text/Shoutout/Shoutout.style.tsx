import { ComponentProps } from "react";
import { css } from "@emotion/react";

import styled from "@emotion/styled";
import { space } from "@theme/mixins/space";
import { border, borderWidth } from "@theme/mixins/border";
import { shadow } from "@theme/mixins/shadow";

import { Shoutout } from "./Shoutout";

const style_border = (color: string) => css`
  padding: ${space.xl};
  border: ${borderWidth.base} dashed ${color};
  ${border.radius.l};
`;

const Style = styled.div<Partial<ComponentProps<typeof Shoutout>>>`
  label: Shoutout;

  position: relative;
  margin: ${space["3xl"]} 0;
  background-color: ${({ theme }) => theme.bg.primary};
  box-shadow: ${shadow.box.sharp};

  & > * {
    margin-bottom: 0;
  }

  .label {
    position: absolute;
    top: -1rem;
    left: 1rem;

    padding: 0 ${space.s};

    background: ${({ theme }) => theme.bg.primary};
    color: ${({ theme }) => theme.fg.primary};

    font-weight: 900;
    font-size: 2rem;
    line-height: 2rem;
  }

  ${({ theme, withBorder }) => withBorder && style_border(theme.fg.secondary)}
`;

export default Style;
