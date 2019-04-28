import { takeLatest, select, put } from 'redux-saga/effects';
import { message } from 'antd';
import _ from 'lodash';
import { USER_ACTION } from '../actions/user';
import { userListSelector } from '../selector/user';

function* signIn(action) {
    const { userName, password } = action.payload;
    // 这里本应进行后端通信 外加try catch
    const users = yield select(userListSelector);
    const user = _.find(users, user => user.userName === userName);
    if(user) {
        if(user.password === password) {
            message.success("登录成功!");
            yield put({
                type: USER_ACTION.SIGN_IN_SUCCESS,
                payload: user
            });
        }else {
            message.error("密码错误，登录失败!");
            yield put({
                type: USER_ACTION.SIGN_IN_FAILURE
            });
        }
    }else {
        message.error("用户名错误，查无此用户!");
        yield put({
            type: USER_ACTION.SIGN_IN_FAILURE
        });
    }
}

function* signUp(action) {
    yield put({
        type: USER_ACTION.SIGN_UP_SUCCESS,
        payload: action.payload
    });
    message.success("注册成功!");
}

function* getUserList() {
    // message.success('')
}

function* deleteUser(action) {
    message.success('删除用户成功');
    yield put({
        type: USER_ACTION.DELETE_USER_SUCCESS,
        payload: action.payload
    })
}

export default function* saga() {
    yield takeLatest(USER_ACTION.SIGN_IN_START, signIn);
    yield takeLatest(USER_ACTION.SIGN_UP_START, signUp);
    yield takeLatest(USER_ACTION.GET_USER_LIST_START, getUserList);
    yield takeLatest(USER_ACTION.DELETE_USER_START, deleteUser);
}