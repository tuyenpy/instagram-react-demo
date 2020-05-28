import React, { useState } from 'react';
import { withCookies } from 'react-cookie';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';
import './Login.css';

let Login = (props) => {
    let [email, setEmail] = useState();
    let [password, setPassword] = useState();

    //Retrive information in props
    let {
        loginUser,
        cookies,
        isLogined,
        newUser,
    } = props;

    // onClick
    const onLogin = (e) => {
        e.preventDefault();
        loginUser({ email, password });
    }

    //set cookies when the user successfully login
    if (isLogined) {
        cookies.set('userID', isLogined);
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
            cookies.get("userID") ? (<Redirect to='/' />) : (

                <div className="Login">
                    <form className="Login-form">
                        <div className="Login-form-group">
                            <input type="text"
                                placeholder="Phone number, username or email"
                                onChange={(e) => setEmail(e.target.value)}
                            />

                        </div>
                        <div className="Login-form-group">

                            <input type="password"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button onClick={onLogin}>Login</button>
                    </form>

                </div>
            )
        }
    </>

}

const mapStateToProp = (state) => ({
    isLogined: state.user._id,
    newUser: state.user,
});

const mapDispatchToProp = {
    loginUser: loginUser,
}

Login = connect(mapStateToProp, mapDispatchToProp)(Login);

export default withCookies(Login);