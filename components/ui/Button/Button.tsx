import React, { ReactNode } from "react";

import { cn } from "@lib/cn";

import { IGenericProps } from "@typings/GenericProps";

interface IProps extends IGenericProps {
  children: ReactNode;
  size?: "m" | "l";
  onClick?: () => void;
}

export const Button = ({
  classNames = [],
  size = "m",
  children,
  onClick
}: IProps) => (
  <button
    className={cn("Button", classNames, {
      [size]: size
    })}
    onClick={onClick}
  >
    {children}
  </button>
);
