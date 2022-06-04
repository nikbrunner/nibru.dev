import { ReactNode } from "react";

import Style from "./BookHighlightsLayout.style";

interface IProps {
  children: ReactNode;
}

export const BookHighlightsLayout: React.FC<IProps> = ({ children }) => (
  <Style>{children}</Style>
);
