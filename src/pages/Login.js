import React from 'react'
import '../assets/css/style.css'
import sidepic from '../assets/images/side_image.png';
import beakbooklogo from '../assets/images/logo.svg'

export default function Login({ openModal }) {
    return (
        <>
            <main>
                <section className="container-wrapper">
                    <div className="login-wrapper">
                        <img src={beakbooklogo} alt="" />
                        <h1>Please Log In to your <br />Account</h1>
                        <div className="box">
                            <input type="text" required />
                            <span>User Name</span>
                        </div>
                        <div className="box">
                            <input type="password" required />
                            <span>Password</span>
                        </div>
                        <div className="login-links">
                            <input type="checkbox" name="" id="" />
                            <span> Remember me</span>
                            <a href="/">Forget password?</a>
                        </div>
                        <div className="btn-login">
                            <button onClick={openModal}>Login</button>
                        </div>
                    </div>
                    <div className="image-wrapper">
                        <img src={sidepic} alt="" />
                        <div className="image-text">
                            <p>Welcome To <span>BEAKBOOK</span></p>
                            <h1>The place where you can get all <br />the info of your scales and barns</h1>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
