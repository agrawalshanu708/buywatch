import React from "react";
import { useState } from "react";
import axios from "axios"
import "./signup.css";
import { signup1 } from "./../../../Assets/index";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Signup = () => {
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [ email, setEmail ] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate()
const signupHandler = async () => {

const body = {
  email: email,
  password: password,
  firstName: firstName,
  lastName: lastName,
}
 
try {
 const response = await axios.post("/api/auth/signup", body)
 localStorage.setItem("token", response.data.encodedToken);
 setTimeout(() => {
  navigate("/login")
 }, 1000);
 toast.success("Signup successfully!!")
} catch (error) {
  console.error(Error)
  toast.error("Error while signup!!")
}
}


  return (
    <>
      <div 
        className="outer-box"
        style={{ backgroundImage: "url(" + signup1 + ")" }}
      >
        <div className="signup-form col-4">
          <h2>Register.</h2>
          <p>Fill your details here</p>

 
            <div class="grid-container">
              <div class="grid-item">
                <label htmlFor="user-first-name">First Name</label>
                <input
                  id="user-first-name"
                  type="text"
                  onChange={(e) => {
                    e.preventDefault()
                    setFirstName(e.target.value)}}
                />
              </div>

              <div class="grid-item">
                <label htmlFor="user-last-name">Last Name</label>
                <input
                  id="user-last-name"
                  type="text"
                  onChange={(e) => {
                    e.preventDefault()
                    setLastName(e.target.value)}}
                />
              </div>

              <div class="grid-item">
                <label htmlFor="user-signup-email">Email</label>
                <input
                  id="user-signup-email"
                  type="email"
                  onChange={(e) => {
                    e.preventDefault()
                    setEmail(e.target.value)}}
                />
              </div>

              <div class="grid-item">
                <label htmlFor="user-pass">Create Password</label>
                <input
                  id="user-pass"
                  type="password"
                  onChange={(e) => {
                    e.preventDefault()
                    setPassword(e.target.value)}}
                />
              </div>
            </div>

            <div class="condition-box">
              <input id="user-condition" type="checkbox" />
              <label htmlFor="user-condition" class="condition-tag">
                Yes, I agree to all the Terms, Privacy policy
              </label>
            </div>

            <div className="button-box">
              <button className="register-button"
              onClick={() => signupHandler()}
              >Register</button>
            </div>
         
        </div>
      </div>
    </>
  );
};

export { Signup };
