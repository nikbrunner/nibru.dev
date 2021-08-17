import React from 'react';

import { GenericProps } from '@typings/GenericProps';

import { cn } from '@lib/cn';

interface Props extends GenericProps {
  children: React.ReactNode;
}

export const Row = ({ classNames, children }: Props) => (
  <div className={cn('Row', classNames)}>{children}</div>
);
