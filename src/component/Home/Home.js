import React from 'react';
import './Home.css';

const Home = (props) => {
    return <div className="Home">
        <h3>Info</h3>
        <p>Các bạn cùng hoàn thiện bản instagram fake này với mình nhé. Cảm ơn!</p>
        <h3>Account Demo</h3>
        <p>thinh@gmail.com</p>
        <p>pass: 123</p>
        <small>Chưa validate nên quý bằng hữu chỉ cần đúng email là được ^^</small>
        <h3>Github</h3>
        <a href="https://github.com/tuyenpy/instagram-react-demo" alt="Link to github">
            <p>https://github.com/tuyenpy/instagram-react-demo</p>
        </a>
    </div>
}

export default Home;