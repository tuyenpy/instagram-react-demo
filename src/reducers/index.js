import { combineReducers } from 'redux';

const postReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET DATA': return state;
        case 'DATA RECEIVED': return action.data;
        default:
            return state;
    }
}

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET USER': return state;
        case 'USER RECEIVED': return action.data;
        default:
            return state;
    }
}



const rootReducer = combineReducers({
    posts: postReducer,
    user: userReducer,
});

export default rootReducer;