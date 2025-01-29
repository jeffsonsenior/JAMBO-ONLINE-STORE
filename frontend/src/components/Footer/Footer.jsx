import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <h2>Update on Latest Offers</h2>
        <p>Subscribe to our newsletter</p>
        <div className="input">
          <label htmlFor="email" className="visually-hidden">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            aria-label="Enter your email address"
          />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-left">
          <h2>Jambo Online Store</h2>
          <div className="socials">
            <FaFacebookF className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaTwitter className="social-icon" />
          </div>
        </div>
        <div className="footer-right">
          <h2>Quick Links</h2>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <p className="copy">© 2025 Jambo Online Store. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
