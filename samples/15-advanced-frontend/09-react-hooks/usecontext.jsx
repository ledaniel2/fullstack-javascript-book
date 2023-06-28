import React, { useContext } from 'react';
const ThemeContext = React.createContext('light');

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button theme={theme}>I'm styled by the theme context!</button>;
}
