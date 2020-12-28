import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { GenericComponentProps } from '../types/GenericComponentProps';
import { Skill as SkillType } from '../types/Skill';

import { cn } from '../lib/cn';

type SkillProps = SkillType & GenericComponentProps;

const Skill = ({
  classNames,
  theme,
  title,
  level,
  icon,
  lib
}: SkillProps) => (
  <div className={cn('Skill', classNames, { [theme]: theme })}>
    <FontAwesomeIcon icon={[lib, icon]} />

    <progress id={title} max='100' value={level}>
      {level}%{' '}
    </progress>
    {title}
  </div>
);

export default Skill;
