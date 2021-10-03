import styled from "@emotion/styled";

import { NavLink } from "@components/ui/NavLink";
import { Container } from "@components/layout/Container";

import { margin } from "@theme/mixins/spacing";
import { space } from "@theme/mixins/space";
import { flex } from "@theme/mixins/layout";

interface IProps {
  title: string;
}

export const SNav = styled.nav`
  .title-bar {
    ${flex({
      flexflow: "row nowrap",
      justifyContent: "space-between"
    })}
  }

  .title {
    ${margin.top.zero}
    ${margin.bottom.s}
  }

  .nav-links {
    ${flex({
      flexflow: "row nowrap",
      gap: space.m
    })}
    ${margin.bottom.s}
  }
`;

export const Nav = ({ title = "nibru.dev" }: IProps): JSX.Element => (
  <Container>
    <SNav>
      <div className="title-bar">
        <h1 className="title">{title}</h1>
      </div>

      <div className="nav-links">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/books">Books</NavLink>
      </div>
    </SNav>
  </Container>
);
