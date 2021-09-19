import React from "react";

import { IReadwiseHighlight } from "@typings/Readwise";
import { IGenericProps } from "@typings/GenericProps";
import { formatDate } from "@lib/date";

interface IProps extends IGenericProps {
  highlight: IReadwiseHighlight;
}

export const BookHighlight = ({
  highlight: { text, updated }
}: IProps) => (
  <li
    className={`
        BookHighlight
        bg-gray-100
        mb-10
        p-7
        border-t-4
        border-gray-300
        flex
        flex-col
        items-center
        shadow-lg
     `}
  >
    <p className="mb-6 max-w-lg text-xl leading-8">{text}</p>
    <small className="text-sm text-gray-500">{formatDate(updated)}</small>
  </li>
);
