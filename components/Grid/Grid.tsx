import React, { ReactNode } from 'react';

import { GenericProps } from '../../types/GenericProps';
import { Space } from '../../types/Spaces';

import { cn } from '../../lib/cn';

interface Props extends GenericProps {
  children: ReactNode;
  cols?: number | 'auto-fit';
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
