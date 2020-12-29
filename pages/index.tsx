import React, { useContext } from 'react';
import Head from 'next/head';

import { ThemeContext, Theme } from '../context/ThemeContext';

import Main from '../components/Main';
import Section from '../components/Section';
import Row, { RowCols } from '../components/Row';
import Skill from '../components/Skill';
import Experience from '../components/Experience';

import { Experience as ExperienceType } from '../types/Experience';
import { Skill as SkillType } from '../types/Skill';

import profile from '../data/personalData';
import skills from '../data/skills';
import experiences from '../data/experiences';

const Home = () => {
  const { setTheme } = useContext(ThemeContext);

  return (
    <>
      <Head>
        <title>nibru.dev</title>

        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Main classNames={['Home']}>
        <Row cols={RowCols.twoCols}>
          <button onClick={() => setTheme(Theme.dark)}>🌚</button>
          <button onClick={() => setTheme(Theme.light)}>🌞</button>
        </Row>

        <Section classNames={['Home__personalData']}>
          <Row cols={RowCols.twoCols}>
            <h1>
              Hello, Im {profile.firstname} {profile.lastname}
            </h1>

            <ul>
              <li>{profile.birthday}</li>
              <li>{profile.email}</li>
              <li>{profile.phone}</li>
              <li>{profile.website}</li>
              <li>{profile.github}</li>
              <li>{profile.linkedin}</li>
            </ul>
          </Row>
        </Section>

        <Section classNames={['Home__skills']}>
          <Row>
            <h1>Skills</h1>
          </Row>

          <Row cols={RowCols.fourCols}>
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

        <Section classNames={['Home__experiences']}>
          <Row>
            <h1>Experiences</h1>
          </Row>

          <Row cols={RowCols.fourCols}>
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
};

export default Home;
