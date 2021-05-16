import React, { useContext, useEffect, useState } from 'react';

import Headline from '../Headline/Headline';

import {
  Theme,
  ThemeContext,
  ThemeContextType
} from '../../context/ThemeContext';

import { GenericProps } from '../../types/GenericProps';
import { Skill as SkillType } from '../../types/Skill';

import { cn } from '../../lib/cn';
import { stripValueFromCustomCSSVarString } from '../../lib/stripValueFromCustomCSSVarString';

type SkillProps = SkillType & GenericProps;

const Skill = ({ classNames, title, level, icon }: SkillProps) => {
  const { theme } = useContext<ThemeContextType>(ThemeContext);
  const [accentColor, setAccentColor] = useState<string>('');

  // On mount seek and set accent color for skill level
  useEffect(() => {
    const styleSheets = document.styleSheets[0];
    const accentCustomCSSVariable: string = '--color-accent-primary';
    const darkModeAccentValue = styleSheets.cssRules[1].style.getPropertyValue(
      accentCustomCSSVariable
    );
    const lightModeAccentValue = styleSheets.cssRules[2].style.getPropertyValue(
      accentCustomCSSVariable
    );

    const darkModeAccentColor = styleSheets.cssRules[0].style.getPropertyValue(
      stripValueFromCustomCSSVarString(darkModeAccentValue)
    );
    const lightModeAccentColor = styleSheets.cssRules[0].style.getPropertyValue(
      stripValueFromCustomCSSVarString(lightModeAccentValue)
    );

    theme === Theme.dark
      ? setAccentColor(darkModeAccentColor)
      : setAccentColor(lightModeAccentColor);
  }, [theme]);

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
