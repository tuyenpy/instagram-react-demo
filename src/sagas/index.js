import axios from 'axios';
import { put, all, takeLatest } from 'redux-saga/effects';

const postUri = "https://instagram-express-demo.herokuapp.com/api/post/index";
const commentUri = "https://instagram-express-demo.herokuapp.com/api/post/comment";
const likeUri = "https://instagram-express-demo.herokuapp.com/api/post/like";

function* getData(value) {
    console.log('get data');
    let res = yield axios.get(postUri);
    yield put({type: 'DATA RECEIVED', data: res.data})
}
function* likePost(disp) {
    console.log('like post');
    console.log(disp);
    let res = yield axios.post(likeUri, disp.data);
    yield put({type: 'LIKE RECEIVED', data: res.data})
}
function* commentPost(disp) {
    console.log(disp);
    let res = yield axios.post(commentUri, disp.data);
    yield put({type: 'COMMENT RECEIVED', data: res.data})
}

function* actionWatcher() {
    yield takeLatest('GET DATA', getData);
    yield takeLatest('LIKE POST', likePost);
    yield takeLatest('COMMENT POST', commentPost);
}

export default function* rootSaga() {
    yield all([
    actionWatcher(),
    ]);
}