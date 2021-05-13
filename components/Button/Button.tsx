import React, { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';
import { cn } from '../../lib/cn';

import { GenericProps } from '../../types/GenericProps';

interface Props extends GenericProps {
  size?: 'm' | 'l';
  onClick?: () => void;
}

const Button = ({
  classNames = [],
  tailwind = '',
  size = 'm',
  children,
  onClick
}: Props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      className={cn('Button', [...classNames, tailwind], {
        [theme]: theme,
        [size]: size
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
