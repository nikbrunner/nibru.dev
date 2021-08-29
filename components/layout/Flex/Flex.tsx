/** @jsxImportSource @emotion/react */
import React, { CSSProperties } from 'react';

import { cn } from '@lib/cn';
import { getResponsiveStyles } from '@lib/responsiveDesign';

import { GenericProps } from '@typings/GenericProps';
import { DynamicCSSProperty } from '@typings/ResponsiveDesign';

interface Props extends GenericProps {
  children: React.ReactNode;
  justifyContent?: DynamicCSSProperty<CSSProperties['justifyContent']>;
  alignContent?: DynamicCSSProperty<CSSProperties['alignContent']>;
  alignItems?: DynamicCSSProperty<CSSProperties['alignItems']>;
  flexDirection?: DynamicCSSProperty<CSSProperties['flexDirection']>;
  flexWrap?: DynamicCSSProperty<CSSProperties['flexWrap']>;
}

// TODO Implement center prop
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
    style={style}
    className={cn('Flex', classNames)}
    // This works but im still not very happy with it. I don't know why.
    css={getResponsiveStyles({
      justifyContent: justifyContent && [...justifyContent],
      alignContent: alignContent && [...alignContent],
      alignItems: alignItems && [...alignItems],
      flexDirection: flexDirection && [...flexDirection],
      flexWrap: flexWrap && [...flexWrap]
    })}
  >
    {children}
  </div>
);
