import { takeLatest, select, put } from 'redux-saga/effects';
import { message } from 'antd';
import { COURSE_ACTION } from '../actions/course';
import { courseDataSelector } from '../selector/course';


function* getCourse() {
    const course = yield select(courseDataSelector);
    yield put({
        type: COURSE_ACTION.GET_COURSE_SUCCESS,
        payload: course.data
    })
}

function* updateCourse(action) {
    yield put({
        type: COURSE_ACTION.UPDATE_COURSE_SUCCESS,
        payload: action.payload
    })
    message.success("更改成功");
}

export default function* saga() {
    yield takeLatest(COURSE_ACTION.GET_COURSE_START, getCourse);
    yield takeLatest(COURSE_ACTION.UPDATE_COURSE_START, updateCourse);
}