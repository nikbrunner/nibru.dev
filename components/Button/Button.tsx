import React from 'react';

import { cn } from '../../lib/cn';

import { GenericProps } from '../../types/GenericProps';

interface Props extends GenericProps {
  size?: 'm' | 'l';
  onClick?: () => void;
}

const Button = ({
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

export default Button;
