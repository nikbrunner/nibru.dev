import React from 'react';

import Grid from '../../components/layout/Grid/Grid';
import Section from '../../components/layout/Section/Section';
import Row from '../../components/layout/Row/Row';
import Button from '../../components/ui/Button/Button';
import Skill from '../../components/profile/Skill/Skill';
import Experience from '../../components/profile/Experience/Experience';
import Headline from '../../components/ui/Headline/Headline';
import Link from '../../components/ui/Link/Link';
import Page from '../../components/layout/Page/Page';
import Text from '../../components/ui/Text/Text';

import { Experience as ExperienceType } from '../../types/profile/Experience';
import { Skill as SkillType } from '../../types/profile/Skill';
import { Space } from '../../types/Spaces';

import skills from '../../data/skills';
import experiences from '../../data/experiences';
import profile from '../../data/profile';

const Components = () => (
  <Page name='Components'>
    <Section>
      <Headline tag='h1' size='h1'>
        Components Overview
      </Headline>

      <Text>This page is just an overview over all components.</Text>
    </Section>

    <Section>
      <Headline size='h2'>Link component</Headline>

      <Row>
        <Text>
          This is an external link to{' '}
          <Link href={profile.github} type='external'>
            GitHub
          </Link>
          , and this is an external link to{' '}
          <Link href={profile.linkedin} type='external'>
            LinkedIn
          </Link>
          . This is an internal Link to the{' '}
          <Link href='/about' type='internal'>
            About page
          </Link>
          .
        </Text>
      </Row>
    </Section>

    <Section>
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
    </Section>

    <Section>
      <Headline size='h1'>Text component</Headline>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Interdum posuere{' '}
        <Link href='/home' type='internal'>
          home
        </Link>{' '}
        dolor sit amet. Viverra vitae congue eu consequat ac felis donec
        et. Tempor id eu nisl nunc. Hac habitasse platea dictumst quisque
        sagittis purus sit amet volutpat. Nibh cras pulvinar mattis nunc
        sed. Nec feugiat in fermentum posuere urna. Interdum velit laoreet
        id donec ultrices tincidunt arcu. Quam vulputate dignissim
        suspendisse in. Feugiat sed lectus vestibulum mattis.
      </Text>

      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Interdum posuere{' '}
        <Link href='/home' type='internal'>
          home
        </Link>{' '}
        dolor sit amet. Viverra vitae congue eu consequat ac felis donec
        et. Tempor id eu nisl nunc. Hac habitasse platea dictumst quisque
        sagittis purus sit amet volutpat. Nibh cras pulvinar mattis nunc
        sed. Nec feugiat in fermentum posuere urna. Interdum velit laoreet
        id donec ultrices tincidunt arcu. Quam vulputate dignissim
        suspendisse in. Feugiat sed lectus vestibulum mattis.
      </Text>
    </Section>

    <Section>
      <Headline tag='h1' size='h1'>
        Lorem ipsum dolor sit amet.
      </Headline>

      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
        aperiam voluptas explicabo, similique sunt provident quis beatae ab
        blanditiis veritatis! Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Ad, laboriosam. Molestias accusamus, mollitia
        cumque quos omnis nostrum aliquam ducimus fugiat qui architecto
        totam vel hic doloribus corrupti a, eaque laudantium officiis
        asperiores fuga quae eos quisquam! Fugit amet, delectus rem quia
        necessitatibus molestiae, aliquid quam dignissimos doloribus, nemo
        modi totam!
      </Text>

      <Headline tag='h2' size='h2'>
        Lorem, ipsum dolor.
      </Headline>

      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
        aperiam voluptas explicabo, similique sunt provident quis beatae ab
        blanditiis veritatis! Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Ad, laboriosam. Molestias accusamus, mollitia
        cumque quos omnis nostrum aliquam ducimus fugiat qui architecto
        totam vel hic doloribus corrupti a, eaque laudantium officiis
        asperiores fuga quae eos quisquam! Fugit amet, delectus rem quia
        necessitatibus molestiae, aliquid quam dignissimos doloribus, nemo
        modi totam!
      </Text>

      <Headline tag='h3' size='h3'>
        Lorem ipsum dolor sit amet.
      </Headline>

      <Text>
        Vitae tempus quam{' '}
        <Link href='https://google.com' type='external'>
          Pellentesque
        </Link>{' '}
        nec nam. Praesent semper feugiat nibh sed pulvinar proin gravida
        hendrerit lectus. Ipsum dolor sit amet consectetur adipiscing elit
        duis tristique sollicitudin. Nisi quis eleifend quam adipiscing
        vitae. Posuere sollicitudin aliquam ultrices sagittis orci. Vitae
        suscipit tellus mauris a. Proin sagittis nisl rhoncus mattis.
        Viverra vitae congue eu consequat ac felis donec. Diam maecenas
        ultricies mi eget mauris pharetra. Donec pretium vulputate sapien
        nec sagittis aliquam malesuada.
      </Text>

      <Headline tag='h4' size='h4'>
        Lorem ipsum dolor sit.
      </Headline>

      <Text>
        Mattis vulputate enim nulla aliquet porttitor lacus. Consectetur
        lorem donec massa sapien faucibus et molestie ac. Id diam maecenas
        ultricies mi eget mauris. Nisi lacus sed viverra tellus. Arcu non
        sodales neque sodales ut etiam. Urna molestie at elementum eu.
        Risus at ultrices mi tempus imperdiet. Vulputate enim nulla aliquet
        porttitor lacus luctus accumsan. Eget arcu dictum varius duis at
        consectetur lorem donec. Malesuada nunc vel risus commodo. Sed
        egestas egestas fringilla phasellus faucibus scelerisque eleifend
        donec. Vel eros donec ac odio tempor orci dapibus. Ut morbi
        tincidunt augue interdum velit euismod in. Ipsum consequat nisl vel
        pretium. Id porta nibh venenatis cras sed felis eget. Non
        consectetur a erat nam at lectus urna. Nisl rhoncus mattis rhoncus
        urna neque viverra justo.
      </Text>

      <Headline tag='h5' size='h5'>
        Lorem ipsum dolor sit amet consectetur.
      </Headline>

      <Text>
        Mattis vulputate enim nulla aliquet porttitor lacus. Consectetur
        lorem donec massa sapien faucibus et molestie ac. Id diam maecenas
        ultricies mi eget mauris. Nisi lacus sed viverra tellus. Arcu non
        sodales neque sodales ut etiam. Urna molestie at elementum eu.
        Risus at ultrices mi tempus imperdiet. Vulputate enim nulla aliquet
        porttitor lacus luctus accumsan. Eget arcu dictum varius duis at
        consectetur lorem donec. Malesuada nunc vel risus commodo. Sed
        egestas egestas fringilla phasellus faucibus scelerisque eleifend
        donec. Vel eros donec ac odio tempor orci dapibus. Ut morbi
        tincidunt augue interdum velit euismod in. Ipsum consequat nisl vel
        pretium. Id porta nibh venenatis cras sed felis eget. Non
        consectetur a erat nam at lectus urna. Nisl rhoncus mattis rhoncus
        urna neque viverra justo.
      </Text>

      <Headline tag='h6' size='h6'>
        Lorem ipsum dolor sit.
      </Headline>

      <Text>
        Mattis vulputate enim nulla aliquet porttitor lacus. Consectetur
        lorem donec massa sapien faucibus et molestie ac. Id diam maecenas
        ultricies mi eget mauris. Nisi lacus sed viverra tellus. Arcu non
        sodales neque sodales ut etiam. Urna molestie at elementum eu.
        Risus at ultrices mi tempus imperdiet. Vulputate enim nulla aliquet
        porttitor lacus luctus accumsan. Eget arcu dictum varius duis at
        consectetur lorem donec. Malesuada nunc vel risus commodo. Sed
        egestas egestas fringilla phasellus faucibus scelerisque eleifend
        donec. Vel eros donec ac odio tempor orci dapibus. Ut morbi
        tincidunt augue interdum velit euismod in. Ipsum consequat nisl vel
        pretium. Id porta nibh venenatis cras sed felis eget. Non
        consectetur a erat nam at lectus urna. Nisl rhoncus mattis rhoncus
        urna neque viverra justo.
      </Text>
    </Section>
    <Section>
      <Headline size='h1'>Button component</Headline>

      <Row>
        <Button>This is a button without an Icon</Button>
      </Row>

      <Row>
        <Button size='l'>This is a big button without an Icon</Button>
      </Row>
    </Section>

    <Section>
      <Row>
        <Headline>Skill component</Headline>
      </Row>

      <Row cols={'fourCols'} classNames={['Components__skills-container']}>
        <Grid cols='auto-fit' gap={Space.m}>
          {skills.map(({ title, level, icon }: SkillType) => (
            <Skill key={title} title={title} level={level} icon={icon} />
          ))}
        </Grid>
      </Row>
    </Section>

    <Section>
      <Row>
        <Headline>Experience component</Headline>
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
