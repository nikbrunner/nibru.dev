import { ComponentProps } from "react";
import styled from "@emotion/styled";

import { space } from "@theme/mixins/space";
import { padding } from "@theme/mixins/spacing";
import { mq } from "@theme/mixins/media-queries";

import { BookHighlightsLayout } from "./BookHighlightsLayout";

type Props = Partial<ComponentProps<typeof BookHighlightsLayout>>;

const Style = styled.ul<Props>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: ${space.xxl};
  ${padding.left.zero}

  ${mq.l} {
    grid-template-columns: repeat(auto-fit, minmax(45ch, 1fr));
  }
`;

export default Style;
