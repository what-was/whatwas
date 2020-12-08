import React from 'react';
import { ToggleTheme } from '../../components';
import { useThemeModeValue } from '../../context';
import { BiMoon, BiSun } from 'react-icons/bi';

export const ToggleThemeContainer = (props) => {
  const { theme, setTheme } = useThemeModeValue();

  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === 'light' ? setMode('dark') : setMode('light');
  };

  if (theme === 'light') {
    return (
      <ToggleTheme>
        <ToggleTheme.Button onClick={() => themeToggler()}>
          <BiMoon />
        </ToggleTheme.Button>
      </ToggleTheme>
    );
  } else {
    return (
      <ToggleTheme>
        <ToggleTheme.Button onClick={() => themeToggler()}>
          <BiSun />
        </ToggleTheme.Button>
      </ToggleTheme>
    );
  }
};
