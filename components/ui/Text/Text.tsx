import React, { CSSProperties, ReactNode } from "react";

import { GenericProps } from "@typings/GenericProps";

import { cn } from "@lib/cn";

interface Props extends GenericProps {
  children: ReactNode;
  maxWidth?: CSSProperties["maxWidth"];
}

export const Text = ({
  children,
  classNames = [],
  style = {},
  maxWidth
}: Props) => (
  <p
    className={cn("Text", classNames)}
    style={{
      ...style,
      maxWidth
    }}
  >
    {children}
  </p>
);
