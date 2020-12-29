import React, { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';

import { GenericProps } from '../types/GenericProps';
import { Experience as ExperienceType } from '../types/Experience';

import { cn } from '../lib/cn';

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
      <p>{title}</p>
      <p>{dateRange}</p>
      {company && <p>{company}</p>}
      {details && <p>{details}</p>}
    </div>
  );
};

export default Experience;
