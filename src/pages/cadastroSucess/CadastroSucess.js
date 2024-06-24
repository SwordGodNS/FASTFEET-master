import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CadastroSucess.css';

const CadastroSucess = () => {
  const navigate = useNavigate();

  const handleBackToLogin = () => {
    navigate('/cadastroSelect');
  };

  return (
    <div className="cadastro-sucess-container">
      <h2>Cadastro realizado com sucesso!</h2>
      <svg
        className="success-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="11" fill="none" stroke="#28a745" strokeWidth="2" />
        <path d="M9 16.2l-4.2-4.2-1.4 1.4L9 19 21 7l-1.4-1.4z" />
      </svg>
      <button className="back-to-login-btn" onClick={handleBackToLogin}>Voltar ao menu</button>
    </div>
  );
};

export default CadastroSucess;
