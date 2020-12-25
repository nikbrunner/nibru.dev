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

const Row = ({ classNames, children, cols = RowCols.oneCol }: Props) => (
  <article className={cn('Row', classNames, { [cols]: cols })}>
    {children}
  </article>
);

export default Row;
