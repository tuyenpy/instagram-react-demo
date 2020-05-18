import React, { useState } from 'react';

const Login = (props) => {
    let [email, setEmail] = useState();
    let [password, setPassword] = useState();
    let { onLogin } = props;
    return <div className="Login">
        <form className="Login-form">
            <input type="text"
                placeholder="type email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input type="text"
                placeholder="type password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={
                (e) => onLogin({email, password}, e)
                }>Login</button>
        </form>

    </div>
}

export default Login;