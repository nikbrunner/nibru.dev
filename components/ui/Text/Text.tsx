import React, { CSSProperties, ReactNode } from "react";

import { IGenericProps } from "@typings/GenericProps";

import { cn } from "@lib/cn";

interface IProps extends IGenericProps {
  children: ReactNode;
  maxWidth?: CSSProperties["maxWidth"];
}

export const Text = ({
  children,
  classNames = [],
  style = {},
  maxWidth
}: IProps) => (
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
