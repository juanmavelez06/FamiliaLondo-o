import "./index.css";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="box_icon">
      <div className="wrapper">
        <div className="button">
          <div className="icon">
            <i>
              <FaFacebook />
            </i>
            <p className="Facebook">Facebook</p>
          </div>
        </div>
        <div className="button">
          <div className="icon">
            <i>
              <FaInstagram />
            </i>
            <p className="Instagram">Instagram</p>
          </div>
        </div>
        <div className="button">
          <div className="icon">
            <i>
              <FaTwitter />
            </i>
            <p className="Twitter"> Twitter</p>
          </div>
        </div>
        <div className="button">
          <div className="icon">
            <i>
              <FaTiktok />
            </i>
            <p className="Tiktok">Tiktok</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
