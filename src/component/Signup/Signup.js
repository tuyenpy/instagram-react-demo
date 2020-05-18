import React, { useState } from 'react';

const Signup = (props) => {
    let [name, setName] = useState("");
    let [phone, setPhone] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let { onSignup } = props;

    return <div className="Signup">
        <form className="PostItem-form">
            <input type="text"
                placeholder="type name"
                onChange={(e) => setName(e.target.value)}
                />
            <input type="text"
                placeholder="type phone"
                onChange={(e) => setPhone(e.target.value)}
                />
            <input type="text"
                placeholder="type email"
                onChange={(e) => setEmail(e.target.value)}
                />
            <input type="text"
                placeholder="type password"
                onChange={(e) => setPassword(e.target.value)}
                />
            <button onClick={
                (e) => onSignup({name, phone, email, password}, e)
                }>Sign Up</button>
        </form>
    </div>
}

export default Signup;