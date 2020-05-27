//get all post
const getData = () => ({
    type: 'GET DATA',
});

//like post
const likePost = (data) => ({
    type: 'LIKE POST',
    data: data,
})
//comment post
const commentPost = (data) => ({
    type: 'COMMENT POST',
    data: data,
})

//create user
const createUser = (data) => ({
    type: 'CREATE USER',
    data: data,
})

//user login
const loginUser = (data) => ({
    type: 'LOGIN USER',
    data: data,
});
//create post
const createPost = (data) => ({
    type: 'CREATE POST',
    data: data,
})
export {
    getData, 
    likePost, 
    commentPost, 
    createUser, 
    createPost,
    loginUser,
};