import { ReactNode } from "react";
import styled from "@emotion/styled";

import { IGenericProps } from "@typings/GenericProps";
import { css } from "@emotion/react";
import { space } from "@theme/mixins/space";
import { borderWidth } from "@theme/mixins/border";

interface IProps extends IGenericProps {
  children: ReactNode;
  underline?: boolean;
}

const SHighlight = styled.span<IProps>`
  label: Highlight;

  ${props => props.underline && underline(props.theme.bg.secondary)}
`;

const underline = (color: string) => css`
  text-decoration: underline;
  text-decoration-thickness: ${borderWidth["3xl"]};
  text-decoration-color: ${color};
  text-underline-offset: ${space.xs};
`;

export const Highlight: React.FC<IProps> = ({
  children,
  underline = true
}): JSX.Element => <SHighlight underline={underline}>{children}</SHighlight>;
