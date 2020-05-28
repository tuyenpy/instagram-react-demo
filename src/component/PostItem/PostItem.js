import React from 'react';
import { connect } from 'react-redux';
import './PostItem.css';
import like from './like.svg';
import comment from './comment.svg';
import share from './share.svg';
import save from './save.svg';

import { likePost } from '../../actions';
import Menu from '../Menu/Menu';
import CommentButton from '../CommentButton/CommentButton';

let PostItem = (props) => {
    let { images, comments, likes, date, user, _id, likePost, newUser } = props;
    let { name, avatar } = user;
    const onLikePost = (e) => {
        e.preventDefault();
        likePost({
            postID: _id,
            userID: newUser.user && newUser.user._id,
        })
    }

    return <div className="PostItem">
        <div className="PostItem-header">
            <div className="PostItem-account">
                <img src={avatar} alt="avatar" />
                <span>{name}</span>
            </div>
            <Menu />
        </div>
        <div className="PostItem-body">
            <div className="image">
                <img src={images[0]} alt="slide" />
            </div>
            <div className="PostItem-section">
                <div className="btn">
                    <div className="btn-left">
                        <img src={like} alt="like" onClick={onLikePost} />
                        <img src={comment} alt="comment" />
                        <img src={share} alt="share" />
                    </div>
                    <div className="btn-rigth">
                        <img src={save} alt="save" />
                    </div>
                </div>
                <div className="like">
                    <p>{`${likes.length} likes`}</p>
                </div>
                <div className="cmtLink">
                    <a href="/">
                        {`View all ${comments.length} comment`}
                    </a>
                </div>
                {
                    comments.length ? (
                        comments.slice(-3).map(comment => <div className="comment" key={comment.cmt}>
                            <span>{comment.userName}</span>
                            <span>{comment.cmt}</span>
                        </div>)

                    ) : (<></>)
                }
                {/* <div className="comment">
                    <span>dua_thaochi</span>
                    <span>Bn ạ</span>
                </div> */}
                <div className="date">
                    <p>{date}</p>
                </div>
            </div>
            <div className="PostItem-footer">
                <CommentButton
                    postID={_id}
                    userID={newUser.user && newUser.user._id}
                    userName={newUser.user && newUser.user.name}
                />
            </div>
        </div>
    </div>
}

const mapDispatchToProp = {
    likePost: likePost,
}

PostItem = connect(null, mapDispatchToProp)(PostItem);

export default PostItem;