import { ReactNode } from "react";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import styled from "@emotion/styled";

import { IGenericProps } from "@typings/GenericProps";
import { transition } from "@theme/mixins/transition";
import { border } from "@theme/mixins/border";

interface IProps extends IGenericProps {
  href: string;
  children: ReactNode;
}

export const NavLink: React.FC<IProps> = ({ href, children }): JSX.Element => {
  const router: NextRouter = useRouter();
  const isActive: boolean = router.pathname === href;

  return (
    <Link href={href} passHref={true}>
      <Style isActive={isActive}>{children}</Style>
    </Link>
  );
};

const Style = styled.a<{ isActive: boolean }>`
  ${transition.fast("color")}

  ${({ theme, isActive }) =>
    isActive
      ? border.bottom.base(theme.fg.primary)
      : border.bottom.base(theme.bg.primary)};

  cursor: pointer;

  &:hover {
    ${({ theme }) => border.bottom.base(theme.fg.primary)}
  }
`;
