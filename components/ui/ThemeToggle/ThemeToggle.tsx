import { useContext } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

import { ThemeContext } from "@theme/ThemeProvider";
import { ETheme } from "@theme/theme";

import * as Style from "./ThemeToggle.style";

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <Style.default>
      <Style.Button
        onClick={() => setTheme(ETheme.Light)}
        isActive={theme === ETheme.Light}
      >
        <FiSun />
      </Style.Button>

      <Style.Button
        onClick={() => setTheme(ETheme.Dark)}
        isActive={theme === ETheme.Dark}
      >
        <FiMoon />
      </Style.Button>
    </Style.default>
  );
};
