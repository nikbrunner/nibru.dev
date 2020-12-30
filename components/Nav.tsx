import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from './Button';
import Headline, { HeadlineSize, HeadlineTag } from './Headline';

import { ThemeContext, Theme } from '../context/ThemeContext';

import { cn } from '../lib/cn';

import profile from '../data/profile';

const Nav = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <nav className={cn('Nav', [], { [theme]: theme })}>
      <div className='Nav__name'>
        <Headline tag={HeadlineTag.h1} size={HeadlineSize.h5}>
          {profile.firstname} {profile.lastname}
        </Headline>
      </div>

      <div className='Nav__buttons'>
        <a href={profile.github}>
          <Button>
            <FontAwesomeIcon icon={['fab', 'github']} />
          </Button>
        </a>

        <a href={profile.linkedin}>
          <Button>
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </Button>
        </a>

        <Button onClick={() => setTheme(Theme.dark)}>
          <FontAwesomeIcon icon='moon' />
        </Button>

        <Button onClick={() => setTheme(Theme.light)}>
          <FontAwesomeIcon icon='lightbulb' />
        </Button>
      </div>
    </nav>
  );
};

export default Nav;
