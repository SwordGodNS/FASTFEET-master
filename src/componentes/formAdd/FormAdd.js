import React, { useState } from 'react';
import './FormAdd.css';

const Form = () => {
    const [formData, setFormData] = useState({
        nome: '',
        telefone: '',
        rua: '',
        numero: '',
        cep: '',
        complemento: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dados do formulário:', formData);
    };

    return (
        <form onSubmit={handleSubmit} className="form-content">
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
                <label htmlFor="telefone">Telefone:</label>
                <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="rua">Rua:</label>
                <input
                    type="text"
                    id="rua"
                    name="rua"
                    value={formData.rua}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="numero">Número:</label>
                <input
                    type="text"
                    id="numero"
                    name="numero"
                    value={formData.numero}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="cep">CEP:</label>
                <input
                    type="text"
                    id="cep"
                    name="cep"
                    value={formData.cep}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="complemento">Complemento:</label>
                <input
                    type="text"
                    id="complemento"
                    name="complemento"
                    value={formData.complemento}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default Form;