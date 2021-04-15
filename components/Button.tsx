import React, { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';
import { cn } from '../lib/cn';

import { GenericProps } from '../types/GenericProps';

interface Props extends GenericProps {
  icon?: JSX.Element;
  label?: string;
  size?: 'm' | 'l';
  onClick?: () => void;
}

const Button = ({
  classNames,
  icon,
  label,
  size = 'm',
  onClick
}: Props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      className={cn('Button', classNames, {
        [theme]: theme,
        [size]: size,
        withLabel: label,
        withIcon: icon
      })}
      onClick={onClick}
    >
      {icon && <div className='Button__icon'>{icon}</div>}
      {label && <span className='Button__label'>{label}</span>}
    </button>
  );
};

export default Button;
