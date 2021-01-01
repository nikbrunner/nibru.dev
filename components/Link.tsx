import React, { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';

import { GenericProps } from '../types/GenericProps';

import { cn } from '../lib/cn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
      {type === 'external' && (
        <FontAwesomeIcon icon={['fas', 'external-link-alt']} />
      )}
      {children}
    </a>
  );
};

export default Link;
