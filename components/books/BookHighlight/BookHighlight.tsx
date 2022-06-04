import { FaQuoteLeft } from "react-icons/fa";

import { IReadwiseHighlight } from "@typings/Readwise";
import { IGenericProps } from "@typings/GenericProps";

import { formatDate } from "@lib/date";

import Style from "./BookHighlight.style";

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
