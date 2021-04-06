import React from 'react';

import { GenericProps } from '../types/GenericProps';
import { Space } from '../types/Spaces';

import { cn } from '../lib/cn';

interface Props extends GenericProps {
  cols: number | 'auto-fit';
  colMinWidth?: string;
  rows?: React.CSSProperties['gridTemplateRows'];
  gap?: Space | '0';
  placeItems?: React.CSSProperties['placeItems'];
}

const Grid = ({
  classNames,
  children,
  cols = 'auto-fit',
  colMinWidth = '250px',
  rows = 'auto',
  gap = '0',
  placeItems = 'stretch stretch'
}: Props) => {
  // TODO Add media query props for cols like `m={3}`
  // TODO Use `useViewport` to evaluate settings
  //      ..or via modifier classes

  const style: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: `repeat(${cols}, minmax(${colMinWidth}, 1fr))`,
    gridTemplateRows: rows,
    placeItems
  };

  const gapMod = `space-${gap}`;

  return (
    <div
      className={cn('Grid', classNames, { [gapMod]: gap })}
      style={style}
    >
      {children}
    </div>
  );
};

export default Grid;
