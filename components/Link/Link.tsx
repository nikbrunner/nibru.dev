import React from 'react';
import { GoLinkExternal } from 'react-icons/go';

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
}: Props) => (
  <a
    className={cn('Link', classNames, {
      [type]: type
    })}
    href={href}
    target={openInNewTab ? '_blank' : '_self'}
  >
    {type === 'external' && <GoLinkExternal />}
    {children}
  </a>
);

export default Link;
