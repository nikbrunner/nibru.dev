import React from 'react';
import Head from 'next/head';

import Main from '../../components/Main/Main';
import Nav from '../../components/Nav/Nav';

import { GenericProps } from '../../types/GenericProps';

import { cn } from '../../lib/cn';

interface Props extends GenericProps {
  name: string;
  title?: string;
}

const Page = ({ children, name, title }: Props) => (
  <Head>
    <Head>
      <title>{title ? `nibru.dev:${title}` : `nibru.dev:${name}`}</title>

      {/* TODO REplace Favicon */}
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Nav />

    <div className={cn('Page', [name], {})}>
      <Main>{children}</Main>
    </div>
  </Head>
);

export default Page;
