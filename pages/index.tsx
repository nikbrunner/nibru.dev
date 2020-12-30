import React from 'react';
import Head from 'next/head';

import Main from '../components/Main';
import Section from '../components/Section';
import Row, { RowCols } from '../components/Row';
import Nav from '../components/Nav';
import Skill from '../components/Skill';
import Experience from '../components/Experience';
import Headline from '../components/Headline';

import { Experience as ExperienceType } from '../types/Experience';
import { Skill as SkillType } from '../types/Skill';

import skills from '../data/skills';
import experiences from '../data/experiences';

const Home = () => (
  <>
    <Head>
      <title>nibru.dev</title>

      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Nav />

    <Main classNames={['Home']}>
      <Section classNames={['Home__profile-section']}>
        <Row>
          <Headline>Hi there. 👋</Headline>
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
