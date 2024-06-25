import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormAdd.css';

const FormAdd = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    rua: '',
    numero: '',
    cep: '',
    complemento: ''
  });

  const [errors, setErrors] = useState({
    nome: '',
    telefone: '',
    rua: '',
    numero: '',
    cep: '',
    complemento: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === 'complemento') {
      setErrors({
        ...errors,
        complemento: ''
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (formData.nome.trim() === '') {
      newErrors.nome = 'Por favor, preencha o nome';
    }
    if (formData.telefone.trim() === '') {
      newErrors.telefone = 'Por favor, preencha o telefone';
    }
    if (formData.rua.trim() === '') {
      newErrors.rua = 'Por favor, preencha a rua';
    }
    if (formData.numero.trim() === '') {
      newErrors.numero = 'Por favor, preencha o número';
    }
    if (formData.cep.trim() === '') {
      newErrors.cep = 'Por favor, preencha o CEP';
    }
    if (formData.complemento.trim() === '') {
      newErrors.complemento = 'Por favor, preencha o complemento';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    console.log('Dados do formulário:', formData);

    navigate('/cadastroSucesso');

    setFormData({
      nome: '',
      telefone: '',
      rua: '',
      numero: '',
      cep: '',
      complemento: ''
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-content">
        <div className="form-field">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
          />
          <span className={`error-message ${errors.nome ? 'visible' : ''}`}>
            {errors.nome}
          </span>
        </div>
        <div className="form-field">
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
          />
          <span className={`error-message ${errors.telefone ? 'visible' : ''}`}>
            {errors.telefone}
          </span>
        </div>
        <div className="form-field">
          <label htmlFor="rua">Rua:</label>
          <input
            type="text"
            id="rua"
            name="rua"
            value={formData.rua}
            onChange={handleChange}
          />
          <span className={`error-message ${errors.rua ? 'visible' : ''}`}>
            {errors.rua}
          </span>
        </div>
        <div className="form-field">
          <label htmlFor="numero">Número:</label>
          <input
            type="text"
            id="numero"
            name="numero"
            value={formData.numero}
            onChange={handleChange}
          />
          <span className={`error-message ${errors.numero ? 'visible' : ''}`}>
            {errors.numero}
          </span>
        </div>
        <div className="form-field">
          <label htmlFor="cep">CEP:</label>
          <input
            type="text"
            id="cep"
            name="cep"
            value={formData.cep}
            onChange={handleChange}
          />
          <span className={`error-message ${errors.cep ? 'visible' : ''}`}>
            {errors.cep}
          </span>
        </div>
        <div className="form-field">
          <label htmlFor="complemento">Complemento:</label>
          <input
            type="text"
            id="complemento"
            name="complemento"
            value={formData.complemento}
            onChange={handleChange}
          />
          <span className={`error-message ${errors.complemento ? 'visible' : ''}`}>
            {errors.complemento}
          </span>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormAdd;
