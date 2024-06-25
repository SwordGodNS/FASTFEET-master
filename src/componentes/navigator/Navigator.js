import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield, faSignOutAlt, faTruck } from '@fortawesome/free-solid-svg-icons';
import logoPrincipal from '../../img/logoPrincipal.png';
import './Navigator.css';

const Navigator = ({ isAdmin, setIsAdmin }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showLogout, setShowLogout] = useState(false);

  const handleLogout = () => {
    setIsAdmin(false);
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
          <Link to="/">
            <img src={logoPrincipal} alt="Logo Principal" />
          </Link>
        </li>
        {isAdmin && location.pathname !== '/formAdd' && location.pathname !== '/formAdmin' && location.pathname !== '/form' && (
          <li className="entrega-link">
            <Link to="/entregaVis">
              <FontAwesomeIcon icon={faTruck} /> Visualizar entregas
            </Link>
          </li>
        )}
        {isAdmin && (
          <li className="admin-links">
            <div className="admin-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
            </div>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigator;
