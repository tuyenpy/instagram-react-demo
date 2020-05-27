import React, { useState, useReducer } from 'react';
import { connect } from 'react-redux';

import onPhotoSelected from '../../func/onCloudinaryUpload';
import './CreatePost.css';
import close from './close.svg';

import { createPost } from '../../actions';

let initPost = {
    title: "",
    description: "",
}

const reducer = (post, action) => {
    switch (action.type) {
        case 'title': return {
            ...post,
            title: action.value
        };
        case 'description': return {
            ...post,
            description: action.value
        };
        default:
            throw new Error();
    }
}


let CreatePost = (props) => {
    let { createPost } = props;
    let [path, setPath] = useState();
    let [post, dispatch] = useReducer(reducer, initPost);
    let [state, setState] = useState(true);
    const onCreatePost = async (e) => {
        e.preventDefault();
        // upload to cloudinary
        let images = await onPhotoSelected(path);
        console.log(images);
        // add avatar property to user
        post.images = images;
        //mock user
        const userID = "5ece3c638a9c640017450863";
        post.userID = userID;
        // post create user
        console.log(post);
        createPost(post);
    }
    return <>
        <div className="CreatePost">
            <form>
                <h1>Tạo bài viết</h1>
                <img src={close} alt="close" className="close" onClick={() => setState(false)} />
                <div className="CreatePost-group">
                    <label>Title</label>
                    <input type="text"
                        placeholder="Please fill title"
                        onChange={(e) => dispatch({ type: 'title', value: e.target.value })}
                    />
                </div>
                <div className="CreatePost-group">
                    <label>Description</label>
                    <input type="text"
                        placeholder="Please fill description"
                        onChange={(e) => dispatch({ type: 'description', value: e.target.value })} />
                </div>
                <div className="CreatePost-group">
                    <label>Avatar</label>
                    <input
                        type="file"
                        id="fileupload"
                        accept="image/*"
                        multiple="multiple"
                        ref={fileInputEl =>
                            (setPath(fileInputEl))
                        }
                    />
                </div>
                <button onClick={onCreatePost}>Tạo bài viết</button>
            </form>
        </div>

    </>
}

const mapDispatchToProp = {
    createPost: createPost,
}

CreatePost = connect(null, mapDispatchToProp)(CreatePost);


export default CreatePost;