import { combineReducers } from 'redux';
import authState from './authReducer';
import userState from './userReducer';
import movieState from './movieReducer';

const reducer = combineReducers({
    authState,
    userState,
    movieState
})

export default reducer;