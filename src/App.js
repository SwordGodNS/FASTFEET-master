import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './componentes/footer/Footer';
import Navigator from './componentes/navigator/Navigator';
import LoginPage from './componentes/login/Login';
import Form from './componentes/formEntrega/Form';
import FormAdmin from './componentes/formAdmin/FormAdmin';
import FormAdd from './componentes/formAdd/FormAdd'; // Ajustado para o caminho correto
import CadastroSelect from './pages/cadastroSelect/CadastroSelect';
import CadastroSucess from './pages/cadastroSucess/CadastroSucess';

function App() {
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isAdmin') === 'true');

  return (
    <Router>
      <Navigator isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
      <Routes>
        <Route path="/" element={isAdmin ? <Navigate to="/cadastroSelect" /> : <Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage setIsAdmin={setIsAdmin} />} />
        <Route path="/form" element={<Form />} />
        <Route path="/formAdmin" element={<FormAdmin />} />
        <Route path="/formAdd" element={<FormAdd />} />
        <Route path="/cadastroSelect" element={<CadastroSelect setIsAdmin={setIsAdmin} />} />
        <Route path="/cadastroSucesso" element={<CadastroSucess />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
