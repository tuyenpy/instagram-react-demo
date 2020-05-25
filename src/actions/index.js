const getData = () => ({
    type: 'GET DATA',
});

const likePost = (data) => ({
    type: 'LIKE POST',
    data: data,
})
const commentPost = (data) => ({
    type: 'COMMENT POST',
    data: data,
})
export { getData, likePost, commentPost };