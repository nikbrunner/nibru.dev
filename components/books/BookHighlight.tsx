import styled from "@emotion/styled";

import { IReadwiseHighlight } from "@typings/Readwise";
import { IGenericProps } from "@typings/GenericProps";

import { formatDate } from "@lib/date";

import { space } from "@style/config/space";
import { colors } from "@style/config/colors";
import { flex } from "@style/mixins/layout";
import { text } from "@style/mixins/text";
import { border } from "@style/mixins/border";

interface IProps extends IGenericProps {
  highlight: IReadwiseHighlight;
}

const SBookHighlight = styled.div`
  ${flex("column nowrap", "start start")}

  ${({ theme }) => text.color.primary(theme)}
  ${border.thin(colors.gray)}

  padding: ${space.xxxl};

  .text {
    ${text.lineHeight.l}

    margin-top: 0;
    flex: 1;
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
    <p className="text">{text}</p>

    <small className="date">{formatDate(updated)}</small>
  </SBookHighlight>
);
