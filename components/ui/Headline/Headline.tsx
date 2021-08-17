import React from 'react';

import { cn } from '@lib/cn';

// TODO Outsource
export type HeadlineSizes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface Props {
  children: React.ReactNode;
  classNames?: string[];
  size?: HeadlineSizes;
  tag?: HeadlineSizes;
  noBorder?: boolean;
}

export const Headline = ({
  children,
  classNames = [],
  size = 'h2',
  tag = 'h2',
  noBorder = false
}: Props) =>
  React.createElement(
    tag,
    {
      className: cn('Headline', classNames, {
        [`size-${size}`]: size,
        noBorder
      })
    },
    children
  );
