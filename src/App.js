import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './componentes/footer/Footer';
import Navigator from './componentes/navigator/Navigator';
import LoginPage from './componentes/login/Login';
import Form from './componentes/formEntrega/Form';
import FormAdmin from './componentes/formAdmin/FormAdmin';
import FormAdd from './componentes/formAdd/FormAdd';
import CadastroSelect from './pages/cadastroSelect/CadastroSelect';
import CadastroSucess from './pages/cadastroSucess/CadastroSucess';
import EntregaVis from './pages/entregaVis/EntregaVis'; // Importe a página EntregaVis

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const storedIsAdmin = localStorage.getItem('isAdmin');
    if (storedIsAdmin === 'true') {
      setIsAdmin(true);
    }
  }, []);

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
        <Route path="/entregaVis" element={<EntregaVis />} /> {/* Adicione esta rota para EntregaVis */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
