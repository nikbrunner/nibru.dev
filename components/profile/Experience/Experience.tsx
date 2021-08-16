import React from 'react';

import { GenericProps } from '../../../types/GenericProps';
import { Experience as ExperienceType } from '../../../types/Experience';

import { cn } from '../../../lib/cn';
import Headline from '../../ui/Headline/Headline';

interface ExperienceProps extends ExperienceType, GenericProps {
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
    <Headline classNames={['Experience__title']} tag={'h3'} size={'h5'}>
      {title}
    </Headline>

    <p className='Experience__date-range'>{dateRange}</p>

    {company && <p className='Experience__company'>{company}</p>}

    {details && <p className='Experience__details'>{details}</p>}
  </div>
);

export default Experience;
