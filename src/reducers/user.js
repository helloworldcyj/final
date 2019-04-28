import { USER_ACTION } from "../actions/user";
import update from 'immutability-helper'
import _ from 'lodash';
// type 0为管理员 1为普通用户
const DEFAULT_STATE = {
    userList: [
        {
            type: 0,
            email: "webchen18@163.com",
            userName: "BigPotato",
            password: "chenyj",
            phoneNumber: "18621607062",
            introduction: "前端开发者"
        },
        {
            type: 1,
            email: "test@163.com",
            userName: "test",
            password: "test",
            phoneNumber: "13277991420",
            introduction: "前端开发者"
        }
    ],
    signInUser: undefined,
    signInModalVisible: false,
    signUpModalVisible: false
};

export default function reducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case USER_ACTION.SHOW_SIGN_UP_MODAL:
            return update(state, {
                signUpModalVisible: {
                    $set: true
                }
            });
        case USER_ACTION.CLOSE_SIGN_UP_MODAL: 
            return update(state, {
                signUpModalVisible: {
                    $set: false
                }
            });
        case USER_ACTION.SIGN_UP_SUCCESS:
            return update(state, {
                signUpModalVisible: {
                    $set: false
                },
                userList: {
                    $push: [{
                        ...action.payload,
                        type: 1
                    }]
                }
            });
        case USER_ACTION.SHOW_SIGN_IN_MODAL: 
            return update(state, {
                signInModalVisible: {
                    $set: true
                }
            })
        case USER_ACTION.CLOSE_SIGN_IN_MODAL:
            return update(state, {
                signInModalVisible: {
                    $set: false
                }
            })
        case USER_ACTION.SIGN_IN_SUCCESS:
            return {
                ...state,
                signInUser: action.payload,
                signInModalVisible: false
            }
        case USER_ACTION.LOG_OUT:
            return {
                ...state,
                signInUser: undefined
            }
        case USER_ACTION.DELETE_USER_SUCCESS:
            return {
                ...state,
                userList: _.filter(state.userList, user => user.email !== action.payload.email)
            }
        default:
            return state;
    }
}