import styled from "@emotion/styled";

import { NavLink } from "@components/ui/NavLink";
import { ThemeToggle } from "@components/ui/ThemeToggle";
import { Container } from "@components/layout/Container";

import { mq } from "@style/config/media-queries";
import { margin } from "@style/mixins/spacing";
import { space } from "@style/config/space";
import { flex } from "@style/mixins/layout";

interface IProps {
  title: string;
}

export const SNav = styled.nav`
  ${flex({
    flexflow: "column nowrap",
    justifyContent: "center",
    alignContent: "center"
  })}

  ${mq.m} {
    ${flex({
      flexflow: "row nowrap",
      justifyContent: "space-between",
      alignContent: "center"
    })}
  }

  .title {
    ${margin.zero}
  }

  .controls,
  .theme-buttons,
  .nav-links {
    ${flex({
      justifyContent: "center",
      alignItems: "center",
      gap: space.m
    })}
  }
`;

export const Nav = ({ title = "nibru.dev" }: IProps): JSX.Element => (
  <Container>
    <SNav>
      <h1 className="title">{title}</h1>

      <div className="controls">
        <ThemeToggle />

        <div className="nav-links">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/books">Books</NavLink>
        </div>
      </div>
    </SNav>
  </Container>
);
