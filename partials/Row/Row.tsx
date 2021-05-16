import React from 'react';

import { GenericProps } from '../../types/GenericProps';

import { cn } from '../../lib/cn';

interface Props extends GenericProps {
  children: React.ReactNode;
  cols?: 'oneCol' | 'twoCols' | 'threeCols' | 'fourCols';
}

// TODO This should be a partial based on a <Flex /> component
const Row = ({ classNames, children, cols = 'oneCol' }: Props) => (
  <div className={cn('Row', classNames, { [cols]: cols })}>{children}</div>
);

export default Row;
