import styled from "@emotion/styled";

import { mq } from "@config/media-queries";

export const SNav = styled.nav`
  label: Nav;

  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  align-content: center;

  ${mq.m} {
    flex-flow: row nowrap;
    justify-content: space-between;
  }

  .title {
    margin: 0;
  }

  .controls {
    display: flex;
    gap: 1rem;
  }

  .theme-buttons {
    display: flex;
    gap: 1rem;
  }

  .nav-links {
    display: flex;
    gap: 1rem;
  }
`;
