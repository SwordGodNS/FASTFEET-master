import React, { useState, useEffect } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const LoginPage = ({ setIsAdmin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem('rememberedEmail');
    if (storedEmail) {
      setEmail(storedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === 'admin@example.com' && password === 'admin123') {
      setIsAdmin(true);
      localStorage.setItem('isAdmin', 'true');

      if (rememberMe) {
        localStorage.setItem('rememberedEmail', email);
      } else {
        localStorage.removeItem('rememberedEmail');
      }

      navigate('/cadastroSelect');
    } else {
      alert('Credenciais inválidas');
    }
  };

  return (
    <div className="App">
      <div className="login-container">
        <h2>Acesse sua conta</h2>
        <form id="loginForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">
              <FaUser className="icon" /> Email:
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <FaLock className="icon" /> Senha:
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="form-group remember-me">
            <label htmlFor="remember-checkbox">
              <input
                type="checkbox"
                id="remember-checkbox"
                className="checkbox"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              Lembre de mim
            </label>
          </div>
          <div className="button-container">
            <button type="submit">Entrar</button>
          </div>
        </form>
        <footer>
          © 2024 Your Company. Todos os direitos reservados.
        </footer>
      </div>
    </div>
  );
}

export default LoginPage;
