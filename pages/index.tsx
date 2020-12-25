import Head from 'next/head';

import Skill from '../components/Skill';

import personalData from '../data/personalData';
import skills from '../data/skills';

import { cn } from '../lib/cn';

const Home = () => {
  const { firstname, lastname, email } = personalData;

  return (
    <div className={cn('Home')}>
      <Head>
        <title>nibru.dev</title>

        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>
          Hello, Im {firstname} {lastname}
        </h1>

        <h2>{email}</h2>

        <div>
          {skills.map(({ title, level, lib, icon }) => (
            <Skill
              key={title}
              title={title}
              level={level}
              lib={lib}
              icon={icon}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
