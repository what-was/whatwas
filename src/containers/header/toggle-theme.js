import React, { useEffect, useState } from 'react';
import { ToggleTheme } from '../../components';

import { BiMoon, BiSun } from 'react-icons/bi';

export const ToggleThemeContainer = (props) => {
  const [theme, setTheme] = useState('light');

  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === 'light' ? setMode('dark') : setMode('light');
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);

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
