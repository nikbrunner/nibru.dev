import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

import Section from '../components/Section/Section';
import Headline from '../components/Headline/Headline';
import Page from '../partials/Page/Page';
import Text from '../components/Text/Text';
import Link from '../components/Link/Link';
import { FaXing } from 'react-icons/fa';

const Home = () => {
  return (
    <Page name='Home' title='Home'>
      <Section classNames={['Home__profile-section']}>
        <Headline tag='h1' size='h1' noBorder>
          Hi there.
        </Headline>

        <Text>
          My Name is Nikolaus Brunner, and I am a Web Developer since 2019.
          <br /> I mainly work with{' '}
          <Link href='https://reactjs.org/' type='external'>
            React
          </Link>{' '}
          with{' '}
          <Link href='https://www.typescriptlang.org/' type='external'>
            TypeScript
          </Link>{' '}
          and{' '}
          <Link href='https://sass-lang.com/' type='external'>
            SCSS
          </Link>
          .
          <br /> This Website is in the process of being rebuilt.
        </Text>

        <Text>
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
            <FaXing />
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
