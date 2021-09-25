import React, { ReactNode } from "react";

import { IGenericProps } from "@typings/GenericProps";
import { SBooksLayout } from "@styles/BookLayout.style";

interface IProps extends IGenericProps {
  children: ReactNode;
}

export const BooksLayout = ({ children }: IProps): JSX.Element => (
  <SBooksLayout>{children}</SBooksLayout>
);