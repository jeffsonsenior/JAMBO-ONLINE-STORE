
import React from 'react';
import './Hero.css';
import pinthero from '../../assets/pinthero.jpg';
import { FiTruck, FiLock } from 'react-icons/fi';
import { BiSend } from 'react-icons/bi';
import { MdHelpOutline } from 'react-icons/md';

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero_top">
          <div className="hero_left">
            <h2>Great Products</h2>
            <h1>New Arrivals</h1>
            <p>Check out our latest products</p>
          </div>
          <div className="hero_right">
            <img src={pinthero} alt="New Arrivals" />
          </div>
        </div>
        <div className="hero_bottom">
          <div className="hero_content">
            <div className="info_icon"><FiTruck className='hero_icon' /> </div>
            <div className="details">
              <h3>Free Shipping</h3>
              <p>free for all orders on Black Friday</p>
            </div>
          </div>
          <div className="hero_content">
            <div className="info_icon"><BiSend className='hero_icon' /> </div>
            <div className="details">
              <h3>Fast Delivery</h3>
              <p>Countrywide Delivery</p>
            </div>
          </div>
          <div className="hero_content">
            <div className="info_icon"><MdHelpOutline className='hero_icon' /> </div>
            <div className="details">
              <h3>24/7 Support</h3>
              <p>We are here to help</p>
            </div>
            </div>
          <div className="hero_content">
          <div className="info_icon"><FiLock className='hero_icon' /> </div>
          <div className="details">
            <h3>Secure Payment</h3>
           <p>100% secure payment</p>
          </div>
          </div>
        </div>
      </div>
    </div>  
  );
};

export default Hero;
