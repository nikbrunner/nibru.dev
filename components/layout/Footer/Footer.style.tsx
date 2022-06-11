import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { background } from "@mixins/background";
import { margin, padding } from "@theme/mixins/spacing";
import { flex } from "@theme/mixins/layout";
import { space } from "@theme/mixins/space";
import { text } from "@theme/mixins/text";
import { shadow } from "@theme/mixins/shadow";
import { border, borderWidth } from "@theme/mixins/border";

const style_border = (color: string) => css`
  border: ${borderWidth.base} dotted ${color};
  ${border.radius.l};
`;

const Style = styled.footer`
  ${margin.top["xxl"]};

  background: rgba(255, 255, 255, 0);
  position: fixed;
  bottom: ${space.l};
  width: 100%;

  .inner-wrapper {
    ${({ theme }) => background.color.primary(theme)};

    ${padding.m};
    ${flex({ justifyContent: "space-between", gap: space.xs })};
    box-shadow: ${shadow.box.sharp};

    ${({ theme }) => style_border(theme.fg.primary)};
  }

  .social-icons {
    ${flex({ alignItems: "center", gap: space.s })};

    a {
      ${flex({
        justifyContent: "center",
        alignItems: "center",
        inline: true
      })};
      ${text.size.base};
    }
  }
`;

export default Style;
