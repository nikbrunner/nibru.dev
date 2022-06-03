import { ReactNode } from "react";

import Style from "./Shoutout.style";

interface IProps {
  children: ReactNode;
  label: string;
  withBorder?: boolean;
}

export const Shoutout: React.FC<IProps> = ({
  children,
  label,
  withBorder = true
}): JSX.Element => {
  return (
    <Style withBorder={withBorder}>
      <span className="label">{label}</span>
      {children}
    </Style>
  );
};
