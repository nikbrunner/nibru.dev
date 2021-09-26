import { useContext } from "react";
import styled from "@emotion/styled";
import { FiMoon, FiSun } from "react-icons/fi";

import { ThemeContext } from "@theme/ThemeProvider";
import { ETheme } from "@theme/themes";
import { fg, flex } from "@style/config/mixins";

const SThemeToggle = styled.div`
  ${flex("row nowrap", "center center")}
`;

const SButton = styled.button<{ isActive: boolean }>`
  ${({ isActive, theme }) =>
    isActive ? fg.accent(theme) : fg.primary(theme)};

  ${flex("row nowrap", "center center")};

  background-color: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

export const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <SThemeToggle>
      <SButton
        onClick={() => setTheme(ETheme.Light)}
        isActive={theme === ETheme.Light}
      >
        <FiSun />
      </SButton>

      <SButton
        onClick={() => setTheme(ETheme.Dark)}
        isActive={theme === ETheme.Dark}
      >
        <FiMoon />
      </SButton>
    </SThemeToggle>
  );
};
