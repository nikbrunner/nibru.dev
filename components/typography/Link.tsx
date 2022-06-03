import { ReactNode } from "react";
import styled from "@emotion/styled";
import { FiLink2 } from "react-icons/fi";

import { IGenericProps } from "@typings/GenericProps";
import { text } from "@theme/mixins/text";

interface IProps extends IGenericProps {
  children: ReactNode;
  href: string;
  type: "internal" | "external";
  hideIcon?: boolean;
  openInNewTab?: boolean;
}

const SLink = styled.a`
  ${({ theme }) => text.color.accent(theme)};

  font-weight: 900;

  .icon {
    position: relative;
    top: 0.15rem;
  }
`;

export const Link: React.FC<IProps> = ({
  children,
  href,
  type,
  openInNewTab = false,
  hideIcon = false
}) => (
  <SLink
    href={href}
    target={type === "external" || openInNewTab ? "_blank" : "_self"}
  >
    {children}&nbsp;
    <span className="icon">
      {type === "external" && !hideIcon && <FiLink2 style={{ display: "inline" }} />}
    </span>
  </SLink>
);
