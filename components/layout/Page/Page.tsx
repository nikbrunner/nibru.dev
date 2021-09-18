import React, { ReactNode } from "react";
import Head from "next/head";

import { Main } from "@components/layout/Main/Main";

import { IGenericProps } from "@typings/GenericProps";

import { cn } from "@lib/cn";

interface IProps extends IGenericProps {
  children: ReactNode;
  name: string;
  title?: string;
}

export const Page = ({ children, name, title }: IProps) => (
  <>
    <Head>
      <title>
        {title ? `nibru.dev — ${title}` : `nibru.dev — ${name}`}
      </title>

      {/* TODO Replace Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className={cn("Page", [name], {})}>
      <Main>{children}</Main>
    </div>
  </>
);
