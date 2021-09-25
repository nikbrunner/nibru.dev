import React, { ReactNode } from "react";
import Head from "next/head";

import { Main } from "@components/layout/Main";
import { Nav } from "@components/layout/Nav";

import { IGenericProps } from "@typings/GenericProps";

import { cn } from "@lib/cn";

const componentName: string = "Page";

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

    <div
      className={cn({
        block: componentName,
        utils: ["container", "mx-auto"]
      })}
    >
      <Nav />

      <div className={cn({ block: componentName, element: "children" })}>
        <Main>{children}</Main>
      </div>
    </div>
  </>
);
