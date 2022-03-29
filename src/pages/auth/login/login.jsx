import React from 'react'
import "./login.css";
import {login1} from "./../../../Assets/index"
const Login = () => {
  return (
    <>
    <div className="login-image-box col-7">
         <div className="black-background col-6">
         </div>
         <div className="white-background col-6">
         </div>
        <div className = "login-image" >
            <img src={login1} alt="" />
        </div>
    </div>
    </>
  )
}

export {Login};