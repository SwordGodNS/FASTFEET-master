import React, { useEffect, useState } from 'react';
import './EntregasEntregador.css';
import Table from '../../componentes/tables/Table';

const EntregasEntregador = ({ setIsAuthenticated }) => {
  const columns = [
    "nome","telefone", "rua", "numero", "complemento", "cep", "entregue"
  ]
  const [data, setData] = useState([])
  const id = localStorage.getItem('id')
  const token = localStorage.getItem('token')
  useEffect(() => {
    fetch(`http://localhost:3333/entrega/show/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error('Erro ao buscar dados:', error));
  }, [id, token]);

  return (
    <div className="cadastro-select-container">
      <h2>Olá, Bem-vindo Entregador</h2>
      <p>Aqui estão suas entregas</p>
      <Table columns={columns} data={data}/>
    </div>
  );
};

export default EntregasEntregador;
