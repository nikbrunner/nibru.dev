import React from "react";

import { IGenericProps } from "@typings/GenericProps";

import { cn } from "@lib/cn";

// TODO Outsource
export type THeadlineSizes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface IProps extends IGenericProps {
  children: React.ReactNode;
  classNames?: string[];
  size?: THeadlineSizes;
  tag?: THeadlineSizes;
  noBorder?: boolean;
}

export const Headline = ({
  children,
  classNames = [],
  size = "h2",
  tag = "h2",
  noBorder = false
}: IProps) =>
  React.createElement(
    tag,
    {
      className: cn("Headline", classNames, {
        [`size-${size}`]: size,
        noBorder
      })
    },
    children
  );
