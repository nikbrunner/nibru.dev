import { ReactNode } from "react";

import Style from "./Paragraph.style";

interface IProps {
  children: ReactNode;
}

export const Paragraph: React.FC<IProps> = ({ children }): JSX.Element => (
  <Style>{children}</Style>
);
