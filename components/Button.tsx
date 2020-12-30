import { FontawesomeObject } from '@fortawesome/fontawesome-svg-core';
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
  icon?: JSX.Element;
  label?: string;
  onClick?: () => void;
}

const Button = ({
  classNames,
  type = ButtonType.primary,
  icon,
  label,
  onClick
}: Props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      className={cn('Button', classNames, {
        [theme]: theme,
        [type]: type,
        label
      })}
      onClick={onClick}
    >
      {icon && icon}
      {label}
    </button>
  );
};

export default Button;
