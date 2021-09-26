import { ReactNode } from "react";
import styled from "@emotion/styled";

import { IGenericProps } from "@typings/GenericProps";

interface IProps extends IGenericProps {
  children: ReactNode;
}

export const SBooksLayout = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
`;

export const BooksLayout = ({ children }: IProps): JSX.Element => (
  <SBooksLayout>{children}</SBooksLayout>
);
