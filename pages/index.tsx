import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../styles/Home.module.scss';

import personalData from '../data/personalData';
import skills from '../data/skills';

const Home = () => {
  const { firstname, lastname, email } = personalData;
  return (
    <div className={styles.container}>
      <Head>
        <title>nibru.dev</title>

        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
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
