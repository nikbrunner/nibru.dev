import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

        <ul>
          {skills.map(({ title, level, lib, icon }) => (
            <li key={title}>
              <FontAwesomeIcon
                icon={[lib, icon]}
                style={{ width: '2em' }}
              />
              <progress id={title} max='100' value={level}>
                {' '}
                {level}%{' '}
              </progress>
              {title}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Home;
