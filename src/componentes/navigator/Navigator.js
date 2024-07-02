import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import logoPrincipal from '../../img/logoPrincipal.png';
import './Navigator.css';

const Navigator = ({ isAdmin, setIsAdmin, isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [showLogout, setShowLogout] = useState(false);

  const handleLogout = () => {
    setIsAdmin(false);
    setIsAuthenticated(false);
    localStorage.removeItem('isAdmin');
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
          <Link to={isAuthenticated
            ? isAdmin 
              ? "/cadastroSelect" : "/entregasEntregador"
            : "/"}>
            <img src={logoPrincipal} alt="Logo Principal" />
          </Link>
        </li>
        {isAuthenticated && (
          <li className="admin-links">
            <div className="admin-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {isAdmin ? (
              <Link to="/cadastroSelect">
                <FontAwesomeIcon icon={faUserShield} /> Admin
              </Link>
              )
            : (
              <Link to="/entregasEntregador">
                <FontAwesomeIcon icon={faUserShield} /> {localStorage.getItem('username') || "Entregador"}
              </Link>
            )}
              {showLogout && (
                <ul className="dropdown">
                  <li>
                    <button className="logout-button" onClick={handleLogout}>
                      <FontAwesomeIcon icon={faSignOutAlt} /> Sair
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigator;
