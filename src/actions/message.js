const NAME_SPACE = 'MESSAGE';


export const MESSAGE_ACTION = {
    ADD_MESSAGE_START: `${NAME_SPACE}/ADD_MESSAGE_START`,
    ADD_MESSAGE_SUCCESS: `${NAME_SPACE}/ADD_MESSAGE_SUCCESS`,
    ADD_MESSAGE_FAILURE: `${NAME_SPACE}/ADD_MESSAGE_FAILURE`,
    GET_MESSAGE_START: `${NAME_SPACE}/GET_MESSAGE_START`,
    GET_MESSAGE_SUCCESS: `${NAME_SPACE}/GET_MESSAGE_SUCCESS`,
    GET_MESSAGE_FAILURE: `${NAME_SPACE}/GET_MESSAGE_FAILURE`
}

export const addMessgaeActionCreator = payload => ({
    type: MESSAGE_ACTION.ADD_MESSAGE_START,
    payload
})

export const getMessageActionCreator = () => ({
    type: MESSAGE_ACTION.GET_MESSAGE_START
})
