import { createElement, ReactNode } from "react";

import { IGenericProps } from "@typings/GenericProps";

type THeadlineTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface IProps extends IGenericProps {
  children: ReactNode;
  tag?: THeadlineTag;
}

export const Headline = ({ children, tag = "h2" }: IProps) =>
  createElement(
    tag,
    {
      className: "Headline"
    },
    children
  );
