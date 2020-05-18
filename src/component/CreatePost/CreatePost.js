import React, { useState } from 'react';

const CreatePost = (props) => {
    let [text, setText] = useState();
    let { onCreatePost } = props;
    return <div className="CreatePost">
        <form className="CreatePost-form">
            <input type="text"
                placeholder="type post"
                onChange={(e) => setText(e.target.value)}
                />
            <button onClick={(e) => onCreatePost({ text }, e)}>Create</button>
        </form>
    </div>
}

export default CreatePost;