import React, { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';

import { cn } from '../../lib/cn';

export type HeadlineSizes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface Props {
  children: React.ReactNode;
  classNames?: string[];
  size?: HeadlineSizes;
  tag?: HeadlineSizes;
}

const Headline = ({
  children,
  classNames = [],
  size = 'h2',
  tag = 'h2'
}: Props) => {
  const { theme } = useContext(ThemeContext);

  return React.createElement(
    tag,
    {
      className: cn('Headline', classNames, {
        [`size-${size}`]: size,
        [theme]: theme
      })
    },
    children
  );
};

export default Headline;
