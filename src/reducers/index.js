import { combineReducers } from 'redux';

const postReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET DATA': return state;
        case 'DATA RECEIVED': return action.data;
        default:
            return state;
    }
}

const likePostReducer = (state = 0, action) => {
    switch (action.type) {
        case 'LIKE POST': return state;
        case 'LIKE RECEIVED': return action.data;
        default:
            return state;
    }
}

const commentPostReducer = (state = 0, action) => {
    switch (action.type) {
        case 'COMMENT POST': return state;
        case 'COMMENT RECEIVED': return action.data;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    posts: postReducer,
    like: likePostReducer,
    comment: commentPostReducer,
});

export default rootReducer;