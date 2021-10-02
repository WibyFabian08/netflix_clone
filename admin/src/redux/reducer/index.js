import { combineReducers } from 'redux';
import globalState from './globalReducer';
import userState from './userReducer';
import movieState from './movieReducer';
import listState from './listReducer';

const reducer = combineReducers({
    globalState,
    userState,
    movieState,
    listState
})

export default reducer;