import React from "react";

import { IGenericProps } from "@typings/GenericProps";

import { cn } from "@lib/cn";

interface IProps extends IGenericProps {
  children: React.ReactNode;
}

export const Row = ({ classNames, children }: IProps) => (
  <div className={cn("Row", classNames)}>{children}</div>
);
