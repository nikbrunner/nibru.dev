import React from "react";

import { IGenericProps } from "@typings/GenericProps";
import { IExperience } from "@typings/profile/Experience";

import { cn } from "@lib/cn";

const componentName: string = "Experience";

interface IProps extends IExperience, IGenericProps {
  current: boolean;
}

export const Experience = ({
  title,
  dateRange,
  company,
  details,
  current
}: IProps) => (
  <div
    className={cn({
      block: componentName,
      modifiers: { current }
    })}
  >
    <h3
      className={cn({
        block: componentName,
        element: "title"
      })}
    >
      {title}
    </h3>

    <p
      className={cn({
        block: componentName,
        element: "date-range"
      })}
    >
      {dateRange}
    </p>

    {company && (
      <p
        className={cn({
          block: componentName,
          element: "company"
        })}
      >
        {company}
      </p>
    )}

    {details && (
      <p
        className={cn({
          block: componentName,
          element: "details"
        })}
      >
        {details}
      </p>
    )}
  </div>
);
