import React, { useState, useEffect } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const LoginPage = ({ setIsAdmin, setIsAuthenticated }) => {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCpf = localStorage.getItem('rememberedCpf');
    if (storedCpf) {
      setCpf(storedCpf);
      setRememberMe(true);
    }
  }, []);

  const handleCpfChange = (event) => {
    setCpf(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:3333/admin/login', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
       "cpf": cpf,
       "senha": password
      })
     });
     
     if (response.status === 200) {
        const data = await response.json();
        const token = data.data.token
        localStorage.setItem('token', token);
        setIsAdmin(true);
        setIsAuthenticated(true);
        localStorage.setItem('isAdmin', 'true');
        if (rememberMe) {
          localStorage.setItem('rememberedCpf', cpf);
        } else {
          localStorage.removeItem('rememberedCpf');
        }
        navigate('/cadastroSelect');
     }else{
        alert('Credenciais inválidas');
     }
  };

  return (
    <div className="App">
      <div className="login-container">
        <h2>Acesse sua conta</h2>
        <form id="loginForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cpf">
              <FaUser className="icon" /> CPF:
            </label>
            <input
              id="cpf"
              type="cpf"
              value={cpf}
              onChange={handleCpfChange}
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
