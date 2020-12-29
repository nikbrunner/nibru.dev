import React, { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';

import { GenericComponentProps } from '../types/GenericComponentProps';

import { cn } from '../lib/cn';

interface Props extends GenericComponentProps {
  children: React.ReactNode;
  classNames?: string[];
  id?: string;
  debug?: boolean;
  backgroundImage?: string | false;
  backgroundVideo?: string | false;
  backgroundOverlay?: boolean;
  backgroundBlur?: boolean;
}

const Section = ({
  children,
  id,
  classNames = [],
  debug = false,
  backgroundImage = false,
  backgroundVideo = false,
  backgroundOverlay = false,
  backgroundBlur = false
}: Props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={cn('Section', classNames, {
        [theme]: theme,
        debug,
        backgroundImage,
        backgroundVideo,
        backgroundOverlay,
        backgroundBlur
      })}
      id={id}
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : {}
      }
    >
      {backgroundBlur && <div className='Section__backgroundBlur' />}

      {backgroundOverlay && <div className='Section__backgroundOverlay' />}

      {backgroundVideo && (
        <div className='Section__backgroundVideo'>
          <video muted loop autoPlay>
            <source src={backgroundVideo} type='video/mp4' />
          </video>
        </div>
      )}

      <article className='Section__content'>{children}</article>
    </section>
  );
};

export default Section;
