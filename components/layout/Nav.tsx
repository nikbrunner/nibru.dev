import { useContext } from "react";
import { css } from "@emotion/react";

import { NavLink } from "@components/ui/NavLink";

import { profile } from "@data/profile";
import { ThemeContext } from "@theme/ThemeProvider";
import { ETheme } from "@theme/themes";

export const Nav = (): JSX.Element => {
  const { setTheme } = useContext(ThemeContext);

  return (
    <nav>
      <h1>
        {profile.firstname} {profile.lastname}
      </h1>

      <button
        css={css`
          margin-right: 1rem;
        `}
        onClick={() => setTheme(ETheme.Light)}
      >
        Light
      </button>
      <button onClick={() => setTheme(ETheme.Dark)}>Dark</button>

      <div>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/books">Books</NavLink>
      </div>
    </nav>
  );
};
