import { ReactNode } from "react";
import styled from "@emotion/styled";
import { FiLink } from "react-icons/fi";

import { IGenericProps } from "@typings/GenericProps";

interface IProps extends IGenericProps {
  children: ReactNode;
  href: string;
  type: "internal" | "external";
  hideIcon?: boolean;
  openInNewTab?: boolean;
}

const SLink = styled.a`
  text-decoration: underline;
`;

export const Link = ({
  children,
  href,
  type,
  openInNewTab = false,
  hideIcon = false
}: IProps) => (
  <SLink
    href={href}
    target={type === "external" || openInNewTab ? "_blank" : "_self"}
  >
    {children}

    <span className="icon">
      {type === "external" && !hideIcon && (
        <FiLink style={{ display: "inline" }} />
      )}
    </span>
  </SLink>
);
