import React, { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';
import { cn } from '../lib/cn';

import { GenericProps } from '../types/GenericProps';

interface Props extends GenericProps {
  icon?: JSX.Element;
  size?: 'm' | 'l';
  onClick?: () => void;
}

const Button = ({
  classNames,
  icon,
  children,
  size = 'm',
  onClick
}: Props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      className={cn('Button', classNames, {
        [theme]: theme,
        [size]: size,
        withLabel: children,
        withIcon: icon
      })}
      onClick={onClick}
    >
      {icon && <div className='Button__icon'>{icon}</div>}
      <span className='Button__label'>{children}</span>
    </button>
  );
};

export default Button;
