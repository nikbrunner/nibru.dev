import { ReactNode } from "react";

import Style from "./Button.style";

interface IProps {
  children: ReactNode;
  size?: "m" | "l";
  onClick?: () => void;
}

export const Button: React.FC<IProps> = ({
  size = "m",
  children,
  onClick
}): JSX.Element => <Style onClick={onClick}>{children}</Style>;
