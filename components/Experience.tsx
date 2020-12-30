import React, { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';

import { GenericProps } from '../types/GenericProps';
import { Experience as ExperienceType } from '../types/Experience';

import { cn } from '../lib/cn';
import Headline, { HeadlineSize, HeadlineTag } from './Headline';

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
}: ExperienceProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={cn('Experience', classNames, { [theme]: theme, current })}
    >
      <Headline
        classNames={['Experience__title']}
        tag={HeadlineTag.h3}
        size={HeadlineSize.h5}
      >
        {title}
      </Headline>
      <p className='Experience__date-range'>{dateRange}</p>
      {company && <p className='Experience__company'>{company}</p>}
      {details && <p className='Experience__details'>{details}</p>}
    </div>
  );
};

export default Experience;
