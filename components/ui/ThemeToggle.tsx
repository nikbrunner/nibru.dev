import { useContext } from "react";
import styled from "@emotion/styled";
import { FiMoon, FiSun } from "react-icons/fi";

import { ThemeContext } from "@theme/ThemeProvider";
import { ETheme } from "@theme/theme";
import { flex } from "@theme/mixins/layout";
import { text } from "@theme/mixins/text";
import { space } from "@theme/mixins/space";

const SThemeToggle = styled.div`
  ${flex({
    flexflow: "row nowrap",
    justifyContent: "flex-end",
    alignItems: "center",
    inline: true,
    gap: space.l
  })}
`;

const SButton = styled.button<{ isActive: boolean }>`
  ${({ isActive, theme }) =>
    isActive ? text.color.accent(theme) : text.color.primary(theme)};

  ${flex({
    flexflow: "row nowrap",
    justifyContent: "center",
    alignItems: "center"
  })}

  ${text.size.base}
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const ThemeToggle: React.FC = () => {
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
