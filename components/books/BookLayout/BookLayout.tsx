import React, { ReactNode } from "react";

import { IGenericProps } from "@typings/GenericProps";

import { cn } from "@lib/cn";

const componentName: string = "BookLayout";

interface IProps extends IGenericProps {
  children: ReactNode;
}

export const BooksLayout = ({ children }: IProps): JSX.Element => (
  <div
    className={cn({
      block: componentName,
      utils: ["grid", "gap-3", "md:grid-cols-2"]
    })}
  >
    {children}
  </div>
);
