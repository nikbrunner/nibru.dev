import React, { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';

import { cn } from '../lib/cn';

export enum HeadlineTag {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6'
}

export enum HeadlineSize {
  h1 = 'size-h1',
  h2 = 'size-h2',
  h3 = 'size-h3',
  h4 = 'size-h4',
  h5 = 'size-h5',
  h6 = 'size-h6'
}

interface Props {
  children: React.ReactNode;
  classNames?: string[];
  size?: HeadlineSize;
  tag?: HeadlineTag;
}

const Headline = ({
  children,
  classNames = [],
  size = HeadlineSize.h2,
  tag = HeadlineTag.h2
}: Props) => {
  const { theme } = useContext(ThemeContext);

  return React.createElement(
    tag,
    {
      className: cn('Headline', classNames, {
        [tag]: tag,
        [size]: size,
        [theme]: theme
      })
    },
    children
  );
};

export default Headline;
