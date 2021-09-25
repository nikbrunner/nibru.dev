import styled from "@emotion/styled";

export const SBookCard = styled.div`
  label: BookCard;

  padding: 5rem;
  /* border-radius: 1rem; */
  background-color: ${({ theme }) => theme.bg_primary};
  border: 2px solid ${({ theme }) => theme.bg_secondary};
  box-shadow: 10px 10px ${({ theme }) => theme.bg_secondary};

  .cover {
    margin-bottom: 1rem;
  }

  .title {
    max-width: 10rem;
    text-align: center;
    color: ${({ theme }) => theme.fg_primary};
  }
`;
