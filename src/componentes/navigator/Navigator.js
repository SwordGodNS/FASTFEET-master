import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'; // Import faSignInAlt for login icon
import logoPrincipal from '../../img/logoPrincipal.png';
import './Navigator.css';

const Navigator = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li className="logo-link">
          <Link to="/">
            <img src={logoPrincipal} alt="Logo Principal" />
          </Link>
        </li>
        <li className="login-link">
          <Link to="/login">
            <FontAwesomeIcon icon={faSignInAlt} /> Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigator;
