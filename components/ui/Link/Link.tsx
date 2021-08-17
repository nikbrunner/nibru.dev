import React, { ReactNode } from 'react';
import { FiLink } from 'react-icons/fi';

import { GenericProps } from '@typings/GenericProps';

import { cn } from '@lib/cn';

interface Props extends GenericProps {
  children: ReactNode;
  href: string;
  type: 'internal' | 'external';
  hideIcon?: boolean;
  openInNewTab?: boolean;
}

export const Link = ({
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
    {children}
    {type === 'external' && !hideIcon && <FiLink />}
  </a>
);
