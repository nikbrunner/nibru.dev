import React, { ReactNode } from "react";
import styled from "@emotion/styled";

import { IGenericProps } from "@typings/GenericProps";
import { css } from "@emotion/react";
import { space } from "@theme/mixins/space";
import { border, borderWidth } from "@mixins/border";

interface IProps extends IGenericProps {
  children: ReactNode;
  emphasis?: boolean;
}

const SParagraph = styled.p<IProps>`
  label: Paragraph;
  padding-bottom: 0.25rem;

  ${props => props.emphasis && emphasis(props.theme.fg.ternary)}
`;

const emphasis = (color: string) => css`
  padding: ${space.xl};
  border: ${borderWidth.base} solid ${color};
  ${border.radius.l};
`;

export const Paragraph: React.FC<IProps> = ({ children, emphasis }): JSX.Element => (
  <SParagraph emphasis={emphasis}>{children}</SParagraph>
);
