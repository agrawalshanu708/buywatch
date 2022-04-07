import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { useAuth } from "../../../context/index";
import "./login.css";
import { login1 } from "./../../../Assets/index";

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, setIsLoggedIn } = useAuth();

const loginHandler = async () => {
 const body = {
email : email,
password : password,
 }

 try {
     const response = await axios.post("/api/auth/login", body)
     response.data.encodedToken? navigate("/"):alert("login failed")
 } catch (error) {
    alert("Error")
 }
}

  return (
    <>
      <div className="login-page">
        <div className="login-image-box col-7">
          <div className="black-background col-6"></div>

          <div className="login-image">
            <img src={login1} alt="" />
          </div>
        </div>
        {/* ---------------------------------------------- */}
        <div className="login-form-box col-5">
          <div className="login-text">
            Log In<span className="blue-dot">.</span>{" "}
          </div>
          <div className="login-tag">
            Enter your Credentials to access your account
          </div>

          <div className="login-button-box">
            <button className="login-with-google-button">
              {" "}
              <AiOutlineGooglePlus size="3rem" /> Login with Google
            </button>
          </div>

          <hr className="login-hr" />

          <div className="user-email-box">
            <label htmlFor="user-email" className="label-text">
              Email
            </label>
            <input
              id="user-email"
              className="login-input"
              type="email"
              placeholder="xyz@yui.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <div className="password-tag">
              <label htmlFor="user-pass" className="label-text" type="password">
                Enter password
              </label>
              <label className="forget-pass">Forgot Password?</label>
            </div>
            <input
              id="user-pass"
              className="login-input"
              type="text"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* <div className="remember-me-box">
<input  type="checkbox" id="remember-me" />
<label className="label-remember" forhtml ="remember-me">Remember me</label>
</div> */}

          <div className="login-button-box">
          <button
              className="login-submit-btn"
              type="submit"
              onClick={() => loginHandler()}
            >
              Login
            </button>  
            <Link to="/products">
              <button
                className="login-submit-btn"
                type="submit"
                onClick={() => setIsLoggedIn(!isLoggedIn)}
              >
                Login As Guest
              </button>
            </Link>
          </div>

          <div>
            <span className="medium-text">Not a member?</span>
            <Link to="/signup">
              <span className="medium-text sign-up-link">Signup</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export { Login };
