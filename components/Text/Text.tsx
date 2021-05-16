import React, { useContext } from 'react';

import { GenericProps } from '../../types/GenericProps';

import { cn } from '../../lib/cn';

interface Props extends GenericProps {}

const Text = ({ classNames, children }: Props) => (
  <p className={cn('Text', classNames)}>{children}</p>
);

export default Text;
