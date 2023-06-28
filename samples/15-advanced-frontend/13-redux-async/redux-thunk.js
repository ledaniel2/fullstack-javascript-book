// Async action handled by Redux Thunk
const asyncIncrement = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  };
};
