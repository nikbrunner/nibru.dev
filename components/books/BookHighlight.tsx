import styled from "@emotion/styled";
import { FaQuoteLeft } from "react-icons/fa";

import { IReadwiseHighlight } from "@typings/Readwise";
import { IGenericProps } from "@typings/GenericProps";

import { formatDate } from "@lib/date";

import { flex } from "@theme/mixins/layout";
import { text } from "@theme/mixins/text";
import { margin, padding } from "@theme/mixins/spacing";
import { mq } from "@theme/mixins/media-queries";
import { bg } from "@theme/mixins/bg";

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
  ${({ theme }) => theme.border.thin(theme.bg.ternary)}
  ${padding["3xl"]}

  .icon {
    color: ${({ theme }) => theme.bg.ternary};
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
    ${margin.top.zero}

    font-family: "Vollkorn", serif;
    max-width: 60ch;
  }

  .date {
    align-self: flex-end;
  }
`;

export const BookHighlight: React.FC<IProps> = ({
  highlight: { text, updated }
}): JSX.Element => (
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
