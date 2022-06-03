import { createElement, ReactNode } from "react";

interface IProps {
  children: ReactNode;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

// TODO Refactor: This seems like an Anti Pattern
export const Headline: React.FC<IProps> = ({
  children,
  tag = "h2"
}): JSX.Element => {
  return createElement(
    tag,
    {
      className: "Headline"
    },
    children
  );
};
