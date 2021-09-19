import React, { ReactNode } from "react";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";

import { IGenericProps } from "@typings/GenericProps";

import { cn } from "@lib/cn";

const componentName: string = "Page";

interface IProps extends IGenericProps {
  href: string;
  children: ReactNode;
}

export const NavLink = ({ href, children }: IProps): JSX.Element => {
  const router: NextRouter = useRouter();
  const isActive: boolean = router.pathname === href;

  return (
    <Link href={href}>
      <a
        className={cn({
          block: componentName,
          modifiers: {
            isActive
          }
        })}
      >
        {children}
      </a>
    </Link>
  );
};
