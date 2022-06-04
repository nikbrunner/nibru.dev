import styled from "@emotion/styled";

import { space } from "@theme/mixins/space";
import { padding } from "@theme/mixins/spacing";
import { mq } from "@theme/mixins/media-queries";

const Style = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: ${space.xxl};
  ${padding.left.zero}

  ${mq.l} {
    grid-template-columns: repeat(auto-fit, minmax(45ch, 1fr));
  }
`;

export default Style;
