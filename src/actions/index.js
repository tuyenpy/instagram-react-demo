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

const createUser = (data) => ({
    type: 'CREATE USER',
    data: data,
}) 

const createPost = (data) => ({
    type: 'CREATE POST',
    data: data,
})
export { getData, likePost, commentPost, createUser, createPost };