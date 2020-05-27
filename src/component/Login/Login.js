import React, { useState } from 'react';
import { withCookies } from 'react-cookie';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';

let Login = (props) => {
    let [email, setEmail] = useState();
    let [password, setPassword] = useState();

    //Retrive information in props
    let {
        loginUser,
        cookies,
        isLogined,
    } = props;

    // onClick
    const onLogin = (e) => {
        e.preventDefault();
        loginUser({ email, password });
    }

    //set cookies when the user successfully login
    isLogined && cookies.set('userID', isLogined);

    return <>
        {
            cookies.get("userID") ? (<Redirect to='/post/timeline' />) : (

                <div className="Login">
                    <form className="Login-form">
                        <input type="text"
                            placeholder="type email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input type="text"
                            placeholder="type password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button onClick={onLogin}>Login</button>
                    </form>

                </div>
            )
        }
    </>

}

const mapStateToProp = (state) => ({
    isLogined: state.user._id,
});

const mapDispatchToProp = {
    loginUser: loginUser,
}

Login = connect(mapStateToProp, mapDispatchToProp)(Login);

export default withCookies(Login);