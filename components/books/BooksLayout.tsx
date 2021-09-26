import { ReactNode } from "react";
import styled from "@emotion/styled";

import { IGenericProps } from "@typings/GenericProps";

import { space } from "@style/config/space";

interface IProps extends IGenericProps {
  children: ReactNode;
}

const SBooksLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: ${space.xxl};
`;

export const BooksLayout = ({ children }: IProps): JSX.Element => (
  <SBooksLayout>{children}</SBooksLayout>
);
