import {Link } from "react-router-dom";
import React from 'react'
import "./login.css"
import {loginpic,loginpic2} from "../../../Assets/index"

const Login = () => {
  return (
    <>
    <div className="login">
    <div className="login-pic col-6">
        <img src={loginpic2} alt="login-image" />
    </div>

    <div className="Login-form col-5">
      <h2>Get Started<span className="blue-dot">.</span> </h2>
      <p>Enter your Credentials to access your account</p>
      
      <div className="login-button-box">
      <button className="login-with-google-button">Login with Google</button>
      </div>
       
      <hr className="login-hr"/>


      <form action="">

      <div className="user-email-box">
      <label htmlFor="user-email" className="label-text">Email</label>
      <input id="user-email" className="login-input" type="email" placeholder="xyz@yui.com"/>
      </div>

      <div>
      <div className="password-tag">
      <label htmlFor= "user-pass" className="label-text" type="password">Enter password</label>
      <label className="forget-pass">Forgot Password?</label>
      </div>
      <input id="user-pass"  className="login-input" type="text" placeholder="Enter your password" />
      </div>

      <div className="remember-me-box">
      <input  type="checkbox" id="remember-me" />
      <label className="label-remember" forhtml ="remember-me">Remember me</label>
      </div>

      <div className="login-button-box">
      <button className="login-submit-btn"type="submit">Login</button>
      </div>

      </form>

      <div>
      <span className="medium-text" >Not a member?</span>
      <Link to = "/signup" ><span className="medium-text sign-up-link" >Signup</span></Link>
      </div>

    </div>
    </div>
    </>
  )
}

export {Login}