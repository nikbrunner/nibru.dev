import React, { useContext } from 'react';

import Headline from '../Headline/Headline';

import { ThemeContext } from '../../context/ThemeContext';

import { GenericProps } from '../../types/GenericProps';
import { Skill as SkillType } from '../../types/Skill';

import { cn } from '../../lib/cn';
import { useAccentColor } from '../../lib/useAccentColor';

type SkillProps = SkillType & GenericProps;

const Skill = ({ classNames, title, level, icon }: SkillProps) => {
  const { theme } = useContext(ThemeContext);
  const accentColor = useAccentColor();

  const skillLevelStyle: React.CSSProperties = {
    background: accentColor,
    width: `${level}%`
  };

  return (
    <div className={cn('Skill', classNames, { [theme]: theme })}>
      <div className='Skill__level' style={skillLevelStyle} />

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
