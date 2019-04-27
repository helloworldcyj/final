import { takeLatest, select, put } from 'redux-saga/effects';
import { COURSE_ACTION } from '../actions/course';
import { courseDataSelector } from '../selector/course';


function* getCourse() {
    const course = yield select(courseDataSelector);
    yield put({
        type: COURSE_ACTION.GET_COURSE_SUCCESS,
        payload: course.data
    })
}

export default function* saga() {
    yield takeLatest(COURSE_ACTION.GET_COURSE_START, getCourse)
}