import { ReactNode } from "react";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import styled from "@emotion/styled";

import { IGenericProps } from "@typings/GenericProps";
import { text } from "@theme/mixins/text";
import { transition } from "@theme/mixins/transition";

interface IProps extends IGenericProps {
  href: string;
  children: ReactNode;
}

const SNavLink = styled.a<{ isActive: boolean }>`
  ${({ theme, isActive }) =>
    isActive ? text.color.accent(theme) : text.color.primary(theme)}

  ${transition.fast("color")}

  cursor: pointer;

  &:hover {
    ${({ theme }) => text.color.accent(theme)}
  }
`;

export const NavLink: React.FC<IProps> = ({ href, children }): JSX.Element => {
  const router: NextRouter = useRouter();
  const isActive: boolean = router.pathname === href;

  return (
    <Link href={href} passHref={true}>
      <SNavLink isActive={isActive}>{children}</SNavLink>
    </Link>
  );
};
