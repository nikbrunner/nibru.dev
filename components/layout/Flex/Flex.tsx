import React, { CSSProperties } from "react";

import { cn } from "@lib/cn";

import { IGenericProps } from "@typings/GenericProps";

interface IProps extends IGenericProps {
  children: React.ReactNode;
  justifyContent?: CSSProperties["justifyContent"];
  alignContent?: CSSProperties["alignContent"];
  alignItems?: CSSProperties["alignItems"];
  flexDirection?: CSSProperties["flexDirection"];
  flexWrap?: CSSProperties["flexWrap"];
  placeItems?: CSSProperties["placeItems"];
}

export const Flex = ({
  style,
  classNames,
  children,
  justifyContent,
  alignContent,
  alignItems,
  flexDirection,
  flexWrap,
  placeItems
}: IProps) => (
  <div
    style={{
      ...style,
      justifyContent,
      alignContent,
      alignItems,
      flexDirection,
      flexWrap,
      placeItems
    }}
    className={cn("Flex", classNames)}
  >
    {children}
  </div>
);
