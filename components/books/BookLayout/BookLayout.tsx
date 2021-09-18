import React, { ReactNode } from "react";

import { IGenericProps } from "@typings/GenericProps";

interface IProps extends IGenericProps {
  children: ReactNode;
}

export const BookLayout = ({ children }: IProps) => (
  <div className="BookLayout">{children}</div>
);
