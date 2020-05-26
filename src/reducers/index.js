import { combineReducers } from 'redux';

const postReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET DATA': return state;
        case 'DATA RECEIVED': return action.data;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    posts: postReducer,
});

export default rootReducer;