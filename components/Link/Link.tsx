import React from 'react';
import { FiLink } from 'react-icons/fi';

import { GenericProps } from '../../types/GenericProps';

import { cn } from '../../lib/cn';

interface Props extends GenericProps {
  href: string;
  type: 'internal' | 'external';
  hideIcon?: boolean;
  openInNewTab?: boolean;
}

const Link = ({
  classNames,
  children,
  href,
  type,
  openInNewTab = false,
  hideIcon = false
}: Props) => (
  <a
    className={cn('Link', classNames, {
      [type]: type
    })}
    href={href}
    target={type === 'external' || openInNewTab ? '_blank' : '_self'}
  >
    {type === 'external' && !hideIcon && <FiLink />}
    {children}
  </a>
);

export default Link;
