import React from "react";
import Logo from "../img/logo.png";
const Footer = () => {
  return (
    <div className="footer">
      <span>
        Made by <b>Mert A.</b> with <b>ReactJS</b>
      </span>
      <img src={Logo} alt="" />
    </div>
  );
};

export default Footer;
