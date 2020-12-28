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

import personalData from '../data/personalData';
import skills from '../data/skills';
import experiences from '../data/experiences';

const Home = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <Head>
        <title>nibru.dev</title>

        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Main classNames={['Home']} theme={theme}>
        <button onClick={() => setTheme(Theme.dark)}>🌚</button>
        <button onClick={() => setTheme(Theme.light)}>🌞</button>

        <Section theme={theme} classNames={['Home__personalData']}>
          <Row theme={theme} cols={RowCols.twoCols}>
            <h1>
              Hello, Im {personalData.firstname} {personalData.lastname}
            </h1>

            <ul>
              <li>{personalData.birthday}</li>
              <li>{personalData.email}</li>
              <li>{personalData.phone}</li>
              <li>{personalData.website}</li>
              <li>{personalData.github}</li>
              <li>{personalData.linkedin}</li>
            </ul>
          </Row>
        </Section>

        <Section theme={theme} classNames={['Home__skills']}>
          <Row theme={theme}>
            <h1>Skills</h1>
          </Row>

          <Row theme={theme} cols={RowCols.fourCols}>
            {skills.map(({ title, level, lib, icon }: SkillType) => (
              <Skill
                key={title}
                title={title}
                level={level}
                lib={lib}
                icon={icon}
                theme={theme}
              />
            ))}
          </Row>
        </Section>

        <Section theme={theme} classNames={['Home__experiences']}>
          <Row theme={theme}>
            <h1>Experiences</h1>
          </Row>

          <Row theme={theme} cols={RowCols.fourCols}>
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
                  theme={theme}
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
