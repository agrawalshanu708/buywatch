import React from "react";
import "./footer.css";
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="footer border-top mlr flex-row justify-sb">
        <div>
          © buyWatch 2022. All rights reserved. Site – Managed by Shanu Agrawal
          .
        </div>
        <div className="flex-row cursor">
          <a href="https://www.linkedin.com/in/shanu-agrawal-3b992a227/" target="_blank">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/agrawalshanu708" target="_blank">
            <FaGithub />
          </a>
          <a href="https://twitter.com/shanuag44891297" target="_blank">
            <FaTwitter />
          </a>
          <a href="https://github.com/agrawalshanu708" target="_blank">
            <FaInstagram />
          </a>
        </div>
      </div>
    </>
  );
};

export { Footer };
