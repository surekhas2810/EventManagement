import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${showNavbar ? 'visible' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <a href="#">Schedher Event</a>
        </div>
        <ul className="nav-links">
          <li><Link to="/" className="nav-item">Home</Link></li>
          <li><Link to="/Service" className="nav-item">About</Link></li>
          <li className="nav-item dropdown">
            <span onClick={toggleDropdown}>Services</span>
            {dropdownVisible && (
              <ul className="dropdown-menu">
                <li><Link to="/Service/Photo">Wedding Events</Link></li>
                <li><Link to="/Service/Venue">Conference Meetings</Link></li>
                <li><Link to="/Service/Venue">Entertainment</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/Venue" className="nav-item">Gallery</Link></li>
          <li><Link to="/Photo" className="nav-item">Contact</Link></li>
        </ul>
        <div className="auth-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Signup</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
