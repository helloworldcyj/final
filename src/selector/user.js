import { createSelector } from 'reselect';

const userSelector = state => state.userReducer;

export const signInModalVisibleSelector = createSelector(
    userSelector,
    user => user.signInModalVisible
)

export const signUpModalVisibleSelector = createSelector(
    userSelector,
    user => user.signUpModalVisible
)

export const userListSelector = createSelector(
    userSelector,
    user => user.userList
)

export const signInUserSelector = createSelector(
    userSelector,
    user => user.signInUser
)