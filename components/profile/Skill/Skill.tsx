import React, { useContext } from 'react';

import { Headline } from '@components/ui/Headline/Headline';

import { ThemeContext } from '@context/ThemeContext';

import { GenericProps } from '@typings/GenericProps';
import { Skill as SkillType } from '@typings/profile/Skill';

import { cn } from '@lib/cn';

type SkillProps = SkillType & GenericProps;

export const Skill = ({ classNames, title, level, icon }: SkillProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={cn('Skill', classNames, { [theme]: theme })}>
      <div
        className='Skill__level'
        style={{
          width: `${level}%`
        }}
      />

      <div className='Skill__caption'>
        <div className='Skill__icon'>{icon}</div>

        <Headline tag='h2' size='h6' classNames={['Skill__title']}>
          {title}
        </Headline>
      </div>
    </div>
  );
};
