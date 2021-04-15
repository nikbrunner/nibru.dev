import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Headline from './Headline';

import { Theme, ThemeContext } from '../context/ThemeContext';

import { GenericProps } from '../types/GenericProps';
import { Skill as SkillType } from '../types/Skill';

import { cn } from '../lib/cn';

type SkillProps = SkillType & GenericProps;

const Skill = ({ classNames, title, level, icon }: SkillProps) => {
  const { theme } = useContext(ThemeContext);

  const background =
    theme === Theme.dark
      ? `linear-gradient(
    135deg,
    #3ddbb3 0%,
    #0bc294 ${level}%,
    rgba(0, 0, 0, 0) 0%
  )`
      : `linear-gradient(
    135deg,
    #000000 0%,
    #000000 ${level}%,
    rgba(0, 0, 0, 0) 0%
  )`;

  return (
    <div className={cn('Skill', classNames, { [theme]: theme })}>
      <div className='Skill__level' style={{ background }} />

      <div className='Skill__caption'>
        <div className='Skill__icon'>{icon}</div>

        <Headline tag='h2' size='h6' classNames={['Skill__title']}>
          {title}
        </Headline>
      </div>
    </div>
  );
};

export default Skill;
