import facepaint from 'facepaint';

import { breakpoints } from '@data/breakpoints';

export const getResponsiveStyles: facepaint.DynamicStyleFunction = facepaint(
  breakpoints.map(bp => `@media (min-width: ${bp}px)`)
);
