import React from "react";
import "./Footer.css";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="body">
          <div className="body-col">
            <h1>FaceSwapPro</h1>
            <p>
              The ultimate tool for photo transformations and personalized
              enhancements, making every image uniquely yours.
            </p>
            <div className="social-icons">
              <a href="https://twitter.com">
                <FaTwitter />
              </a>
              <a href="https://facebook.com">
                <FaFacebook />
              </a>
              <a href="https://instagram.com">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="body-col">
            <div className="contact">
              <h3>Contact me</h3>
              <div className="cont-info">
                <div>
                  <span>
                    <FaMapMarkerAlt className="fa-icon"/>
                  </span>
                  <span>No 51/2, Galle Rd, Sri Lanka.</span>
                </div>

                <div>
                  <span>
                  <FaPhone className="fa-icon"/>
                  </span>
                  <span>+947845785</span>
                </div>

                <div>
                  <span>
                  <FaEnvelope className="fa-icon"/>
                  </span>
                  <span>lorem@gmail.com</span>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <hr />
        <p className="bottom-part">© 2023 FaceSwapPro. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
