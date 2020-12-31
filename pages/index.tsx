import React from 'react';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Main from '../components/Main';
import Section from '../components/Section';
import Row, { RowCols } from '../components/Row';
import Button from '../components/Button';
import Nav from '../components/Nav';
import Skill from '../components/Skill';
import Experience from '../components/Experience';
import Headline, { HeadlineSize } from '../components/Headline';

import { Experience as ExperienceType } from '../types/Experience';
import { Skill as SkillType } from '../types/Skill';

import skills from '../data/skills';
import experiences from '../data/experiences';
import profile from '../data/profile';
import Link, { LinkType } from '../components/Link';

const Home = () => (
  <>
    <Head>
      <title>nibru.dev</title>

      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Nav />

    <Main classNames={['Home']}>
      <Section classNames={['Home__profile-section']}>
        <Headline size={HeadlineSize.h3}>Hi there. 👋</Headline>

        <Row>
          <Button
            icon={<FontAwesomeIcon icon={['fab', 'linkedin']} />}
            label='This is a button with an Icon'
          />
          <Button label='This is a button' />
        </Row>

        <Headline size={HeadlineSize.h3}>Link component</Headline>

        <Row>
          This is an external link to{' '}
          <Link href={profile.github} type={LinkType.external}>
            GitHub
          </Link>
          , and this is an external link to LinkedIn{' '}
          <Link href={profile.linkedin} type={LinkType.external}>
            LinkedIn
          </Link>
          . This is an internal Link to the{' '}
          <Link href='/about' type={LinkType.internal}>
            About page
          </Link>
          .
        </Row>
      </Section>

      <Section classNames={['Home__skills-section']}>
        <Row>
          <Headline>Skills</Headline>
        </Row>

        <Row
          cols={RowCols.fourCols}
          classNames={['Home__skills-container']}
        >
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
          cols={RowCols.fourCols}
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
  </>
);

export default Home;
