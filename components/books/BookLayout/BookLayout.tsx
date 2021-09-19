import React, { ReactNode } from "react";

import { IGenericProps } from "@typings/GenericProps";

interface IProps extends IGenericProps {
  children: ReactNode;
}

export const BookLayout = ({ children }: IProps) => (
  <div
    className={`
    BookLayout
    grid
    gap-3
    md:grid-cols-2
  `}
  >
    {children}
  </div>
);
