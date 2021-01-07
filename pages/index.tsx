import React, { useContext } from 'react';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Main from '../components/Main';
import Section from '../components/Section';
import Row from '../components/Row';
import Button from '../components/Button';
import Nav from '../components/Nav';
import Skill from '../components/Skill';
import Experience from '../components/Experience';
import Headline from '../components/Headline';
import Link from '../components/Link';
import Page from '../components/Page';

import { Theme, ThemeContext } from '../context/ThemeContext';

import { Experience as ExperienceType } from '../types/Experience';
import { Skill as SkillType } from '../types/Skill';

import skills from '../data/skills';
import experiences from '../data/experiences';
import profile from '../data/profile';

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Page name='Home'>
      <Head>
        <title>{theme === Theme.dark ? '🌑' : '🌕'} nibru.dev</title>

        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Main>
        <Nav />
        <Section classNames={['Home__profile-section']}>
          <Headline tag={'h1'} size={'h1'}>
            Headline Size H1
          </Headline>

          <Headline tag={'h2'} size={'h2'}>
            Headline Size H2
          </Headline>

          <Headline tag={'h3'} size={'h3'}>
            Headline Size H3
          </Headline>

          <Headline tag={'h4'} size={'h4'}>
            Headline Size H4
          </Headline>

          <Headline tag={'h5'} size={'h5'}>
            Headline Size H5
          </Headline>

          <Headline tag={'h6'} size={'h6'}>
            Headline Size H6
          </Headline>

          <Row>
            <Button
              icon={<FontAwesomeIcon icon={['fab', 'linkedin']} />}
              label='This is a button with an Icon'
            />
            <Button label='This is a button' />
          </Row>

          <Headline size={'h3'}>Link component</Headline>

          <Row>
            This is an external link to{' '}
            <Link href={profile.github} type={'external'}>
              GitHub
            </Link>
            , and this is an external link to LinkedIn{' '}
            <Link href={profile.linkedin} type={'external'}>
              LinkedIn
            </Link>
            . This is an internal Link to the{' '}
            <Link href='/about' type={'internal'}>
              About page
            </Link>
            .
          </Row>
        </Section>

        <Section classNames={['Home__skills-section']}>
          <Row>
            <Headline>Skills</Headline>
          </Row>

          <Row cols={'fourCols'} classNames={['Home__skills-container']}>
            {skills.map(({ title, level, lib, icon }: SkillType) => (
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

        <Section classNames={['Home__experiences-section']}>
          <Row>
            <Headline>Experiences</Headline>
          </Row>

          <Row
            cols={'fourCols'}
            classNames={['Home__experiences-container']}
          >
            {experiences.map(
              (
                { title, dateRange, company, details }: ExperienceType,
                idx: number
              ) => (
                <Experience
                  key={title}
                  title={title}
                  dateRange={dateRange}
                  company={company}
                  details={details}
                  current={idx === experiences.length - 1}
                />
              )
            )}
          </Row>
        </Section>
      </Main>
    </Page>
  );
};

export default Home;
