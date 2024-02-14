import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignInAlt, faEnvelope, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import stylesH from "../../css/header.module.css";
import { useAuth } from '../security/AuthContext';

function Header(){

  const AuthContext = useAuth()

  const isAuthenticated = AuthContext.isAuthenticated

  function logout(){
    AuthContext.logout()
  }

  return (
    <nav className={stylesH.navbar}>
      <div className={stylesH.brand}>
        <FontAwesomeIcon icon={faEnvelope} /> {/* Message icon */}
        Message Distribution
      </div>
      <div className={stylesH.navLinks}>
        <Link to="/home" className={stylesH.navItem}>
          <FontAwesomeIcon icon={faHome} />
          Home
        </Link>
        {!isAuthenticated && <Link to="/login" className={stylesH.navItem}>
          <FontAwesomeIcon icon={faSignInAlt} />
          Login
        </Link>}
        {isAuthenticated && 
        <>
          <Link to="/message" className={stylesH.navItem}>
            <FontAwesomeIcon icon={faEnvelope} />
            Message
          </Link>
          <Link to="/" className={stylesH.navItem} onClick={logout}>
            <FontAwesomeIcon icon={faSignOutAlt} />
            Logout
          </Link>
        </>}
      </div>
    </nav>
  );
}

export default Header;
