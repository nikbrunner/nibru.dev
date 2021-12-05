import { ReactNode } from "react";
import styled from "@emotion/styled";

import { mq } from "@theme/mixins/media-queries";
import { margin } from "@theme/mixins/spacing";

interface IProps {
  children: ReactNode;
}

const SContainer = styled.div`
  label: Container;
  max-width: 95vw;
  ${margin.x.center};

  ${mq.m} {
    max-width: 90vw;
  }

  ${mq.l} {
    max-width: 80vw;
  }

  ${mq.xl} {
    max-width: 75vw;
  }

  ${mq.xxl} {
    max-width: 65vw;
  }

  ${mq.xxxl} {
    max-width: 55vw;
  }
`;

export const Container: React.FC<IProps> = ({ children }) => (
  <SContainer>{children}</SContainer>
);