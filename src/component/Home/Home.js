import React, { useState } from 'react';
import './Home.css';
import Login from '../Login/Login';
import facebook from './facebook.svg';
import instagram from './instagram.png';
import SlideHome from  '../SlideHome/SlideHome';

const Home = (props) => {
    console.log("Home rendering")
    return <div className="Home">
        <div className="Home-main">
            <div className="side-left">
                <SlideHome />
            </div>
            <div className="side-right">
                <div className="form-login">
                    <img src={instagram} alt="logo" />
                    <div className="login">
                        <Login />
                        <div className="hr">
                            <span></span>
                            <p>Or</p>
                            <span></span>
                        </div>
                        <button>
                            <img src={facebook} alt="FB" />
                            <span>Login with facebook</span>
                        </button>
                        <a href="/">Forgot password?</a>
                    </div>
                </div>
                <div className="link-signup">
                    <p>Don't have an account? <a href="/signup">Signup</a></p>
                </div>
                <div className="download-app">
                    <p>Get the app</p>
                    <div>
                        <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="appstore" />
                        <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="googleplay" />

                    </div>
                </div>
            </div>
        </div>
        <div className="Home-footer">
            <ul>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Help</a>
                </li>
                <li>
                    <a href="/">Press</a>
                </li>
                <li>
                    <a href="/">Api</a>
                </li>
                <li>
                    <a href="/">Jobs</a>
                </li>
                <li>
                    <a href="/">Privacy</a>
                </li>
                <li>
                    <a href="/">Terms</a>
                </li>
                <li>
                    <a href="/">Locations</a>
                </li>
                <li>
                    <a href="/">Top accounts</a>
                </li>
                <li>
                    <a href="/">Hashtags</a>
                </li>
                <li>
                    <a href="/">Language</a>
                </li>
            </ul>
            <p>© 2020 Instagram from Facebook</p>
        </div>
    </div>
}

export default Home;