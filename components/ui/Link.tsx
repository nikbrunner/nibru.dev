import { ReactNode } from "react";
import styled from "@emotion/styled";
import { FiLink2 } from "react-icons/fi";

import { IGenericProps } from "@typings/GenericProps";
import { margin } from "@theme/mixins/spacing";
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

  .icon {
    position: relative;
    top: 0.25rem;
    ${margin.left.xs};
  }
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
        <FiLink2 style={{ display: "inline" }} />
      )}
    </span>
  </SLink>
);
