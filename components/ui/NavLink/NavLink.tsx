import { ReactNode } from "react";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";

import Style from "./NavLink.style"


interface IProps {
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
