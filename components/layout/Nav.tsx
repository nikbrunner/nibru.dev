import styled from "@emotion/styled";

import { NavLink } from "@components/ui/NavLink";
import { ThemeToggle } from "@components/ui/ThemeToggle";
import { Container } from "@components/layout/Container";

import { mq } from "@style/config/media-queries";
import { margin } from "@style/mixins/spacing";
import { space } from "@style/config/space";
import { flex } from "@style/mixins/layout";
import { border } from "@style/mixins/border";
import { colors } from "@style/config/colors";

interface IProps {
  title: string;
}

export const SNav = styled.nav`
  ${flex({
    flexflow: "column nowrap",
    justifyContent: "center",
    alignContent: "center"
  })}
  ${margin.bottom.xl}

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

  .controls {
    ${flex({
      flexflow: "column nowrap",
      justifyContent: "center",
      alignItems: "center",
      gap: space.m
    })}
  }
`;

export const Nav = ({ title = "nibru.dev" }: IProps): JSX.Element => (
  <SNav>
    <Container>
      <h1 className="title">{title}</h1>

      <div className="nav-links">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/books">Books</NavLink>
      </div>

      <div className="theme-toggle">
        <ThemeToggle />
      </div>
    </Container>
  </SNav>
);
