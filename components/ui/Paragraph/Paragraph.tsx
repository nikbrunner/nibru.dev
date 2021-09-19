import React, { CSSProperties, ReactNode } from "react";

import { IGenericProps } from "@typings/GenericProps";

import { cn } from "@lib/cn";

const componentName: string = "Page";

interface IProps extends IGenericProps {
  children: ReactNode;
  maxWidth?: CSSProperties["maxWidth"];
}

export const Paragraph = ({ children, maxWidth }: IProps) => (
  <p
    className={cn({
      block: componentName
    })}
    style={{
      maxWidth
    }}
  >
    {children}
  </p>
);
