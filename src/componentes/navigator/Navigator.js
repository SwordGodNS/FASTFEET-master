import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserShield, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import logoPrincipal from '../../img/logoPrincipal.png';
import './Navigator.css';

const Navigator = ({ isAdmin, setIsAdmin }) => {
  const navigate = useNavigate();
  const [showLogout, setShowLogout] = useState(false);

  const handleLogout = () => {
    setIsAdmin(false); 
    navigate('/'); 
  };

  const handleMouseEnter = () => {
    setShowLogout(true);
  };

  const handleMouseLeave = () => {
    setShowLogout(false);
  };

  return (
    <nav className='navbar'>
      <ul>
        <li className="logo-link">
          <Link to="/">
            <img src={logoPrincipal} alt="Logo Principal" />
          </Link>
        </li>
        {}
        {isAdmin && (
          <li className="login-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link to="/cadastroSelect">
              <FontAwesomeIcon icon={faUserShield} /> Admin
            </Link>
            {showLogout && (
              <ul className="dropdown">
                <li>
                  <button className="logout-button" onClick={handleLogout}>
                    <FontAwesomeIcon icon={faSignOutAlt} /> Sair
                  </button>
                </li>
              </ul>
            )}
          </li>
        )}
        {}
        {!isAdmin && (
          <li className="login-link">
            <Link to="/login">
              <FontAwesomeIcon icon={faSignInAlt} /> Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigator;
