import { ReactNode } from "react";
import styled from "@emotion/styled";

import { mq } from "@style/config/media-queries";

interface IProps {
  children: ReactNode;
}

const SContainer = styled.div`
  max-width: 100vw;
  margin: 0 auto;

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

export const Container = ({ children }: IProps) => (
  <SContainer>{children}</SContainer>
);
