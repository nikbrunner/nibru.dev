import React, { useContext } from 'react';
import Head from 'next/head';

import Main from '../../components/Main/Main';
import Nav from '../../components/Nav/Nav';

import { GenericProps } from '../../types/GenericProps';

import { ThemeContext } from '../../context/ThemeContext';

import { cn } from '../../lib/cn';
interface Props extends GenericProps {
  name: string;
  title?: string;
}

const Page = ({ children, name, title }: Props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Head>
        <title>{title ? `nibru.dev:${title}` : `nibru.dev:${name}`}</title>

        {/* TODO REplace Favicon */}
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Nav />

      <div className={cn('Page', [name], { [theme]: theme })}>
        <Main>{children}</Main>
      </div>
    </>
  );
};

export default Page;
