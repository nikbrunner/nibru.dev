import React from "react";

import { IGenericProps } from "@typings/GenericProps";

import { cn } from "@lib/cn";

const componentName: string = "Main";

interface IProps extends IGenericProps {
  children: React.ReactNode;
}

export const Main = ({ children }: IProps): JSX.Element => (
  <main
    className={cn({
      block: componentName,
      utils: ["container", "mx-auto"]
    })}
  >
    {children}
  </main>
);
