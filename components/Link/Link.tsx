import React, { useContext } from 'react';
import { GoLinkExternal } from 'react-icons/go';

import { ThemeContext } from '../../context/ThemeContext';

import { GenericProps } from '../../types/GenericProps';

import { cn } from '../../lib/cn';

interface Props extends GenericProps {
  href: string;
  type: 'internal' | 'external';
  openInNewTab?: boolean;
}

const Link = ({
  classNames,
  children,
  href,
  type,
  openInNewTab = false
}: Props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <a
      className={cn('Link', classNames, {
        [theme]: theme,
        [type]: type
      })}
      href={href}
      target={openInNewTab ? '_blank' : '_self'}
    >
      {type === 'external' && <GoLinkExternal />}
      {children}
    </a>
  );
};

export default Link;
