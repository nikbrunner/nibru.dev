import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Grid from '../components/Grid';
import Section from '../components/Section';
import Row from '../components/Row';
import Button from '../components/Button';
import Skill from '../components/Skill';
import Experience from '../components/Experience';
import Headline from '../components/Headline';
import Link from '../components/Link';
import Page from '../components/Page';

import { Experience as ExperienceType } from '../types/Experience';
import { Skill as SkillType } from '../types/Skill';

import skills from '../data/skills';
import experiences from '../data/experiences';
import profile from '../data/profile';
import { Space } from '../types/Spaces';

const Components = () => (
  <Page name='Components'>
    <Section>
      <Headline tag={'h1'} size={'h1'}>
        Components
      </Headline>

      <p>This page is just an overview over all components.</p>
    </Section>

    <Section classNames={['Components__profile-section']}>
      <Headline tag='h1' size='h1'>
        Headline Size H1
      </Headline>

      <Headline tag='h2' size='h2'>
        Headline Size H2
      </Headline>

      <Headline tag='h3' size='h3'>
        Headline Size H3
      </Headline>

      <Headline tag='h4' size='h4'>
        Headline Size H4
      </Headline>

      <Headline tag='h5' size='h5'>
        Headline Size H5
      </Headline>

      <Headline tag='h6' size='h6'>
        Headline Size H6
      </Headline>

      <Row>
        <Button
          icon={<FontAwesomeIcon icon={['fab', 'linkedin']} />}
          label='This is a button with an Icon'
        />
        <Button label='This is a button' />
      </Row>

      <Headline size='h3'>Link component</Headline>

      <Row>
        This is an external link to{' '}
        <Link href={profile.github} type='external'>
          GitHub
        </Link>
        , and this is an external link to LinkedIn{' '}
        <Link href={profile.linkedin} type='external'>
          LinkedIn
        </Link>
        . This is an internal Link to the{' '}
        <Link href='/about' type='internal'>
          About page
        </Link>
        .
      </Row>
    </Section>

    <Section classNames={['Components__skills-section']}>
      <Row>
        <Headline>Skills</Headline>
      </Row>

      <Row cols={'fourCols'} classNames={['Components__skills-container']}>
        <Grid cols='auto-fit' gap={Space.m}>
          {skills.map(({ title, level, lib, icon }: SkillType) => (
            <Skill
              key={title}
              title={title}
              level={level}
              lib={lib}
              icon={icon}
            />
          ))}
        </Grid>
      </Row>
    </Section>

    <Section classNames={['Components__experiences-section']}>
      <Row>
        <Headline>Experiences</Headline>
      </Row>

      <Row
        cols={'fourCols'}
        classNames={['Components__experiences-container']}
      >
        <Grid cols={3} colMinWidth={'100px'} gap={Space.m}>
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
        </Grid>
      </Row>
    </Section>
  </Page>
);

export default Components;
