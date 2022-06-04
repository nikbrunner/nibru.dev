import { ComponentProps } from "react";
import styled from "@emotion/styled";

import { Paragraph } from "./Paragraph";
import { space } from "@theme/mixins/space";

const Style = styled.p<Partial<ComponentProps<typeof Paragraph>>>`
  label: Paragraph;
  padding-bottom: ${space.m};
  line-height: 1.5;
`;

export default Style;
