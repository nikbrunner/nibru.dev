import React from 'react';

import { GenericProps } from '../../../types/GenericProps';

import { cn } from '../../../lib/cn';

interface Props extends GenericProps {
  children: React.ReactNode;
  classNames?: string[];
  id?: string;
  debug?: boolean;
  backgroundImage?: string | false;
  backgroundVideo?: string | false;
  backgroundOverlay?: boolean;
  backgroundBlur?: boolean;
}

export const Section = ({
  children,
  id,
  classNames = [],
  debug = false,
  backgroundImage = false,
  backgroundVideo = false,
  backgroundOverlay = false,
  backgroundBlur = false
}: Props) => (
  <section
    className={cn('Section', classNames, {
      debug,
      backgroundImage,
      backgroundVideo,
      backgroundOverlay,
      backgroundBlur
    })}
    id={id}
    style={
      backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}
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
