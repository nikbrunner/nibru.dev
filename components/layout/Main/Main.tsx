import React from 'react';

import { GenericProps } from '../../../types/GenericProps';

import { cn } from '../../../lib/cn';

interface Props extends GenericProps {
  children: React.ReactNode;
}

const Main = ({ classNames, children }: Props) => (
  <main className={cn('Main', classNames)}>{children}</main>
);

export default Main;
