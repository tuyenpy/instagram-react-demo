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
    let { createUser, isSigned, cookies, newUser } = props;
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
    if (isSigned) {
        cookies.set("userID", isSigned);
    }

    if (newUser.errors) {
        var { errors } = newUser;
    }
    return <>
        {
            errors ? (
                <div className="error">
                    <ul>

                        {
                            errors.map(error => <li key={error}>{error}</li>)
                        }
                    </ul>
                </div>
            ) : (<></>)
        }
        {
            cookies.get("userID") ? (
                <Redirect to="/post/timeline" />
            ) : (

                    <div className="Signup">
                        <form className="Signup-form">
                            <div className="Signup-form-group">
                                <input type="text"
                                    placeholder="Please fill name"
                                    onChange={(e) => dispatch({ type: 'name', value: e.target.value })}
                                />
                            </div>
                            <div className="Signup-form-group">
                                <input type="text"
                                    placeholder="Please fill phone"
                                    onChange={(e) => dispatch({ type: 'phone', value: e.target.value })} />
                            </div>
                            <div className="Signup-form-group">
                                <input type="email"
                                    placeholder="Please fill email"
                                    onChange={(e) => dispatch({ type: 'email', value: e.target.value })} />
                            </div>
                            <div className="Signup-form-group">
                                <input type="password"
                                    placeholder="Please fill password"
                                    onChange={(e) => dispatch({ type: 'password', value: e.target.value })} />
                            </div>
                            <div className="Signup-form-group">
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
    newUser: state.user,

});

const mapDispatchToProp = {
    createUser: createUser,
}

Signup = connect(mapStateToProp, mapDispatchToProp)(Signup);


export default withCookies(Signup);