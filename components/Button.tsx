import React, { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';
import { cn } from '../lib/cn';

import { GenericProps } from '../types/GenericProps';

export enum ButtonType {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary'
}

interface Props extends GenericProps {
  type?: ButtonType;
  onClick?: () => void;
}

const Button = ({
  classNames,
  children,
  type = ButtonType.primary,
  onClick
}: Props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      className={cn('Button', classNames, {
        [theme]: theme,
        [type]: type
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
