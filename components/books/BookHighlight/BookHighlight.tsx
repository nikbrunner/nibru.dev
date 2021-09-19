import React from "react";

import { IReadwiseHighlight } from "@typings/Readwise";
import { IGenericProps } from "@typings/GenericProps";

import { formatDate } from "@lib/date";
import { cn } from "@lib/cn";

const componentName: string = "BookHighlight";

interface IProps extends IGenericProps {
  highlight: IReadwiseHighlight;
}

export const BookHighlight = ({
  highlight: { text, updated }
}: IProps): JSX.Element => (
  <li
    className={cn({
      block: componentName,
      utils: [
        "bg-gray-100",
        "mb-10",
        "p-7",
        "border-t-4",
        "border-gray-300",
        "flex",
        "flex-col",
        "items-center",
        "shadow-lg"
      ]
    })}
  >
    <p
      className={cn({
        block: componentName,
        element: "text",
        utils: ["mb-6", "max-w-lg", "text-xl", "leading-8"]
      })}
    >
      {text}
    </p>
    <small
      className={cn({
        block: componentName,
        element: "updated-date",
        utils: ["text-sm", "text-gray-500"]
      })}
    >
      {formatDate(updated)}
    </small>
  </li>
);
