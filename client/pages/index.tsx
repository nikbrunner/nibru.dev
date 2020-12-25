import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from 'react-query';

import styles from '../styles/Home.module.scss';

const fetchNibru = async () =>
  (await fetch(`${process.env.NEXT_PUBLIC_API_URI}/nibru`)).json();

const Home = () => {
  const { isLoading, error, data } = useQuery('nibru', fetchNibru);

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ';

  const { firstName, lastName, skills, email } = data;

  return (
    <div className={styles.container}>
      <Head>
        <title>nibru.dev</title>

        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1>
          Hello, Im {firstName} {lastName}
        </h1>
        <h2>{email}</h2>
        <ul>
          {skills.map(({ id, title, level, lib, icon }) => (
            <li key={id}>
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
