import React, { useContext } from 'react';

import Button from '../Button/Button';
import Headline from '../Headline/Headline';

import { ThemeContext, Theme } from '../../context/ThemeContext';

import { cn } from '../../lib/cn';

import profile from '../../data/profile';

const Nav = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <nav className={cn('Nav', [], { [theme]: theme })}>
      <div className='Nav__name'>
        <Headline tag={'h1'} size={'h3'} noBorder>
          {profile.firstname} {profile.lastname}
        </Headline>
      </div>
    </nav>
  );
};

export default Nav;
