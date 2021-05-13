import React from 'react';

import Section from '../components/Section';
import Headline from '../components/Headline';
import Page from '../components/Page';
import Text from '../components/Text';

const Home = () => {
  return (
    <Page name='Home' title='Home'>
      <Section classNames={['Home__profile-section']}>
        <Headline tag='h1' size='h1'>
          Hello there.
        </Headline>

        <Text>
          My Name is Nik. I was born in 1984, am engaged to my
          long-standing girlfriend and living in Landshut, Bavaria,
          Germany.I have several years of experience in event technology
          and event planing, professional studio sound engineering and
          photography.I worked in several five star hotels, expensive
          studios and in nature.
        </Text>

        <Text>
          But in January 2019, I decided to take my life on a new route.A
          long time before, I got bored and unsatisfied with my
          occupation.I wanted to pursue a profession that would allow me to
          be creative, to tinker and to use my self-organization and high
          ability to concentrate.
        </Text>

        <Text>
          I was always interested in programming and computers.It was by
          far my best subject when we wrote small programs with Visual
          Basic in middle school 20 years ago.Since I am also an avid and
          engaged software user due to my job history but also as private
          person for many years, and with web applications on the rise i
          decided to learn Web Development.
        </Text>

        <Text>
          Learning Web Development everyday, is exactly what I have done
          since January 2019.
        </Text>

        <Text>
          I created this page as a living CV, which I will update as
          needed.It should serve to display fast and clear my data.There
          are also references from my past employers and some certificates
          of education available to download here.
        </Text>
      </Section>
    </Page>
  );
};

export default Home;
