import React, { useState } from 'react';

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simulação de uma chamada de API
    if (username === 'testuser' && password === 'password') {
      localStorage.setItem('token', 'fake-token');
      setIsAuthenticated(true);
    } else {
      alert('Credenciais inválidas');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;