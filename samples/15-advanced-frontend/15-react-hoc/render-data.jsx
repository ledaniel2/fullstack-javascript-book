class DataProvider extends React.Component {
  state = { data: 'World' };

  // Fetch data here in a real app

  render() {
    return this.props.render(this.state);
  }
}
