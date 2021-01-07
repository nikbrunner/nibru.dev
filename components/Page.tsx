import React from 'react';

import { GenericProps } from '../types/GenericProps';

import { cn } from '../lib/cn';

interface Props extends GenericProps {
  pageName: string;
}

const Page = ({ children, theme, pageName }: Props) => (
  <div className={cn('Page', [pageName], { [theme]: theme })}>
    {children}
  </div>
);

export default Page;
