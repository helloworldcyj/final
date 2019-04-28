import update from 'immutability-helper';
import { MESSAGE_ACTION } from '../actions/message';

// type 0为管理员 1为普通用户
const DEFAULT_STATE = {
    data: [
        {
            id: 1,
            email: "webchen18@163.com",
            userName: "BigPotato",
            timestamp: 1539137410,
            content: "留言一"
        },
        {
            id: 2,
            email: "webchen18@163.com",
            userName: "BigPotato",
            timestamp: 1539137410,
            content: "留言二"
        }
    ],
    messages: []
};

export default function reducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case MESSAGE_ACTION.GET_MESSAGE_SUCCESS:
            return {
                ...state,
                messages: action.payload
            }
        case MESSAGE_ACTION.ADD_MESSAGE_SUCCESS:
            return {
                ...state,
                data: [
                    ...state.data,
                    {
                        id: state.data.length,
                        ...action.payload
                    }
                ]
            }
        default:
            return state;
    }
}