import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    usuarioId: '',
    destinatarioId: '',
    entregue: false,
    devolvida: false
  });

  const [entregadores, setEntregadores] = useState([]);
  const [destinatarios, setDestinatarios] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // Remove a verificação se é admin no Form
  }, [navigate]);

  useEffect(() => {
    fetchEntregadores();
    fetchDestinatarios();
  }, []);

  const fetchEntregadores = async () => {
    const token = localStorage.getItem('token');

    const response = await fetch('http://localhost:3333/usuario/show', {
      method: 'get',
      headers: {
        'Content-Type':'application/json',
        'Authorization': 'Bearer ' + token
      },
     });
     
     if (response.status === 200) {
        const data = await response.json();
        setEntregadores(data);

     };
  }

  const fetchDestinatarios = async () => {
    const token = localStorage.getItem('token');

    const response = await fetch('http://localhost:3333/destinatario/showDestinatarios', {
      method: 'get',
      headers: {
        'Content-Type':'application/json',
        'Authorization': 'Bearer ' + token
      },
     });
     
     if (response.status === 200) {
        const data = await response.json();
        setDestinatarios(data);
     };
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log(e.target);
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit: ", formData);
    sendForm();
  };

  const sendForm = async () => {
    const response = await fetch('http://localhost:3333/entrega/create', {
      method: 'post',
      headers: {
        'Content-Type':'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      },
      body: JSON.stringify(
       formData
      )
     });
     
     if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        navigate('/cadastroSucesso');
     }else{
        alert('Dados inválidos');
     }
  };

  return (
    <div className="form-component">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="entregador">Entregador:</label>
          <select
            id="usuarioId"
            name="usuarioId"
            value={formData.usuarioId}
            onChange={handleChange}
          >
            <option key="a" value=""></option>
            (!!entregadores.length && {
              entregadores.map(entregador => 
                <option key={entregador.id} value={entregador.id}>{entregador.nome}</option>
              )
            })
          </select>
        </div>
        <div>
          <label htmlFor="destinatario">Destinatário:</label>
          <select
            id="destinatarioId"
            name="destinatarioId"
            value={formData.destinatarioId}
            onChange={handleChange}
          >
            <option key="b" value=""></option>
            (!!destinatarios.length && {
              destinatarios.map(destinatario => 
                <option key={destinatario.id} value={destinatario.id}>{destinatario.nome}</option>
              )
            })
          </select>
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
