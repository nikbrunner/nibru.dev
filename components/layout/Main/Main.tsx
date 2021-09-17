import React from "react";

import { GenericProps } from "@typings/GenericProps";

import { cn } from "@lib/cn";

interface Props extends GenericProps {
  children: React.ReactNode;
}

export const Main = ({ classNames, children }: Props) => (
  <main className={cn("Main", classNames)}>{children}</main>
);
