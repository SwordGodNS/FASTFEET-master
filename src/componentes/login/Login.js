import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import './Login.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

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
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
  };

  return (
    <div className="App">
      <div className="login-container">
        <h2>Acesse sua conta</h2>
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Entrar</button>
          <div className="forgot-password">
          <a href="/cadastro-select">Realizar um cadastro</a>
          </div>
        </form>
        <footer>
          © 2024 Your Company. Todos os direitos reservados.
        </footer>
      </div>
    </div>
  );
}

export default App;
