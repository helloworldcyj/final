import { createSelector } from 'reselect';
import _ from 'lodash';

const messageSelector = state => state.messageReducer;

export const messageDataSelector = createSelector(
    messageSelector,
    message => message.data
)

export const messagesSelector = createSelector(
    messageSelector,
    message => message.messages
)

