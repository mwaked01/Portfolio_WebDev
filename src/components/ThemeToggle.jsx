import React from 'react';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import '../styles/ThemeToggle.scss';

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {isDarkMode ? <Brightness7 /> : <Brightness4 />}
    </button>
  );
};

export default ThemeToggle;

