import { Theme } from '../context/ThemeContext';

export interface GenericProps {
  classNames?: string[];
  children?: React.ReactNode;
  theme?: Theme;
}
