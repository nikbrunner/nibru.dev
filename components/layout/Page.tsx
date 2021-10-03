import { ReactNode } from "react";
import styled from "@emotion/styled";
import Head from "next/head";

import { Nav } from "@components/layout/Nav";
import { Container } from "@components/layout/Container";
import { Footer } from "@components/layout/Footer";

import { IGenericProps } from "@typings/GenericProps";
import { padding } from "@theme/mixins/spacing";
import { config } from "@config/config";

interface IProps extends IGenericProps {
  children: ReactNode;
  title: string;
}

const SPage = styled.main`
  label: Page;

  ${padding.top.xs};
  ${padding.bottom["5xl"]};

  .children {
    ${padding.y.l};
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

      <Container>
        <main className="children">{children}</main>
      </Container>

      <Footer />
    </SPage>
  </>
);
