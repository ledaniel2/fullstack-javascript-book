function withData(WrappedComponent, dataSource) {
  class WithData extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: []
      };
    }

    componentDidMount() {
      // Fetch data and update state
      fetchData(dataSource).then(data => this.setState({ data }));
    }

    render() {
      // ... and renders the wrapped component with the fresh data!
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  }

  return WithData;
}
