import { ReactNode } from "react";
import styled from "@emotion/styled";

import { space } from "@theme/mixins/space";
import { padding } from "@theme/mixins/spacing";
import { mq } from "@theme/mixins/media-queries";

interface IProps {
  children: ReactNode;
}

const SBookHighlightsLayout = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: ${space.xxl};
  ${padding.left.zero}

  ${mq.l} {
    grid-template-columns: repeat(auto-fit, minmax(45ch, 1fr));
  }
`;

export const BookHighlightsLayout = ({ children }: IProps) => (
  <SBookHighlightsLayout>{children}</SBookHighlightsLayout>
);
