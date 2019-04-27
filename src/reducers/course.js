
import update from 'immutability-helper'
import { COURSE_ACTION } from '../actions/course';
// type 0为管理员 1为普通用户
const DEFAULT_STATE = {
    data: [
        {title: 'test', startTimestamp: 1555838588, endTimestamp: undefined, content: "测试的呀"},
        {title: 'test', startTimestamp: 1555838588, endTimestamp: 1555838588, content: "测试的呀"},
        {title: 'test', startTimestamp: 1555838588, endTimestamp: 1555838588, content: "测试的呀"},
        {title: 'test', startTimestamp: 1555838588, endTimestamp: 1555838588, content: "测试的呀"}
    ],
    course: []
};

export default function reducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case COURSE_ACTION.GET_COURSE_SUCCESS:
            return update(state, {
                course: {
                    $set: action.payload
                }
            })
        default:
            return state;
    }
}