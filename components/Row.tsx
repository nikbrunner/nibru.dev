import React from 'react';

import { GenericComponentProps } from '../types/GenericComponentProps';

import { cn } from '../lib/cn';

export enum RowCols {
  oneCol = 'withOneCol',
  twoCols = 'withTwoCols',
  threeCols = 'withThreeCols',
  fourCols = 'withFourCols'
}

interface Props extends GenericComponentProps {
  children: React.ReactNode;
  cols?: RowCols;
}

const Row = ({
  classNames,
  theme,
  children,
  cols = RowCols.oneCol
}: Props) => (
  <article
    className={cn('Row', classNames, { [theme]: theme, [cols]: cols })}
  >
    {children}
  </article>
);

export default Row;
