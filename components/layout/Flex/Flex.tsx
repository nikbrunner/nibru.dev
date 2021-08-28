import React, { CSSProperties } from 'react';

import { cn } from '@lib/cn';

import { GenericProps } from '@typings/GenericProps';

interface Props extends GenericProps {
  children: React.ReactNode;
  justifyContent?: CSSProperties['justifyContent'];
  alignContent?: CSSProperties['alignContent'];
  alignItems?: CSSProperties['alignItems'];
  flexDirection?: CSSProperties['flexDirection'];
  flexWrap?: CSSProperties['flexWrap'];
}

export const Flex = ({
  style,
  classNames,
  children,
  justifyContent,
  alignContent,
  alignItems,
  flexDirection,
  flexWrap
}: Props) => (
  <div
    className={cn('Flex', classNames)}
    style={{
      ...style,
      justifyContent,
      alignContent,
      alignItems,
      flexDirection,
      flexWrap
    }}
  >
    {children}
  </div>
);
