// Async action handled by Redux Saga
import { call, put, takeEvery } from 'redux-saga/effects';

function* asyncIncrementSaga() {
  yield call(delay, 1000);
  yield put({ type: 'INCREMENT' });
}

export default function* rootSaga() {
  yield takeEvery('ASYNC_INCREMENT', asyncIncrementSaga);
}
