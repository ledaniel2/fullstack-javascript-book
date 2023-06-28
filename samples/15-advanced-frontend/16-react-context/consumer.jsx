// in another file
function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  // Consumer
  return (
    <ThemeContext.Consumer>
      {theme => <Button theme={theme} />}
    </ThemeContext.Consumer>
  );
}
