import React, { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';
import { cn } from '../lib/cn';

import { GenericProps } from '../types/GenericProps';

interface Props extends GenericProps {
  icon?: JSX.Element;
  label?: string;
  onClick?: () => void;
}

const Button = ({ classNames, icon, label, onClick }: Props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      className={cn('Button', classNames, {
        [theme]: theme,
        withLabel: label,
        withIcon: icon
      })}
      onClick={onClick}
    >
      {icon && icon}
      {label}
    </button>
  );
};

export default Button;
