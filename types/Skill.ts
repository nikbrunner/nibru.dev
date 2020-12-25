import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';

export interface Skill {
  title: string;
  level: number;
  icon: IconName;
  lib: IconPrefix;
}
