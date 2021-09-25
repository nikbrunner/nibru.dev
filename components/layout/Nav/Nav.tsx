import { useContext } from "react";
import { css } from "@emotion/react";

import { NavLink } from "@components/ui/NavLink/NavLink";

import { ThemeContext } from "@theme/ThemeProvider";
import { ETheme } from "@theme/themes";

import { SNav } from "@components/layout/Nav/Nav.style";

import { profile } from "@data/profile";

export const Nav = (): JSX.Element => {
  const { setTheme } = useContext(ThemeContext);

  return (
    <SNav>
      <h1 className="title">
        {profile.firstname} {profile.lastname}
      </h1>

      <div className="controls">
        <div className="theme-buttons">
          <button onClick={() => setTheme(ETheme.Light)}>Light</button>
          <button onClick={() => setTheme(ETheme.Dark)}>Dark</button>
        </div>

        <div className="nav-links">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/books">Books</NavLink>
        </div>
      </div>
    </SNav>
  );
};
