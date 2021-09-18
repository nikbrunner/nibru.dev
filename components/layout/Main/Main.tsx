import React from "react";

import { IGenericProps } from "@typings/GenericProps";

import { cn } from "@lib/cn";

interface IProps extends IGenericProps {
  children: React.ReactNode;
}

export const Main = ({ classNames, children }: IProps) => (
  <main className={cn("Main", classNames)}>{children}</main>
);
