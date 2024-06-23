import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CadastroSelect.css';

const CadastroSelect = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleProceed = () => {
    switch (selectedOption) {
      case 'entregador':
        navigate('/formAdmin'); // Alterado para '/formAdmin'
        break;
      case 'destinatario':
        navigate('/formAdd');
        break;
      case 'entrega':
        navigate('/form');
        break;
      default:
        alert('Por favor, selecione uma opção de cadastro.');
        break;
    }
  };

  return (
    <div className="cadastro-select-container">
      <h2>Primeiro escolha</h2>
      <p>Qual cadastro deseja realizar?</p>
      <div className="select-container">
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="">Selecione uma opção</option>
          <option value="entregador">Entregador</option>
          <option value="destinatario">Destinatário</option>
          <option value="entrega">Entrega</option>
        </select>
      </div>
      <button onClick={handleProceed}>Prosseguir</button>
    </div>
  );
};

export default CadastroSelect;
