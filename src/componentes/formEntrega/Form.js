import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    nome: '',
    endereco: '',
    entregue: false,
    devolvida: false
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Remove a verificação se é admin no Form
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here
    navigate('/cadastroSucesso');
  };

  return (
    <div className="form-component">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="endereco">Endereço:</label>
          <input
            type="text"
            id="endereco"
            name="endereco"
            value={formData.endereco}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="entregue"
              checked={formData.entregue}
              onChange={handleChange}
            />
            Entregue
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="devolvida"
              checked={formData.devolvida}
              onChange={handleChange}
            />
            Devolvida
          </label>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
