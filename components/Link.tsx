import React, { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';

import { GenericProps } from '../types/GenericProps';

import { cn } from '../lib/cn';

interface Props extends GenericProps {
  href: string;
  openInNewTab?: boolean;
}

const Link = ({
  classNames,
  children,
  href,
  openInNewTab = false
}: Props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <a
      className={cn('Link', classNames, { [theme]: theme })}
      href={href}
      target={openInNewTab ? '_blank' : '_self'}
    >
      {children}
    </a>
  );
};

export default Link;
