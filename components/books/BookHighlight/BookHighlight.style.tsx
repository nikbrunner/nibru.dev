import styled from "@emotion/styled";

import { border } from "@mixins/border";
import { flex } from "@theme/mixins/layout";
import { margin, padding } from "@theme/mixins/spacing";
import { mq } from "@theme/mixins/media-queries";
import { text } from "@theme/mixins/text";
import { shadow } from "@theme/mixins/shadow";

const Style = styled.div`
  label: BookHighlight;

  ${flex({
    flexflow: "column nowrap",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  })}

  ${mq.l} {
    ${flex({
      flexflow: "row nowrap",
      justifyContent: "flex-start",
      alignItems: "flex-start"
    })}
  }

  ${({ theme }) => text.color.primary(theme)}
  ${({ theme }) => border.s(theme.bg.secondary)}
  ${({ theme }) => border.top["2xl"](theme.bg.secondary)}

  ${padding["3xl"]}

  background-color: ${({ theme }) => theme.bg.primary};
  box-shadow: ${shadow.box.sharp};

  .icon {
    color: ${({ theme }) => theme.bg.secondary};
    ${padding.bottom["xxl"]}
    ${text.size.xl}


    ${mq.l} {
      ${padding.right["xxl"]}
      position: relative;
      top: 0.5rem;
    }
  }

  .meta {
    ${flex({
      flexflow: "column nowrap",
      justifyContent: "space-between"
    })}
    height: 100%;
  }

  .text {
    ${text.lineHeight.base}
    ${text.size.base}
    ${margin.top.zero}


    max-width: 60ch;
    font-weight: 600;
    font-style: italic;
  }

  .date {
    align-self: flex-end;
  }
`;

export default Style;
