import { connect } from 'react-redux';
import { increment } from './actions';

const mapStateToProps = state => ({
  counter: state.counter,
});

const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(increment()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
