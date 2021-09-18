import React, { ReactNode, CSSProperties } from "react";

import { IGenericProps } from "@typings/GenericProps";
import { ESpace } from "@typings/Spaces";

import { cn } from "@lib/cn";

interface IProps extends IGenericProps {
  children: ReactNode;
  cols?: number | "auto-fit";
  colMinWidth?: string;
  rows?: CSSProperties["gridTemplateRows"];
  gap?: ESpace | "0";
  placeItems?: CSSProperties["placeItems"];
}

export const Grid = ({
  classNames,
  children,
  cols = "auto-fit",
  colMinWidth = "250px",
  rows = "auto",
  gap = "0",
  placeItems = "stretch stretch"
}: IProps) => {
  const style: CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${cols}, minmax(${colMinWidth}, 1fr))`,
    gridTemplateRows: rows,
    placeItems
  };

  const gapMod = `space-${gap}`;

  return (
    <div
      className={cn("Grid", classNames, { [gapMod]: gap })}
      style={style}
    >
      {children}
    </div>
  );
};
