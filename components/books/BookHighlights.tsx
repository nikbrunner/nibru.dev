import { ReactNode } from "react";
import styled from "@emotion/styled";

import { space } from "@style/config/space";
import { padding } from "@style/mixins/spacing";

interface IProps {
  children: ReactNode;
}

const SBookHighlights = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: ${space.xxl};
  ${padding.left.zero}
`;

export const BookHighlights = ({ children }: IProps) => (
  <SBookHighlights>{children}</SBookHighlights>
);
