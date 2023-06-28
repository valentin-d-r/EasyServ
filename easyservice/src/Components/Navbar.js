import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoES from '../LogoES.png';
import '../style/Navbar.css';

const Navbar = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="/">
            <img src={LogoES} width={70} height={70} title="LogoES" alt="LogoES" />
          </a>
        </div>
        {/* <div className="search">
          <input type="search" className="search-bar" placeholder="Search..." />
          <i className="fa fa-search search-icon" />
        </div> */}
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Accueil</NavLink>
            </li>
            <li>
              <NavLink to="/demandes">Mes demandes</NavLink>
            </li>
            <li>
              <NavLink to="/profil">Mon profil</NavLink>
            </li>
            <li>
              <NavLink to="/parrainage" > Parrainage</NavLink>
            </li>
            <li>
              <NavLink to="/chat">Discussion</NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <button className="notification-toggle" onClick={toggleNotifications}>
                Notifications
                {showNotifications && <span className="notification-badge">3</span>}
              </button>
              {showNotifications && (
                <div className="notification-dropdown">
                  <ul className="notification-list">
                    <li className="notification-item">Notification 1</li>
                    <li className="notification-item">Notification 2</li>
                    <li className="notification-item">Notification 3</li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <NavLink to="/login">Se connecter</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;





