import { ReactNode } from "react";
import styled from "@emotion/styled";

import { IGenericProps } from "@typings/GenericProps";

import { space } from "@theme/mixins/space";

interface IProps extends IGenericProps {
  children: ReactNode;
}

const SBookCardsLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: ${space.xxl};
`;

export const BookCardsLayout: React.FC<IProps> = ({
  children
}): JSX.Element => <SBookCardsLayout>{children}</SBookCardsLayout>;
