import React, { useState } from 'react';

const FormEntregador = () => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulação de validação de CPF
    if (!name || !cpf) {
      setError('Todos os campos são obrigatórios');
      return;
    }
    
    if (cpf === '12345678909') { // Exemplo de CPF duplicado
      setError('CPF já cadastrado');
    } else {
      setIsSuccess(true);
      setError('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="CPF"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
      />
      <button type="submit">Cadastrar</button>
      {isSuccess && <p>Cadastro realizado com sucesso!</p>}
      {error && <p>{error}</p>}
    </form>
  );
};

export default FormEntregador;