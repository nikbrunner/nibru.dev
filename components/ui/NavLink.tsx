import { ReactNode } from "react";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";

import { IGenericProps } from "@typings/GenericProps";

import styled from "@emotion/styled";
import { fg } from "@config/mixins";

interface IProps extends IGenericProps {
  href: string;
  children: ReactNode;
}

const SNavLink = styled.a<{ isActive: boolean }>`
  ${({ theme, isActive }) =>
    isActive ? fg.accent(theme) : fg.primary(theme)}

  cursor: pointer;
`;

export const NavLink = ({ href, children }: IProps): JSX.Element => {
  const router: NextRouter = useRouter();
  const isActive: boolean = router.pathname === href;

  return (
    <Link href={href}>
      <SNavLink isActive={isActive}>{children}</SNavLink>
    </Link>
  );
};
