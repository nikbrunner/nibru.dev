import React from 'react';

import { GenericComponentProps } from '../types/GenericComponentProps';
import { Experience as ExperienceType } from '../types/Experience';

import { cn } from '../lib/cn';

interface ExperienceProps extends ExperienceType, GenericComponentProps {
  current: boolean;
}

const Experience = ({
  classNames,
  title,
  dateRange,
  company,
  details,
  current
}: ExperienceProps) => (
  <div className={cn('Experience', classNames, { current })}>
    <p>{title}</p>
    <p>{dateRange}</p>
    {company && <p>{company}</p>}
    {details && <p>{details}</p>}
  </div>
);

export default Experience;
