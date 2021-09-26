import styled from "@emotion/styled";

import { IReadwiseHighlight } from "@typings/Readwise";
import { IGenericProps } from "@typings/GenericProps";

import { formatDate } from "@lib/date";
import { bg, fg } from "@style/config/mixins";

interface IProps extends IGenericProps {
  highlight: IReadwiseHighlight;
}

const SBookHighlight = styled.div`
  ${({ theme }) => bg.secondary(theme)}
  ${({ theme }) => fg.primary(theme)}

  padding: 1rem;
  font-style: italic;
`;

export const BookHighlight = ({
  highlight: { text, updated }
}: IProps): JSX.Element => (
  <SBookHighlight>
    <p className="text">{text}</p>

    <small className="date">{formatDate(updated)}</small>
  </SBookHighlight>
);
