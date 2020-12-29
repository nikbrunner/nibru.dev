import React, { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';

import { GenericProps } from '../types/GenericProps';

import { cn } from '../lib/cn';

interface Props extends GenericProps {
  children: React.ReactNode;
}

const Main = ({ classNames, children }: Props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={cn('Main', classNames, { [theme]: theme })}>
      {children}
    </main>
  );
};

export default Main;
