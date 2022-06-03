import { ComponentProps } from "react";
import styled from "@emotion/styled";

import { flex } from "@theme/mixins/layout";
import { text } from "@theme/mixins/text";
import { space } from "@theme/mixins/space";
import { ThemeToggle } from "./ThemeToggle";

type Props = Partial<ComponentProps<typeof ThemeToggle>>;

export const Button = styled.button<Props & { isActive: boolean }>`
  ${flex({
    flexflow: "row nowrap",
    justifyContent: "center",
    alignItems: "center"
  })}
  ${text.size.base};

  background-color: transparent;
  border: none;
  cursor: pointer;

  ${({ isActive, theme }) =>
    isActive ? text.color.accent(theme) : text.color.primary(theme)};
`;

const Style = styled.div<Props>`
  ${flex({
    flexflow: "row nowrap",
    justifyContent: "flex-end",
    alignItems: "center",
    inline: true,
    gap: space.l
  })}
`;

export default Style;
