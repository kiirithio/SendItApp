import { combineReducers } from 'redux';
import auth from './userReducer';
import message from './message';

export default combineReducers ({
    auth,
    message
})