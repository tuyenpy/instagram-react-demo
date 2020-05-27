import axios from 'axios';
import { put, all, takeLatest } from 'redux-saga/effects';

const postUri = "https://instagram-express-demo.herokuapp.com/api/post/index";
const commentUri = "https://instagram-express-demo.herokuapp.com/api/post/comment";
const likeUri = "https://instagram-express-demo.herokuapp.com/api/post/like";
const createUserUri = "https://instagram-express-demo.herokuapp.com/api/user/signup";
const createPostUri = "https://instagram-express-demo.herokuapp.com/api/post/create";
const loginUserUri = "https://instagram-express-demo.herokuapp.com/api/user/login";

//get post action
function* getData(value) {
    let res = yield axios.get(postUri);
    yield put({ type: 'DATA RECEIVED', data: res.data })
}
function* actionWatcher() {
    yield takeLatest('GET DATA', getData);
}

//like post action
function* likePost(disp) {
    let res = yield axios.post(likeUri, disp.data);
    yield put({ type: 'DATA RECEIVED', data: res.data })
}
function* likeActionWatcher() {
    yield takeLatest('LIKE POST', likePost);

}

//comment post action
function* commentPost(disp) {
    let res = yield axios.post(commentUri, disp.data);
    yield put({ type: 'DATA RECEIVED', data: res.data })
}
function* commentActionWatcher() {
    yield takeLatest('COMMENT POST', commentPost);

}

//create user
function* createUser(disp) {
    let res = yield axios.post(createUserUri, disp.data);
    yield put({type: 'USER RECEIVED', data: res.data});
}
function* createUserActionWatcher() {
    yield takeLatest('CREATE USER', createUser);
}

//create post
function* createPost(disp) {
    let res = yield axios.post(createPostUri, disp.data);
    yield put({type: 'DATA RECEIVED', data: res.data});
}
function* createPostActionWatcher() {
    yield takeLatest('CREATE POST', createPost);
}

//login user
function* loginUser(disp) {
    let res = yield axios.post(loginUserUri, disp.data);
    yield put({type: 'USER RECEIVED', data: res.data});
}

function* loginUserActionWatcher() {
    yield takeLatest('LOGIN USER', loginUser);
}


export default function* rootSaga() {
    yield all([
        actionWatcher(),
        likeActionWatcher(),
        commentActionWatcher(),
        createUserActionWatcher(),
        createPostActionWatcher(),
        loginUserActionWatcher(),
    ]);
}