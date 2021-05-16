import { useContext, useEffect, useState } from 'react';

import {
  Theme,
  ThemeContext,
  ThemeContextType
} from '../context/ThemeContext';
import { stripValueFromCustomCSSVarString } from './stripValueFromCustomCSSVarString';

export type AccentColor = string;

export const useAccentColor = (): AccentColor => {
  const { theme } = useContext<ThemeContextType>(ThemeContext);
  const [accentColor, setAccentColor] = useState<string>('');

  const accentCustomCSSVariable: string = '--color-accent-primary';

  // On mount and on theme change seek and set accent color for skill level
  useEffect(() => {
    const styleSheet: CSSStyleSheet = document.styleSheets[0];

    // TODO Remove any
    // I am really annoyed by the need of "any".
    // TS says style does not exist on type CSSRule, but it literally does.
    const darkModeAccentValue: string = (styleSheet
      .cssRules[1] as any).style.getPropertyValue(accentCustomCSSVariable);
    const lightModeAccentValue: string = (styleSheet
      .cssRules[2] as any).style.getPropertyValue(accentCustomCSSVariable);

    const darkModeAccentColor: string = (styleSheet
      .cssRules[0] as any).style.getPropertyValue(
      stripValueFromCustomCSSVarString(darkModeAccentValue)
    );
    const lightModeAccentColor: string = (styleSheet
      .cssRules[0] as any).style.getPropertyValue(
      stripValueFromCustomCSSVarString(lightModeAccentValue)
    );

    theme === Theme.dark
      ? setAccentColor(darkModeAccentColor)
      : setAccentColor(lightModeAccentColor);
  }, [theme]);

  return accentColor;
};
