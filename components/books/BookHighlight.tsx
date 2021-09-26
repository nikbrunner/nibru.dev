import styled from "@emotion/styled";

import { IReadwiseHighlight } from "@typings/Readwise";
import { IGenericProps } from "@typings/GenericProps";

import { formatDate } from "@lib/date";
import { bg, border, fg, flex } from "@style/config/mixins";
import { space } from "@style/config/space";
import { colors } from "@style/config/colors";

interface IProps extends IGenericProps {
  highlight: IReadwiseHighlight;
}

const SBookHighlight = styled.div`
  ${flex("column nowrap", "start start")}

  ${({ theme }) => fg.primary(theme)}

  ${border.thin(colors.gray)}

  padding: ${space.xxxl};

  .text {
    margin-top: 0;
    line-height: 1.75;
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
