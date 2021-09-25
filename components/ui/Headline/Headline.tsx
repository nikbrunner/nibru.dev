import React from "react";

import { IGenericProps } from "@typings/GenericProps";

import { cn } from "@lib/cn";

const componentName: string = "Page";

type THeadlineSizes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface IProps extends IGenericProps {
  children: React.ReactNode;
  tag?: THeadlineSizes;
}

export const Headline = ({ children, tag = "h2" }: IProps) =>
  React.createElement(
    tag,
    {
      className: cn({
        block: componentName
      })
    },
    children
  );
