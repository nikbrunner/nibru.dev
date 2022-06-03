import { ReactNode } from "react";

import Style from "./Highlight.style";

interface IProps {
  children: ReactNode;
  withUnderline?: boolean;
}

export const Highlight: React.FC<IProps> = ({
  children,
  withUnderline = true
}): JSX.Element => <Style withUnderline={withUnderline}>{children}</Style>;
