import React from 'react';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { GenericComponentProps } from '../types/GenericComponentProps';

import { cn } from '../lib/cn';

interface Props extends GenericComponentProps {
  title: string;
  level: number;
  icon: IconName;
  lib: IconPrefix;
}

const Skill = ({ classNames, title, level, icon, lib }: Props) => (
  <div className={cn('Skill', classNames)}>
    <FontAwesomeIcon icon={[lib, icon]} />

    <progress id={title} max='100' value={level}>
      {level}%{' '}
    </progress>
    {title}
  </div>
);

export default Skill;
