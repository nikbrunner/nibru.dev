import styled from "@emotion/styled";
import { FaQuoteLeft } from "react-icons/fa";

import { IReadwiseHighlight } from "@typings/Readwise";
import { IGenericProps } from "@typings/GenericProps";

import { formatDate } from "@lib/date";

import { border } from "@mixins/border";
import { flex } from "@theme/mixins/layout";
import { text } from "@theme/mixins/text";
import { margin, padding } from "@theme/mixins/spacing";
import { mq } from "@theme/mixins/media-queries";

interface IProps extends IGenericProps {
  highlight: IReadwiseHighlight;
}

export const BookHighlight: React.FC<IProps> = ({
  highlight: { text, updated }
}): JSX.Element => (
  <Style>
    <div className="icon">
      <FaQuoteLeft />
    </div>

    <div className="meta">
      <p className="text">{text}</p>

      <small className="date">{formatDate(updated)}</small>
    </div>
  </Style>
);

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
