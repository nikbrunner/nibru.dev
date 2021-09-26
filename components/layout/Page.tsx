import { ReactNode } from "react";
import styled from "@emotion/styled";
import Head from "next/head";

import { Nav } from "@components/layout/Nav";
import { Container } from "@components/layout/Container";

import { IGenericProps } from "@typings/GenericProps";
import { config } from "@config/config";
import { padding } from "@style/mixins/spacing";

interface IProps extends IGenericProps {
  children: ReactNode;
  title: string;
}

const SPage = styled.main`
  .content {
    ${padding.top.l}
  }
`;

export const Page = ({ children, title }: IProps): JSX.Element => (
  <>
    <Head>
      <title>{`${config.siteTitle} / ${title}`}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <SPage>
      <Nav title={config.siteTitle} />

      <div className="content">
        <Container>{children}</Container>
      </div>
    </SPage>
  </>
);
