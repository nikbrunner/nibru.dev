import React from 'react';

import { Headline } from '@components/ui/Headline/Headline';

import { GenericProps } from '@typings/GenericProps';
import { Experience as ExperienceType } from '@typings/profile/Experience';

import { cn } from '@lib/cn';

interface ExperienceProps extends ExperienceType, GenericProps {
  current: boolean;
}

export const Experience = ({
  classNames,
  title,
  dateRange,
  company,
  details,
  current
}: ExperienceProps) => (
  <div className={cn('Experience', classNames, { current })}>
    <Headline classNames={['Experience__title']} tag={'h3'} size={'h5'}>
      {title}
    </Headline>

    <p className='Experience__date-range'>{dateRange}</p>

    {company && <p className='Experience__company'>{company}</p>}

    {details && <p className='Experience__details'>{details}</p>}
  </div>
);
