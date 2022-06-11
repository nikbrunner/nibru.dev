import { ReactNode } from "react";
import styled from "@emotion/styled";
import Head from "next/head";

import { Nav } from "@components/layout/Nav";
import { Container } from "@components/layout/Container";

import { IGenericProps } from "@typings/GenericProps";
import { padding } from "@theme/mixins/spacing";
import { config } from "@config/config";
import { Footer } from "./Footer/Footer";

interface IProps extends IGenericProps {
  children: ReactNode;
  title: string;
}

const SPage = styled.main`
  label: Page;

  ${padding.y["3xl"]}
  min-height: 100%;
`;

export const Page: React.FC<IProps> = ({ children, title }): JSX.Element => (
  <>
    <Head>
      <title>{`${config.siteTitle} / ${title}`}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <SPage>
      <Nav title={config.siteTitle} />

      <Container>{children}</Container>

      <Footer />
    </SPage>
  </>
);
