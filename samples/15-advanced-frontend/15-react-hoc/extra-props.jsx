function withExtraPropAdded(Component) {
  return (props) => {
    return <Component extraProp="foo" {...props} />;
  };
}
