import { fork } from 'redux-saga/effects';
import testFlow from './test';

export default function* rootSaga() {
    yield fork(testFlow);
}