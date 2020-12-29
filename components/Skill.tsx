import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ThemeContext } from '../context/ThemeContext';

import { GenericProps } from '../types/GenericProps';
import { Skill as SkillType } from '../types/Skill';

import { cn } from '../lib/cn';

type SkillProps = SkillType & GenericProps;

const Skill = ({ classNames, title, level, icon, lib }: SkillProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={cn('Skill', classNames, { [theme]: theme })}>
      <FontAwesomeIcon icon={[lib, icon]} />

      <progress id={title} max='100' value={level}>
        {level}%{' '}
      </progress>
      {title}
    </div>
  );
};

export default Skill;
