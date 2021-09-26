import { ReactNode } from "react";
import styled from "@emotion/styled";

interface IProps {
  children: ReactNode;
}

const SBookHighlights = styled.ul`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  padding-left: 0;
`;

export const BookHighlights = ({ children }: IProps) => (
  <SBookHighlights>{children}</SBookHighlights>
);
