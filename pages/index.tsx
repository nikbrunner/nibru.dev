import React from 'react';

import Section from '../components/Section';
import Headline from '../components/Headline';
import Page from '../components/Page';

const Home = () => (
  <Page name='Home' title='Home'>
    <Section classNames={['Home__profile-section']}>
      <Headline tag={'h1'} size={'h1'}>
        Welcome to my site
      </Headline>
    </Section>
  </Page>
);

export default Home;
