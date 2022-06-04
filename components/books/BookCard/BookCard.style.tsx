import styled from "@emotion/styled";

import { background } from "@mixins/background";
import { border } from "@mixins/border";
import { text } from "@theme/mixins/text";
import { margin, padding } from "@theme/mixins/spacing";

const Style = styled.div`
  ${({ theme }) => border.s(theme.bg.ternary)}
  ${({ theme }) => background.color.primary(theme)}
  ${({ theme }) => text.color.primary(theme)}

  ${padding["3xl"]}
  height: 100%;

  .cover {
    ${margin.bottom.l}
    width: 133px;
    height: 200px;
    object-fit: contain;
  }

  .title {
    max-width: 10rem;
  }
`;

export default Style;
