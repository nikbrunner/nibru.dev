import React from 'react';
import { cn } from '../../lib/cn';

import { GenericProps } from '../../types/GenericProps';

interface Props extends GenericProps {
  children: React.ReactNode;
}

export const Box = ({ style, classNames, children }: Props) => (
  <div className={cn('Box', classNames)} style={style}>
    {children}
  </div>
);
