import React from 'react';
import './Home.css';

const Home = (props) => {
    return <div className="Home">
        <h3>Info</h3>
        <p>Đây là phiên bản lỗi của Instagram nên cạnh tranh thất bại</p>
        <p>Trang chưa tự động reload lại (chắc là chưa có cái socket.io gì đó mình chưa học)</p>
        <p>Mỗi lần nhấn Like, Comment, Login... đề phải reload bằng cơm thì mới cập nhật dữ liệu</p>
        <p>Một trải nghiệm cực cool.....</p>
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