import React, { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';

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

const Row = ({ classNames, children, cols = RowCols.oneCol }: Props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <article
      className={cn('Row', classNames, { [theme]: theme, [cols]: cols })}
    >
      {children}
    </article>
  );
};

export default Row;
