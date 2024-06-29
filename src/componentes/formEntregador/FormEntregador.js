import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormEntregador.css';

const FormEntregador = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    senha: '',
    confirmacaoSenha: '',
    telefone: ''
  });

  const [errors, setErrors] = useState({
    nome: '',
    cpf: '',
    senha: '',
    confirmacaoSenha: '',
    telefone: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.nome.trim() === '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        nome: 'Por favor, preencha o nome'
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        nome: ''
      }));
    }

    if (formData.cpf.trim() === '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        cpf: 'Por favor, preencha o CPF'
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        cpf: ''
      }));
    }

    if (formData.telefone.trim() === '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        telefone: 'Por favor, preencha o telefone'
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        telefone: ''
      }));
    }

    if (formData.senha !== formData.confirmacaoSenha) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmacaoSenha: 'As senhas não coincidem'
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmacaoSenha: ''
      }));
    }

    if (
      errors.nome ||
      errors.cpf ||
      errors.telefone ||
      errors.confirmacaoSenha ||
      formData.nome.trim() === '' ||
      formData.cpf.trim() === '' ||
      formData.telefone.trim() === '' ||
      formData.senha !== formData.confirmacaoSenha
    ) {
      return;
    }

    setErrors({
      nome: '',
      cpf: '',
      senha: '',
      confirmacaoSenha: '',
      telefone: ''
    });

    console.log('Dados do formulário:', formData);
    const token = localStorage.getItem('token')

    const response = await fetch('http://localhost:3333/usuario/create', {
      method: 'post',
      headers: {
        'Content-Type':'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(
       formData
      )
     });
     
     if (response.status == 200) {
        const data = await response.json();
        console.log(data);
        navigate('/cadastroSucesso'); // Redirect to success page
     }else{
        alert('Dados inválidos');
     }
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
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
          />
          <span className={`error-message ${errors.cpf ? 'visible' : ''}`}>
            {errors.cpf}
          </span>
        </div>
        <div className="form-field">
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="text"
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
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
          />
          <span className={`error-message ${errors.senha ? 'visible' : ''}`}>
            {errors.senha}
          </span>
        </div>
        <div className="form-field">
          <label htmlFor="confirmacaoSenha">Confirmação de Senha:</label>
          <input
            type="password"
            id="confirmacaoSenha"
            name="confirmacaoSenha"
            value={formData.confirmacaoSenha}
            onChange={handleChange}
          />
          <span className={`error-message ${errors.confirmacaoSenha ? 'visible' : ''}`}>
            {errors.confirmacaoSenha}
          </span>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormEntregador;

