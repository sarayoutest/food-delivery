import React from "react";
import { useEffect } from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
function Footer() {

  useEffect(() => {
    const scrollBtn = document.getElementById("scrollTopBtn");

    const toggleVisibility = () => {
      if (window.scrollY > 200) {  
        scrollBtn.style.display = "flex";
      } else {
        scrollBtn.style.display = "none";
      }
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("scroll", toggleVisibility);
    scrollBtn.addEventListener("click", scrollToTop);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      scrollBtn.removeEventListener("click", scrollToTop);
    };
  }, []);
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur laudantium, debitis accusantium inventore rem
            architecto, saepe quis corporis ratione exercitationem repellendus
            ipsa laborum. Quos temporibus repudiandae animi! Porro, alias.
            Magnam!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+963 9318522009</li>
            <li>contact@Sufra.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 © Sufra.com - All Right Reserved.
      </p>
      <button id="scrollTopBtn" title="Back to Top">↑</button>
    </div>
  );
}

export default Footer;
