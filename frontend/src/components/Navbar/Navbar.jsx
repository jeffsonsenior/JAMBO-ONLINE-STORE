import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { BiCart, BiUser } from 'react-icons/bi';
import './Navbar.css'

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="nav-top">
          <Link to="/">
            <h2>Jambo Online Shop</h2>
          </Link>
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <button className="search-button">Search</button>
          </div>
          <div className="icons">
            <div className="profile-group">
              <BiUser className="profile-icon" />
              <div className="dropdown-menu">
                <Link to="/login">
                  <p className="dropdown-item">Account</p>
                </Link>
                <p className="dropdown-item">Logout</p>
              </div>
            </div>
            <div className="cart-icon" onClick={() => handleNavigation("/cart")}>
              <BiCart className="icon" />
              <span className="cart-count">0</span>
            </div>
          </div>
        </div>
        <div className="nav-bottom">
          <div className="nav-container">
            <div onClick={() => handleNavigation("/category/Men")} className="navbar-link">
              Men
            </div>
            <div onClick={() => handleNavigation("/category/Women")} className="navbar-link">
              Women
            </div>
            <div onClick={() => handleNavigation("/category/Kids")} className="navbar-link">
              Kids
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
