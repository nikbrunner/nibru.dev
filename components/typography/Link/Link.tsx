import { ReactNode } from "react";
import { FiLink2 } from "react-icons/fi";

import Style from "./Link.style";

interface IProps {
  children: ReactNode;
  href: string;
  type: "internal" | "external";
  hideIcon?: boolean;
  openInNewTab?: boolean;
}

export const Link: React.FC<IProps> = ({
  children,
  href,
  type,
  openInNewTab = false,
  hideIcon = false
}): JSX.Element => (
  <Style
    href={href}
    target={type === "external" || openInNewTab ? "_blank" : "_self"}
  >
    {children}&nbsp;
    <span className="icon">
      {type === "external" && !hideIcon && <FiLink2 style={{ display: "inline" }} />}
    </span>
  </Style>
);
