/**import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { BiCart, BiUser } from 'react-icons/bi';
import './Navbar.css'
import { useState } from 'react';
import { FaCentos } from 'react-icons/fa';


const Navbar = () => {

const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    navigate(path);
  };

  return (
    <div>
      {
        loading && (
          <div className="loader-container">
            <div className="loader"><FaCentos className='loader-icon'/></div>
            <p className="loader-text">Loading...</p>
          </div>
        )
      }
      <nav className="navbar">
        <div className="nav-top">
          <Link to='/'>
            <h2>Jambo Online store</h2>
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
*/
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaShoppingCart, FaUserCircle, FaSpinner } from 'react-icons/fa'; // New icons
import './Navbar.css';

const Navbar = () => {
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [location]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <div>
      {loading && (
        <div className="loader-container">
          <div className="loader">
            <FaSpinner className="loader-icon spinning" />
          </div>
          <p className="loader-text">Loading...</p>
        </div>
      )}
      <nav className="navbar">
        <div className="nav-top">
          <Link to="/">
            <h2>Jambo Online Store</h2>
          </Link>
          <form onSubmit={handleSearch} className="search-bar">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
          </form>
          <div className="icons">
            <div className="profile-group" onClick={toggleDropdown}>
              <FaUserCircle className="profile-icon" aria-label="User Profile" />               {isDropdownOpen && (
                <div className="dropdown-menu">
                  <Link to="/login">
                    <p className="dropdown-item">Account</p>
                  </Link>
                  <p className="dropdown-item">Logout</p>
                </div>
              )}
            </div>
            <div className="cart-icon" onClick={() => navigate("/Cart")}>
              <FaShoppingCart className="icon" aria-label="Cart" />
              <span className="cart-count">0</span>
            </div>
          </div>
        </div>
        <div className="nav-bottom">
          <div className="nav-container">
            <div onClick={() => navigate("/category/Men")} className="navbar-link">
              Men fashion
            </div>
            <div onClick={() => navigate("/category/Women")} className="navbar-link">
              Women fashion
            </div>
            <div onClick={() => navigate("/category/Kids")} className="navbar-link">
              Kids fashion
            </div>
            <div onClick={() => navigate("/category/Accessories")} className="navbar-link">
              Accessories
            </div>
            <div onClick={() => navigate("/category/Furniture")} className="navbar-link">
              Furniture
            </div>  
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
