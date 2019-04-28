const NAME_SPACE = "USER";

export const USER_ACTION = {
    SHOW_SIGN_IN_MODAL: `${NAME_SPACE}/SHOW_SIGN_IN_MODAL`,
    CLOSE_SIGN_IN_MODAL: `${NAME_SPACE}/CLOSE_SIGN_IN_MODAL`,
    SHOW_SIGN_UP_MODAL: `${NAME_SPACE}/SHOW_SIGN_UP_MODAL`,
    CLOSE_SIGN_UP_MODAL: `${NAME_SPACE}/CLOSE_SIGN_UP_MODAL`,
    SIGN_IN_START: `${NAME_SPACE}/SIGN_IN_START`,
    SIGN_IN_SUCCESS: `${NAME_SPACE}/SIGN_IN_SUCCESS`,
    SIGN_IN_FAILURE: `${NAME_SPACE}/SIGN_IN_FAILURE`,
    SIGN_UP_START: `${NAME_SPACE}/SIGN_UP_START`,
    SIGN_UP_SUCCESS: `${NAME_SPACE}/SIGN_UP_SUCCESS`,
    SIGN_UP_FAILURE: `${NAME_SPACE}/SIGN_UP_FAILURE`,
    LOG_OUT: `${NAME_SPACE}/LOG_OUT`,
    GET_USER_LIST_START: `${NAME_SPACE}/GET_USER_LIST_START`,
    GET_USER_LIST_SUCCESS: `${NAME_SPACE}/GET_USER_LIST_SUCCESS`,
    GET_USER_LIST_FAILURE: `${NAME_SPACE}/GET_USER_LIST_FAILURE`,
    DELETE_USER_START: `${NAME_SPACE}/DELETE_USER_START`,
    DELETE_USER_SUCCESS: `${NAME_SPACE}/DELETE_USER_SUCCESS`,
    DELETE_USER_FAILURE: `${NAME_SPACE}/DELETE_USER_FAILURE`
};

export const signInActionCreator = (payload) => ({
    type: USER_ACTION.SIGN_IN_START,
    payload
});

export const showSignInModalActionCreator = () => ({type: USER_ACTION.SHOW_SIGN_IN_MODAL});

export const closeSignInModalActionCreator = () => ({type: USER_ACTION.CLOSE_SIGN_IN_MODAL});

export const showSignUpModalActionCreator = () => ({type: USER_ACTION.SHOW_SIGN_UP_MODAL});

export const closeSignUpModalActionCreator = () => ({type: USER_ACTION.CLOSE_SIGN_UP_MODAL});

export const signUpActionCreator = (payload) => ({
    type: USER_ACTION.SIGN_UP_START,
    payload
});

export const logoutActionCreator = () => ({type: USER_ACTION.LOG_OUT});

export const getUserListActionCreator = () => ({ type: USER_ACTION.GET_USER_LIST_START});

export const deleteUserActionCreator = payload => ({
    type: USER_ACTION.DELETE_USER_START,
    payload
})