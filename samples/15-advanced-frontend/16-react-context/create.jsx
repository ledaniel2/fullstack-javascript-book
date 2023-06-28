// Context creation
const ThemeContext = React.createContext('light');

class App extends React.Component {
  render() {
    return (
      // Provider
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}
