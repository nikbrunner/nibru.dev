import { ComponentProps } from "react";
import styled from "@emotion/styled";

import { Link } from "./Link";
import { text } from "@theme/mixins/text";

const Style = styled.a<Partial<ComponentProps<typeof Link>>>`
  ${({ theme }) => text.color.accent(theme)};

  font-weight: 900;

  .icon {
    position: relative;
    top: 0.15rem;
  }
`;

export default Style;
