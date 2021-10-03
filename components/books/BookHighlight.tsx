import styled from "@emotion/styled";
import { FaQuoteLeft } from "react-icons/fa";

import { IReadwiseHighlight } from "@typings/Readwise";
import { IGenericProps } from "@typings/GenericProps";

import { formatDate } from "@lib/date";

import { colors } from "@theme/mixins/colors";
import { flex } from "@theme/mixins/layout";
import { text } from "@theme/mixins/text";
import { border } from "@theme/mixins/border";
import { margin, padding } from "@theme/mixins/spacing";
import { mq } from "@theme/mixins/media-queries";

interface IProps extends IGenericProps {
  highlight: IReadwiseHighlight;
}

const SBookHighlight = styled.div`
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
  ${border.thin(colors.gray)}
  ${padding["3xl"]}

  .icon {
    ${padding.bottom["xxl"]}
    ${text.size.xl}


    ${mq.l} {
      ${padding.right["xxl"]}
      position: relative;
      top: 0.5rem;
    }
  }

  .text {
    ${text.lineHeight.base}
    ${margin.top.zero}

    max-width: 60ch;
    font-style: italic;
  }

  .date {
    align-self: flex-end;
    font-style: italic;
  }
`;

export const BookHighlight = ({
  highlight: { text, updated }
}: IProps): JSX.Element => (
  <SBookHighlight>
    <div className="icon">
      <FaQuoteLeft />
    </div>

    <div className="meta">
      <p className="text">{text}</p>

      <small className="date">{formatDate(updated)}</small>
    </div>
  </SBookHighlight>
);
