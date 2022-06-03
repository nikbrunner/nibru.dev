import React, { ReactNode } from "react";
import styled from "@emotion/styled";

import { IGenericProps } from "@typings/GenericProps";

interface IProps extends IGenericProps {
  children: ReactNode;
}

const SParagraph = styled.p<IProps>`
  label: Paragraph;
  padding-bottom: 0.25rem;
`;

export const Paragraph: React.FC<IProps> = ({ children }): JSX.Element => (
  <SParagraph>{children}</SParagraph>
);
