import { ReactNode } from "react";
import styled from "@emotion/styled";

import { mq } from "@theme/mixins/media-queries";
import { margin } from "@theme/mixins/spacing";

interface IProps {
  children: ReactNode;
}

const SContainer = styled.div`
  label: Container;
  max-width: 90vw;

  ${margin.x.center};

  ${mq.m} {
    max-width: 75vw;
  }

  ${mq.l} {
    max-width: 65vw;
  }

  ${mq.xl} {
    max-width: 55vw;
  }

  ${mq.xxl} {
    max-width: 45vw;
  }

  ${mq.xxxl} {
    max-width: 35vw;
  }

  ${mq["4xl"]} {
    max-width: 25vw;
  }
`;

export const Container: React.FC<IProps> = ({ children }) => (
  <SContainer>{children}</SContainer>
);
