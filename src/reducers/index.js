import {combineReducers} from 'redux';
import userReducer from './user';
import articleReducer from './article';
import courseReducer from './course';

export default combineReducers({
    userReducer,
    articleReducer,
    courseReducer
});