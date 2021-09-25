import styled from "@emotion/styled";

import { border } from "./mixins";

export const SBookCard = styled.div`
  label: BookCard;

  padding: 3rem;
  ${({ theme }) => border.thin(theme.bg.ternary)}
  background-color: ${({ theme }) => theme.bg.secondary};
  color: ${({ theme }) => theme.fg.primary};

  .cover {
    margin-bottom: 1rem;
  }

  .title {
    max-width: 10rem;
  }
`;
