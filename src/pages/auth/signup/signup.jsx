import React from 'react'
import "./signup.css"
import {signup1} from "./../../../Assets/index"
const Signup = () => {
  return (
    <>
    <div className="outer-box" style={{backgroundImage: 'url('+signup1+')'}} >

     <div className="signup-form col-5">
         <h2>Register.</h2>
         <p>Fill your details here</p>

    <form>
    <div class="grid-container">

    <div class="grid-item">
     <label htmlFor="user-first-name">First Name</label>
    <input id="user-first-name" type="text" />
    </div>

  <div class="grid-item">
  <label htmlFor="user-last-name">Last Name</label>
   <input id="user-last-name" type="text" />
  </div>

  <div class="grid-item">
  <label htmlFor="user-signup-email">Email</label>
  <input id="user-signup-email" type="email" />
  </div>  

  <div class="grid-item">
  <label htmlFor="user-number">Contact Number</label>
  <input id="user-number" type="number" />
  </div>

  <div class="grid-item">
  <label htmlFor="user-pass">Create Password</label>
  <input id="user-pass" type="password" />
  </div>

  <div class="grid-item">
  <label htmlFor="user-pass-again">Confirm Password</label>
 <input htmlFor="user-pass-again" type="password" /></div>  
</div>

<div class="condition-box">
<input id="user-condition" type="checkbox"/>
<label htmlFor="user-condition" class="condition-tag">Yes, I agree to all the Terms, Privacy policy</label>
</div>

<div className="button-box">
<button className="register-button">Register</button>
</div>
</form>

           
     </div>
     </div>
    </>
  )
}

export {Signup}