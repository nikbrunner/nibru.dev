import React from 'react';

import { GenericComponentProps } from '../types/GenericComponentProps';

import { cn } from '../lib/cn';

interface Props extends GenericComponentProps {
  children: React.ReactNode;
}

const Main = ({ classNames, children }: Props) => (
  <main className={cn('Main', classNames)}>{children}</main>
);

export default Main;
