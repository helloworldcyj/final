import { fork } from 'redux-saga/effects';
import userSaga from './user';
import articleSaga from './article';
import courseSaga  from './course';

export default function* rootSaga() {
    yield fork(userSaga);
    yield fork(articleSaga);
    yield fork(courseSaga);
}