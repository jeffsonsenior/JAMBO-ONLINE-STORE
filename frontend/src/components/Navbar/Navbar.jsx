import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaShoppingCart, FaUserCircle, FaSpinner } from 'react-icons/fa';
import './Navbar.css';
import { ShopContext } from '../../Context/ShopContext';
const Navbar = () => {
  const [loading, setLoading] = useState('false');
  const [searchInput, setSearchInput] = useState('');
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { updateSearchTerm, searchTerm, getCartCount } = useContext(ShopContext);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setSearchInput(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [location]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      updateSearchTerm(searchInput);
      navigate(`/search?query=${searchInput}`);
    }
  };

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const closeDropdown = () => setDropdownOpen(false);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest('.profile-group')) {
        closeDropdown();
      }
    };
    if (isDropdownOpen) {
      document.addEventListener('click', handleOutsideClick);
    }
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isDropdownOpen]);

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
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              aria-label="Search input"
            />
            <button onClick={handleSearch} className="search-button">
              Search
            </button>
          </div>
          <div className="icons">
            <div className="profile-group" onClick={toggleDropdown}>
              <FaUserCircle className="profile-icon" aria-label="User Profile" />
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <Link to="/Login">
                    <p className="dropdown-item">Account</p>
                  </Link>
                  <p
                    className="dropdown-item"
                    onClick={() => console.log('Logout action')}
                  >
                    Logout
                  </p>
                </div>
              )}
            </div>
            <div className="cart-icon" onClick={() => navigate('/cart')}>
              <FaShoppingCart className="icon" aria-label="Cart" />
              <span className="cart-count">{getCartCount()}</span>
            </div>
          </div>
        </div>
        <div className="nav-bottom">
          <div className="nav-container">
            {['Men', 'Women', 'Kids', 'Accessories', 'Furniture'].map((category) => (
              <div
                key={category}
                onClick={() => navigate(`/category/${category}`)}
                className="navbar-link"
              >
                {category} Fashion
              </div>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
