import React, { useContext } from 'react';

import { GenericProps } from '../types/GenericProps';

import { ThemeContext } from '../context/ThemeContext';

import { cn } from '../lib/cn';
interface Props extends GenericProps {
  name: string;
}

const Page = ({ children, name }: Props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={cn('Page', [name], { [theme]: theme })}>
      {children}
    </div>
  );
};

export default Page;
