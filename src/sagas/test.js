import { takeLatest, delay, put } from 'redux-saga/effects';


function* addCount() {
    yield delay(1000);

    yield put({
        type: 'sagaadd',
        payload: 10
    });
}


export default function* saga() {
    yield takeLatest('TEST_ADD', addCount);
}