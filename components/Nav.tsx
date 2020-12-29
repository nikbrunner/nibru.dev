import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from './Button';

import { ThemeContext, Theme } from '../context/ThemeContext';

import { cn } from '../lib/cn';

const Nav = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <nav className={cn('Nav', [], { [theme]: theme })}>
      <div className='Nav__name'>
        <h3>Nikolaus Brunner</h3>
      </div>

      <div className='Nav__theme-buttons'>
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
