import { ReactNode } from "react";
import styled from "@emotion/styled";
import Head from "next/head";

import { Nav } from "@components/layout/Nav";
import { Container } from "@components/layout/Container";

import { IGenericProps } from "@typings/GenericProps";

interface IProps extends IGenericProps {
  children: ReactNode;
  title: string;
}

const SPage = styled.main`
  border: 1px solid red;
`;

export const Page = ({ children, title }: IProps): JSX.Element => {
  const moddedTitle = `nibru.dev / ${title}`;

  return (
    <SPage>
      <Head>
        <title>{moddedTitle}</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav title="nibru.dev" />

      <div className="content">
        <Container>{children}</Container>
      </div>
    </SPage>
  );
};
