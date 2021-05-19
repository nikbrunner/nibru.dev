import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { RiXingLine } from 'react-icons/ri';

import Section from '../components/Section/Section';
import Headline from '../components/Headline/Headline';
import Page from '../partials/Page/Page';
import Text from '../components/Text/Text';
import Link from '../components/Link/Link';

const Home = () => {
  return (
    <Page name='Home' title='Home'>
      <Section classNames={['Home__profile-section']}>
        <Headline tag='h1' size='h1' noBorder>
          Hi there.
        </Headline>

        <Text maxWidth='25rem'>
          My name is Nikolaus Brunner,
          <br />
          and I am a Web Developer since 2019.
        </Text>

        <Text maxWidth='25rem'>
          Currently I am a Software Engineer at{' '}
          <Link href='https://bike.center' type='external'>
            DealerCenter Digital
          </Link>
          .
        </Text>

        <Text maxWidth='25rem'>
          I mainly work with <strong>React</strong>,{' '}
          <strong>TypeScript</strong>
          <br /> and <strong>SCSS</strong>.
        </Text>

        <Text maxWidth='20rem'>
          This website is in the process of being rebuilt.
        </Text>

        <Text style={{ fontSize: '2rem' }}>
          <Link
            href='https://github.com/nikbrunner'
            type='external'
            hideIcon
          >
            <FiGithub />
          </Link>{' '}
          <Link
            href='mailto:nikolaus.brunner@protonmail.ch'
            type='external'
            hideIcon
          >
            <FiMail />
          </Link>{' '}
          <Link
            href='https://www.xing.com/profile/Nikolaus_Brunner4/cv'
            type='external'
            hideIcon
          >
            <RiXingLine />
          </Link>{' '}
          <Link
            href='https://www.linkedin.com/in/nikolaus-brunner-30847798/'
            type='external'
            hideIcon
          >
            <FiLinkedin />
          </Link>
        </Text>
      </Section>
    </Page>
  );
};

export default Home;
