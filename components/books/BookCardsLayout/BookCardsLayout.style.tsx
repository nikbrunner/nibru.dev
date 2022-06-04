import { ComponentProps } from "react";
import styled from "@emotion/styled";

import { space } from "@theme/mixins/space";

import { BookCardsLayout } from "./BookCardsLayout";

type Props = Partial<ComponentProps<typeof BookCardsLayout>>;

const Style = styled.div<Props>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: ${space.xxl};
`;

export default Style;
