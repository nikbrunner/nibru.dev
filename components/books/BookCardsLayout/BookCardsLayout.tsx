import { ReactNode } from "react";

import Style from "./BookCardsLayout.style";

interface IProps {
  children: ReactNode;
}

export const BookCardsLayout: React.FC<IProps> = ({ children }): JSX.Element => (
  <Style>{children}</Style>
);
