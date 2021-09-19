import React, { ReactNode } from "react";
import { FiLink } from "react-icons/fi";

import { IGenericProps } from "@typings/GenericProps";

import { cn } from "@lib/cn";

const componentName: string = "Link";

interface IProps extends IGenericProps {
  children: ReactNode;
  href: string;
  type: "internal" | "external";
  hideIcon?: boolean;
  openInNewTab?: boolean;
}

export const Link = ({
  children,
  href,
  type,
  openInNewTab = false,
  hideIcon = false
}: IProps) => (
  <a
    className={cn({
      block: componentName
    })}
    href={href}
    target={type === "external" || openInNewTab ? "_blank" : "_self"}
  >
    {children}

    <span
      className={cn({
        block: componentName,
        element: "icon"
      })}
    >
      {type === "external" && !hideIcon && (
        <FiLink style={{ display: "inline" }} />
      )}
    </span>
  </a>
);
