import { takeLatest, select, put } from 'redux-saga/effects';
import { message } from 'antd';
import _ from 'lodash';
import { MESSAGE_ACTION } from '../actions/message';
import { messageDataSelector } from '../selector/message';


function* addMessage(action){
    message.success("添加留言成功");
    yield put({
        type: MESSAGE_ACTION.ADD_MESSAGE_SUCCESS,
        payload: action.payload
    })
}

function* getMessages() {
    // message.success("获取留言")
    const messages = yield select(messageDataSelector);

    yield put({
        type: MESSAGE_ACTION.GET_MESSAGE_SUCCESS,
        payload: messages
    })
}

export default function* saga() {
    yield takeLatest(MESSAGE_ACTION.ADD_MESSAGE_START, addMessage)
    yield takeLatest(MESSAGE_ACTION.GET_MESSAGE_START, getMessages)
}