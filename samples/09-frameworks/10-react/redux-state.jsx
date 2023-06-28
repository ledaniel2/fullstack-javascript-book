import { createStore } from 'redux'

// This is a reducer, a pure function with (state, action) => state signature.
function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

let store = createStore(counter)
store.dispatch({ type: 'INCREMENT' })
