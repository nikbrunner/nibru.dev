import React from 'react';

import { GenericProps } from '../types/GenericProps';

import { useViewport } from '../lib/useViewport';
import { cn } from '../lib/cn';

interface Props extends GenericProps {
  cols: number | 'auto-fit';
  colWidth?: string;
  rows?: string | 'auto';
  gap?: number;
  placeItems?: string;
}

const Grid = ({
  classNames,
  children,
  cols = 'auto-fit',
  colWidth = 'minmax(250px, 1fr)',
  rows = 'auto',
  gap = 0,
  placeItems = 'stretch stretch'
}: Props) => {
  // TODO Progress on `<Grid />` component
  // TODO Declare breakpoints in a ts file
  // TODO Add media query props for cols like `m={3}`
  // TODO Use `useViewport` to evaluate settings
  //      ..or via modifier classes

  const viewport = useViewport();

  const settings: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: `repeat(${cols}, ${colWidth})`,
    gridTemplateRows: rows,
    gridGap: `${gap}px`,
    placeItems
  };

  return (
    <div className={cn('Grid', classNames, {})} style={settings}>
      {children}
    </div>
  );
};

export default Grid;
