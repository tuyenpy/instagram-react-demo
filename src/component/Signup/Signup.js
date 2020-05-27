import React, { useState, useReducer } from 'react';
import { withCookies } from 'react-cookie';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import onPhotoSelected from '../../func/onCloudinaryUpload';
import './Signup.css';
import close from './close.svg';

import { createUser } from '../../actions';

let initUser = {
    name: "",
    phone: "",
    email: "",
    password: "",
}

const reducer = (user, action) => {
    switch (action.type) {
        case 'name': return {
            ...user,
            name: action.value
        };
        case 'phone': return {
            ...user,
            phone: action.value
        };
        case 'email': return {
            ...user,
            email: action.value
        };
        case "password": return {
            ...user,
            password: action.value
        };
        default:
            throw new Error();
    }
}


let Signup = (props) => {
    let { createUser, isSigned, cookies } = props;
    let [path, setPath] = useState();
    let [user, dispatch] = useReducer(reducer, initUser);
    const onSignup = async (e) => {
        e.preventDefault();
        // upload to cloudinary
        let avatar = await onPhotoSelected(path);
        // add avatar property to user
        user.avatar = avatar;
        // post create user
        createUser(user);
    }
    isSigned && cookies.set("userID", isSigned);
    
    return <>
    {
        cookies.get("userID") ? (
            <Redirect to="/post/timeline" />
        ) : (

        <div className="Signup">
            <form>
                <h1>Tạo tài khoản</h1>
                <img src={close} alt="close" className="close"/>
                <div className="Signup-group">
                    <label>Name</label>
                    <input type="text"
                        placeholder="Please fill name"
                        onChange={(e) => dispatch({ type: 'name', value: e.target.value })}
                    />
                </div>
                <div className="Signup-group">
                    <label>Phone</label>
                    <input type="text"
                        placeholder="Please fill phone"
                        onChange={(e) => dispatch({ type: 'phone', value: e.target.value })} />
                </div>
                <div className="Signup-group">
                    <label>Email</label>
                    <input type="email"
                        placeholder="Please fill email"
                        onChange={(e) => dispatch({ type: 'email', value: e.target.value })} />
                </div>
                <div className="Signup-group">
                    <label>Password</label>
                    <input type="password"
                        placeholder="Please fill password"
                        onChange={(e) => dispatch({ type: 'password', value: e.target.value })} />
                </div>
                <div className="Signup-group">
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
                <button onClick={onSignup}>Đăng ký</button>
            </form>
        </div>
        )
    }

    </>
}

const mapStateToProp = (state) => ({
    isSigned: state.user._id,
});

const mapDispatchToProp = {
    createUser: createUser,
}

Signup = connect(mapStateToProp, mapDispatchToProp)(Signup);


export default withCookies(Signup);