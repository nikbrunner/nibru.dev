import styled from "@emotion/styled";

import { transition } from "@theme/mixins/transition";
import { border } from "@theme/mixins/border";
import { ComponentProps } from "react";
import { NavLink } from "./NavLink";

type PartialProps = Partial<ComponentProps<typeof NavLink>> & { isActive: boolean };

const Style = styled.a<PartialProps>`
  ${transition.fast("color")}

  ${({ theme, isActive }) =>
    isActive
      ? border.bottom.base(theme.fg.primary)
      : border.bottom.base(theme.bg.primary)};

  cursor: pointer;

  &:hover {
    ${({ theme }) => border.bottom.base(theme.fg.primary)}
  }
`;

export default Style;
