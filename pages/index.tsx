import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { RiXingLine } from 'react-icons/ri';

import { Section } from '@components/layout/Section/Section';
import { Page } from '@components/layout/Page/Page';
import { Grid } from '@components/layout/Grid/Grid';
import { Flex } from '@components/layout/Flex/Flex';

import { Headline } from '@components/ui/Headline/Headline';
import { Text } from '@components/ui/Text/Text';
import { Link } from '@components/ui/Link/Link';

const Home = () => (
  <Page name='Home' title='Hi there. 👋'>
    <Section classNames={['Home__intro']}>
      <Grid>
        <Flex classNames={['Home__intro-image']}>
          <img
            src='/images/nb.jpg'
            width='100%'
            height='100%'
            style={{ objectFit: 'cover' }}
          />
        </Flex>

        <Flex
          classNames={['Home__intro-text']}
          style={{ padding: '2rem' }}
          flexDirection='column'
        >
          <Headline tag='h1' size='h1' noBorder>
            Hi there.
          </Headline>

          <Text maxWidth='25rem'>
            My name is Nikolaus Brunner,
            <br />
            or short just <em>Nik</em>.
          </Text>

          <Text maxWidth='30rem'>
            I am working as a Software Engineer for the{' '}
            <Link href='https://bike.center' type='external'>
              DealerCenter Digital
            </Link>
            .
            <br /> Previously I worked for{' '}
            <Link
              href='https://https://www.diva-e.com/de/'
              type='external'
            >
              diva-e
            </Link>
            .
          </Text>

          <Text maxWidth='25rem'>
            I mainly work with <strong>React</strong>, <wbr />
            <strong>TypeScript</strong> and <strong>SCSS</strong>.
          </Text>

          <Text maxWidth='30rem'>
            This website is being rebuilt.
            <br /> You can visit my old website{' '}
            <Link href='/archive/index.html' type='internal'>
              here
            </Link>
            .
          </Text>

          <Text maxWidth='25rem'>
            Developing{' '}
            <Link href='https://dotnotes.io' type='external'>
              dotnotes.io
            </Link>
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
        </Flex>
      </Grid>
    </Section>
  </Page>
);

export default Home;
