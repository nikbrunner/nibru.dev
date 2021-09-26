import { useContext } from "react";
import styled from "@emotion/styled";
import { FiMoon, FiSun } from "react-icons/fi";

import { NavLink } from "@components/ui/NavLink";
import { Container } from "@components/layout/Container";

import { ThemeContext } from "@theme/ThemeProvider";
import { ETheme } from "@theme/themes";
import { mq } from "@style/config/media-queries";

interface IProps {
  title: string;
}

export const SNav = styled.nav`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  align-content: center;

  ${mq.m} {
    flex-flow: row nowrap;
    justify-content: space-between;
  }

  .title {
    margin: 0;
  }

  .controls {
    display: flex;
    gap: 1rem;
  }

  .theme-buttons {
    display: flex;
    gap: 1rem;
  }

  .nav-links {
    display: flex;
    gap: 1rem;
  }
`;

export const Nav = ({ title = "nibru.dev" }: IProps): JSX.Element => {
  const { setTheme } = useContext(ThemeContext);

  return (
    <Container>
      <SNav>
        <h1 className="title">{title}</h1>

        <div className="controls">
          <div className="theme-buttons">
            <button onClick={() => setTheme(ETheme.Light)}>
              <FiSun />
            </button>
            <button onClick={() => setTheme(ETheme.Dark)}>
              <FiMoon />
            </button>
          </div>

          <div className="nav-links">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/books">Books</NavLink>
          </div>
        </div>
      </SNav>
    </Container>
  );
};
