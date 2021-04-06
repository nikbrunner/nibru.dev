import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from './Button';
import Headline from './Headline';
import Link from './Link';

import { ThemeContext, Theme } from '../context/ThemeContext';

import { cn } from '../lib/cn';

import profile from '../data/profile';

const Nav = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <nav className={cn('Nav', [], { [theme]: theme })}>
      <div className='Nav__name'>
        <Headline tag={'h1'} size={'h3'}>
          {profile.firstname} {profile.lastname}
        </Headline>
      </div>

      <div className='Nav__theme-buttons'>
        <Button
          icon={<FontAwesomeIcon icon='moon' />}
          onClick={() => setTheme(Theme.dark)}
        />

        <Button
          icon={<FontAwesomeIcon icon='lightbulb' />}
          onClick={() => setTheme(Theme.light)}
        ></Button>
      </div>

      <div className='Nav__links'>
        <Link href='/' type='internal'>
          Home
        </Link>
        <Link href='/components' type='internal'>
          Components
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
