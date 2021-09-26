import { ReactNode } from "react";
import Head from "next/head";

import { Nav } from "@components/layout/Nav/Nav";
import { SContainer } from "@components/layout/Container/Container.style";

import { IGenericProps } from "@typings/GenericProps";

interface IProps extends IGenericProps {
  children: ReactNode;
  name: string;
  title?: string;
}

export const Page = ({ children, name, title }: IProps): JSX.Element => (
  <>
    <Head>
      <title>
        {title ? `nibru.dev — ${title}` : `nibru.dev — ${name}`}
      </title>

      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <div className="content">
      <SContainer>{children}</SContainer>
    </div>
  </>
);
