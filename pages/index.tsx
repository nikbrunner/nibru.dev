import Head from 'next/head';

import Main from '../components/Main';
import Section from '../components/Section';
import Row, { RowCols } from '../components/Row';
import Skill from '../components/Skill';

import personalData from '../data/personalData';
import skills from '../data/skills';

import { cn } from '../lib/cn';

const Home = () => (
  <Main classNames={['Home']}>
    <Head>
      <title>nibru.dev</title>

      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Section>
      <Row cols={RowCols.twoCols}>
        <h1>
          Hello, Im {personalData.firstname} {personalData.lastname}
        </h1>

        <h2>{personalData.github}</h2>
      </Row>
    </Section>

    <Section>
      <Row>
        {skills.map(({ title, level, lib, icon }) => (
          <Skill
            key={title}
            title={title}
            level={level}
            lib={lib}
            icon={icon}
          />
        ))}
      </Row>
    </Section>
  </Main>
);

export default Home;
