import React, { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';

import { GenericProps } from '../../types/GenericProps';

import { cn } from '../../lib/cn';

interface Props extends GenericProps {
  children: React.ReactNode;
  cols?: 'oneCol' | 'twoCols' | 'threeCols' | 'fourCols';
}

// TODO This should be a partial based on a <Flex /> component
const Row = ({ classNames, children, cols = 'oneCol' }: Props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={cn('Row', classNames, { [theme]: theme, [cols]: cols })}
    >
      {children}
    </div>
  );
};

export default Row;
