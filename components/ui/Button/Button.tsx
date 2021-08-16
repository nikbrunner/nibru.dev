import React, { ReactNode } from 'react';

import { cn } from '../../../lib/cn';

import { GenericProps } from '../../../types/GenericProps';

interface Props extends GenericProps {
  children: ReactNode;
  size?: 'm' | 'l';
  onClick?: () => void;
}

export const Button = ({
  classNames = [],
  size = 'm',
  children,
  onClick
}: Props) => (
  <button
    className={cn('Button', classNames, {
      [size]: size
    })}
    onClick={onClick}
  >
    {children}
  </button>
);
