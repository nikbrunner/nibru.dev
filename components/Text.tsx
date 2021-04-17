import React, { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';

import { GenericProps } from '../types/GenericProps';

import { cn } from '../lib/cn';

interface Props extends GenericProps {}

const Text = ({ classNames, children }: Props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <p className={cn('Text', classNames, { [theme]: theme })}>
      {children}
    </p>
  );
};

export default Text;
